'use client';

import { useState } from 'react';
import { books } from '@/data/books';
import { Book } from '@/types/Book';
import Image from 'next/image';

const BookStore = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Explore our store and find your favorite books and CD albums available in three languages — <em>English, German, and French.</em>
      </h2>

      {/* Carousel Section */}
      <div className="flex space-x-4 overflow-x-auto pb-4 w-[80vw] mx-auto">
        {books.map((book, index) => {
         return(
          book.bookInfo.map((book) => (
            <div
            key={book.id}
            className={`min-w-[160px] cursor-pointer rounded-md overflow-hidden shadow-md border ${selectedBook?.id === book.id ? 'border-red-500' : 'border-transparent'}`}
            onClick={() => handleBookClick(book)}
          >
            <Image src={book.image} alt={book.title} width={160} height={220} className="w-full object-cover" />
          </div>
          )
         ))  
        })}
      </div>

      {/* Selected Book Info */}
      {selectedBook && (
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3">
            <Image src={selectedBook.image} alt={selectedBook.title} width={240} height={340} className="rounded-md" />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold">{selectedBook.title}</h3>
            <p className="italic text-gray-600">By {selectedBook.author}</p>
            <p className="mt-4 text-gray-700">{selectedBook.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookStore;
