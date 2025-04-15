import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Footer } from '../Footer';

const ContactForm: React.FC = () => {
  return (
    <main className="p-8 justify-center items-center md:h-screen md:overflow-y-auto bg-black text-white">
      <div className="w-full max-w-md justify-center items-center">
        <p className="text-default text-lg  text-left opacity-[80%] font-Chillax">
          Volutpat maecenas volutpat blandit aliquam etiam erat velit <br/>
          scelerisque. Arcu non odio euismod lacinia. <br />Tortor aliquam nulla facilisi cras fermentum odio eu.
        </p>

        <div className="mb-4 mt-10">
          <label className="block text-lg font-bold mb-2  font-chillax opacity-[50%]">Name</label>
          <InputText className="w-full p-3 bg-transparent rounded border border-white opacity-[40%]" placeholder="Enter your name" />
        </div>

        <div className="mb-4 mt-10">
          <label className="block text-lg font-bold mb-2  font-chillax opacity-[50%]">Email</label>
          <InputText className="w-full p-3 bg-transparent rounded border border-white opacity-[40%]" placeholder="Your email address" />
        </div>
    
        <div className="mb-4 mt-10">
          <label className="block text-lg font-bold mb-2  font-chillax opacity-[50%]">Message</label>
          <InputTextarea className="w-full p-3 bg-transparent rounded border border-white opacity-[40%]" placeholder="Your message" rows={5} />
        </div>

        <Button label="SEND MESSAGE" className="w-full p-3 text-text_inverse bg-bg_primary cursor-pointer border-none rounded-full" />
      </div>

      <Footer />
    </main>
  );
};

export default ContactForm;