import './App.scss';
import './assets/scss/_theme.scss';
import AppHeader from './components/AppHeader.tsx';
import HomeView from './views/HomeView.tsx';
import { useRoutes } from 'react-router-dom';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomeView />
    }
  ])

  return (
    <>
      <AppHeader />
      { routes }
    </>
  )
}

export default App;
