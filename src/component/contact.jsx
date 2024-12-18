import './contect.css'
const Contect = () =>{
    return(
        <>
       <h2 class="title" id='title3'>Contact me</h2>
    <section class="contact" id="contact">
   
        <div class="max-width">
            <div class="contact-content" style={{display:'flex',flexWrap:'wrap'}}>
            <div className='contectFlex' style={{flex:'350px'}}>
                
                <div class="column left" style={{flex:'350px'}}>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Aniket Sonawat</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Akodara</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-phone"></i>
                            <div class="info">
                                <div class="head">Phone</div>
                                <div class="sub-title">9669379729</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">
                                    aniketsonawat709@gmail.com
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div class="column right" style={{flex:'200'}}>
                    <div class="text">Message me</div>
                    <form action="https://formspree.io/f/mldrqznd"
  method="POST">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" name="username" required />
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" name="email" required />
                            </div>
                        </div>
                        <div class="field subject">
                            <input type="text" placeholder="Subject" name="subject" required />
                        </div>
                        <div class="field textarea">
                            <textarea name="message" id="" cols="30" rows="10" 
                                placeholder="Describe Query.."
                                required></textarea>
                        </div>
                        <div class="button">
                            <button type="submit" 
                                onclick="alert('Thanks for Submiting')">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- footer section start from here --> */}
    <footer>
        <div class="socialIcons">
            <a href="#" target="_blank">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="#" target="_blank">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
        <span>
        <i class="fas fa-heart"></i> 
            Created by  
            <a href="#">
               @niket Sonawat
            </a>
            <i class="fas fa-heart"></i> 
           
        </span>
    </footer>
        </>
    )
}

export default Contect