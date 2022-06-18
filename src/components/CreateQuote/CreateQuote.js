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

  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  const selectCategory = (category) => {
    setNewQuote((v) => ({ ...v, category: category }))
  };

  const newQuoteHandler = (fieldName) => {
    return (e) => setNewQuote((v) => ({ ...v, [fieldName]: e.target.value }));
  };

  const createNewQuote = async () => {
    if(newQuote.author.length > 0 && newQuote.content.length > 0){
      try {
        await axiosUrl.post(`/quotes.json`, newQuote);
        navigate(`/quotes/${newQuote.category}`);
      } catch (e) {
        console.log(e);
      }
      setIsValid(true);
    } else{
      setIsValid(false);
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
        quote={newQuote}
        quoteHandler={newQuoteHandler}
        onSubmit={createNewQuote}
        isValid={isValid}
      ></CategoryForm>
    </div>
  );
};

export default CreateQuote;
