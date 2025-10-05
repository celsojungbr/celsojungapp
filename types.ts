
export interface Book {
  id: number;
  title: string;
  author: string;
  coverImage: string;
  shortDescription: string;
  longDescription: string;
  amazonLink: string;
  awards: string[];
  mediaMentions: { source: string; link: string }[];
  content: string; // Full book content for the reader
}
