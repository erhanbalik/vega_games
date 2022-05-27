import vegaLogo from '../Assets/V logo.png'
// For change page
import {Link} from 'react-router-dom'
// Translation Text 
import { useTranslation } from 'react-i18next'
// Translation backend hook
import i18next from 'i18next'
// Flags
import 'flag-icons/css/flag-icons.min.css'

const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb'
  },
  {
    code: 'tr',
    name: 'Türkçe',
    country_code: 'tr'
  }
]

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className='header-container'>
      <div className='logo'>
        <Link to={'/'} className='comp-logo' > <img src={vegaLogo} alt="" />
        </Link>
      </div>
      <div className='comp-brand'>
        <Link to={'/'} className='comp-logo'>
          Vega games
        </Link>
      </div>
      <div className='sideBar'>
          <div className='lang-container'>
              {languages.map(({code, name, country_code}) => (
                <button key={country_code} className='lang-box' 
                onClick={() => i18next.changeLanguage(code)}
                >
                  <span className={`fi fi-${country_code} fis`}></span>
                </button>
              ))}
          </div>
            <div className='contact'>
              <Link to={'Contact'} className='contact-btn'>{t ("header_btn")}</Link>
          </div>
      </div>
    </header>
  )
}

export default Header