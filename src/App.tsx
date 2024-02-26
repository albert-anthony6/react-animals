import './assets/scss/_theme.scss'
import { useState } from 'react'
import AppHeader from './components/AppHeader.tsx'
import AppFooter from './components/AppFooter.tsx'
import MobileNavbar from './components/MobileNavbar.tsx'
import HomeView from './views/HomeView.tsx'
import MenuModal from './components/MenuModal'
import { useRoutes } from 'react-router-dom'

function App() {
  const [activeModal, setActiveModal] = useState(false)

  const routes = useRoutes([
    {
      path: '/',
      element: <HomeView />
    },
    {
      path: '*',
      element: <HomeView />
    }
  ])

  return (
    <>
      <AppHeader activeModal={activeModal} setActiveModal={setActiveModal} />
      {activeModal && <MenuModal />}
      {routes}
      <MobileNavbar activeModal={activeModal} setActiveModal={setActiveModal} />
      <AppFooter />
    </>
  )
}

export default App
