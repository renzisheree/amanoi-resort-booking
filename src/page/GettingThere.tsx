import AOS from "aos";
import { useEffect } from "react";

const GettingThere = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h1 data-aos="fade-up" className="text-3xl  italic p-1 font-body mb-10 ">
        Getting to Amanoi
      </h1>

      <div data-aos="fade-up" className="">
        <img
          src="https://www.aman.com/sites/default/files/styles/full_size_extra_large/public/2021-03/Amanoi_Dining-Hero-1.jpg?itok=e3LKDbNf"
          alt="cover"
          className="w-[80vw] mx-auto"
        />
        <p className="text-center w-[60vw] p-10 text-sm italic mx-auto">
          Located a 75-minute drive from Cam Ranh Airport (CXR), Amanoi is
          tucked away within the secluded folds of Unesco’s Núi Chúa National
          Park. Ensuring the most effortless of arrivals, Amanoi’s dedicated
          concierge team is on hand to assist with all travel planning,
          transfers and arrangements.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className=" flex items-start gap-10 justify-center w-full italic pb-10"
      >
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2023-07/amanoi-vietnam-pool-pavilion.jpg?itok=XFVR4_3B"
          alt=""
        />
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2023-06/amanoi_vietnam_ocean_pool_residence.jpg?itok=iuCseRQU"
          alt=""
        />
        <span className="flex flex-col gap-1">
          <h1 className="text-xl font-medium italic ">
            International flights{" "}
          </h1>
          <p className="text-m font-body">
            The nearest airport to Amanoi is Cam Ranh (Nha Trang) Airport - CXR,
            a 75-minute drive away. Direct flights to Cam Ranh Airport (CXR) are
            available from several key Asian cities, including Seoul, Bangkok,
            Hong Kong, Kuala Lumpur and Guangzhou. International travellers from
            further afield in the Americas and Europe can connect to any of
            those cities from their home hubs. <br /> Alternatively, flight
            connections to Cam Ranh are also available from Ho Chi Minh City (65
            minutes), Hanoi (105 minutes) or Danang (65 minutes). Those flying
            direct to Ho Chi Minh City can also travel by car to Amanoi, with a
            journey time of approximately five hours.
          </p>{" "}
          <h1 className="text-xl font-medium italic ">
            Visa and entry requirements
          </h1>
          <p className="text-m font-body ">
            Passport holders from 25 countries can travel to Vietnam visa free.
            Travellers from other countries can obtain a single-entry Vietnam
            E-visa, valid for up to 30 days, in advance. All international
            guests are invited to contact Amanoi’s reservations team should they
            have any questions or queries. The team can also assist with visa
            applications (subject to an additional charge).
          </p>{" "}
        </span>
      </div>
      <hr className="p-[0.5px] bg-gray-300 w-full m-20" />

      <div data-aos="fade-up" className="m-10">
        <div className="text-center m-5">
          <h1 className="text-3xl italic font-mono">Airport transfers </h1>
          <p className="font-body ">
            Amanoi is located a 75-minute drive from Cam Ranh (Nha Trang)
            Airport - CXR. Amanoi’s concierge team can arrange VIP transfers
            upon request.
          </p>
        </div>

        <div className="text-center">
          <h1 className="text-3xl italic font-mono">Travelling around Asia </h1>
          <p className="font-body ">
            Launch a multi-destination Aman journey in the region where it all
            began. With 18 resorts across 11 countries, it’s never been easier
            to linger for longer in Asia. <br /> Combine a stay at Amanoi with a
            visit to nearby South-east Asian neighbours, such as slow-paced
            Amantaka, Laos, at the foot of Mount Phousi, Siem Reap retreat
            Amansara, Cambodia, at the jungle-veiled back door to Unesco-listed
            Angkor Wat, and the original, Amanpuri, Thailand, on the palm-edged
            shores of Andaman Sea.
          </p>
        </div>
      </div>
      <hr className="p-[0.5px] bg-gray-300 w-full m-20" />
      <div
        data-aos="fade-up"
        className="flex justify- gap-[400px]  items-start"
      >
        <div className="">
          <h1 className="text-3xl font-body">Flight duration to Vietnam </h1>
          <span className="font-body text-m">
            Direct flights into Ho Chi Minh City (SGN)
          </span>
        </div>
        <div className="">
          <ul className="flex flex-col gap-2 list-disc	 ">
            <li>Bangkok, Thailand – 1hr 30min </li>
            <li>Kuala Lumpur, Malaysia – 2hr </li>
            <li>Singapore, Republic of Singapore – 2hr </li>
            <li>Hong Kong, China – 2hr 40 min </li>
            <li>Dubai, United Arab Emirates – 7hr 30min </li>
            <li>Doha, Qatar – 7hr 55min </li>
            <li>London, UK – 13hr 30min </li>
            <li>San Francisco, USA – 16hr 20min </li>
          </ul>
        </div>
      </div>
      <hr className="p-[0.5px] bg-gray-300 w-full m-20" />
    </div>
  );
};

export default GettingThere;
