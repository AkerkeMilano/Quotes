import "./CategoryForm.css";

const CategoryForm = ({ quote, quoteHandler, onSubmit}) => {
  return (
        <form className="Form" onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
        }}>
          <div className="label-input">
            <label htmlFor="author">Author</label>
            <input
              id="author"
              type="text"
              value={quote.author}
              onChange={quoteHandler("author")}
            ></input>
          </div>
          <div className="label-input">
            <label htmlFor="content">Quote text</label>
            <textarea
              id="content"
              type="text"
              value={quote.content}
              onChange={quoteHandler("content")}
            ></textarea>
          </div>
          <button type="submit" className="form-btn">
            Save
          </button>
        </form>
  );
};

export default CategoryForm;
