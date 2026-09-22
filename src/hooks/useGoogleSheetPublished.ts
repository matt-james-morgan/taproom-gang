import { useQuery } from "@tanstack/react-query";

export type SheetRow = Record<string, string>;

interface UseGoogleSheetPublishedOptions {
  sheetUrl: string; // Full URL to a "Publish to web" Google Sheet, CSV format
  enabled?: boolean;
}

const parseCSVLine = (line: string): string[] => {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (inQuotes && line[i + 1] === '"' && char === '"') {
      current += '"';
      i++;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());

  return result;
};

export const useGoogleSheetPublished = ({
  sheetUrl,
  enabled = true,
}: UseGoogleSheetPublishedOptions) => {
  return useQuery<SheetRow[]>({
    queryKey: ["googleSheetPublished", sheetUrl],
    queryFn: async () => {
      const response = await fetch(sheetUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch Google Sheet: ${response.statusText}`);
      }

      const csvText = await response.text();

      // Split on real newlines, but not ones embedded inside quoted fields
      const lines: string[] = [];
      let current = "";
      let inQuotes = false;
      for (const char of csvText) {
        if (char === '"') inQuotes = !inQuotes;
        if (char === "\n" && !inQuotes) {
          lines.push(current);
          current = "";
        } else if (char !== "\r") {
          current += char;
        }
      }
      if (current.trim() !== "") lines.push(current);

      const nonEmptyLines = lines.filter((line) => line.trim() !== "");
      if (nonEmptyLines.length === 0) return [];

      const headers = parseCSVLine(nonEmptyLines[0]);

      const rows = nonEmptyLines.slice(1).map((line): SheetRow => {
        const values = parseCSVLine(line);
        const row: SheetRow = {};
        headers.forEach((header, index) => {
          if (header) row[header] = (values[index] ?? "").trim();
        });
        return row;
      });

      return rows.filter((row) => Object.values(row).some((value) => value !== ""));
    },
    enabled,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
};
