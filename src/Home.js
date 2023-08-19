import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {
  //npm install npm-run-all --save-dev
  //npm install json-server
  //add lines below to the scripts in .json
  //"start": "npm-run-all -p start:json-server start:react ",
  //"start:react": "react-scripts start",
  //"start:json-server": "npx json-server --watch data/db.json --port 8000",
  let url = 'http://localhost:8000/blogs'
  // ** assign a name to data (blogs)
  const { data: blogs, isPending, error } = useFetch(url)

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs ? <BlogList blogs={blogs} title="All blogs" /> : null}
    </div>

  );
}

export default Home;