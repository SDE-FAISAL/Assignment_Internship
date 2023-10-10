import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer>
                <hr/><hr/>
                <p id="footText"> Developed by faisal</p>
                <div id="footMain">
                    <div class="footDiv">
                        <p>ABOUT ZOMATO</p>
                        <p>FOR RESTAURANTS</p>
                    </div>
                    <div class="footDiv">
                        <p>LEARN MORE</p>
                        <p>FOR ENTERPRISES</p>
                    </div>
                    <div class="footDiv noBorder">
                        <p>Terms</p>
                        <p>Work With Us</p>
                    </div>
                </div>
                <hr/>
                <h4>SOCIAL LINKS</h4>
                <div class="social">
                    <a href="https://www.facebook.com/" target="_blank"  rel="noreferrer">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="fb" class="socialIcon"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank"  rel="noreferrer">
                        <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="fb" class="socialIcon"/>
                    </a>
                    <a href="www.facebook.com" target="_blank">
                        <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="fb" class="socialIcon"/>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer