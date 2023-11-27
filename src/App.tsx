import './App.scss';
import './assets/scss/_theme.scss';
import AppHeader from './components/AppHeader.tsx';
import HomeView from './views/HomeView.tsx';

function App() {

  return (
    <>
      <AppHeader />
      <HomeView />
    </>
  )
}

export default App;
