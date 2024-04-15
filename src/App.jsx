import './App.css';
import AppRouter from './Components/AppRouter/AppRouter';
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    <>
      <AppRouter>
        <NavBar />
      </AppRouter>
      <Footer />
    </>
  )
}

export default App

