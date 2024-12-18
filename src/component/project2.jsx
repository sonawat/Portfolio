import './project.css';
import im1 from './1727613179743.jpg'; 
const Project2 = () => {
    return (
            <div className="pcard">
                <div className="poutside">
                    <div className="pfront">
                      
                            {/* Uncomment the line below to display the image */}
                            {/* <img src={im1} alt="Cake" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
       <img src={im1} style={{width:'70%',height:'73%',marginLeft:'63px',marginTop:'30px'}} />              
                      
                    </div>
                    <div className="pback"></div>
                </div>

                <div className="pinside">
                <h4 style={{color:'black',textShadow:'1px 1px silver',textDecoration:'underline'}}>IPL Website</h4>
                    <p style={{textAlign:'justify'}}>
                    "I developed an IPL website using PHP and MySQL that provides cricket enthusiasts with comprehensive player statistics, an interactive points table, and highlights from previous matches."

</p>

<a href='https://github.com/sonawat/Ipl' target='_blank'>
<button style={{padding:'5px',color:'aliceblue',backgroundColor:'crimson',
    border:'none',borderRadius:'10px'
 }}>Go to Code</button></a>
                </div>
            </div>
    );
}

export default Project2;

