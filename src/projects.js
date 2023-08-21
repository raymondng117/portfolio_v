const Projects = () => {
    return (
        <div className="container ">

            <div className="row justify-content-center" >

                <p className="display-4 text-center mt-4">Portfolio List</p>

                <hr className='hr' />

                <div className="col-md-4 col-sm-6 mt-3 " >
                    <div className="card text-black border-4" >
                        <div className="border-dark m-3" >
                            <img class="card-img-top border-dark border-4 " src={process.env.PUBLIC_URL + "/images/liveChat.jpg"} alt="Live chat" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Live Chat App</h5>
                            <p class="card-text text-sm" style={{ fontSize: "12px" }}>This App makes use of mongoDB, react.js, express.js and socket.io to create a page where users under same router have live chat with each other.</p>
                            <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary" style={{ fontSize: "12px" }}>More details</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 mt-3" >
                    <div className="card text-black border-4" >
                        <div className="border-dark m-3" >
                            <img class="card-img-top border-dark border-4 " src={process.env.PUBLIC_URL + "/images/APOD.jpg"} style={{height:"163px"}} alt="Live chat" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">APOD search</h5>
                            <p class="card-text text-sm" style={{ fontSize: "12px" }}>This App makes use of API, local storage and fetch method to create a page where allow users to fetch images from NASA and save them in local storage.</p>
                            <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary" style={{ fontSize: "12px" }}>More details</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;