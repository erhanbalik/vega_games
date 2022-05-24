import games from '../Assets/GameList'

const GamesSlide = () => {
  return (
    <div className='gameSlide-container'>
      {
        games.map((game) => (
          <div className='single-game-slide' key={game.id}>
            <img src={game} alt="Vega Games" />
          </div>
        ))
      }
    </div>
  )
}

export default GamesSlide