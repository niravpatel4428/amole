import React from "react";
import { Link } from "react-router-dom";
import contact from "../images/contact.svg";
import email from "../images/email.svg";

const CustomerCare = () => {
  const contactInfo = [
    {
      id: 1,
      icon: email,
      alt: "email",
      link: "mailto:care@jambobet.co.de",
      text: "care@jambobet.co.de",
    },
    {
      id: 2,
      icon: contact,
      alt: "contact",
      link: "tel:+254719034034",
      text: "+254 719 034 034",
    },
  ];
  return (
    <>
      <div className="rounded-[7px] bg-[#0A3B3A] mt-3 s18:mt-[20px]">
        <h3 className="p-3 s18:p-5 text-center text-white text-sm md:text-base s18:text-[18px] font-medium leading-[100%] rounded-[7px_7px_0px_0px] border border-solid border-lightwhiteborder bg-[#136459]">
          Customer Care
        </h3>
        <div className="p-[12px_20px] s16:p-[16px_28px] s18:p-[15px_35px]">
          <p className="text-center text-white text-sm font-normal leading-[128%]">
            We offer 24/7 customer care attention to Jambobet players
          </p>
          <ul className="flex flex-col gap-[12px] mt-3 s18:mt-5">
            {contactInfo.map((item) => (
              <li
                key={item.id}
                className="flex flex-col items-center gap-[5px] s18:gap-[9px]"
              >
                <img src={item.icon} alt={item.alt} />
                <Link
                  to={item.link}
                  className="text-white hover:text-yellow transition-all duration-[0.3s] text-sm s18:text-[18px] font-normal leading-[100%]"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CustomerCare;
