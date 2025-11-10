import imageHeroDesktop from "/images/image-hero-desktop.webp";
import imageHeroMobile from "/images/image-hero-mobile.webp";
import imageHeroTablet from "/images/image-hero-tablet.webp";

import imageNotAverageDesktop from "/images/image-not-average-desktop.webp";
import imageNotAverageMobile from "/images/image-not-average-mobile.webp";
import imageNotAverageTablet from "/images/image-not-average-tablet.webp";

import imageReadTogetherDesktop from "/images/image-read-together-desktop.webp";
import imageReadTogetherMobile from "/images/image-read-together-mobile.webp";
import imageReadTogetherTablet from "/images/image-read-together-tablet.webp";

interface PictureName {
  name: "hero" | "not-average" | "read-together";
}

interface PictureProps extends PictureName {
  alt: string;
  srcDesktop: string;
  srcMobile: string;
  srcTablet: string;
}

export default function Picture({ name }: PictureName) {
  const pictures: PictureProps[] = [
    {
      name: "hero",
      alt: "A group of people reading books together. All are focused on the contents of their books.",
      srcDesktop: imageHeroDesktop,
      srcMobile: imageHeroMobile,
      srcTablet: imageHeroTablet,
    },
    {
      name: "not-average",
      alt: "A group of people laughing together while reading books.",
      srcDesktop: imageNotAverageDesktop,
      srcMobile: imageNotAverageMobile,
      srcTablet: imageNotAverageTablet,
    },
    {
      name: "read-together",
      alt: "A group of people engaged in vigorous discussion about a book.",
      srcDesktop: imageReadTogetherDesktop,
      srcMobile: imageReadTogetherMobile,
      srcTablet: imageReadTogetherTablet,
    },
  ];

  let chosen_picture = pictures.find((picture) => picture.name === name);

  return (
    <picture>
      <source
        srcSet={chosen_picture?.srcDesktop}
        media="(min-width: calc(1234 / 16 * 1rem))"
      />

      <source
        srcSet={chosen_picture?.srcTablet}
        media="(min-width: calc(768 / 16 * 1rem))"
      />

      <img src={chosen_picture?.srcMobile} alt={chosen_picture?.alt} />
    </picture>
  );
}
