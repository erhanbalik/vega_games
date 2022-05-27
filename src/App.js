import { Suspense, useEffect, useState } from 'react';
// Route pages hook
import {BrowserRouter} from 'react-router-dom'

// Main Page Loading Screen 
import FadeLoader from "react-spinners/FadeLoader";

// Components
import Header from "./Components/Header";
import Pages from "./Pages/Pages";
import Footer from "./Components/Footer";

// Language changer hook
import i18n from "i18next";
import {initReactI18next } from "react-i18next";
// Language backend 
import HttpApi from 'i18next-http-backend';
// For language detection
import Languagedetector  from 'i18next-browser-languagedetector';
i18n
  .use(initReactI18next)
  .use(Languagedetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'tr'],
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag',  'localStorage',  'subdomain']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });
  // Loading screen for language changes
  const loadingMarkup = (
    <div className='loading'><h2>Loading...</h2></div>
  )

function App() {
  // Main Page Loading Screen for page opening
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <Suspense fallback={loadingMarkup}>
      {
        loading ? 
        <div className='loading'>
          <h2 className='load-text'>VEGA GAMES</h2>
          <FadeLoader color='#0096c7' loading={loading}/>
        </div>
        :
        <BrowserRouter className="App">
          <Header/>
          <Pages/>
          <Footer/>
        </BrowserRouter>

      }
    </Suspense>
  );
}

export default App;
