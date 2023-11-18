import React, { useEffect } from "react";
import AOS from "aos";
const ThanksPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div
      data-aos="fade-right"
      className="flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl font-mono">Thanks for choosing us</h1>
      <span className="text-3xl font-mono">
        We'll contact you as soon as possible
      </span>
      <span>
        <svg
          width="200px"
          height="200px"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M199.189 64.3989C215.746 58.3491 279 70.6192 279 126.977C279 183.335 231.123 213 201.621 213C129.563 213 94.2576 136.211 151.466 79.8029"
            stroke="#000000"
            stroke-opacity="0.9"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M119.37 349.664C118.457 296.98 118 267.866 118 262.321C118 254.004 118 229.096 120.601 229.096C154 229.096 213 239.248 262.225 219.866C268 222.635 268 235.095 268 239.248C268 242.017 266.075 278.934 262.225 350"
            stroke="#000000"
            stroke-opacity="0.9"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M120 231C129.456 251.479 154 341.619 171.681 349.974C175.63 351.84 194.208 253.157 194.208 245.446C194.208 237.736 193.896 237.884 194.208 227.772C194.416 221.03 194.416 214.5 194.208 208.182"
            stroke="#000000"
            stroke-opacity="0.9"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M262.545 220.303C258.323 232.448 231.499 350 218.789 350L197.092 246.574C197.475 240.262 197.513 233.995 197.209 227.775C196.904 221.555 197.19 215.024 198.066 208.182"
            stroke="#000000"
            stroke-opacity="0.9"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M163 164C168.155 174 169.852 174 175.553 174C179.354 174 183.503 172.333 188 169"
            stroke="#000000"
            stroke-opacity="0.9"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M212 167C217.512 174 219.327 174 225.423 174C229.488 174 234.013 171.667 239 167"
            stroke="#000000"
            stroke-opacity="0.9"
            stroke-width="16"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default ThanksPage;
