import { DialogContent } from "@mui/material";
import './footer.css'; 
import Apple from '../../assets/appleicone.png';
import Androit from '../../assets/androiticone.png';
import { Android } from "@mui/icons-material";

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
                            <a className="button-table" href='/categoryList'> CategoryList </a>    
                            </li>
                            <li>
                            <a className="button-table" href='/'> Top4Cars </a>    
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
                        <img className='appleicone' src={Apple}/>
                        <img className='androiticone' src={Androit}/>
                    </div> 
            </div>
        </div>
    )
}

export default Footer;