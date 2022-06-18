import "./QuotesList.css";
import QuoteItem from '../QuoteItem/QuoteItem';

const QuotesList = ({quotesList, deleteQuote}) => {
  return (
    <div className="QuotesList">
      {Object.keys(quotesList).length !== 0 ? quotesList.map(quote => <QuoteItem quote={quote} key={quote.id} deleteQuote={deleteQuote}></QuoteItem>) : <h2>No quotes found</h2>}
    </div>
  );
};

export default QuotesList;
