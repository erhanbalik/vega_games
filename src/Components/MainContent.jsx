import vegaImg from '../Assets/Vega2.png'
import { Link } from 'react-router-dom'

const MainContent = () => {
  return (
    <div className='main-container'>
      <div className='main-single'>
        <div className='main-img'>
          <img src={vegaImg} alt="VegaImage" />
        </div>
        <div className='main-content'>
          <h4>Our Mission</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae laudantium quod, inventore nam officia, saepe qui amet molestias maxime dignissimos doloribus eligendi autem commodi enim quidem, nemo porro quibusdam labore consequuntur temporibus. Obcaecati, at quis similique cupiditate velit dicta veniam alias deleniti aspernatur recusandae dolorum adipisci. Voluptatibus, nemo beatae?</p>
        </div>
      </div>
      <div className='main-single'>
        <div className='main-content'>
          <h4>Our Games</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae laudantium quod, inventore nam officia, saepe qui amet molestias maxime dignissimos doloribus eligendi autem commodi enim quidem, nemo porro quibusdam labore consequuntur temporibus. Obcaecati, at quis similique cupiditate velit dicta veniam alias deleniti aspernatur recusandae dolorum adipisci. Voluptatibus, nemo beatae?</p>
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