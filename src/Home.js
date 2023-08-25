import React, { useEffect, useState } from 'react';

const Home = () => {
  const [currentIntroText, setCurrentIntroText] = useState('');
  const [currentMottoText, setCurrentMottoText] = useState('');
  const [currentQuoteText, setCurrentQuoteText] = useState('');
  const [currentJapaneseMottoText, setCurrentJapaneseMottoText] = useState('');
  const [currentJapaneseText, setCurrentJapaneseText] = useState('');

  const introText = '  Hi there! I am Raymond Ng! Welcome to my portfolio page!';
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
    <>
      <div className="container home-container mt-5">
        <div className="row justify-content-between">
          <div className='col-sm-8 col-12 home-img-row'>
            <h1 className="display-6 fw-bolder mb-5 text-danger">{currentIntroText.replace("undefined", "")}</h1>

            
            <p className="motto fw-bold text-lg-start justify-content-start">{currentMottoText.replace("undefined", "")}</p>

            <p className='d-flex justify-content-between mb-5'>
              <span></span> <em>{currentQuoteText.replace("undefined", "")}</em>
            </p>
            <p className=" text-lg-start motto fw-bold justify-content-start">
              {currentJapaneseMottoText.replace("undefined", "")}
            </p>
            <p className='d-flex justify-content-between'>
              <span></span> <em>{currentJapaneseText.replace("undefined", "")}</em>
            </p>
          </div>

          <div className='col-sm-3 col-12 d-sm-block home-img-row '>
            <img className='img-fluid home-img-1' src={process.env.PUBLIC_URL + "/images/home char.png"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
