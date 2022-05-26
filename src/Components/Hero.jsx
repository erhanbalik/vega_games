import vegaImg from '../Assets/Vega2.png'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const {t} = useTranslation();
  return (
    <div className='hero-container'>
      <div className='content'>
        <h4>{t ('hero_title')}</h4>
        <p>{t ('hero_desc')}</p>
      </div>
      <div className='hero-img'>
        <img src={vegaImg} alt="VegaImage" />
      </div>

    </div>
  )
}

export default Hero