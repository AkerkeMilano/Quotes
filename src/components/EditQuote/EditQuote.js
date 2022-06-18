import { useState, useEffect } from "react";
import { categories } from "../../categories";
import Selector from "../Selector/Selector";
import CategoryForm from "../CategoryForm/CategoryForm";
import axiosUrl from "./../../axiosUrl";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./EditQuote.css";

const EditQuote = () => {
  const { id } = useParams();
  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    axiosUrl.get(`./quotes/${id}.json`).then((quote) => {
      if (quote.data) {
        setCurrentQuote(quote.data);
      }
    });
  }, [id]);

  const navigate = useNavigate();

  const selectCategory = (category) => {
    setCurrentQuote((v) => ({ ...v, category: category }));
  };

  const quoteChangeHandler = (fieldName) => {
    return (e) =>
      setCurrentQuote((v) => ({ ...v, [fieldName]: e.target.value }));
  };

  const editQuote = async () => {
    try {
      await axiosUrl.put(`/quotes/${id}.json`, currentQuote);
      navigate(-1);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="EditQuote">
      <h2>Edit new quote</h2>
      {Object.keys(currentQuote).length !== 0 ? (
        <div>
          <Selector
            quote={currentQuote}
            categoryList={categories}
            selectCategory={selectCategory}
          ></Selector>
          <CategoryForm
            quote={currentQuote}
            quoteHandler={quoteChangeHandler}
            onSubmit={editQuote}
          ></CategoryForm>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default EditQuote;
