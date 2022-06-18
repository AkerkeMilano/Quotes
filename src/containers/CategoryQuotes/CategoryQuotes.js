import CategoriesNavigation from "../../components/Navigation/CategoriesNavigation/CategoriesNavigation";
import QuotesList from "../../components/QuotesList/QuotesList";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosUrl from "../../axiosUrl";

const CategoryQuotes = () => {
  const { id } = useParams();
  const [quotesList, setQuotesList] = useState({});

  useEffect(() => {
    axiosUrl
      .get(`./quotes.json?orderBy="category"&equalTo="${id}"`)
      .then((quotes) => {
        if (quotes.data) {
            const quotesArr = Object.keys(quotes.data).map((quoteId) => {
              return { id: quoteId, ...quotes.data[quoteId] };
            });
            setQuotesList(quotesArr);
        }
      });
  }, [id]);
  return (
    <>
      <CategoriesNavigation></CategoriesNavigation>
      <QuotesList quotesList={quotesList} />
    </>
  );
};

export default CategoryQuotes;
