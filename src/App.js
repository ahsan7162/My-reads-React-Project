import * as BookAPI from "./Api/BooksAPI";
import { Fragment, useEffect, useState } from "react";
import Shelf from "./Components/shelf/Shelf";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Components/search/Search";
import modules from "./App.module.css";

function App() {
  const [Allbooks, setAllBooks] = useState();
  let flag = false;

  useEffect(() => {
    const gettingbooks = () => {
      if (localStorage.getItem("Allbooks")) {
        setAllBooks(JSON.parse(localStorage.getItem("Allbooks")));
        return;
      }
      BookAPI.getAll().then((books) => {
        setAllBooks(books);
      });
    };
    gettingbooks();
  }, []);
  if (Allbooks) {
    flag = true;
    localStorage.setItem("Allbooks", JSON.stringify(Allbooks));
  }

  const changeShelf = (shelf, title, authors, image) => {
    let change = false;
    Allbooks.forEach((book) => {
      if (book.title === title) {
        book.shelf = shelf;
        change = true;
      }
    });
    if (change === false) {
      if (image !== "none") {
        Allbooks.push({
          title: title,
          shelf: shelf,
          authors: [authors],
          imageLinks: { thumbnail: image },
        });
      } else {
        Allbooks.push({
          title: title,
          shelf: shelf,
          authors: [authors],
          imageLinks: { thumbnail: "" },
        });
      }
    }
    setAllBooks(Allbooks);
    localStorage.setItem("Allbooks", JSON.stringify(Allbooks));
    setAllBooks(JSON.parse(localStorage.getItem("Allbooks")));
  };

  return (
    <Fragment>
      <Router>
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            overflow: "hidden",
            backgroundColor: "rgb(65, 65, 65)",
          }}
          classname={modules.unorderedlist}
        >
          <li style={{ float: "left" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                textAlign: "centre ",
                padding: "14px 16px",
              }}
              to="/"
            >
              Home
            </Link>
          </li>
          <li style={{ float: "left" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                textAlign: "centre ",
                padding: "14px 16px",
              }}
              to="/search"
            >
              Search
            </Link>
          </li>
          <li>
            <h1>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "block",
                  textAlign: "centre ",
                  padding: "14px 14px",
                }}
                to="/"
              >
                My Reads
              </Link>
            </h1>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Shelf
              books={Allbooks}
              flag={flag}
              changeShelf={changeShelf}
            ></Shelf>
          </Route>
          <Route exact path="/search">
            <Search
              books={Allbooks}
              flag={flag}
              changeShelf={changeShelf}
            ></Search>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
