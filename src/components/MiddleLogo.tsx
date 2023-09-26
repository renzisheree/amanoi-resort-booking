const MiddleLogo = ({
  srcImg,
  width = 250,
}: {
  srcImg: string;
  width?: number;
}) => {
  return (
    <div className="">
      <img width={width} height={250} src={srcImg} alt="" />
    </div>
  );
};

export default MiddleLogo;
