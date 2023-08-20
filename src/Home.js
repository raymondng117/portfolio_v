// import BlogList from './BlogList';
// import useFetch from './useFetch';


const Home = () => {
  return (
    <div className="home">
      <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">

            <div className="col-4 col-5-large col-12-medium ">
           <img src="https://i.natgeofe.com/k/41de528e-c521-4a29-ade6-d385d9a4e5f7/sea-otter-closeup_16x9.jpg" className="rounded-circle img-fluid circle-img" alt="" />
            </div>

             <div className="col-7 col-7-large col-12-medium" style={{ marginLeft: '20px' }}>
              <header>
                <h1>Hi. I'm <strong>Raymond Ng</strong>.</h1>
              </header>
              <p className="p-intro">And this is <strong>my portfolio website</strong> which presents my web development projects, demonstrating my skills and expertise in this field. You're welcome to explore these examples of my work, which reflect my commitment to creating polished digital solutions within the world of web development. </p>
              <a href="#work" className="button large scrolly">Learn about what I do</a>
            </div>
          </div>
        </div>
      </article>
    </div>

  );
}

export default Home;