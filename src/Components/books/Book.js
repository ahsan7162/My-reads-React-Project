import modules from "./CurrentlyReadingbooks.module.css";

const Book = (props) => {
  // console.log(props)
  return (
    <li>
      <div className={modules.book}>
        <div className={modules.booktop}>
          {props.image !== "none" ? (
            <img
              alt="new-image"
              src={props.img}
              className={modules.bookcover}
              style={{ width: 128, height: 193 }}
            />
          ) : (
            <p>no image</p>
          )}
          <div className={modules.bookshelfchanger}>
            <select
              defaultValue={props.shelf ? props.shelf : "none"}
              onChange={(event) =>
                props.changeShelf(
                  event.target.value,
                  props.title,
                  props.author,
                  props.img
                )
              }
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want To Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className={modules.booktitle}>{props.title}</div>
        {props.author &&
          props.author.map((author) => (
            <div className={modules.bookauthors} key={Math.random()}>
              {author}
            </div>
          ))}
      </div>
    </li>
  );
};

export default Book;
