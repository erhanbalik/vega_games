import gameInfo from "./GamesInfo"

const Games = () => {
  return (
    <div className="games-container">
      <h3 className="title">Our Games</h3>
      <div>
        <div className="games-info-container">
          {
            gameInfo.map((game) => (
              <div key={game.id} className='single-game'>
                <p className="game-title">{game.name}</p>
                <div className="single-game-img">
                  {game.images.map((img, index) => (
                      <img src={img} alt={game.name} key={index} />
                  ))}
                </div>
                <a href={game.link} className="game-link">Game site</a>
              </div>
              
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Games