import './App.css';
import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import { UserDemo } from './userDemo';
import { PaymentDemo } from './paymentDemo';


function App() {
  return (
    <Router>
      <div className='flex flex-col'>
        <div className='flex flex-row font-bold justify-items-center'>
          <Link to="/profile" className='pr-4'>User Demo</Link>
          <Link to="/purchase">Purchase</Link>
        </div> 
        <div className="flex flex-row justify-around min-h-screen dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path="/profile" element={<UserDemo />} />
            <Route path="/purchase" element={<PaymentDemo />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
