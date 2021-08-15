import CurrentlyReadBooks from "../books/CurrentlyReadBooks";
import Read from "../books/Read";
import WantToRead from "../books/WantToRead";
import modules from "./book.module.css";

const Shelf = (props) => {
  const Allbooks = props.books;
  const flag = props.flag;
  return (
    <div>
      <div className={modules.listbookscontent}>
        <div className={modules.bookshelf}>
          <h2 className={modules.bookshelftitle}>Currently Reading</h2>
          <div className={modules.bookshelfbooks}>
            <ol className={modules.booksgrid}>
              {flag && (
                <CurrentlyReadBooks
                  books={Allbooks}
                  changeShelf={props.changeShelf}
                ></CurrentlyReadBooks>
              )}
            </ol>
          </div>
        </div>
        <div className={modules.bookshelf}>
          <h2 className={modules.bookshelftitle}>Read</h2>
          <div className={modules.bookshelfbooks}>
            <ol className={modules.booksgrid}>
              {flag && (
                <Read books={Allbooks} changeShelf={props.changeShelf}></Read>
              )}
            </ol>
          </div>
        </div>
        <div className={modules.bookshelf}>
          <h2 className={modules.bookshelftitle}>Want To Read</h2>
          <div className={modules.bookshelfbooks}>
            <ol className={modules.booksgrid}>
              {flag && (
                <WantToRead
                  books={Allbooks}
                  changeShelf={props.changeShelf}
                ></WantToRead>
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
