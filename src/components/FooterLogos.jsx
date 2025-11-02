import firstImage from '../assets/image-1.png';
import secondImage from '../assets/image-2.png';
import thirdImage from '../assets/image-3.png';
import fourthImage from '../assets/image-4.png';
import fifthImage from '../assets/image-5.png';


export function FooterLogos() {

  return (
    <>
      <div className="flex justify-between max-w-[350px] m-auto mb-[40px]">
        <a href="#" className="sm:order-2">
          <img src={fifthImage} alt="fifthImage" className="size-13" />
        </a>
        <a href="#" className="sm:order-3">
          <img src={fourthImage} alt="fourthImage" className="size-13" />
        </a>
        <a href="#" className="sm:order-4">
          <img src={thirdImage} alt="thirdImage" className="size-13" />
        </a>
        <a href="#" className="sm:order-5">
          <img src={secondImage} alt="secondImage" className="size-13 " />
        </a>
        <a href="#" className="sm:order-1">
          <img src={firstImage} alt="firstImage" className="size-13" />
        </a>
      </div>
    </>
  );
}