import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <article id="top" className="wrapper style1">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <img src="https://i.natgeofe.com/k/41de528e-c521-4a29-ade6-d385d9a4e5f7/sea-otter-closeup_16x9.jpg" className="rounded-circle img-fluid" alt="" />
            </div>

            <div className="col-md-7 col-12" style={{ marginLeft: '60px' }}>
              <header>
                <h1>Hi. I'm <strong>Raymond Ng</strong>.</h1>
              </header>
              <p className="p-intro">And this is <strong>my portfolio website</strong>, showcasing my web development projects to demonstrate my skills and expertise in this field. You're welcome to explore these examples of my work, which reflect my commitment to creating polished digital solutions within the world of web development.</p>
              <a href="#work" className="btn btn-primary mt-3">Learn about what I do</a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Home;
