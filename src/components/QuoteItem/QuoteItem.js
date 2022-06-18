import "./QuoteItem.css";
import { Link } from "react-router-dom";
import editIcon from "../../assets/img/edit.png";
import deleteIcon from "../../assets/img/delete.png";

const QuoteItem = ({ quote, deleteQuote }) => {

  return (
    <div className="QuoteItem">
      <div className="quote-information">
        <div>{quote.content}</div>
        <div>-{quote.author}</div>
      </div>
      <div className="quote-actions">
        <Link to={`/quotes/${quote.id}/edit`}>
          <button className="actionBtn">
            <img src={editIcon} alt="Edit"/>
          </button>
        </Link>
        <button onClick={(e) => {
            e.preventDefault();
            deleteQuote(quote.id)
        }} className="actionBtn">
          <img src={deleteIcon} alt="Delete"/>
        </button>
      </div>
    </div>
  );
};

export default QuoteItem;
