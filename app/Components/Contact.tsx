"use client";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Copy, CopyCheck } from "lucide-react";
import { Lato } from "next/font/google";
import { useState } from "react";
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

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const [copied, setCopied] = useState(false);

  const [showConfetti, setShowConfetti] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("anaiscarlier.naturopathe@gmail.com");
    setCopied(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  };

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:anaiscarlier.naturopathe@gmail.com?subject=${formData.subject}&body=Bonjour, Je suis ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      id="contact"
      className={`${lato.variable} font-sans h-full flex relative flex-col text-center md:text-left w-full justify-center mx-auto items-center mb-4`}
    >
      {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3> */}

      <h1 className="text-2xl font-bold text-white bg-[#979F77] text-center py-3 px-4 rounded-md mb-3 md:mb-5">
        Contact
        {/* <span className="decoration-[#F7AB0A]/50 underline">text2</span> */}
      </h1>
      <div className="flex flex-col justify-center gap-8 md:flex-row md:mt-2 items-center  my-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nom"
              type="text"
              className="contactInput bg-gray-200 pl-2 text-gray-800"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput bg-gray-200 pl-2"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Sujet"
            className="contactInput bg-gray-200 pl-2"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput bg-gray-200 pl-2"
          />
          <button
            type="submit"
            className="bg-[#979F77] py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Envoyer
          </button>
        </form>
        <div className="space-y-10">
          <div className="flex items-center space-x-2 justify-center">
            <PhoneIcon className="h-7 w-7  text-[#979F77]" />
            <span className="text-2xl">06 32 86 42 91</span>
          </div>

          <div className="flex items-center space-x-2 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#979F77]" />
            <span className="text-2xl">Hordain</span>
          </div>

          {/* <div className="flex items-center space-x-2 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#979F77]" />
            <span className="text-xl">anaiscarlier.naturopathe@gmail.com</span>
          </div> */}
          {/* 
            <Lottie
              options={{
                loop: copied,
                autoplay: copied,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
            />*/}
          <div>
            {showConfetti && <Confetti />}
            <MagicButton
              title={copied ? "Email copied" : "Copy my email"}
              icon={copied ? <CopyCheck /> : <Copy />}
              position="left"
              otherClasses="!bg-[#161a31] z-20"
              handleClick={handleCopy}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
