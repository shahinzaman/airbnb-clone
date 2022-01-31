import './App.css';
import Home from './Home';
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage'
import Toggle from "./Toggle";
import { useContext } from 'react';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (

    // BEM
    <div className="App" style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white",
    }}>
      <Router>
        <Header />
        <Toggle />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </ Router>
    </div >
  );
}

export default App;
