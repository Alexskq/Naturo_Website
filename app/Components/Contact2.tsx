"use client";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Clock4, Copy, CopyCheck } from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { SubmitHandler, useForm } from "react-hook-form";
import MagicButton from "./MagicButton";

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
    <div className="mt-2 ">
      <h1 className="text-2xl font-bold text-white bg-[#979F77] text-center p-3 w-48 mx-auto rounded-md mb-8 md:mb-10">
        Contact
      </h1>
      <div className="card lg:card-side bg-white shadow-xl mb-6 h-full  md:h-[70%] w-[90%] md:w-[80%] mx-auto pt-7 md:py-12 md:px-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 md:w-[70%] md:grow mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nom"
              type="text"
              className="contactInput bg-gray-200 p-2 text-gray-800 rounded-xl md:w-[40%]"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput bg-gray-200 p-2 rounded-xl md:grow"
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
        <div className="card-body w-[70%] md:w-[50%]  justify-between md:justify-around items-center  md:gap-6 md:py-0 mx-auto">
          <div className="flex items-center space-x-2 justify-center text-slate-400">
            <PhoneIcon className="h-7 w-7 text-[#979F77]" />
            <span className="text-xl">06 32 86 42 91</span>
          </div>
          <div className="flex items-center space-x-2 justify-center text-slate-400">
            <Clock4 className="h-7 w-7 text-[#979F77]" />
            <span className="text-xl">Du lundi au vendredi</span>
          </div>

          <div className="flex items-center space-x-2 justify-center text-slate-400">
            <MapPinIcon className="h-7 w-7 text-[#979F77]" />
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
