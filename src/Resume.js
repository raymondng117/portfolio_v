import React, { useState, useEffect } from 'react';


const Resume = () => {
    const [typedWords, setTypedWords] = useState([]);
    const [showButton, setShowButton] = useState(false); // State to manage button visibility
    const words = [
      "EDUCATION",
      "--Web Development & Internet Applications Diploma in Algonquin College, Ottawa",
      "Dean's Honours List; GPA 3.84/4.0",
      "Areas of learning: Front End Development, Back End Development, Database Design and Management, Cross-Platform Web Development, Network Operating Systems",
      "--Master of Arts in Journalism from The Chinese University of Hong Kong",
      "--Bachelor of Social Science from City University of Hong Kong",
      "PROGRAM-RELATED SKILLS",
      "--Languages and Frameworks:",
      "JavaScript, React, Python, SQL, Node.js, C#, ASP.NET, HTML/CSS",
      "--Operating Systems:",
      "Windows 10, Windows 11, Linux, Mac OS, Ubuntu",
      "--Database Management Systems:",
      "MySQL, MongoDB",
      "--Software Tools:",
      "Visual Studio Code, Visual Studio, PyCharm, FileZilla, VNC, Postman, MySQL Workbench, WordPress",
      "--Graphic Tools:",
      "Photoshop, Illustrator, Figma",
      "--Web-Development Tools:",
      "Experience with developments of user-friendly and responsive full-stack web projects through employments of Nodejs, JavaScript and its libraries(bootstrap, jQuery), CSS, MongoDB.",
      "Experience with database management languages such as MySQL to acquire designated information as per request.",
      "Full resume"
    ];
  
    useEffect(() => {
      let currentIndex = 0;
      let currentWordIndex = 0;
      let currentText = '';
      let timer;
  
      const typingAnimation = () => {
        if (currentIndex < words.length) {
          const currentWord = words[currentIndex];
  
          if (currentWordIndex < currentWord.length) {
            currentText = currentWord.substring(0, currentWordIndex + 1);
            setTypedWords(prevTypedWords => [...prevTypedWords.slice(0, currentIndex), currentText]);
            currentWordIndex++;
            timer = setTimeout(typingAnimation, 3); // Adjust the delay here for faster typing
          } else {
            currentIndex++;
            currentWordIndex = 0;
  
            if (currentIndex === words.length - 1) {
              setShowButton(true); // Show the button when "Full resume" is reached
            }
  
            setTimeout(typingAnimation, 100); // Delay before typing the next word
          }
        }
      };
  
      timer = setTimeout(typingAnimation, 0); // Start animation immediately
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="resume-container">
        <div className="resume-section">
          {/* Education */}
          <h1>{typedWords[0]}</h1>
          <h5>{typedWords[1]}</h5>
          <ul>
            <li>{typedWords[2]}</li>
            <li>{typedWords[3]}</li>
          </ul>
          <h5>{typedWords[4]}</h5>
          <h5>{typedWords[5]}</h5>
  
          {/* Skills */}
          <h1 style={{ marginTop: "50px" }}>{typedWords[6]}</h1>
          <h5>{typedWords[7]}</h5>
          <p>{typedWords[8]}</p>
          <h5>{typedWords[9]}</h5>
          <p>{typedWords[10]}</p>
          <h5>{typedWords[11]}</h5>
          <p>{typedWords[12]}</p>
          <h5>{typedWords[13]}</h5>
          <p>{typedWords[14]}</p>
          <h5>{typedWords[15]}</h5>
          <p>{typedWords[16]}</p>
          <h5>{typedWords[17]}</h5>
          <ul>
            <li>{typedWords[18]}</li>
            <li>{typedWords[19]}</li>
          </ul>
          
          {/* Button */}
          <div className='d-flex justify-content-center'>
          {showButton && <button className='btn btn-primary' >{typedWords[20]}</button>}
          </div>
 
        </div>
      </div>
    );
  };


export default Resume;
