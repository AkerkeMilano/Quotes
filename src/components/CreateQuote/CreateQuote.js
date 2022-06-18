import { useState } from "react";
import { categories } from "../../categories";
import Selector from "../Selector/Selector";
import CategoryForm from "../CategoryForm/CategoryForm";
import axiosUrl from "./../../axiosUrl";
import { useNavigate } from "react-router-dom";
import "./CreateQuote.css";

const CreateQuote = () => {
  const [newQuote, setNewQuote] = useState({
    author: "",
    content: "",
    category: categories[0].id
  });

  const navigate = useNavigate();
  const selectCategory = (category) => {
    setNewQuote((v) => ({ ...v, category: category }))
  };
  const newQuoteHandler = (fieldName) => {
    return (e) => setNewQuote((v) => ({ ...v, [fieldName]: e.target.value }));
  };

  const createNewQuote = async () => {
    try {
      await axiosUrl.post(`/quotes.json`, newQuote);
      navigate(`/`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="CreateQuote">
      <h2>Submit new quote</h2>
      <Selector
        categoryList={categories}
        selectCategory={selectCategory}
      ></Selector>
      <CategoryForm
        newQuote={newQuote}
        newQuoteHandler={newQuoteHandler}
        createNewQuote={createNewQuote}
      ></CategoryForm>
    </div>
  );
};

export default CreateQuote;
