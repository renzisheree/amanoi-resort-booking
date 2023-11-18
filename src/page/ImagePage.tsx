import List from "../data/listImage.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import AOS from "aos";

const ImagePage = () => {
  useEffect(() => {
    AOS.init();
  });
  const [slide, setSlide] = useState(false);
  return (
    <>
      <h1 data-aos="fade-up" className="text-center text-4xl p-5 italic">
        Khám phá Amanoi
      </h1>

      <div
        data-aos="fade-up"
        className="flex items-center justify-center gap-10 p-10"
      >
        <span
          onClick={() => {
            setSlide(true);

            console.log("cheecked");
          }}
          className="cursor-pointer"
        >
          <svg
            fill="none"
            height="50"
            viewBox="0 0 159 157"
            width="50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M1.21462 83.9128C1.21436 84.0151 1.2381 84.1167 1.2832 84.2086C1.3283 84.3011 1.39381 84.3812 1.47496 84.4444L1.63878 94.0312C1.82799 105.171 2.02406 116.687 2.24708 128.015C2.24142 129.843 2.43979 131.665 2.83823 133.449C6.46573 147.94 19.0183 156.455 34.819 155.168C39.4523 154.788 43.5691 154.633 47.4021 154.701C60.5362 154.928 73.8879 155.222 86.8003 155.502C92.6834 155.632 98.5665 155.759 104.45 155.883C105.36 155.9 106.29 155.883 107.187 155.869C108.81 155.804 110.435 155.846 112.052 155.992C114.455 156.268 116.872 156.405 119.29 156.405C124.281 156.386 129.257 155.834 134.131 154.757C147.82 151.804 158.597 137.933 158.156 123.835C157.937 116.847 157.82 109.202 157.796 100.463C157.779 94.4116 157.803 88.2567 157.826 82.3044C157.87 70.7379 157.915 58.7763 157.671 47.015C157.504 38.8816 156.268 30.8427 155.082 24.0513C153.651 15.8541 149.875 9.7526 143.865 5.91555C137.475 1.83681 131.795 0.0472583 125.971 0.26354C124.159 0.332594 122.325 0.47589 120.552 0.613998C118.403 0.780769 116.181 0.954108 114.002 0.995149C105.624 1.1541 97.1022 1.23419 88.8615 1.31237C70.0816 1.48891 50.6636 1.67132 31.5787 2.79834C27.5393 3.0115 23.5414 3.72056 19.6744 4.90967C9.95055 7.97147 2.23978 17.5003 1.73847 27.0702C1.69512 27.8719 1.65165 28.674 1.6083 29.4766C1.43275 32.6342 1.25049 35.8992 1.23748 39.118C1.19457 49.9641 1.20176 60.9913 1.20891 71.6557C1.21194 75.7403 1.21376 79.8256 1.21462 83.9128ZM66.8852 10.3441C69.843 10.2794 72.8014 10.2116 75.7598 10.1409H75.847C76.1246 10.1409 76.4269 10.1728 76.8015 10.2119L76.9601 10.2282C75.2865 32.3124 75.2052 54.4977 75.2702 73.6583L10.2845 75.055C10.2591 74.7527 10.233 74.4615 10.2083 74.1782C10.1238 73.2264 10.0509 72.4043 10.0451 71.5789C10.02 67.9464 10.0031 64.3134 9.99496 60.6805C9.9735 54.1757 9.951 47.4495 9.84762 40.8327C9.73188 35.4746 10.6004 30.1408 12.4103 25.0976C14.5684 19.0768 18.621 15.2814 24.7973 13.4945C31.1739 11.6509 37.8724 11.333 44.3511 11.0262L44.4375 11.0223C51.9103 10.6666 59.5213 10.5031 66.8819 10.3441H66.8852ZM10.1537 120.872V120.427C10.1615 112.575 10.2072 104.593 10.2515 96.8715C10.2688 93.8084 10.2856 90.7446 10.3017 87.6802C10.3017 87.3857 10.2973 87.0939 10.2915 86.7975C10.2817 86.305 10.2731 85.8385 10.2965 85.3727C10.3797 83.7643 10.7792 83.2881 12.1824 83.2881C12.2819 83.2881 12.3862 83.2881 12.4955 83.2952C13.3186 83.3298 14.1665 83.4294 14.9864 83.5272C16.0404 83.6718 17.1015 83.7558 18.1651 83.7799C24.1359 83.8014 30.5191 83.7695 38.8567 83.6757C45.8109 83.5975 52.7646 83.5083 59.7179 83.4092C64.2165 83.348 68.7149 83.2887 73.2143 83.2308C73.6545 83.2301 74.094 83.2516 74.5316 83.2959L74.9068 83.3246L74.3326 146.351L74.0283 146.378C73.4692 146.427 72.988 146.471 72.5101 146.472L66.367 146.487C55.1499 146.516 43.5536 146.543 32.1445 146.538C26.673 146.538 22.1159 145.084 18.2108 142.108C14.1145 138.981 11.6089 134.464 10.5582 128.297C10.2142 125.838 10.0779 123.354 10.1505 120.872H10.1537ZM86.5526 83.2555C87.524 83.2555 88.3836 83.2588 89.2438 83.2555C93.4025 83.2268 97.5619 83.2008 101.721 83.1773C112.728 83.1122 124.11 83.047 135.305 82.9018C138.561 82.8601 141.769 82.6412 145.165 82.4099C146.507 82.3181 147.868 82.2256 149.254 82.1428V82.2392C149.254 82.9167 149.254 83.6724 149.254 84.4327L149.29 96.2168C149.318 105.771 149.356 115.327 149.404 124.885C149.456 133.409 142.262 143.197 134.008 145.831C128.013 147.692 121.75 148.536 115.477 148.33C108.439 148.161 101.282 147.809 94.3616 147.474C91.7386 147.343 89.1151 147.218 86.4908 147.098C85.6124 147.059 84.7418 146.973 83.8204 146.882L83.1819 146.817C85.2431 124.397 85.5701 102.16 85.6027 83.2549L86.5526 83.2555ZM149.393 65.1862C149.353 67.9972 149.312 70.9033 149.323 73.7371H85.8835L83.7912 10.2138L84.1436 10.1526C84.6716 10.0424 85.2067 9.97553 85.745 9.9526C89.1118 9.91481 92.4786 9.87136 95.8453 9.82231C105.208 9.69202 114.897 9.56173 124.411 9.64251C130.55 9.65358 136.443 12.0567 140.844 16.3433C142.573 18.0693 143.862 20.1863 144.603 22.5158C145.911 26.8459 146.966 31.249 147.761 35.7025C149.669 45.4437 149.528 55.4806 149.39 65.1862H149.393Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  fill="white"
                  height="157"
                  transform="translate(0.777344)"
                  width="158"
                />
              </clipPath>
            </defs>
          </svg>
        </span>

        <span>
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Interface / Line_Xl">
              <path
                id="Vector"
                d="M12 21V3"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </span>
        <span
          className="cursor-pointer"
          onClick={() => {
            setSlide(false);
            console.log("false");
          }}
        >
          <svg
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1920 169v1581.176H0V169h1920Zm-112.941 112.941H112.94v1355.294h1694.12V281.941Z"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <hr className="mb-10 " />

      {slide ? (
        <div data-aos="fade-up" className=" grid grid-cols-3	gap-20">
          {List.length > 0 &&
            List.map((item) => <img key={item.id} src={item.src} alt="" />)}
        </div>
      ) : (
        <div data-aos="fade-up" className="swiper-list">
          <Swiper grabCursor={true} spaceBetween={40} slidesPerView={1}>
            {List.length > 0 &&
              List.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    key={item.id}
                    src={item.src}
                    alt=""
                    className="w-[90vw] h-[85vh] m-auto"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ImagePage;
