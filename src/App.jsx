import './App.css'
import v from './55859-504238916_small.mp4'
import $ from 'jquery';
import Home from './component/home';
import About from './component/about';
import Contect from './component/contact';
import Skill from './component/skill';
import Project from './component/project';
import Project2 from './component/project2';
import Project3 from './component/project3';


const App = () => {

  // const an = () =>
  // {
  //   $('.hide').slideUp(2000); 
  // }
  


  return (
    <>
      {/* <div className='hide' style={{ width: '100%', height: '100vh' }}>

        <video autoPlay muted loop 
          style={{ position: 'absolute', zIndex: '-3', width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src={v} />
        </video>
        <div className='hide2'><h2 className='hidea'>Parallax Website</h2>
      <button className='hideb' onClick={()=>an()}>Sonawat</button>
        </div>
         </div>
     */}

    <Home />
    <About />
    <Skill />
    <div className="pproas" style={{width:'100%',padding:'10px'}}>
    <h2 class="title" id='title5'>
    Project</h2>
      <div className='tibotto' style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',height:'360px',gap:'40px'}}>
         <div style={{flex:'300px'}}>
    <Project />
    </div>
    <div style={{flex:'300px'}}>
    <Project3 />
    </div>
    <div style={{flex:'300px'}}>
    <Project2 />
    </div>
      </div>
    </div>
    <Contect />
    </>
  )
}

export default App
