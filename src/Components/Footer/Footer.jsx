import { BsInstagram, BsTelegram, BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <h1>Mahdiyar-WEB</h1>
      <div className={styles.linkContainer}>
        <a target="_blank" href="https://t.me/mahdiyarMN">
          <BsTelegram />
        </a>
        <a target="_blank" href="https://www.instagram.com/mahdiyar_xd">
          <BsInstagram />
        </a>
        <a target="_blank" href="https://github.com/Mahdiyar-WEB">
          <BsGithub />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/mahdiyar-marvi-93731a222/">
          <BsLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
