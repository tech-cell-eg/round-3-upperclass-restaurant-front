import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../Footer";
import "./Book.css";

const BookContent = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<number | null>(2);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [showCancel, setShowCancel] = useState(false);
  const [tableToCancel, setTableToCancel] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleBooking = async () => {
    if (!name || !guests || !date || !time) {
      setMessage("❗ Please fill in all fields.");
      return;
    }

    if (date.getDay() === 1) {
      setMessage("🚫 Sorry, we are closed on Mondays.");
      return;
    }

    const min = getMinTime(date);
    const max = getMaxTime(date);

    if (time && min && max && (time < min || time > max)) {
      setMessage(
        `⏰ Please book within working hours.\n\n✅ Tue–Fri: 4PM to 8PM\n✅ Sat–Sun: 5PM to 11PM\n❌ Closed on Mondays`
      );
      return;
    }

    const formattedDate = date
      ? `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}/${date.getFullYear()}`
      : "";

    const formattedTime = time?.toTimeString().split(" ")[0].slice(0, 5);

    try {
      setLoading(true);
      const response = await axios.post(
        "https://round-3-upper-restaurant.digital-vision-solutions.com/api/tables/create",
        {
          name,
          guest_number: guests,
          date: formattedDate,
          time: formattedTime,
        }
      );

      if (response.data.status) {
        setMessage(
          "✅ Table booked successfully! Your booking ID is: " +
            response?.data?.data?.booking_id
        );
        setName("");
        setGuests(2);
        setDate(null);
        setTime(null);
      } else {
        setMessage("❌ Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      setMessage("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const handleCancelBooking = async () => {
    if (!tableToCancel) {
      setMessage("❗ Please enter your booking ID to cancel.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://round-3-upper-restaurant.digital-vision-solutions.com/api/tables/delete",
        { booking_id: tableToCancel }
      );
      
      if (response.data.status) {
        setMessage("✅ Booking canceled successfully.");
      } else {
        setMessage("❌ Cancelation failed. Please check your booking ID.");
      }
    } catch (error) {
      console.error("Cancelation error:", error);
      setMessage("❌ Something went wrong while canceling. Try again later.");
    } finally {
      setLoading(false);
      setShowCancel(false);
      setTableToCancel("");
    }
  };

  const getMinTime = (selectedDate: Date | null) => {
    if (!selectedDate) return null;
    const day = selectedDate.getDay();
    const min = new Date();
    min.setSeconds(0);
    min.setMilliseconds(0);
    if ([2, 3, 4, 5].includes(day)) min.setHours(16, 0); // Tue-Fri: 4 PM
    else if ([0, 6].includes(day)) min.setHours(17, 0); // Sun/Sat: 5 PM
    else return null;
    return min;
  };

  const getMaxTime = (selectedDate: Date | null) => {
    if (!selectedDate) return null;
    const day = selectedDate.getDay();
    const max = new Date();
    max.setSeconds(0);
    max.setMilliseconds(0);
    if ([2, 3, 4, 5].includes(day)) max.setHours(20, 0); // Tue-Fri: 8 PM
    else if ([0, 6].includes(day)) max.setHours(23, 0); // Sun/Sat: 11 PM
    else return null;
    return max;
  };

  useEffect(() => {
    if (date?.getDay() === 1) {
      setMessage("📅 Sorry, we are closed on Mondays.");
    }
  }, [date]);

  return (
    <div className="py-16 md:h-screen md:overflow-y-auto px-6 md:px-20 text-white font-chillax bg-[#050505] w-full h-full ">
      <h2 className="text-4xl font-semibold mb-4">Book a table</h2>
      <p className="text-lg md:text-xl text-white/50 font-medium mb-12 max-w-xl leading-relaxed">
        Volutpat maecenas volutpat blandit aliquam etiam erat velit
        scelerisque...
      </p>

      <div className="space-y-10 max-w-xl w-full">
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name
          </label>
          <InputText
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-4 !bg-transparent !text-white border border-white/30 rounded-lg"
          />
        </div>

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
              dateFormat="yy-mm-dd"
              minDate={new Date()}
              disabledDays={[1]} // Monday = 1
              readOnlyInput
            />
          </div>

          <div className="flex-1">
            <label htmlFor="time" className="block text-sm mb-2">
              Time
            </label>
            <Calendar
  {...({
    id: "time",
    value: time,
    onChange: (e: any) => setTime(e.value),
    showTime: true,
    hourFormat: "24",
    timeOnly: true,
    placeholder: "Pick a time",
    inputClassName: "!bg-transparent !text-white",
    className: "w-full p-4 border border-white/30 rounded-lg",
    minTime: getMinTime(date),
    maxTime: getMaxTime(date),
    readOnlyInput: true,
  } as any)}
/>

          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            label={loading ? "BOOKING..." : "BOOK A TABLE"}
            onClick={handleBooking}
            disabled={loading}
            className="bg-text_primary text-black px-10 py-3 rounded-full hover:bg-text_primary  tracking-wider  shadow-md"
          />

          <Button
            label="Cancel Table"
            onClick={() => setShowCancel(true)}
            className="border cancel-btn border-white text-white px-10 py-3 rounded-full hover:bg-white/10 transition"
          />
        </div>

        {message && (
          <p className="text-center mt-4 text-lg font-medium text-yellow-400">
            {message}
          </p>
        )}
      </div>

      <Dialog
        header="Cancel Table"
        visible={showCancel}
        onHide={() => setShowCancel(false)}
        className="rounded-lg"
        style={{ width: "25rem" }}
      >
        <div className="space-y-4">
          <label htmlFor="tableToCancel" className="text-sm font-medium">
            Enter Booking-id:
          </label>
          <InputText
            id="tableToCancel"
            value={tableToCancel}
            onChange={(e) => setTableToCancel(e.target.value)}
            placeholder="e.g. 123456"
            className="w-full cancel-input"
          />
          <Button
            label="Confirm Cancelation"
            className="bg-text_primary hover:bg-[#e1ad5f] text-white font-semibold py-4 rounded-full w-full"
            onClick={handleCancelBooking}
          />
        </div>
      </Dialog>

      <Footer />
    </div>
  );
};

export default BookContent;
