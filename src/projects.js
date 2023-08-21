const Projects = () => {
    return (
        <div className="container ">
            <div className="row justify-content-center" >
                {/* title */}
                <p className="display-4 text-center mt-4">Programming</p>
                <hr className='hr' />

                {/* Live Chat */}
                <div className="col-md-4 col-sm-6 mt-3 " >
                    <div className="card text-black border-4 m-2" >
                        <div className="card-image" >
                            <img class="card-img-top " src="https://th.bing.com/th/id/OIG.2W_p46W042h7V0BFZeoa?pid=ImgGn" alt="Live chat" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Live Chat App</h5>
                            <p class="card-text text-sm">This App makes use of mongoDB, react.js, express.js and socket.io to create a page where users under same router can have consistent live chat with each other.</p>
                            <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary">More details</a>
                        </div>
                    </div>
                </div>

                {/*IntrovertCopilot*/}
                <div className="col-md-4 col-sm-6 mt-3" >
                    <div className="card text-black border-4 m-2" >
                        <div className="card-image" >
                            <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.mbNvkEtlS.LFPB4C8Pvg?pid=ImgGn" alt="Live chat" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">IntrovertCopilot</h5>
                            <p class="card-text text-sm">This app make use of ChatGPT API chat module, express.js and JS to create a website for introverts to gain inspiration on how to initiate conversations.</p>
                            <a href="https://github.com/tiffahahahu7/IntrovertCopilot.git" class="btn btn-primary">More details</a>
                        </div>
                    </div>
                </div>


                {/* APOD search */}
                <div className="col-md-4 col-sm-6 mt-3" >
                    <div className="card text-black border-4 m-2" >
                        <div className="card-image" >
                            <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.xdLdg5rky0lbwHFInpkJ?pid=ImgGn" alt="Live chat" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">APOD search</h5>
                            <p class="card-text text-sm">This App makes use of API, local storage and fetch method to create a page where allow users to fetch images from NASA and save them in local storage.</p>
                            <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary">More details</a>
                        </div>
                    </div>
                </div>


                {/* title */}
                <div className="row justify-content-center mt-4" >
                    <p className="display-4 text-center mt-4">Design</p>
                    <hr className='hr' />

                    {/* Figma */}
                    <div className="col-md-4 col-sm-6 mt-3" >
                        <div className="card text-black border-4 m-2" >
                            <div className="card-image" >
                                <img class="card-img-top border-dark border-4 " src={process.env.PUBLIC_URL + '/images/figma.png'} alt="Figma project" />
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">Wander World</h5>
                                <p class="card-text text-sm">This project employs a design application called Figma to create a travel-agency-like webpage. </p>
                                <a href="https://www.figma.com/file/ZPtFbXJngR0s4yCepppOOH/Part1%3AWireframes?type=design&node-id=737-1651&mode=design&t=sdt1ezf0vsGjbfHk-0" class="btn btn-primary">More details</a>
                            </div>
                        </div>
                    </div>

                    {/* slothrill */}
                    <div className="col-md-4 col-sm-6 mt-3" >
                        <div className="card text-black border-4 m-2" >
                            <div className="card-image" >
                                <img class="card-img-top border-dark border-4 " src={process.env.PUBLIC_URL + '/images/design1.png'} alt="Live chat" />
                            </div>

                            <div class="card-body">
                                <h5 class="card-title">Slothrill</h5>
                                <p class="card-text text-sm">This image is created through employment of Adobe illustrator using layers and various techniques.</p>
                                <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary">More details</a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Projects;