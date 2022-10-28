import zuriInternshipLogo from '../img/Zuri.Internship_Logo.svg';
import i4g from "../img/I4G.png";

export default function Footer() {
  return (
    <footer className='footer' >
      <div className="footer___wrapper">
        <img src={zuriInternshipLogo} alt="Zuri Internship Logo" className='footer__img--left' />
        <p className='footer__text' >HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="Ingressive for Good Logo" className='footer__img--right' />
      </div>
    </footer>
  )
}
