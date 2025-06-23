"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { books } from "@/data/books";
import { Book } from "@/types/Book";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";

const BookStore = () => {
  const searchParams = useSearchParams();
  const bookid = searchParams.get("bookid");

  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [selectedBookType, setSelectedBookType] = useState<string>("");

  useEffect(() => {
    if (bookid) {
      const foundBook = books
        .flatMap((category) => category.bookInfo)
        .find((book) => book.id === Number(bookid));
      if (foundBook) {
        setSelectedBook(foundBook);
      }
    }
  }, [bookid]);

  const handleBookClick = (book: Book) => {
    setSelectedBook(book);
    console.log(book.id);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold my-8 min-md:text-2xl text-center">
        Explore our store and find your favorite books and CD albums available
        in three languages — <em>English, German, and French.</em>
      </h2>

      {/* Carousel Section */}
      <div className="flex space-x-4 overflow-x-auto  pb-4 w-[80vw] mx-auto">
        {books.map((book, index) => {
          return book.bookInfo.map((book) => (
            <div
              key={book.id}
              className={`min-w-[160px] cursor-pointer rounded-md overflow-hidden shadow-md border ${
                selectedBook?.id === book.id
                  ? "border-red-500"
                  : "border-transparent"
              }`}
              onClick={() => handleBookClick(book)}
            >
              <Image
                src={book.image}
                alt={book.title}
                width={160}
                height={220}
                className="w-full object-cover"
              />
            </div>
          ));
        })}
      </div> 
<div className=" flex justify-end w-full">
              <p className="  flex items-center min-md:hidden gap-2">Swipe Left <BsArrowRightCircle/></p>

</div>

      {/* Selected Book Info */}
      {selectedBook && (
        <div
          key={selectedBook.id}
          className="my-10 border-t pt-6 flex flex-col md:flex-row gap-6
               transition-all duration-100 ease-in-out
                translate-y-4 animate-fadeInSlideUp"
        >
          <div className="w-full md:w-1/3">
            <Image
              src={selectedBook.image}
              alt={selectedBook.title}
              width={240}
              height={340}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold">{selectedBook.title}</h3>
            <p className="italic text-gray-600">By {selectedBook.author}</p>
            <p className="mt-4 text-gray-700">{selectedBook.description}</p>
            <div className=" flex gap-4 mt-6 items-center">
              <select
                name=""
                id=""
                className=" border rounded-md p-3"
                onChange={(e) => setSelectedBookType(e.target.value)}
                value={selectedBookType}
              >
                <option value="hardCover">Hard Cover</option>
                <option value="pdf">PDF</option>
                <option value="softCover">Soft Cover</option>
              </select>
              <a
                href={
                  selectedBookType === "hardCover"
                    ? selectedBook.hardCoverLink
                    : selectedBookType === "pdf"
                    ? selectedBook.pdfLink
                    : selectedBook.softCoverLink
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" black-button">
                  {" "}
                  {selectedBook.buyNow}{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookStore;
