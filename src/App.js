
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calendars from './Pages/Calendar';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar';
import TodoList from './Pages/TodoList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar/>
      
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/to-do' element={<TodoList/>}/>
  <Route path='/calendar' element={<Calendars/>}></Route>
 </Routes>
 <ToastContainer/>
    </div>
  );
}

export default App;
