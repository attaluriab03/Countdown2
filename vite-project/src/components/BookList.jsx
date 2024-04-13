import React, {useState} from 'react';
 
export const BookList = ({ genre, books }) => {
    
    return (
      <section>
        <h2>{genre}:</h2>
        {books.map((book, index) => (
          <div key={index}>
            <p> {book.title}, {book.author}, ${book.price}</p>
          </div>
        ))}
      </section>
    );
  };

