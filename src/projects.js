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
                            <img class="card-img-top " src="https://th.bing.com/th/id/OIG.2W_p46W042h7V0BFZeoa?pid=ImgGn" alt="MicrosoftAIimage" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title fw-bolder">ChatHub</h5>
                            <p class="card-text text-sm">This App makes use of mongoDB, react.js, express.js and socket.io to create a page where users under same router can have consistent live chat with each other.</p>
                            <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary project-links">Full Codes</a>
                        </div>
                    </div>
                </div>

                {/*Calculator*/}
                <div className="col-md-4 col-sm-6 mt-3" >
                    <div className="card text-black border-4 m-2" >
                        <div className="card-image" >
                            <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.dCZAhKbJKQu3aHkQK1GT?pid=ImgGn" alt="MicrosoftAIimage" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title fw-bolder">Calculator</h5>
                            <p class="card-text text-sm">This application employs typical React functionalities like useState and useEffect to handle complex chained calculations and negative number computations.</p>
                            <a href=" https://raymondng117.github.io/freeCodeCamp_calculator/" class="btn btn-primary me-2 project-links">Live demo</a>
                            <a href="https://github.com/raymondng117/freeCodeCamp_calculator" class="btn btn-primary project-links">Full Codes</a>
                        </div>
                    </div>
                </div>

                {/*Random Quotes*/}
                <div className="col-md-4 col-sm-6 mt-3" >
                    <div className="card text-black border-4 m-2" >
                        <div className="card-image" >
                            <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.rmAGNkjypW7JBXj6epXG?pid=ImgGn" alt="MicrosoftAIimage" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title fw-bolder">API Random Quotes</h5>
                            <p class="card-text text-sm">This app make use of GitHub API, react.js features such as useEffect and useState to randomly create single fetched quotes.</p>
                            <a href=" https://raymondng117.github.io/randomQuotes/" class="btn btn-primary me-2 project-links">Live demo</a>
                            <a href="https://github.com/raymondng117/randomQuotes" class="btn btn-primary project-links">Full Codes</a>
                        </div>
                    </div>
                </div>

                {/*IntrovertCopilot*/}
                <div className="col-md-4 col-sm-6 mt-3" >
                    <div className="card text-black border-4 m-2" >
                        <div className="card-image" >
                            <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.mbNvkEtlS.LFPB4C8Pvg?pid=ImgGn" alt="MicrosoftAIimage" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title fw-bolder">IntrovertCopilot</h5>
                            <p class="card-text text-sm">This app uses ChatGPT API, jQuery and localStroage to create a website for introverts to learn conversations skills.</p>
                            <a href="https://github.com/tiffahahahu7/IntrovertCopilot.git" class="btn btn-primary project-links">Full Codes</a>
                        </div>
                    </div>
                </div>



                {/* APOD search */}
                <div className="col-md-4 col-sm-6 mt-3" >
                    <div className="card text-black border-4 m-2" >
                        <div className="card-image" >
                            <img class="card-img-top border-dark border-4 " src="https://th.bing.com/th/id/OIG.xdLdg5rky0lbwHFInpkJ?pid=ImgGn" alt="MicrosoftAIimage" />
                        </div>

                        <div class="card-body">
                            <h5 class="card-title fw-bolder">APOD search</h5>
                            <p class="card-text text-sm">This App makes use of API, local storage and fetch method to create a page where allow users to fetch images from NASA and save them in local storage.</p>
                            <a href="https://github.com/raymondng117/liveChat" class="btn btn-primary project-links">Full Codes</a>
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
                                <h5 class="card-title fw-bolder">Wander World</h5>
                                <p class="card-text text-sm">This project employs a design application called Figma to create a travel-agency-like webpage. </p>
                                <a href="https://www.figma.com/file/ZPtFbXJngR0s4yCepppOOH/Part1%3AWireframes?type=design&node-id=737-1651&mode=design&t=sdt1ezf0vsGjbfHk-0" class="btn btn-primary project-links">Full Codes</a>
                            </div>
                        </div>
                    </div>

                    {/* slothrill */}
                    <div className="col-md-4 col-sm-6 mt-3" >
                        <div className="card text-black border-4 m-2" >
                            <div className="card-image" >
                                <img class="card-img-top border-dark border-4 " src={process.env.PUBLIC_URL + '/images/design1.png'} alt="Illustrator project" />
                            </div>

                            <div class="card-body">
                                <h5 class="card-title fw-bolder">Slothrill</h5>
                                <p class="card-text text-sm">This image is created through Adobe illustrator using <strong>layers</strong>, <strong>image tracking</strong>, <strong>selcetion tool </strong>and various techniques.</p>
                                <a href="https://drive.google.com/file/d/1quONhk-uH497rYbovkR1VTGRTmBy2OHV/view?usp=drive_link" class="btn btn-primary">Document source</a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default Projects;