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
    title: "Every Day Is Monday",
    year: "2025",
    coverArt: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e026ccb8d183158ecbc15d3c0ad",
    streamingLinks: {
      spotify: "https://open.spotify.com/artist/4ccByuNEWwR0wwLyNgxRkX",
    },
  },
];
