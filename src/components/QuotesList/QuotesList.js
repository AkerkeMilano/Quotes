import { useParams } from 'react-router-dom';
import "./QuotesList.css";
import { useState } from 'react';

const QuotesList = () => {
  const { id } = useParams();
  const [quotesList, setQuotesList] = useState({});
  

  return (
    <div className="QuotesList">
      <div>This is main page</div>
    </div>
  );
};

export default QuotesList;
