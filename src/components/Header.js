import logo from '../images/quiz.webp';
import mobileLogo from '../images/logo.webp';
import '../css/header.css';

export default function Header() {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Sports Quiz Logo" width="70%" />
                </div>
                <div className="links">
                    <li className="hover-anim"><a href="https://sportsquiz.org/" target="_blank" rel="noopener noreferrer">Home</a></li>
                    <li className="hover-anim"><a href="https://sportsquiz.org/blog/" target="_blank" rel="noopener noreferrer">Blog</a></li>
                    <li className="hover-anim"><a href="https://sportsquiz.org/contact/" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
                    <li className="hover-anim"><a href="https://sportsquiz.org/trivia-questions/" target="_blank" rel="noopener noreferrer">Trivia Questions</a></li>
                </div>
                <h2>© Sports Quiz {year}</h2>
            </div>
            <div className="logo mobile">
                <a href="https://sportsquiz.org/" target="_blank" rel="noopener noreferrer"><img src={mobileLogo} alt="Sports Quiz Logo" /></a>
            </div>
        </>
    )
}