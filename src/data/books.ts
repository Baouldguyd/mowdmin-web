// data/books.ts
import { Book } from '@/types/Book';

export const books: Book[] = [
  {
    id: 1,
    title: 'THE CRY OF THE IMAGE OF GOD',
    author: 'Apostle O.M. Bamigbola',
    description: `Why me??? This cry of distress... (add rest here)`,
    image: '/images/cry-book.jpg', // Put your image in /public/images
  },
  {
    id: 2,
    title: 'Sample Book 2',
    author: 'Author Name',
    description: 'Some book description.',
    image: '/images/sample2.jpg',
  },
];
