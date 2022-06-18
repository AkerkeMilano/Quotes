import "./CategoryForm.css";
import submitIcon from "../../assets/img/submit.png";

const CategoryForm = ({ quote, quoteHandler, onSubmit, isValid}) => {
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
          {!isValid ? <div className="invalidInputs">*Please fill all the fields!</div> : ""}
          <button type="submit" className="form-btn">
            <img src={submitIcon} alt="Submit icon"/>
          </button>
        </form>
  );
};

export default CategoryForm;
