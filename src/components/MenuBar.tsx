const MenuBar = () => {
  return (
    <div className="flex w-[25vw] items-center align-center gap-3">
      <div className="icon-menu">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="27"
          height="27"
          viewBox="0 0 50 50"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      </div>
      <h1 className="text-[13px]">Menu</h1>
    </div>
  );
};

export default MenuBar;
