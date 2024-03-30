import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/ShubhamSingh-28"}
          alt="Founder"
        />

        <h2>Shubham Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://instagram.com/shivam_singh28_" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ShubhamSingh-28" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
