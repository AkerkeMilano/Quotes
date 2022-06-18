import "./CategoryForm.css";

const CategoryForm = ({ newQuote, newQuoteHandler, createNewQuote}) => {
  return (
    <form className="Form" onSubmit={(e) => {
        e.preventDefault();
        createNewQuote();
    }}>
      <div className="label-input">
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          value={newQuote.author}
          onChange={newQuoteHandler("author")}
        ></input>
      </div>
      <div className="label-input">
        <label htmlFor="content">Quote text</label>
        <textarea
          id="content"
          type="text"
          value={newQuote.content}
          onChange={newQuoteHandler("content")}
        ></textarea>
      </div>
      <button type="submit" className="form-btn">
        Save
      </button>
    </form>
  );
};

export default CategoryForm;
