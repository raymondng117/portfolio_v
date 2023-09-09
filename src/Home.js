import React, { useEffect, useState } from 'react';


const Home = () => {

  const [currentIntroText, setCurrentIntroText] = useState('');
  const [currentMottoText, setCurrentMottoText] = useState('');
  const [currentQuoteText, setCurrentQuoteText] = useState('');
  const [currentJapaneseMottoText, setCurrentJapaneseMottoText] = useState('');
  const [currentJapaneseText, setCurrentJapaneseText] = useState('');

  const introText = '  I am Raymond Ng! :)';
  const mottoText = ' "What you desperately learn becomes your talent."';
  const quoteText = '  --FULLMETAL ALCHEMIST';
  const japaneseMottoText = '  "自分が必死に学習したことが才能になる"';
  const japaneseText = '  --鋼の錬金術師';

  let introCharIndex = 0;
  let mottoCharIndex = 0;
  let quoteCharIndex = 0;
  let japaneseMottoCharIndex = 0;
  let japaneseCharIndex = 0;
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      if (introCharIndex < introText.length) {
        setCurrentIntroText((prevText) => prevText + introText[introCharIndex]);
        introCharIndex++;
      } else if (mottoCharIndex < mottoText.length) {
        setCurrentMottoText((prevText) => prevText + mottoText[mottoCharIndex]);
        mottoCharIndex++;
      } else if (quoteCharIndex < quoteText.length) {
        setCurrentQuoteText((prevText) => prevText + quoteText[quoteCharIndex]);
        quoteCharIndex++;
      } else if (japaneseMottoCharIndex < japaneseMottoText.length) {
        setCurrentJapaneseMottoText((prevText) => prevText + japaneseMottoText[japaneseMottoCharIndex]);
        japaneseMottoCharIndex++;
      } else if (japaneseCharIndex < japaneseText.length) {
        setCurrentJapaneseText((prevText) => prevText + japaneseText[japaneseCharIndex]);
        japaneseCharIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Typing speed



    return () => {
      clearInterval(interval);
    };

  }, []);


  return (
    <div style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")`, // Use a leading slash to indicate it's in the public directory
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100vh',
    }}>
      <div className="home-container me-2">
        <div className="row justify-content-between">

        <div className='ms-5 col-sm-3 col-12 d-sm-block p-3 mt-5'>
            <img className='img-fluid home-img-1' src={process.env.PUBLIC_URL + "/images/home char.png"} alt="" /> 
          </div>

          <div className='ms-3 col-sm-8 col-12'>
            <h1 className="display-2 fw-bolder mb-5">
              {currentIntroText.replace("undefined", "")}
            </h1>
            <p className="motto fw-bold text-lg-start justify-content-start">{currentMottoText.replace("undefined", "")}</p>

            <p className='d-flex fw-light justify-content-between mb-5'>
              <span></span> <em>{currentQuoteText.replace("undefined", "")}</em>
            </p>
            <p className="motto fw-bold text-lg-start justify-content-start">
              {currentJapaneseMottoText.replace("undefined", "")}
            </p>
            <p className='d-flex fw-light justify-content-between mb-5'>
              <span></span> <em>{currentJapaneseText.replace("undefined", "")}</em>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
