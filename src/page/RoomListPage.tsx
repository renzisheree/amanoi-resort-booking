import React from "react";
import ViewCard from "../components/ViewCard";
import { useNavigate } from "react-router-dom";

const RoomListPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-3xl text-center italic">Phòng ở Amanoi</h1>

        <div className="">
          <ul className="roomlist flex items-center justify-center gap-10 cursor-pointer">
            <li>Khu biệt thự</li>
            <li>Pavilion Villa</li>
            <li>Tổng quan</li>
            <li>Wellness pool villa</li>
          </ul>
        </div>

        <p className="text-sm italic text-center w-[60vw]">
          Được thiết kế từ những mái nhà uốn lượn ẩn hiện trong rừng cây và
          những chất liệu thân thiện với tự nhiên, các Pavilion và Villa của
          Amanoi hòa mình giữa khung cảnh thiên nhiên tuyệt đẹp. Với việc tiếp
          cận các liệu trình trị liệu toàn diện của Việt Nam, tất cả tạo nên nét
          duyên dáng và giản đơn đầy nghệ thuật của phong cách thiết kế Việt
          Nam, bao quanh bởi rừng rậm nguyên sơ và làn nước trong vắt của Vịnh
          Vĩnh Hy, chỉ chờ bạn khám phá.
        </p>
      </div>
      <div
        className="grid grid-cols-2 gap-20"
        onClick={() => {
          navigate("/details");
        }}
      >
        <ViewCard
          cardImg="https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2023-06/5-bedroom_bay_villa_e.jpg?itok=7XAJUNCy"
          cardType="Resort"
          cardTitle="The season's essentials"
          cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
          button={false}
        ></ViewCard>
        <ViewCard
          cardImg="https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2022-06/Amanoi%2C%20Vietnam%20-%20Residence%20pool%20area_1.jpg?itok=4DGVojA1"
          cardType="HomeStay"
          cardTitle="The season's essentials"
          button={false}
          cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
        ></ViewCard>
        <ViewCard
          cardImg="https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2023-06/5-bedroom_bay_villa_e.jpg?itok=7XAJUNCy"
          cardType="Resort"
          cardTitle="The season's essentials"
          cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
          button={false}
        ></ViewCard>
        <ViewCard
          cardImg="https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2022-06/Amanoi%2C%20Vietnam%20-%20Residence%20pool%20area_1.jpg?itok=4DGVojA1"
          cardType="HomeStay"
          cardTitle="The season's essentials"
          button={false}
          cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
        ></ViewCard>
        <ViewCard
          cardImg="https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2023-06/5-bedroom_bay_villa_e.jpg?itok=7XAJUNCy"
          cardType="Resort"
          cardTitle="The season's essentials"
          cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
          button={false}
        ></ViewCard>
        <ViewCard
          cardImg="https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2022-06/Amanoi%2C%20Vietnam%20-%20Residence%20pool%20area_1.jpg?itok=4DGVojA1"
          cardType="HomeStay"
          cardTitle="The season's essentials"
          button={false}
          cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
        ></ViewCard>
        <ViewCard
          cardImg="https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2023-04/Amanoi%2C%20Vietnam%20-%20Accommodation%2C%20Ocean%20Pool%20Villa%2C%20Terrace_4667%20%281%29.jpg?itok=xSihImzE"
          cardType="Resort"
          cardTitle="The season's essentials"
          cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
          button={false}
        ></ViewCard>
        <ViewCard
          cardImg="https://www.aman.com/sites/default/files/styles/listing_teaser_extra_large/public/2022-06/Amanoi%2C%20Vietnam%20-%20Lounge%20in%20Residence_3.jpg?itok=AbJCF68Q"
          cardType="HomeStay"
          cardTitle="The season's essentials"
          button={false}
          cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
        ></ViewCard>
      </div>
    </div>
  );
};

export default RoomListPage;
