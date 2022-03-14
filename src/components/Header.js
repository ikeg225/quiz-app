import logo from '../images/quiz.webp';
import '../css/header.css';

export default function Header() {
    const year = new Date().getFullYear();

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} width="70%" />
            </div>
            <div className="links">
                <li className="hover-anim"><a hrefs="#" target="_blank" rel="noopener noreferrer">Home</a></li>
                <li className="hover-anim"><a hrefs="#" target="_blank" rel="noopener noreferrer">Sports</a></li>
                <li className="hover-anim"><a hrefs="#" target="_blank" rel="noopener noreferrer">Basketball</a></li>
                <li className="hover-anim"><a hrefs="#" target="_blank" rel="noopener noreferrer">Newsletter</a></li>
                <li className="hover-anim"><a hrefs="#" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
            </div>
            <h2>© Sports Quiz {year}</h2>
        </div>
    )
}