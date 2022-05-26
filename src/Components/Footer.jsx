import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer>
      <div className='footer-info'>
        <Link to={'/'} className='comp-logo'>V</Link>
        <Link to={'Games'}>{t ('games_title')}</Link>
        <Link to={'Contact'}>{t ('header_btn')}</Link>
        <a href="https://play.google.com/store/apps/dev?id=5098214532154264846&gl=TR">Play Store</a>
      </div>
      <div>
        2022 All right Reserved
      </div>
    </footer>
  )
}

export default Footer