import games from '../Assets/GameList'

const GamesSlide = () => {
  return (
    <div className='gameSlide-container'>
      {
        games.map((game, index) => (
          <div className='single-game-slide' key={index}>
            <img src={game} alt="Vega Games" />
          </div>
        ))
      }
    </div>
  )
}

export default GamesSlide