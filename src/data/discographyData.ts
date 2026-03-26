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

export const discography: Album[] = [
  {
    title: "Matt King-Smith Trio",
    year: "2024",
    label: "909 Records",
    description: "Album description to be supplied.",
    coverArt: "/images/matt/albums/mattKingSmithTrio.jpg",
    streamingLinks: {
      bandcamp: "https://mattking-smith.bandcamp.com/album/matt-king-smith-trio",
    },
  },
];
