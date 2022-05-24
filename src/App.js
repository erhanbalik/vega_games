import {BrowserRouter} from 'react-router-dom'

import Header from "./Components/Header";
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter className="App">
      <Header/>
      <Pages/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
