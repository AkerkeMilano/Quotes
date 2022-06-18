import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateQuote from "./components/CreateQuote/CreateQuote";
import EditQuote from "./components/EditQuote/EditQuote";
import Main from "./containers/Main/Main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/quotes/:id" element={<Main />} />
          <Route path="/add-quote" element={<CreateQuote />} />
          <Route path="/quotes/:id/edit" element={<EditQuote />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
