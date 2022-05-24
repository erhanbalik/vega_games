import vegaImg from '../Assets/Vega2.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='content'>
        <h4>Welcome Vega Games</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quae laudantium quod, inventore nam officia, saepe qui amet molestias maxime dignissimos doloribus eligendi autem commodi enim quidem, nemo porro quibusdam labore consequuntur temporibus. Obcaecati, at quis similique cupiditate velit dicta veniam alias deleniti aspernatur recusandae dolorum adipisci. Voluptatibus, nemo beatae?</p>
      </div>
      <div className='hero-img'>
        <img src={vegaImg} alt="VegaImage" />
      </div>

    </div>
  )
}

export default Hero