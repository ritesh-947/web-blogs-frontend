import { Routes, Route } from "react-router-dom";
import MoneyTalk from "./Money_talk/money_talk";
import StartUpTalk from './Startup_talk/startup_talk';
import Login from "./Login_page/Login";
import SignUp from './Login_page/SignUp';
import BlogList from "./blog_page/BlogList";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route
          path="/how-to-be-rich-effective-practical-guides"
          element={<MoneyTalk />}
        />
         <Route
          path="/blogs/job-vs-startup"
          element={<StartUpTalk />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;