import zuriInternshipLogo from '../img/Zuri.Internship_Logo.svg';
import i4g from "../img/I4G.png";

export default function Footer() {
  return (
    <footer className='footer' >
      <div className="footer__wrapper">
        <a href="https://internship.zuri.team/">
        <img src={zuriInternshipLogo} alt="Zuri Internship Logo" className='footer__img--left' />
        </a>
        <p className='footer__text' >HNG Internship 9 Frontend Task</p>
        <a href="https://ingressive.org/">
        <img src={i4g} alt="Ingressive for Good Logo" className='footer__img--right' />
        </a>
      </div>
    </footer>
  )
}
