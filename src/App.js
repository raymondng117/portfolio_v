import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
import About from './about';
import Projects from './projects';
import Contact from './Contact';

function App() {
  return (

      <div className="App">
        <Navbar />
        <div >
          <Routes>
            <Route path='/' element = {<Home />}> </Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
