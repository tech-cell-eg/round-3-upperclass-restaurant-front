import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Footer } from '../Footer';
import axios from 'axios';
import { Toast } from 'primereact/toast';
import { useRef } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const toast = useRef<Toast>(null);

  const handleSubmit = async () => {
    try {
      await axios.post('https://round-3-upper-restaurant.digital-vision-solutions.com/api/contact', {
        name,
        email,
        message
      });

      // Successfully Message
      toast.current?.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Message Sent Successfully!',
        life: 3000
      });

    
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to send message. Please try again.',
        life: 3000
      });
    }
  };

  return (
    <main className="p-8 justify-center items-center md:h-screen md:overflow-y-auto bg-black text-white">
      <Toast ref={toast} />
      <div className="w-full max-w-md justify-center items-center">
        <p className="text-default text-lg text-left opacity-[80%] font-Chillax">
          Volutpat maecenas volutpat blandit aliquam etiam erat velit <br />
          scelerisque. Arcu non odio euismod lacinia. <br />Tortor aliquam nulla facilisi cras fermentum odio eu.
        </p>

        <div className="mb-4 mt-10">
          <label className="block text-lg font-bold mb-2 font-chillax opacity-[50%]">Name</label>
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-transparent rounded border border-white opacity-[40%]"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4 mt-10">
          <label className="block text-lg font-bold mb-2 font-chillax opacity-[50%]">Email</label>
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-transparent rounded border border-white opacity-[40%]"
            placeholder="Your email address"
          />
        </div>

        <div className="mb-4 mt-10">
          <label className="block text-lg font-bold mb-2 font-chillax opacity-[50%]">Message</label>
          <InputTextarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 bg-transparent rounded border border-white opacity-[40%]"
            placeholder="Your message"
            rows={5}
          />
        </div>

        <Button
          label="SEND MESSAGE"
          onClick={handleSubmit}
          className="w-full p-3 text-text_inverse bg-bg_primary cursor-pointer border-none rounded-full"
        />
      </div>

      <Footer />
    </main>
  );
};

export default ContactForm;
