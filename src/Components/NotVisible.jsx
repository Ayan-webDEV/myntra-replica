const NotVisible = () => {
  return (
    <div className="not-visible-wrapper">
      <div className="not-visible-container flex items-center justify-center">
        <div className="mt-32">
          <div>
            <img
              src="assets/error.png"
              className="mx-auto w-[240px] h-[140px]"
              alt="Error myntra only available in desktop[latops]"
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="pr-3 text-[#7a4a26] text-[8vw] sm:text-4xl">
              <strong>
                Error <span className="text-red-500">*</span>
                <span className="text-black">0</span>
                <span className="text-red-500">*</span>{" "}
              </strong>
            </p>
            <p className="text-[6vw] sm:text-2xl font-bold">Page Not Found</p>
          </div>
          <div className="mx-auto mt-5 sm:mt-7 w-[75%] sm:w-[57%]">
            <p className="text-sm font-medium tracking-wider text-[#555657]">
              Myntra provides separate experiences for mobile and desktop users.
              This version of the site is designed exclusively for desktops and
              laptops. Please open it on a desktop or laptop device to continue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotVisible;
