
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='header-container'>
      <div className='logo'>
        <Link to={'/'} className='comp-logo' >V</Link>
      </div>
      <div className='comp-brand'>
        <Link to={'/'} className='comp-logo'>
          Vega games
        </Link>
      </div>
      <div className='contact'>
        <Link to={'Contact'} className='contact-btn'>Contact</Link>
      </div>
    </header>
  )
}

export default Header