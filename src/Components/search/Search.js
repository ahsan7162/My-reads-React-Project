import modules from "./Search.module.css";
import * as BookAPI from "../../Api/BooksAPI";
import { useState } from "react";
import Book from "../books/Book";

const Search = (props) => {
  const [newBooks, setNewBooks] = useState([]);
  const [error, setError] = useState(false);

  const inputChange = (event) => {
    const query = event.target.value;
    if (query) {
      BookAPI.search(query.trim(), 20).then((books) => {
        if (books.length > 0) {
          books.forEach((book) => {
            props.books.forEach((temp) => {
              if (temp.title === book.title) {
                book.shelf = temp.shelf;
              }
            });
          });

          setNewBooks(books);
          setError(false);
        } else {
          setNewBooks([]);
          setError(true);
        }
      });
    } else {
      setNewBooks([]);
      setError(false);
    }
  };

  return (
    <div className={modules.searchbooks}>
      <div className={modules.searchbooksbar}>
        <div className={modules.searchbooksinputwrapper}>
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={inputChange}
          />
        </div>
      </div>
      {newBooks.length === 20 && (
        <div className={modules.searchbooksresults}>
          <h1>Total Books Found{newBooks.length}</h1>
          <ol className="books-grid">
            {newBooks.map((book) => (
              <Book
                title={book.title}
                author={book.authors}
                shelf={book.shelf}
                img={book.imageLinks ? book.imageLinks.thumbnail : "none"}
                key={book.title}
                changeShelf={props.changeShelf}
              ></Book>
            ))}
          </ol>
        </div>
      )}
      {error && (
        <div className={modules.searchbooksresults}>
          <h1>No Books Found</h1>
        </div>
      )}
    </div>
  );
};

export default Search;
