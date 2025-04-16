import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Footer } from "../Footer";
import "./Book.css";

const BookContent = () => {
  const [guests, setGuests] = useState<number | null>(2);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showCancel, setShowCancel] = useState(false);
  const [tableToCancel, setTableToCancel] = useState("");

  return (
    
    <div className="py-16 md:h-screen md:overflow-y-auto px-6 md:px-20 text-white font-chillax bg-[#050505] w-full h-full ">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold mb-4">Book a table</h2>
      <p className="text-lg md:text-xl text-white/50 font-medium mb-12 max-w-xl leading-relaxed">
        Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque.
        Arcu non odio euismod lacinia. Tortor aliquam nulla facilisi cras
        fermentum odio eu.
      </p>

      {/* Form */}
      <div className="space-y-10 max-w-xl w-full">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name
          </label>
          <InputText
            id="name"
            placeholder="Enter your name"
            className="w-full p-4 !bg-transparent !text-white border border-white/30 rounded-lg"
          />
        </div>

        {/* Number of Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm mb-2">
            Number of guests
          </label>
          <InputNumber
            id="guests"
            value={guests}
            onValueChange={(e: any) => setGuests(e.value)}
            inputClassName="!bg-transparent !text-white"
            className="w-full custom-input-number p-4 border border-white/30 rounded-lg"
          />
        </div>

        {/* Date & Time */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="date" className="block text-sm mb-2">
              Date
            </label>
            <Calendar
              id="date"
              value={date}
              onChange={(e: any) => setDate(e.value)}
              placeholder="Pick a date"
              inputClassName="!bg-transparent !text-white"
              className="w-full p-4 border border-white/30 rounded-lg"
              dateFormat="dd.mm.yy"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="time" className="block text-sm mb-2">
              Time
            </label>
            <Calendar
              id="time"
              value={time}
              onChange={(e: any) => setTime(e.value)}
              showTime
              hourFormat="12"
              timeOnly
              placeholder="Pick a time"
              inputClassName="!bg-transparent !text-white"
              className="w-full p-4 border border-white/30 rounded-lg"
            />
          </div>
        </div>

        {/* Submit + Cancel Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            label="BOOK A TABLE"
            className="bg-text_primary text-black px-10 py-3 rounded-full hover:bg-text_primary font-semibold tracking-wider uppercase shadow-md"
          />
          <Button
            label="Cancel Table"
            onClick={() => setShowCancel(true)}
            className="border cancel-btn  border-white text-white px-10 py-3 rounded-full hover:bg-white/10 transition"
          />
        </div>
      </div>

      {/* Cancel Table Modal */}
      <Dialog
        header="Cancel Table"
        visible={showCancel}
        onHide={() => setShowCancel(false)}
        className="rounded-lg"
        style={{ width: "25rem" }}
      >
        <div className="space-y-4">
          <label htmlFor="tableToCancel" className="text-sm font-medium">
            Enter Table Number:
          </label>
          <InputText
            id="tableToCancel"
            value={tableToCancel}
            onChange={(e) => setTableToCancel(e.target.value)}
            placeholder="e.g. 12"
            className="w-full cancel-input"
          />
          <Button
            label="Confirm Cancelation"
            className="bg-text_primary hover:bg-[#e1ad5f] text-white font-semibold py-4 rounded-full w-full  "
            onClick={() => {
              console.log("Canceled Table:", tableToCancel);
              setShowCancel(false);
            }}
          />
        </div>
      </Dialog>

      <Footer />
    </div>
  );
};

export default BookContent;
