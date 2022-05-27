import vegaImg from '../Assets/Vega2.png'
import vegaLogo from '../Assets/V logo.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const MainContent = () => {
  const { t } = useTranslation();
  return (
    <div className='main-container'>
      <div className='main-single'>
        <div className='main-img'>
          <img src={vegaLogo} alt="VegaImage" />
        </div>
        <div className='main-content'>
          <h4>{t ('mission_title')}</h4>
          <p>{t ('mission_desc')}</p>
        </div>
      </div>
      <div className='main-single'>
        <div className='main-content'>
          <h4>{t ('games_title')}</h4>
          <p>{t ('games_desc')}</p>
          <p className='game-btn'>
          <Link to={'games'} className='detail-btn'>Games</Link>
          </p>
        </div>
        <div className='main-img'>
            <img src={vegaImg} alt="VegaImage" />
          </div>
      </div>
      
    </div>
  )
}

export default MainContent