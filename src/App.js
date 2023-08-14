import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CreateBlog from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path='/' element = {<Home />}> 
            </Route>

            <Route path='/create' element = {<CreateBlog />}> 
            </Route> 

            {/* "/:" is to assign a router parameter to the blogs sources*/}
            {/* the name of parameter can be anything followed by the colon ":" */}
            <Route path='blogs/:id' element = {<BlogDetails />}> 
            </Route> 

            <Route path='*' element = {<NotFound />}> 
            </Route> 

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
