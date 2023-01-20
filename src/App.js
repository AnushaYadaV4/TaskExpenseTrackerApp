/*import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
        <Route path='/profile'>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
*/

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth, onAuthStateChanged } from "./firebase";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ActivePremium from "./components/Header/ActivePremium";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    console.log("page loaded");
  }, []);

  return (
    <div className="app">
      <Header />

      <div style={{ width: "60%", margin: "auto", marginTop: "150px" }}>
        {user ? <Home /> : <Login />}
      </div>

      <Router>
        <Switch>
          <Route exact path="/premium" component={ActivePremium} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
