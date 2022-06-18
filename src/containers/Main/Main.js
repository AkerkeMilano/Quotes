import CategoriesNavigation from "../../components/Navigation/CategoriesNavigation/CategoriesNavigation";
import { useState, useEffect } from "react";
import axiosUrl from "../../axiosUrl";
import QuotesList from "../../components/QuotesList/QuotesList";
import { useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader/Loader";
import "./Main.css";

const Main = () => {
  const [quotesList, setQuotesList] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const getRequest = async () => {
    setLoading(true)
    if (id) {
      try{
        await axiosUrl
        .get(`./quotes.json?orderBy="category"&equalTo="${id}"`)
        .then((quotes) => {
          if (quotes.data) {
            const quotesArr = Object.keys(quotes.data).map((quoteId) => {
              return { id: quoteId, ...quotes.data[quoteId] };
            });
            setQuotesList(quotesArr);
          }
        });
      } catch(e){
        console.log(e);
      } finally{
        setLoading(false);
      }

    } else {
      try{
        await axiosUrl.get(`./quotes.json`).then((quotes) => {
          if (quotes.data) {
            const quotesArr = Object.keys(quotes.data).map((quoteId) => {
              return { id: quoteId, ...quotes.data[quoteId] };
            });
            setQuotesList(quotesArr);
          }
        });
      }catch(e){
        console.log(e);
      }finally{
        setLoading(false);
      }
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
    <div className="MainContainer">
      <Loader loading={loading}></Loader>
      <CategoriesNavigation></CategoriesNavigation>
      <QuotesList quotesList={quotesList} deleteQuote={deleteQuote} />
    </div>
  );
};

export default Main;
