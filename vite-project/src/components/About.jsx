import React, { useState } from 'react';
import {BookList} from './BookList.jsx';
import '../styles/About.css';


const About = () => {
  // State for seeing which genres are visible
  const [visibleGenres, setVisibleGenres] = useState({
    'fiction': true,
    'non-fiction': true,
    'children': true,
  });

  const bookData = {
    "fiction": [
      {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
      {"title": "1984", "author": "George Orwell", "price": 8.50},
      {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
    ],
    "non-fiction": [
      {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
      {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
      {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
    ],
    "children": [
      {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
      {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
      {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
    ]
  };
  
  // toggling visibility of a genre
  const toggleGenreVisibility = (genre) => {
    // using prevVisibleGenres to ensure immutability by spreading it with ... operator
    setVisibleGenres((prevVisibleGenres) => ({
      ...prevVisibleGenres,
      // this actually toggles the visibility by setting it to the opposite of its current status
      [genre]: !prevVisibleGenres[genre],
    }));
  };

  return (
    <div className="bookstore">
      <h1>Online Bookstore</h1>
      <div>
        <button onClick={() => toggleGenreVisibility('fiction')}>
          {visibleGenres.fiction ? 'Hide' : 'Show'} Fiction
        </button>
        <button onClick={() => toggleGenreVisibility('non-fiction')}>
          {visibleGenres['non-fiction'] ? 'Hide' : 'Show'} Non-Fiction
        </button>
        <button onClick={() => toggleGenreVisibility('children')}>
          {visibleGenres.children ? 'Hide' : 'Show'} Children
        </button>
      </div>
      {visibleGenres.fiction && <BookList genre="Fiction" books={bookData['fiction']} />}
      {visibleGenres['non-fiction'] && <BookList genre="Non-Fiction" books={bookData['non-fiction']} />}
      {visibleGenres.children && <BookList genre="Children" books={bookData['children']} />}
    </div>
  );
};


export default About;

