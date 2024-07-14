import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const defaultBooks = [
  {
    id: 1,
    title: "The Curious Incident of the Dog in the Night Time ",
    isbn: "	0-09-945025-9",
    published: "2003-05-01",
    coverImage:
      "https://www.bsceducation.com/wp-content/uploads/2019/09/817Hy5vKSmL._SY466_.jpg",
    about:
      "The Curious Incident of The Dog in the Night Time is the story of a young boy, Christopher, who has autism. Christopher goes to a special school and finds it very hard to understand and communicate with people from the outside world.  He discovers that his neighbour’s dog has been murdered and decides to investigate the crime. This takes him on a terrifying and challenging journey that changes his life.",
    author: {
      name: "Mark Haddon",
      birth: "1970-01-01",
      image: "https://images4.penguinrandomhouse.com/author/11481",
      biography:
        "Mark Haddon is the author of the bestselling novels The Red House and A Spot of Bother. His novel The Curious Incident of the Dog in the Night-Time won the Whitbread Book of the Year Award and the Los Angeles Times Book Prize for First Fiction and is the basis for the Tony Award–winning play.",
    },
  },
  {
    id: 2,
    title: "Fantastic Mr Fox ",
    isbn: "	0-394-80497-X",
    published: "1970-06-01",
    coverImage:
      "https://www.bsceducation.com/wp-content/uploads/2019/09/81E052BZcML._SY466_.jpg",
    about:
      "A great tip when choosing books to improve your English is to read books written for children. We chose Fantastic Mr Fox, but we could have really chosen almost any book by the iconic writer Roald Dahl, who is arguably one of the greatest children’s authors of all time. Fantastic Mr Fox is the story of three mean local farmers and a sly fox who steals their chickens, geese and apple cider to feed his family and friends.",
    author: {
      name: "Roald Dahl",
      birth: "1980-02-01",
      image:
        "https://media.gettyimages.com/id/613470530/photo/the-bestselling-childrens-writer-roald-dahl-whose-stories-include-charlie-and-the-chocolate.jpg?s=612x612&w=gi&k=20&c=AjjQSeDIgqgR0aLdJU4S1ysUPEkt_KvtYmNaW7zKaQ8=",
      biography:
        "Roald Dahl (1916–1990) was born in Llandaff, South Wales, and went to Repton School in England. His parents were Norwegian, so holidays were spent in Norway. As he explains in Boy, he turned down the idea of university in favor of a job that would take him to “a wonderful faraway place.” In 1933 he joined the Shell Company, which sent him to Mombasa in East Africa.",
    },
  },
];

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(defaultBooks);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
};
