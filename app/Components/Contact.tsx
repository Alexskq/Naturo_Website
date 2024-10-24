"use client";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Clock4, Copy, CopyCheck } from "lucide-react";
import { Lato } from "next/font/google";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { SubmitHandler, useForm } from "react-hook-form";
import MagicButton from "./MagicButton";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
  variable: "--font-lato",
});

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// type Props = {};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();

  const [copied, setCopied] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);

  // const [windowSize, setWindowSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // });

  // const handleResize = () => {
  //   setWindowSize({
  //     width: window.innerWidth,
  //     height: window.innerHeight,
  //   });
  // };
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const button = document.getElementById("magic-button");
    if (button) {
      setButtonSize({ width: button.offsetWidth, height: button.offsetHeight });
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("anaiscarlier.naturopathe@gmail.com");
    setCopied(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:anaiscarlier.naturopathe@gmail.com?subject=${formData.subject}&body=Bonjour, Je suis ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      id="contact"
      className={`${lato.variable} font-sans h-full flex relative flex-col text-center md:mx-auto md:text-left justify-center items-center mb-4`}
    >
      {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3> */}

      <h1 className="text-2xl font-bold text-white bg-[#979F77] text-center py-3 px-4 rounded-md mb-3 md:mb-5">
        Contact
      </h1>
      <div className="flex flex-col justify-center md:flex-row md:justify-between gap-8 md:mt-2 items-center  my-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nom"
              type="text"
              className="contactInput bg-gray-200 p-2 text-gray-800 rounded-xl"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput bg-gray-200 p-2 rounded-xl"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Sujet"
            className="contactInput bg-gray-200 p-2 rounded-xl"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput bg-gray-200 p-2 rounded-xl"
            rows={5}
          />
          <button
            type="submit"
            className="bg-[#979F77] py-5 px-10 text-white font-bold text-lg mt-2 rounded-xl"
          >
            Envoyer
          </button>
        </form>
        <div className="space-y-8 bg-[#EEE2D4] h-full w-full flex flex-col justify-around p-4 md:pb-0 rounded-lg text-grey">
          <div className="flex items-center space-x-2 justify-center text-[#979F77]">
            <PhoneIcon className="h-7 w-7" />
            <span className="text-xl">06 32 86 42 91</span>
          </div>
          <div className="flex items-center space-x-2 justify-center text-[#979F77]">
            <Clock4 className="h-7 w-7 " />
            <span className="text-xl">Du lundi au vendredi</span>
          </div>

          <div className="flex items-center space-x-2 justify-center text-[#979F77]">
            <MapPinIcon className="h-7 w-7 " />
            <span className="text-xl">Hordain</span>
          </div>

          {/* <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#979F77]" />
            <span className="text-xl">anaiscarlier.naturopathe@gmail.com</span>
          </div> */}

          <div className="relative inline-block" id="magic-button">
            {showConfetti && (
              <Confetti
                numberOfPieces={100}
                width={buttonSize.width}
                height={buttonSize.height}

                // drawShape={(ctx) => {
                //   ctx.beginPath();
                //   for (let i = 0; i < 22; i++) {
                //     const angle = 0.2 * i;
                //     const x = (0.2 + 1.5 * angle) * Math.cos(angle);
                //     const y = (0.2 + 1.5 * angle) * Math.sin(angle);
                //     ctx.lineTo(x, y);
                //   }
                //   ctx.stroke();
                //   ctx.closePath();
                // }}
              />
            )}
            <MagicButton
              title={copied ? "Email copied" : "Copy my email"}
              icon={copied ? <CopyCheck /> : <Copy />}
              position="left"
              otherClasses="!bg-[#979F77] !text-white !px-7 md:px-0"
              handleClick={handleCopy}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
