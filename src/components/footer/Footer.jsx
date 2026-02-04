import { NavLink } from 'react-router-dom';
import classes from './Footer.module.css';

export default function Footer() {
    return <footer className={classes.footer}>
        <div className={classes.footerContainer}>
            <div className={classes.footerGrid}>
                <div className={classes.footerCol}>
                    <div className={classes.footerLogo}>
                        <span className={classes.logoApex}>APEX</span>
                        <span className={classes.logoGym}>GYM</span>
                    </div>
                    <p className={classes.footerDesc}>Elevate your fitness to the apex of performance.</p>
                    <div className={classes.socialLinks}>
                        <NavLink to="#" className={classes.socialLink}>IG</NavLink>
                        <NavLink to="#" className={classes.socialLink}>FB</NavLink>
                        <NavLink to="#" className={classes.socialLink}>TW</NavLink>
                        <NavLink to="#" className={classes.socialLink}>YT</NavLink>
                    </div>
                </div>
                <div className={classes.footerCol}>
                    <h4>Quick Links</h4>
                    <ul className={classes.footerLinks}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/price">Pricing</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className={classes.footerCol}>
                    <h4>Programs</h4>
                    <ul className={classes.footerLinks}>
                        <li><NavLink to="#">Strength Training</NavLink></li>
                        <li><NavLink to="#">Cardio & Conditioning</NavLink></li>
                        <li><NavLink to="#">Yoga & Mobility</NavLink></li>
                        <li><NavLink to="#">Personal Training</NavLink></li>
                    </ul>
                </div>
                <div className={classes.footerCol}>
                    <h4>Contact</h4>
                    <ul className={classes.footerLinks}>
                        <li>123 Fitness Ave, NY 10001</li>
                        <li>info@apexgym.com</li>
                        <li>(555) 123-4567</li>
                        <li>Mon-Sun: 24/7</li>
                    </ul>
                </div>
            </div>
            <div className={classes.footerBottom}>
                <p>&copy; 2025 APEX GYM. All rights reserved.</p>
                <div className={classes.footerLegal}>
                    <NavLink to="#">Privacy Policy</NavLink>
                    <NavLink to="#">Terms of Service</NavLink>
                </div>
            </div>
        </div>
    </footer>
}