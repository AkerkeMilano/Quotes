import "./QuoteItem.css";

const QuoteItem = ({ quote }) => {
  return (
    <div className="QuoteItem">
      <div className="quote-information">
        <div>{quote.content}</div>
        <div>{quote.author}</div>
      </div>
      <div className="quote-actions">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default QuoteItem;
