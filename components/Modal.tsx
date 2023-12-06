"use client";
import { useContext, useState } from "react";
import CarCard from "./CarCard";
import axios from "axios";
import { SearchDataContext } from "@/context/SearchDataContext";
import { CldUploadButton } from "next-cloudinary";

const Modal = ({ modal, showModal, selectedCar }: any) => {
  const { searchData, setSearchData }: any = useContext(SearchDataContext);
  const [personalDetails, setPersonalDetails] = useState<any>({
    fname: "",
    lname: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    contactNumber: "",
    dlNumber: "",
    dlImage: "",
    aadharNumber: "",
    aadharImage: "",
  });
  const [bookingDetails, setBookingDetails] = useState<any>({
    pickUpLocation: "",
    pickUpDate: searchData.pickUpDate,
    pickUpTime: "",
    dropOffDate: searchData.dropOffDate,
    dropOffTime: "",
  });
  const handlePersonalDetails = (e: any) => {
    const inputValue = e.target.value;
    setPersonalDetails({ ...personalDetails, [e.target.name]: inputValue });
  };
  const handleBooking = (e: any) => {
    const inputValue = e.target.value;
    setBookingDetails({ ...bookingDetails, [e.target.name]: inputValue });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    showModal(false);
    const {
      fname,
      lname,
      address1,
      address2,
      city,
      state,
      contactNumber,
      dlNumber,
      dlImage,
      aadharNumber,
      aadharImage,
    } = personalDetails;
    const { pickUpLocation, pickUpDate, pickUpTime, dropOffDate, dropOffTime } =
      bookingDetails;
    const postData = {
      name: fname + " " + lname,
      address: address1 + " " + address2,
      city,
      state,
      contactNumber,
      aadharNumber,
      aadharImage,
      drivingLicenseNumber: dlNumber,
      drivingLicenseImage: dlImage,
      pickUpLocation,
      pickUpInfo: pickUpDate + "," + pickUpTime,
      dropOffInfo: dropOffDate + "," + dropOffTime,
      vehicleID: selectedCar.id,
    };
    const { data } = await axios.post("/api/booking", postData);
  };
  return (
    <>
      <dialog id="my_modal_5" className={`${modal ? "modal-open" : ""} modal`}>
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => showModal(false)}
            >
              ✕
            </button>
          </form>
          <h2 className="font-semibold text-2xl border-b-2 border-gray-200 pb-2">
            Rent A Car Now !
          </h2>
          <div className="py-8 grid grid-cols-1 md:grid-cols-2">
            <div className="w-10/12 pb-5 justify-self-center">
              {selectedCar && <CarCard car={selectedCar} isModal={true} />}
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h2 className="text-base font-medium text-gray-500">
                  Pick Up Location
                </h2>
                <select
                  className="select select-bordered  w-full max-w-xs md:max-w-full bg-transparent text-sm font-medium border-2 border-gray-300 focus:outline-none focus:border-gray-300"
                  onChange={(e) =>
                    setBookingDetails({
                      ...bookingDetails,
                      pickUpLocation: e.target.value,
                    })
                  }
                >
                  <option
                    disabled
                    selected
                    className="outline-none text-sm font-normal"
                  >
                    PickUp Location?
                  </option>
                  {selectedCar?.pickupLocation.map((curr: any, index: any) => {
                    return (
                      <option className="text-sm" key={index} value={curr}>
                        {curr}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="grid grid-cols-2 justify-center items-center gap-3">
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Pick Up Date
                  </h2>
                  <input
                    type="date"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none "
                    value={searchData.pickUpDate}
                    disabled
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Drop Off Date
                  </h2>
                  <input
                    type="date"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                    value={searchData.dropOffDate}
                    disabled
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 justify-center items-center gap-3">
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Pick Up Time
                  </h2>
                  <input
                    type="time"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                    name="pickUpTime"
                    onChange={handleBooking}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Drop Off Time
                  </h2>
                  <input
                    type="time"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                    name="dropOffTime"
                    onChange={handleBooking}
                  />
                </div>
              </div>
              <div className="divider m-0"></div>
              <div className="flex flex-col gap-3">
                <div className="text-lg font-medium text-black">
                  Personal Details
                </div>
                <div className="grid grid-cols-2 justify-center items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-medium text-gray-500 ">
                      First Name
                    </h2>
                    <input
                      type="text"
                      placeholder="Enter First Name"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none "
                      name="fname"
                      onChange={handlePersonalDetails}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-medium  text-gray-500">
                      Last Name
                    </h2>
                    <input
                      type="text"
                      placeholder="Enter Last Name"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                      name="lname"
                      onChange={handlePersonalDetails}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-base font-medium text-gray-500">
                      Address Line 1
                    </h2>
                    <input
                      type="text"
                      placeholder="Flat No or Building Name"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs md:max-w-full focus:outline-none"
                      name="address1"
                      onChange={handlePersonalDetails}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <h2 className="text-base font-medium text-gray-500">
                      Address Line 2
                    </h2>
                    <input
                      type="text"
                      placeholder="Locality or Village or Sector"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs md:max-w-full focus:outline-none"
                      name="address2"
                      onChange={handlePersonalDetails}
                    />
                  </div>
                  <div className="grid grid-cols-2 justify-center items-center gap-3">
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-medium text-gray-500">
                        City
                      </h2>
                      <input
                        type="text"
                        placeholder="Enter City"
                        className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                        name="city"
                        onChange={handlePersonalDetails}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-base font-medium text-gray-500">
                        State
                      </h2>
                      <input
                        type="text"
                        placeholder="Enter State"
                        className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                        name="state"
                        onChange={handlePersonalDetails}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Contact Number
                  </h2>
                  <input
                    type="tel"
                    max={10}
                    placeholder="Enter your contact number"
                    className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs md:max-w-full focus:outline-none"
                    name="contactNumber"
                    onChange={handlePersonalDetails}
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Driving License
                  </h2>
                  <div className="grid grid-cols-2 justify-center items-center gap-3">
                    <input
                      type="text"
                      placeholder="Driving License Number"
                      className="input text-sm font-normalplaceholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                      name="dlNumber"
                      onChange={handlePersonalDetails}
                    />
                    <CldUploadButton
                      className="file-input text-sm font-normalplaceholder-gray-700 file-input-bordered w-full max-w-xs"
                      options={{ multiple: false }}
                      uploadPreset={
                        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
                      }
                      onUpload={(res: any) =>
                        setPersonalDetails({
                          ...personalDetails,
                          dlImage: res?.info?.secure_url,
                        })
                      }
                    >
                      <span>Upload Driving License</span>
                    </CldUploadButton>
                  </div>
                </div>
                <div className=" flex flex-col gap-1">
                  <h2 className="text-base font-medium text-gray-500">
                    Aadhar Card
                  </h2>
                  <div className="grid grid-cols-2 justify-center items-center gap-3">
                    <input
                      type="text"
                      placeholder="Aadhar Card Number"
                      className="input text-sm font-normal placeholder-gray-700 input-bordered w-full max-w-xs focus:outline-none"
                      name="aadharNumber"
                      onChange={handlePersonalDetails}
                    />
                    <CldUploadButton
                      className="file-input text-sm font-normal placeholder-gray-700 file-input-bordered w-full max-w-xs"
                      options={{ multiple: true }}
                      uploadPreset={
                        process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME
                      }
                      onUpload={(res: any) =>
                        setPersonalDetails({
                          ...personalDetails,
                          aadharImage: res?.info?.secure_url,
                        })
                      }
                    >
                      <span>Upload Aadhar Card</span>
                    </CldUploadButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog" className="flex gap-3">
              <button
                className="btn btn-outline"
                onClick={() => showModal(false)}
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
