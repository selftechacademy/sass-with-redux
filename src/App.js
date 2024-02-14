import HomePage from "./pages/homePage/HomePage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;

//npm install react-router-dom
//npm install @reduxjs/toolkit
//npm install react-redux
//npm install sass
