import im1 from './images/html.png'
import im2 from './images/css3.png'
import im3 from './images/java-script.png'
import im4 from './images/bootstrap.png'
import im5 from './images/react.webp'
import im6 from './images/c++.webp'
import im7 from './images/java.webp'
import './skill.css'
const Skill = () =>{
    return(
        <>
              <h2 class="title" id='title2'>My Skills</h2>
        <section id="skills">
      <div className="skillcardcontainer">
        <div className="skillcard">
          <h1>Frontend</h1>
          <div className="skill_details">
            <img src={im1} alt="" />
            <h2>HTML</h2>
          </div>
          <div className="skill_details">
            <img src={im2} alt="" />
            <h2>CSS</h2>
          </div>
          <div className="skill_details">
            <img src={im3} alt="" />
            <h2>javaScript</h2>
          </div>
          <div className="skill_details">
            <img src={im4} alt="" />
            <h2>Bootstrap</h2>
          </div>
          <div className="skill_details">
            <img src={im5} alt="" />
            <h2>React js</h2>
          </div>
        </div>
        <div className="skillcard">
          <h1>Backend</h1>
          <div className="skill_details">
            <img style={{backgroundColor:'blueviolet'}} src="https://www.php.net/images/logos/php-logo.svg" alt="" />
            <h2>PHP</h2>
          </div>
          <br/><br/>
          <h1>Database</h1>
          
          <div className="skill_details">
            <img style={{backgroundColor:'red'}} src="data:image/png;base64,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" alt="" />
            <h2>Mysql</h2>
          </div>
        </div>
        <div className="skillcard">
          <h1>Programming</h1>
          <div className="skill_details">
            <img src={im6} alt="" />
            <h2>C++</h2>
          </div>
          <div className="skill_details">
            <img src={im7} alt="" />
            <h2>Java</h2>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Skill