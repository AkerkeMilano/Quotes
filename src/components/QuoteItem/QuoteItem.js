import "./QuoteItem.css";
import { Link } from "react-router-dom";
const QuoteItem = ({ quote, deleteQuote }) => {

  return (
    <div className="QuoteItem">
      <div className="quote-information">
        <div>{quote.content}</div>
        <div>{quote.author}</div>
      </div>
      <div className="quote-actions">
        <Link to={`/quotes/${quote.id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={(e) => {
            e.preventDefault();
            deleteQuote(quote.id)
        }}>Delete</button>
      </div>
    </div>
  );
};

export default QuoteItem;
