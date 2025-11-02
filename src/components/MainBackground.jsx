

export function MainBackground() {

  return (
    <>
      <div className="hidden w-full sm:flex flex-col gap-y-3 justify-center items-center bg-[#185aff] bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat sm:rounded-tr-[3rem] z-1">
        {/* Desktop Title */}
        <span className="text-white text-6xl font-semibold">
          Let's make every day <br />Meaningful together.
        </span>
        <span className="text-white font-semibold">"Building meaningful experiences together."</span>
      </div>

      {/* Underlay boxes for rounding top and bottom center of page  */}
      <div className="hidden sm:flex flex-col justify-between align-items-center absolute left-[50%] translate-x-[-50%] z-0 h-full">
        <div className="size-[100px] bg-gray-100"></div>
        <div className="size-[100px] bg-[#3971FF] bg-[url('/bg-image.png')] bg-center bg-cover bg-no-repeat"></div>
      </div>

      {/* Underlay boxes for rounding top right and bottom left of page */}
      <div className="sm:hidden absolute z-0 w-[100px] h-[100px] right-0 bg-[#3971FF]"></div>
      <div className="sm:hidden absolute z-0 w-[100px] h-[100px] bottom-0 bg-[#3971FF]"></div>
    </>
  );
}