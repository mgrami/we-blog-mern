import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Posts from './pages/Posts'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Posts/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
