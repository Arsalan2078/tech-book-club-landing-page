import image from "/images/logo.svg";

export default function Logo() {
  return (
    <a href="/">
      <img
        src={image}
        alt="Tech Book Club Logo. A dark desaturated blue-ish notepad with a white spine. On the front cover stands an illustration of 3 connected orange dots, 2 are going down and connected to the first."
      />
    </a>
  );
}
