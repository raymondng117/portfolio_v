import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
  //npx json-server --watch data/db.json --port 8000
  let url = 'http://localhost:8000/blogs'
  // ** assign a name to data (blogs)
  const {data:blogs, isPending, error} = useFetch(url)

    return ( 
        <div className="home">
        {error && <div>{error}</div>}
        
        {isPending && <div>Loading...</div>}
     
        {blogs ? <BlogList blogs={blogs} title="All blogs"/> : null}
        </div>
        
     );
}
 
export default Home;