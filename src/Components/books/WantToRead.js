import Book from "./Book";

const CurrentlyReadBooks = (props) => {
  const AllBooks = props.books;

  let CUR = AllBooks.filter((book) => book.shelf === "wantToRead");
  // console.log(CUR)

  return (
    <div>
      {CUR.map((books) => (
        <Book
          title={books.title}
          author={books.authors}
          shelf={books.shelf}
          img={books.imageLinks.thumbnail}
          key={books.title}
          changeShelf={props.changeShelf}
        ></Book>
      ))}
    </div>
  );
};
export default CurrentlyReadBooks;
