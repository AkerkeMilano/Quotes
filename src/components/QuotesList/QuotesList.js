import "./QuotesList.css";
import QuoteItem from '../QuoteItem/QuoteItem';

const QuotesList = ({quotesList}) => {
  return (
    <div className="QuotesList">
      {Object.keys(quotesList).length !== 0 ? quotesList.map(quote => <QuoteItem quote={quote} key={quote.id}></QuoteItem>) : <div>No quotes found</div>}
    </div>
  );
};

export default QuotesList;
