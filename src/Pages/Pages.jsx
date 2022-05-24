import {Route, Routes} from 'react-router-dom'
import MainMenu from './MainMenu'
import Games from './Games'
import ContactUs from './ContactUs'

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainMenu/>} />
        <Route path='Games' element={<Games/>} />
        <Route path='Contact' element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default Pages