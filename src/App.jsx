import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StopWatch from './components/StopWatch';
import Digital_Clock from './components/Digital_Clock';
import './App.css';

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-center items-center h-screen mt-5'>
        <nav className='mb-10'>
          <Link to='/stopwatch'>
            <button className='text-4xl text-white font-mono font-bold bg-green-400 p-4 rounded-lg m-5'>
              Open StopWatch
            </button>
          </Link>
          <Link to='/digitalclock'>
            <button className='text-4xl text-white font-mono font-bold bg-red-500 p-4 rounded-lg'>
              Open Digital Clock
            </button>
          </Link>
        </nav>

        <Routes>
          <Route path='/stopwatch' element={<StopWatch />} />
          <Route path='/digitalclock' element={<Digital_Clock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
