import { socialMedia } from "./data/index";

export const Footer = () => {
  return (
    <footer
      className="w-full mb-[100px] pb-10 md:mb-5 bg-amber-800"
      id="contact"
    >
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center ">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Alex
        </p>
        <div className="flex items-center md:gap-3  gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="cursor-pointer flex justify-center items-center mr-5"
            >
              <a href={profile.url}>
                <img
                  src={profile.img}
                  alt={profile.alt}
                  width={40}
                  height={40}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
