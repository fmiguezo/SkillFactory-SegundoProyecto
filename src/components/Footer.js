import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faBehanceSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="linksFooter">
        <a href="https://github.com/fmiguezo" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="linksIcons" icon={faGithub} />
        </a>
        <a href="https://www.behance.net/florenciamiguez" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="linksIcons" icon={faBehanceSquare} />
        </a>
        <a href="https://www.linkedin.com/in/florencia-miguez-oliverio/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon className="linksIcons" icon={faLinkedin} />
        </a>
      </div>
      <div className="footerText">
        <p>Florencia Miguez 2022 &copy; - SkillFactory React</p>
      </div>
    </div>
  );
};

export default Footer;
