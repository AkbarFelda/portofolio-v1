import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeSocial = () => {
  return (
    <Marquee
      className="w-full bg-marquee"
      speed={60}
      gradient={false}
      pauseOnHover={true}
      direction="left"
      autoFill={true}
    >
      <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/icons/Behance Logotype.svg"
          alt="Behance"
          width={285}
          height={109}
          className="svg-filter"
        />
      </a>
      <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/icons/Dribbble Logotype.svg"
          alt="Dribbble"
          width={285}
          height={109}
          className="svg-filter"
        />
      </a>
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/icons/GitHub Logotype.svg"
          alt="GitHub"
          width={285}
          height={109}
          className="svg-filter"
        />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/icons/LinkedInLogotype.svg"
          alt="LinkedIn"
          width={285}
          height={109}
        />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <Image
          src="/assets/icons/Instagram Logotype.svg"
          alt="Instagram"
          width={285}
          height={109}
          className="svg-filter"
        />
      </a>
    </Marquee>
  );
};

export default MarqueeSocial;