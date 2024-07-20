import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { AppRoutes } from './components/Routes/AppRoutes';
import { SideBar } from './components/SideBar/SideBar';
import './styles/app.scss'

export function App() {
  return (
      <div className="app">
        <Header />
          <div className="container">
            <SideBar />
            <AppRoutes />
          </div>
        <Footer  />
      </div>
  );
}