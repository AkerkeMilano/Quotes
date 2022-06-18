import CategoriesNavigation from "../../components/Navigation/CategoriesNavigation/CategoriesNavigation";
import { useState, useEffect } from "react";
import axiosUrl from "../../axiosUrl";
import QuotesList from "../../components/QuotesList/QuotesList";

const Main = () => {
  const [quotesList, setQuotesList] = useState({});

  useEffect(() => {
    axiosUrl.get(`./quotes.json`).then((quotes) => {
      if (quotes.data) {
        const quotesArr = Object.keys(quotes.data).map((quoteId) => {
          return { id: quoteId, ...quotes.data[quoteId] };
        });
        setQuotesList(quotesArr);
      }
    });
  }, []);
  return (
    <>
      <CategoriesNavigation></CategoriesNavigation>
      <QuotesList quotesList={quotesList} /> 
    </>
  );
};

export default Main;
