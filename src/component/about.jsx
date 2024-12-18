import './about.css'
import im1 from './images/myphoto.jfif'
import im2 from './images/myresu.jpg'
const About = () =>{
    
    return(
        <>
          <h2 class="title" id='title1'>
          About</h2>
    {/* <!-- about section start --> */}
    <section class="about" id="about">
        <div class="max-width">
          
            <div class="about-content" style={{display:'flex',flexWrap:'wrap'}}>
                <div class="column left" style={{flex:'200px'}}>
                    <img style={{}} src={im1}/>
                </div>
                <div class="column right" >
                    <div class="text">
                        About Us
                        <span class="typing-2"></span>
                    </div>
                    <p>
                    Hello! I’m [Aniket Sonawat], a passionate web developer
                     with a Bachelor’s degree in Computer Applications
                      (BCA). Over the past few years, I’ve honed my
                       skills in front-end development, specializing
                        in technologies such as HTML, CSS, JavaScript,
                         Bootstrap, and React.
                    </p>
                    <p>
                    I’m excited to continue my learning journey in web
                     development, exploring new frameworks and technologies.
                      My goal is to create innovative and impactful web
                       applications that enhance user experience.<br/>
        Thank you for visiting my portfolio! Feel 
        free to connect with me on LinkedIn or Email.
                    </p>
                    <a href={im2} className='acrim' target="_blank">
                        More Details
                    </a>
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

export default About