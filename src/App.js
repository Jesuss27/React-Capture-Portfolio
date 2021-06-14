import AboutUs from "./pages/AboutUs" ; 
import Work from "./pages/Work" ; 
import Contact from "./pages/Contact" ; 
import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav";
import {Switch,Route} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail"


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <AboutUs/>
        </Route>

        <Route path="/work/:id" >
          <ProductDetail />
        </Route>

        <Route path="/work" exact>
          <Work/>
        </Route>

        <Route path="/contact">
          <Contact/>
        </Route>

      </Switch>
      
      
      
    </div>
  );
}

export default App;
