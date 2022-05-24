import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
      <div className='footer-info'>
        <Link to={'/'} className='comp-logo'>V</Link>
        <Link to={'Games'}>Games</Link>
        <Link to={'Contact'}>Contact Us</Link>
        <a href="https://play.google.com/store/apps/dev?id=5098214532154264846&gl=TR">Play Store</a>
      </div>
      <div>
        2022 All right Reserved
      </div>
    </footer>
  )
}

export default Footer