import { Routes, Route, Link } from 'react-router';
import "./App.css"
import  Home  from './pages/Home/main';
import  Tests  from './pages/Tests';
import NotFound from './pages/NotFound/main';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tests" element={<Tests/>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
