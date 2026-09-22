import { useMemo } from "react";
import { useGoogleSheetPublished } from "./useGoogleSheetPublished";

// File > Share > Publish to web > select sheet > CSV format > copy link
const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQMIpMZ8iyU_p4RuOVGXgMumFL5NEOGlQlA8RXj6n0vRphHo3qZ4HzooVaMKZ9s2bZ4QjGHvEapYRnE/pub?output=csv";

export interface ShowData {
  venue: string;
  date: string;
  time?: string;
  address?: string;
  linkToEvent?: string;
  ticketUrl?: string;
}

export const useShows = () => {
  const query = useGoogleSheetPublished({ sheetUrl: SHEET_URL });

  const data = useMemo<ShowData[] | undefined>(() => {
    return query.data?.map((row) => ({
      venue: row["Venue"] || "TBA",
      date: row["Date"] || "",
      time: row["Time"] || undefined,
      address: row["Address"] || undefined,
      linkToEvent: row["Link To Event"] || undefined,
      ticketUrl: row["Ticket Link"] || undefined,
    }));
  }, [query.data]);

  return { ...query, data };
};
