const Resume = () => {

  const typedWords = [
    "EDUCATION",
    "--Web Development & Internet Applications Diploma in Algonquin College, Ottawa",
    "Dean's Honours List:",
    // 3
    "GPA 3.84/4.0",

    "--Master of Arts in Journalism from The Chinese University of Hong Kong",
    "--Bachelor of Social Science from City University of Hong Kong",



    "Skillset",
    "--Languages and Frameworks:",
    // 8
    "React",
    "Node.js",
    "SQL",
    "C#",
    "ASP.NET",
    "Python",
    "MongoDB",
    "CSS",

    // 16
    "--Operating Systems:",
    // 17
    "Linux",
    "Mac OS",
    "Ubuntu",
    "Windows 10",


    "--Graphic Tools:",
    "Photoshop",
    "Illustrator",
    "Figma",



    "Full resume"
  ];

  // useEffect(() => {
  //   let currentIndex = 0;
  //   let currentWordIndex = 0;
  //   let currentText = '';
  //   let timer;

  //   const typingAnimation = () => {
  //     if (currentIndex < words.length) {
  //       const currentWord = words[currentIndex];

  //       if (currentWordIndex < currentWord.length) {
  //         currentText = currentWord.substring(0, currentWordIndex + 1);
  //         setTypedWords(prevTypedWords => [...prevTypedWords.slice(0, currentIndex), currentText]);
  //         currentWordIndex++;
  //         timer = setTimeout(typingAnimation, 3); // Adjust the delay here for faster typing
  //       } else {
  //         currentIndex++;
  //         currentWordIndex = 0;

  //         if (currentIndex === words.length - 1) {
  //           setShowButton(true); // Show the button when "Full resume" is reached
  //         }

  //         setTimeout(typingAnimation, 100); // Delay before typing the next word
  //       }
  //     }
  //   };

  //   timer = setTimeout(typingAnimation, 0); // Start animation immediately

  //   return () => clearTimeout(timer);
  // }, []);

  // method to download resume
  const downloadResume = () => {
    const resumePath = process.env.PUBLIC_URL + '/resume.pdf';
    window.open(resumePath, '_blank');
  };

  return (
    <div className="resume-container">
      <div className="resume-section">


        {/* Education */}
        <h1>{typedWords[0]}</h1>


        <h5 className="mt-3">{typedWords[1]}</h5>
        <ul>
          <li>{typedWords[2]}</li> <button button className='btn btn-outline-info rounded-pill m-1'>{typedWords[3]}</button>
        </ul>

        <h5 className="mt-3">{typedWords[4]}</h5>
        <h5 className="mt-3">{typedWords[5]}</h5>




        {/* Skills */}
        <h1 className='mt-5'>{typedWords[6]}</h1>

        <h5 >{typedWords[7]}</h5>
        <div className='d-flex justify-content-start'>
          <button className='btn btn-outline-info rounded-pill m-1'> <i class="fa-brands fa-react"></i> {typedWords[8]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'> <i class="fa-brands fa-node-js me-2"></i>{typedWords[9]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'><i class="fa-solid fa-database me-2"></i>{typedWords[10]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'><i class="devicon-icon devicon-csharp-plain colored me-2"></i>{typedWords[11]}</button>

        </div>

        <div className='d-flex justify-content-start'>
          <button className='btn btn-outline-info rounded-pill m-1'><i class="devicon-icon devicon-dot-net-plain me-2"></i>{typedWords[12]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'><i class="devicon-icon devicon-python-plain me-2"></i>{typedWords[13]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'>
            <i class="devicon-icon devicon-mongodb-plain me-2"></i>
            {typedWords[14]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'><i class="devicon-icon devicon-css3-plain-wordmark me-2"></i>{typedWords[15]}</button>
        </div>

        <h5 className='mt-4'>{typedWords[16]}</h5>
        <div className='d-flex justify-content-start'>
          <button className='btn btn-outline-info rounded-pill m-1'> <i class="devicon-linux-plain me-2"></i> {typedWords[17]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'> <i class="devicon-apple-original me-2"></i>{typedWords[18]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'><i class="devicon-ubuntu-plain me-2"></i>{typedWords[19]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'><i class="devicon-windows8-original me-2"></i>{typedWords[20]}</button>
        </div>

        <h5 className='mt-4'>{typedWords[21]}</h5>
        <div className='d-flex justify-content-start'>
          <button className='btn btn-outline-info rounded-pill m-1'> 
            <i class="devicon-photoshop-plain me-2"></i>
          {typedWords[22]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'> 
            <i class="devicon-illustrator-plain me-2"></i>
          {typedWords[23]}</button>
          <button className='btn btn-outline-info rounded-pill m-1'>
            <i class="devicon-figma-plain me-2"></i>
          {typedWords[24]}</button>
        </div>

      
        <div className='d-flex justify-content-center'>
          {<button className='btn btn-primary btn-lg mt-5' onClick={downloadResume}>{typedWords[25]}</button>}
        </div> 

      </div>
    </div>
  );
};


export default Resume;
