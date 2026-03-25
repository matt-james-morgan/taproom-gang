export interface Album {
  title: string;
  year: string;
  label?: string;
  description?: string;
  coverArt?: string;
  coverArtWebp?: string;
  streamingLinks?: {
    spotify?: string;
    appleMusic?: string;
    bandcamp?: string;
    youtube?: string;
  };
}

// TODO: Replace with real discography data
export const discography: Album[] = [
  {
    title: "Album Title",
    year: "2024",
    label: "Independent",
    description: "Album description to be supplied.",
  },
];
