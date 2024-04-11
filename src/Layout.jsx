import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div className='py-4 px-8 flex flex-col min-h-screen'>
        {/* Putting Header for all the component */}
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Layout
