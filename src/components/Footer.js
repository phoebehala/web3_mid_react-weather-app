import React from 'react';
import {Button} from './Button';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to receive the updated information
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-area">
                    <form >
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'> Subscribe</Button>
                    </form>
                </div>
                <h5 className="Copyright">Copyright <i class="far fa-copyright"></i> 2021 Phoebe Yu</h5>
            </section>
            
        </div>
    )
}

export default Footer
