// types/Book.ts


export interface BookCategory {
  bookName: string;
  bookInfo: Book[];
}

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  bookLanguage: string;
}
