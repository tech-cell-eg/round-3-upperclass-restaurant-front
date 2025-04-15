import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

const Bsidebar = () => {
  return (
    <div className=" py-20 text-white font-bitter bg-black h-full">
      {/* Section Titles */}
      <h2 className="text-text_primary text-3xl mb-2">Book a table</h2>
      <p className="text-xl font-bold mb-10">
        Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.
        Arcu non odio euismod lacinia. Tortor aliquam nulla facilisi cras
        fermentum odio eu.
      </p>

      {/* Form */}
      <div className="space-y-6 max-w-md">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name
          </label>
          <InputText
            id="name"
            placeholder="Enter your name"
            className="w-full p-4 bg-transparent border border-gray-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="number" className="block text-sm mb-2 bg-transparent">
          Number of Guests
          </label>
          <InputNumber
            id="number"
            placeholder="0"
            className="w-full p-4 bg-transparent border border-gray-500"
          />
        </div>


        {/* Submit Button */}
        <Button
          label="BOOK A TABLE"
          className="bg-text_primary text-black px-6 py-3 rounded-lg hover:bg-text_primary"
        />
      </div>
    </div>
  );
};

export default Bsidebar;
