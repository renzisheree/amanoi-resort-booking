import ViewCard from "../../components/ViewCard";

const FoodPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-20">
      <h1 className="text-3xl  italic p-10 ">Các bữa ăn tại Amanoi</h1>

      <div className="">
        <img
          src="https://www.aman.com/sites/default/files/styles/full_size_extra_large/public/2021-03/Amanoi_Dining-Hero-1.jpg?itok=e3LKDbNf"
          alt="cover"
          className="w-[80vw] mx-auto"
        />
        <p className="text-center w-[60vw] p-10 text-sm italic mx-auto">
          Các nhà hàng tại Amanoi mang tới những khung cảnh khác biệt - từ vị
          trí trên đỉnh vách đá của Nhà hàng đến Beach Club bên bờ biển. Phục vụ
          các món ăn tinh tế của ẩm thực Việt và quốc tế và lựa chọn các nguyên
          liệu tươi ngon, nhà hàng mở cửa đón khách nghỉ dưỡng tại resort. Ngoài
          nhà hàng, Amanoi còn phục vụ các bữa ăn riêng tư tại các địa điểm
          ngoài trời tuyệt đẹp khác.
        </p>
      </div>

      <div className=" flex items-start gap-10 justify-center w-full italic pb-10">
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-03/Amanoi_Gallery_18.jpg?itok=3vbmL2Xp"
          alt=""
        />
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2022-07/Amanoi_Restaurant_Portrait.jpg?itok=D-KnTP5b"
          alt=""
        />
        <span className="flex flex-col gap-1">
          <h1 className="text-xl font-medium italic ">Nhà hàng chính</h1>
          <p className="text-sm ">
            Tọa lạc trên đỉnh đồi, nhà hàng chính phục vụ ba bữa ăn hàng ngày
            với cả ẩm thực Việt Nam và quốc tế. Với thực đơn tận dụng tối đa các
            nguyên liệu có sẵn theo mùa và hải sản đánh bắt tươi sống từ các tàu
            đánh cá địa phương. Nhà hàng chính bao gồm cả khu vực trong nhà và
            khu vực ngoài trời với tầm nhìn bao quát vịnh biển tuyệt đẹp.
          </p>{" "}
          <h1 className="text-xl font-medium italic ">Nhà hàng Beach Club</h1>
          <p className="text-sm ">
            Tọa lạc ngay bên bờ cát trắng và chỉ cách biển vài bước chân, nhà
            hàng Beach Club được bao quanh bởi những tảng đá granit lớn với khu
            vực dùng bữa thoáng đãng cạnh sân hiên nhìn ra hồ bơi. Nhà hàng mở
            cửa phục vụ bữa trưa cũng như đồ uống và đồ ăn nhẹ bên hồ bơi ban
            ngày, với các món hải sản đặc biệt tươi ngon rất đáng để thưởng
            thức.
          </p>{" "}
          <h1 className="text-xl font-medium italic ">Quầy Bar</h1>
          <p className="text-sm ">
            Nhìn ra Vườn Quốc gia Núi Chúa và thuộc khu sảnh chính Central
            Pavilion, quầy bar tại Amanoi là không gian thư giãn lấy cảm hứng
            thiết kế từ các quán trà truyền thống của Việt Nam. Được trang trí
            với những bức hình nghệ thuật và hướng nhìn ra các ngọn núi xa xăm,
            đây là không gian để thư giãn và ngắm cảnh trên những chiếc ghế tựa
            sofa bọc da và nhâm nhi những ly cocktail.
          </p>{" "}
        </span>
      </div>

      <ViewCard
        cardImg="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_x_wide/public/2021-03/Amanoi_Dining-Hero-7.jpg?itok=frQiO3lg"
        flexCol={false}
      ></ViewCard>

      <div className=" ">
        <h1 className="text-3xl italic text-center">
          Trải nghiệm ẩm thực nổi bật
        </h1>
        <div className="flex justify-center items-center w-[80vwpp] gap-10">
          {" "}
          <ViewCard
            cardImg="https://www.aman.com/sites/default/files/styles/property_nearby_extra_large/public/2021-03/Amanoi_Dining_4.jpg?itok=M_XuHenG"
            cardTitle="Trà chiều"
            cardParagraph="‘Bánh căn’ – đặc sản địa phương được chế biến bằng niêu đất truyền thống, với các hương vị khác nhau bao gồm cả vị chay tùy theo sở thích của bạn. Ghé thăm nhà hàng chính để thưởng thức các món bánh truyền thống của Ninh Thuận và đồ ăn nhẹ cùng trà và cà phê hàng ngày."
            button={false}
            bgWhite={true}
            slide={2}
          ></ViewCard>
          <ViewCard
            cardImg="https://www.aman.com/sites/default/files/styles/property_nearby_extra_large/public/2021-03/Amanoi_Dining_5.jpg?itok=dad4CYiB"
            cardTitle="
      Bữa tối bên hồ bơi Cliff Pool   "
            cardParagraph="Khi màn đêm buông xuống và những vì sao lấp lánh trên bầu trời cùng khung cảnh vịnh biển xa xa , hồ bơi Cliff Pool trở thành một địa điểm lãng mạn cho trải nghiệm tiệc nướng riêng tư khó quên"
            button={false}
            bgWhite={true}
            slide={2}
          ></ViewCard>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
