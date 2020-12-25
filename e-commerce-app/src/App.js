
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from "./Pages/shop/shop.component.jsx";
import Header from "./Components/Header/Header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>   
    </div>
  );
}

export default App;
