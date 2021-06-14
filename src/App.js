import AboutUs from "./pages/AboutUs" ; 
import Work from "./pages/Work" ; 
import Contact from "./pages/Contact" ; 
import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav";
import {Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <AboutUs/>
        </Route>

        <Route path="/work">
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
