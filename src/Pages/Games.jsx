import gameInfo from "./GamesInfo"
import { useTranslation } from "react-i18next"

const Games = () => {
  const { t } =useTranslation();
  return (
    <div className="games-container">
      <h3 className="title">{t ('games_title')}</h3>
      <div>
        <div className="games-info-container">
          {
            gameInfo.map((game) => (
              <div key={game.id} className='single-game'>
                <div className="single-game-img">
                      <img src={game.images} alt={game.name}/>
                </div>
                <div className="single-info">
                  <p className="game-title">{game.name}</p>
                  <a href={game.link} className="game-link">
                    <img src="https://enerjianaliz.info/wp-content/uploads/2020/08/google-play-badge.png" alt="" />
                  </a>
                </div>
              </div>
              
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Games