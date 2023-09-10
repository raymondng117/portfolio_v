const Contact = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">

                <div className="col-sm-8 mt-5 text-center">
                    <div className="display-6 fw-bold mb-5">
                    If you're ever interested in getting in touch, please don't hesitate to reach out via email!
                    </div>

                    <img width="48" height="48" src="https://img.icons8.com/emoji/48/backhand-index-pointing-right-light-skin-tone.png" alt="backhand-index-pointing-right-light-skin-tone" className="me-5 animated-image"/>

                    <a href="mailto:ngyuwing117@gmail.com" className="email display-6 text-decoration-none">ngyuwing117@gmail.com</a>
                </div>

                <div className="col-sm-3 ms-2 mt-5 d-sm-block">
                    <img className='img-fluid home-img-1' src={process.env.PUBLIC_URL + "/images/home char.png"} alt="" />
                </div>


            </div>

        </div>
    );
}

export default Contact;