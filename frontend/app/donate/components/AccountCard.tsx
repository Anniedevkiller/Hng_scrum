"use client";

import { roboto_init } from "./DonationImpact";
import Info from "@/shared/icons/Info";

const AccountCard = () => {
  const account = "9999999999";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(account);
      alert("Copied");
    } catch (error) {
      alert("Failed. Try again.");
    }
  };

  return (
    <div className=" lg:mx-auto py-4 px-4">
      <div className="h-[1px] bg-white text-white mb-2 w-full relative flex justify-center items-center">
        <div className="absolute bg-[#830703] p-1 rounded-full">
          <Info />
        </div>
      </div>
      <div className="grid gap-3 mt-7 mb-3">
        <h3 className={"text-lg xl_up:text-xl 2xl_up:text-2xl font-bold " + roboto_init.className } >Our Donation Account</h3>

        <p className={"text-base xl_up:text-lg 2xl_up:text-xl font-normal "  + roboto_init.className }>Bank of XXGHFGH</p>

        <p className={"text-base xl_up:text-lg 2xl_up:text-xl font-normal " + roboto_init.className }>Account Name: Monika Kindergarten Förderverein.</p>

        <p className={"text-base xl_up:text-lg 2xl_up:text-xl font-normal " + roboto_init.className }>Account Number: {account}</p>
      </div>
      <button className="btn btn-white" onClick={handleCopy}>
        Copy Number
      </button>
    </div>
  );
};

export default AccountCard;
