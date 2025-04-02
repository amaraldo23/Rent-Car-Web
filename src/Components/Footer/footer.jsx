import { DialogContent } from "@mui/material";
import './footer.css'; 
import apple from '../../assets/Appleicone.png';

const Footer = () => {
    return(
        <div className="footer"> 
            <div className="footer-card">
                    <div className="first-tabel">
                        <h6> Company</h6>
                        <ul className="first-ul">
                            <li>
                            <a className="button-table" href='/about'> About </a>      
                            </li>
                            <li>
                            <a className="button-table" href='/about'> Bloge </a>    
                            </li>
                            <li>
                            <a className="button-table" href='/'>Top4Cars </a>    
                            </li>
                        </ul>
                    </div>
                    <div className="second-tabel">
                        <h6> Contact</h6>
                        <ul className="second-ul">
                            <li>
                            <a>About</a>        
                            </li>
                            <li>
                            <a>Careers</a>        
                            </li>
                            <li>
                            <a>Mobile</a>        
                            </li>
                            <li>
                            <a>Blog</a>        
                            </li>
                        </ul>
                    </div>
                    <div className="triple-tabel">
                        <h6> More</h6>
                        <img className='appleicone' src={apple}/>
                    </div>
            </div>
        </div>
    )
}

export default Footer;