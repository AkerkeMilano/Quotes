import CategoriesNavigation from "../../components/Navigation/CategoriesNavigation/CategoriesNavigation";
import { useState, useEffect } from "react";
import axiosUrl from "../../axiosUrl";
import QuotesList from "../../components/QuotesList/QuotesList";
import { useParams } from "react-router-dom";

const Main = () => {
  const [quotesList, setQuotesList] = useState({});
  const { id } = useParams();

  const getRequest = async () => {
    if (id) {
      await axiosUrl
        .get(`./quotes.json?orderBy="category"&equalTo="${id}"`)
        .then((quotes) => {
          if (quotes.data) {
            const quotesArr = Object.keys(quotes.data).map((quoteId) => {
              return { id: quoteId, ...quotes.data[quoteId] };
            });
            console.log("quotes in id:");
            console.log(quotesArr);
            setQuotesList(quotesArr);
          }
        });
    } else {
      await axiosUrl.get(`./quotes.json`).then((quotes) => {
        if (quotes.data) {
          const quotesArr = Object.keys(quotes.data).map((quoteId) => {
            return { id: quoteId, ...quotes.data[quoteId] };
          });
          console.log("quotes in all:");
          console.log(quotesArr);
          setQuotesList(quotesArr);
        }
      });
    }
  };

  useEffect(() => {
    getRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const deleteQuote = async (id) => {
    try {
      await axiosUrl.delete(`/quotes/${id}.json`);
      const filteredQuotes = quotesList.filter((quote) => quote.id !== id);
      setQuotesList(filteredQuotes);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <CategoriesNavigation></CategoriesNavigation>
      <QuotesList quotesList={quotesList} deleteQuote={deleteQuote} />
    </>
  );
};

export default Main;
