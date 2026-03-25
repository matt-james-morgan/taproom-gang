import { useGoogleSheetPublished } from "./useGoogleSheetPublished";

// TODO: Replace with your published Google Sheets CSV URL
// Steps: File > Share > Publish to web > select sheet > CSV format > copy link
const SHEET_URL = "PLACEHOLDER_GOOGLE_SHEETS_CSV_URL";

export interface ShowData {
  venue: string;
  date: string;
  time?: string;
  city?: string;
  ticketUrl?: string;
  notes?: string;
}

export const useShows = () => {
  return useGoogleSheetPublished({ sheetUrl: SHEET_URL });
};
