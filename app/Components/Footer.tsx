import { socialMedia } from "./data/index";

export const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 bg-[#EEE2D4]" id="contact">
      <div className="flex m-8 md:flex-row flex-col justify-between items-center gap-3">
        <span className="md:text-base text-sm md:font-normal font-light md:ml-3">
          Copyright © 2024 Alex
        </span>
        <span>
          <a href="/mention-legale">Mentions légales</a>
        </span>
        <div className="flex items-center md:gap-3 gap-6">
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
