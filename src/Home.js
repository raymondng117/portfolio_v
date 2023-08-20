import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home mt-4">
      <article>
        <div className="container">
          <div className="row">
            <div className="col-xl col-12 m-4">
              <img src="https://i.natgeofe.com/k/41de528e-c521-4a29-ade6-d385d9a4e5f7/sea-otter-closeup_16x9.jpg" className="rounded-circle img-fluid" alt="" />
            </div>

            <div className="col-xl-8 col-12 m-4" style={{ marginLeft: '60px' }}>
              <header>
                <h1>Hi. I'm <strong>Raymond Ng</strong>.</h1>
              </header>
              <p className="p-intro">And this is <strong>my portfolio website</strong>, showcasing my web development projects to demonstrate my skills and expertise in this field. You're welcome to explore these examples of my work, which reflect my commitment to creating polished digital solutions within the world of web development.</p>
              <Link to="/projects" className="btn btn-primary mt-3">Learn about what I do</Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Home;
