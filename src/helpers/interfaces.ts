export interface IBook {
  id: string;
  title: string;
  image: string;
  tracks: [
    {
      mp3: string;
      ogg: string;
      pages: string;
    }
  ];
}
