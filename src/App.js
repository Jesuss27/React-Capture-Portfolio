import AboutUs from "./pages/AboutUs" ; 
import Work from "./pages/Work" ; 
import Contact from "./pages/Contact" ; 
import GlobalStyle from "./components/GlobalStyle"
import Nav from "./components/Nav";
import {Switch,Route, useLocation} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
//Animate components when they are removed from "React Tree"
import {AnimatePresence} from "framer-motion"
import ScrollTop from "./components/ScrollTop"



function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
      
      
      
    </div>
  );
}

export default App;
