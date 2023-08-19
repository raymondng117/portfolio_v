import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes} from 'react-router-dom';
import Aboutme from './Aboutme';
import Projects from './projects';
import Contact from './Contact';


function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element = {<Home />}> </Route>
            <Route path='/aboutme' element={<Aboutme />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
