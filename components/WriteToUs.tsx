"use client";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const WriteToUs = () => {
  const [formValue, setFormValue] = useState<any>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const handleSubmit = async () => {
    const res = await axios.post("/api/message", formValue);
    if (res.status == 200) {
      setFormValue({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      toast.success("Message Successfully delivered!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      console.log("Message can't be delivered.");
    }
  };
  const handleInput = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col items-center p-5 border-2 rounded-md shadow-md w-full md:w-3/4 gap-8 ">
      <h2 className="text-2xl font-semibold">Write to Us:</h2>
      <div className="flex flex-col gap-5 w-full px-0 md:px-10 py-5">
        <div className="flex justify-around gap-5 w-full">
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full max-w-xs focus:outline-none"
            name="name"
            onChange={handleInput}
          />
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full max-w-xs focus:outline-none"
            name="email"
            onChange={handleInput}
          />
        </div>
        <div className="flex justify-around gap-5 w-full">
          <input
            type="tel"
            placeholder="Your phone"
            className="input input-bordered w-full max-w-xs focus:outline-none"
            name="phone"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full max-w-xs focus:outline-none"
            name="subject"
            onChange={handleInput}
          />
        </div>
        <div className="flex justify-around w-full">
          <textarea
            name="message"
            placeholder="Your Message"
            id=""
            cols={8}
            className="border-[2px] rounded-md w-10/12 p-3 focus:outline-none resize-none"
            style={{ scrollbarWidth: "none" }}
            onChange={handleInput}
          ></textarea>
        </div>
        <center>
          <button
            className="w-fit py-3 px-5 text-white bg-red-500 text-base font-medium text-center "
            disabled={
              !formValue.name ||
              !formValue.email ||
              !formValue.phone ||
              !formValue.subject ||
              !formValue.message
            }
            onClick={handleSubmit}
          >
            Send Message
          </button>
        </center>
      </div>
      <ToastContainer />
    </div>
  );
};

export default WriteToUs;
