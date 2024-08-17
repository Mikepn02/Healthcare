import React, { useState } from "react";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const linkClasses = (linkName) =>
    `flex items-center space-x-2 px-3 py-2 rounded-md ${
      activeLink === linkName ? "bg-[#01F0D0] rounded-full" : "bg-white"
    }`;

  return (
    <div>
      <nav className="bg-white shadow-lg h-16 flex items-center justify-between px-6 rounded-xl fixed top-0 left-0 w-full z-50">
        <div className="flex items-center">
          <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/TestLogo.svg?alt=media&token=0d033abd-b68e-48d8-8c3b-89a819e65a37" alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="flex space-x-6">
          <div className={linkClasses("Overview")} onClick={() => handleLinkClick("Overview")}>
            <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/home.svg?alt=media&token=2322bea1-94ca-4569-8940-81e437c99701" alt="Overview" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Overview
            </a>
          </div>
          <div className={linkClasses("Patient")} onClick={() => handleLinkClick("Patient")}>
            <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/account.svg?alt=media&token=14941c71-1b8c-4976-9651-a1a0b9455d4c" alt="Patient" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Patient
            </a>
          </div>
          <div className={linkClasses("Schedule")} onClick={() => handleLinkClick("Schedule")}>
            <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/calendar.svg?alt=media&token=6d96a663-635d-4197-911e-eeeffb37e720" alt="Schedule" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Schedule
            </a>
          </div>
          <div className={linkClasses("Messages")} onClick={() => handleLinkClick("Messages")}>
            <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/chat.svg?alt=media&token=bbce8845-35ed-4680-91db-daff8bd4a3b1" alt="Messages" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Messages
            </a>
          </div>
          <div className={linkClasses("Transactions")} onClick={() => handleLinkClick("Transactions")}>
            <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/transaction.svg?alt=media&token=5202d93a-f658-490d-905c-c9d6a9b4b4c3" alt="Transactions" className="h-6 w-6" />
            <a href="#" className="text-gray-800 font-medium">
              Transactions
            </a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <img src="https://firebasestorage.googleapis.com/v0/b/ziba-pay.appspot.com/o/doctor.png?alt=media&token=c1f9ed12-32ec-4275-9a2e-e697f61cc475" alt="Dr. Jose Simons" className="h-10 w-10 rounded-full object-cover" />
          <div className="text-sm">
            <h1 className="font-semibold text-gray-900 text-sm">Dr. Jose Simons</h1>
            <p className="text-gray-600">General Practitioner</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
