import { Routes, Route } from "react-router-dom";
import MoneyTalk from "./Money_talk/money_talk";
import Login from "./Login_page/Login";
import Header from "./Header/Header";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
      <Route
          path="/"
          element={<Header />}
        />
        <Route
          path="/how-to-be-rich-effective-practical-guides"
          element={<MoneyTalk />}
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;