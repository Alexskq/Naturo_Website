"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Lato } from "next/font/google";
import { SubmitHandler, useForm } from "react-hook-form";

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

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:anais.carlier@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className={`${lato.variable} font-sans h-screen flex relative flex-col text-center md:text-left max-w-7xl justify-center mx-auto items-center mb-4`}
    >
      {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3> */}

      <h4 className="text-4xl font-semibold mb-5">
        Contact
        {/* <span className="decoration-[#F7AB0A]/50 underline">text2</span> */}
      </h4>
      <div className="flex flex-col justify-center gap-8 md:flex-row md:mt-2 items-center  mb-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Nom"
              type="text"
              className="contactInput bg-gray-200"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput bg-gray-200"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Sujet"
            className="contactInput bg-gray-200"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput bg-gray-200"
          />
          <button
            type="submit"
            className="bg-[var(--color-primary)] py-5 px-10 rounded-md text-white font-bold text-lg"
          >
            Envoyer
          </button>
        </form>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7  text-[#979F77]" />
            <p className="text-2xl">06 32 86 42 91</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 text-[#979F77]" />
            <p className="text-2xl">Hordain</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 text-[#979F77]" />
            <p className="text-2xl">anais.carlier@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
