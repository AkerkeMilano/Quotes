import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import QuotesList from "./components/QuotesList/QuotesList";
import CreateQuote from "./components/CreateQuote/CreateQuote";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<QuotesList />} />
        <Route path="/create" element={<CreateQuote />} />
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
