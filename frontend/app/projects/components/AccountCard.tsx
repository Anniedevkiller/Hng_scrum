"use client";

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
    <div className="bg-neutral-01 rounded-2xl border border-solid border-bg-[#DEE2E6] min-h-[348px] h-full sm:min-h-[348px] w-[511px] sm:w-full lg:mx-auto flex flex-col justify-around items-center py-4 px-4">
      <div className="h-[2px] bg-primary text-primary mb-2 w-full relative flex justify-center items-center">
        <div className="absolute bg-neutral-01 p-1 rounded-full">
          <Info />
        </div>
      </div>

      <h3 className="text-2xl text-primary font-bold font-title">Our Donation Account</h3>

      <p className="text-xl font-bold font-title">Bank of XXGHFGH</p>

      <p className="text-xl font-normal font-title">Account Name: Monika Kindergarten Förderverein.</p>

      <p className="text-xl font-normal font-title">Account Number: {account}</p>

      <button className="btn btn-primary" onClick={handleCopy}>
        Copy Number
      </button>
    </div>
  );
};

export default AccountCard;
