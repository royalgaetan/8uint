import React from "react";
import ContactForm from "@/components/global/contact_form";
import { DMSerifText } from "@/lib/fonts";

const Contact = () => {
  return (
    <>
      <div className="mx-28 mb-24 max-md:mb-0 border-t-[1px] border-neutral-300"></div>

      <div
        id="contact"
        className="px-7 py-24 mb-28 flex flex-1 max-sm:flex-col-reverse max-md:gap-14 gap-20 justify-center items-start"
      >
        <div className="w-1/3 flex max-sm:w-full">
          <ContactForm />
        </div>

        <div className="flex flex-col justify-center items-center w-[35%] max-md:w-[40%] max-sm:w-full">
          <h2
            className={`${DMSerifText.className} text-[#333333] text-5xl mb-3 max-md:text-4xl text-center`}
          >
            Get in touch
          </h2>
          <hr className="h-3 w-36 bg-[#333333] max-md:w-24" />

          <p className="text-sm font-thin tracking-wide mt-8 text-center">
            We welcome diverse collaborations, whether to bring a project to
            life or form a partnership. Feel free to fill out this contact form,
            and we’ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
