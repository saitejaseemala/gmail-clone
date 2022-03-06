import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import Login from "../components/Login";
import SendMail from "./SendMail";
import "../css/App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "../features/mailSlice";
import { selectUser } from "../features/userSlice";
import { auth } from "../config/firebase";
import { login } from "../features/userSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app-body">
            <Sidebar />
            <Routes>
              <Route path="/mail" exact element={<Mail />} />
              <Route path="/" exact element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default App;
