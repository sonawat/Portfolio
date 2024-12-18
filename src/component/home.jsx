import './home.css'
import vi1 from './images/183279-870457579_small.mp4'
import vi2 from './images/4972351-hd_720_1366_25fps.mp4'
import im1 from './images/myresu.jpg'

const Home = () =>{

    const toggleMenu = () => {
        const menu = document.getElementById('menu');
        menu.classList.toggle('visible');
    }

    const closeMenu = () => {
        const menu = document.getElementById('menu');
        menu.classList.remove('visible'); // Hide the menu
    }
    return(
        <>

<div id="menu" class="menu1">
{/* <video style={{width:'100%',height:'100%',zIndex:'-1',position:'absolute',objectFit:'cover'}}
 autoPlay muted loop><source src={vi1}/></video> */}
        <h2 style={{backgroundColor: 'blueviolet',color: 'aliceblue',padding: '5px'}}>Menu</h2>
        <ul>
         
<a style={{textDecoration:'none'}} href="#" onClick={()=>closeMenu()}><li className='liab'>Home</li></a>
<a style={{textDecoration:'none'}} href="#title1" onClick={()=>closeMenu()}><li className='liab'>About</li></a>
<a style={{textDecoration:'none'}} href="#title2" onClick={()=>closeMenu()}><li className='liab'>Skill</li></a>
<a style={{textDecoration:'none'}} href="#title5" onClick={()=>closeMenu()}><li className='liab'>Project</li></a>
<a style={{textDecoration:'none'}} href="#title3" onClick={()=>closeMenu()}><li className='liab'>Contact</li></a> 
        </ul>
         <button class="closeb" onClick={()=>closeMenu()}>Close Menu</button> 
    </div>


        
        {/* <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
    </div> */}

    <nav className="navbar">
        <div className="max-width" >
            <div className="logo" style={{float:'left'}}>
                <a href="#">
                    <span>Portfolio</span>
                </a>
            </div>
            <div style={{float:'right'}}>
            <ul className="menu">
                <li>
                    <a href=".navbar" className="menu-btn">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#title1" className="menu-btn">
                        About
                    </a>
                </li>
                <li>
                    <a href="#title2" className="menu-btn">
                        Skill
                    </a>
                </li>
                <li>
                    <a href="#title5" className="menu-btn">
                        Project
                    </a>
                </li>
                <li>
                    <a href="#title3" className="menu-btn">
                        Contact
                    </a>
                </li>
            </ul>
            <div className="menu-btn">
                <span onClick={()=>toggleMenu()}>☰</span>
            </div>
            </div>
        </div>
    </nav>
    <section class="home" id="home">
    <video style={{width:'100%',height:'90%',zIndex:'-1',position:'absolute',objectFit:'cover'}}
 autoPlay muted loop><source src={vi1}/></video>
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">
                    Hello, It's Me
                </div>
                <div class="text-2">
                    Aniket Sonawat
                </div>
                <div class="text-3">
                    And I'am a Webdeveloper
                    <span class="typing"></span>
                </div>
                <div class="bcrim">
<a href="https://github.com/sonawat" target='_blank'><i className='bx bxl-github'></i></a>
<a href="https://www.instagram.com/son_of_mukesh_sonawat/?next=%2F&hl=en" target='_blank'><i className='bx bxl-instagram' ></i></a>
<a href="https://wa.me/9669379729" target='_blank'><i className='bx bxl-whatsapp' ></i></a>
<a href="https://www.linkedin.com/in/aniket-sonawat-a94803319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i className='bx bxl-linkedin-square' ></i></a>

</div>
                {/* <a href={im1} className='acrim' target="_blank" download> */}
                <a href={im1} className='acrim' target="_blank">
                    Resume
                </a>
            </div>
        </div>
    </section>
        </>
    )
}

export default Home