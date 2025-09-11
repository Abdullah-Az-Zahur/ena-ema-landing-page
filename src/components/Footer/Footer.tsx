import Image from "next/image";
import logo from "../../../public/image/logo/LogoBlack.png";
import linkedin from "../../../public/image/icon/linkedin.png";
import facebook from "../../../public/image/icon/facebook.png";
import insta from "../../../public/image/icon/insta.png";
import behance from "../../../public/image/icon/behance.png";
import dribble from "../../../public/image/icon/dribble.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-black py-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-start md:items-center gap-6 md:gap-0">
          <div className="flex-shrink-0">
            <Image src={logo} alt="logo" width={160} height={36} />
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <p className="text-sm">
              © All rights reserved to Ena Ema Technologies
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-right">
            <p className="text-sm md:hidden">
              © All rights reserved to Ena Ema Technologies
            </p>

            <div className="flex justify-end md:justify-start gap-4 mt-2 md:mt-0">
              {[linkedin, facebook, insta, behance, dribble].map(
                (icon, index) => (
                  <Image
                    key={index}
                    src={icon}
                    alt="social"
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
