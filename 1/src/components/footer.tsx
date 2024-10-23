import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-6 sm:py-8 sm:pb-4">
      <div className="w-full px-4 md:container md:px-0 mx-auto">
        <div className="flex justify-between items-center">
          <img src={'/logo-white.svg'} alt="logo" width={165} height={50} className="w-[70px] h-[18px] sm:w-[165px] sm:h-[50px]" />

          <div className="flex sm:hidden items-start gap-2">
            <GoGlobe className="text-white w-3 h-3 mt-1" />
            <p className="font-bold text-xs border-b-[5px] border-b-secondary">IN</p>
            <p className="font-bold text-xs">EN</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-8">
            <div className="space-y-8 mt-2 max-w-[214px]">
              <p className="text-[10px] sm:text-xs leading-5 tracking-wide">
                Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung Pakuwon Tower Lt 26 Unit J,
                Jakarta Selatan, DKI Jakarta 12870, Indonesia
              </p>

              <div className="text-[10px] sm:text-xs leading-5 tracking-wide space-y-1">
                <p>
                  Email : info.eratani@eratani.co.id
                </p>
                <p>
                  Telepon: +62 811 952 2597
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-sm sm:text-lg">Menu</h4>
              <ul className="mt-2 space-y-2 text-xs tracking-wide">
                <li><a href="#" className="hover:underline">Tim Kami</a></li>
                <li><a href="#" className="hover:underline">Mitra Eratani</a></li>
                <li><a href="#" className="hover:underline">Tips & Berita Pertanian</a></li>
                <li><a href="#" className="hover:underline">Karir</a></li>
              </ul>
            </div>
          </div>

          <div className="hidden w-1/4 sm:flex flex-col items-center justify-between">
            <div className="flex items-start gap-2">
              <GoGlobe className="text-white w-6 h-6 mt-1" />
              <p className="font-bold text-lg border-b-[5px] border-b-secondary">IN</p>
              <p className="font-bold text-lg">EN</p>
            </div>

            <div className="flex gap-5 items-center">
              <FaTiktok className="w-6 h-6 cursor-pointer hover:text-secondary" />
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-secondary" />
              <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-secondary" />
              <FaYoutube className="w-6 h-6 cursor-pointer hover:text-secondary" />
              <FaWhatsapp className="w-6 h-6 cursor-pointer hover:text-secondary" />
            </div>
          </div>
        </div>

        <div className="flex sm:hidden gap-5 items-center mt-4">
          <FaTiktok className="w-3 h-3 cursor-pointer hover:text-secondary" />
          <FaInstagram className="w-3 h-3 cursor-pointer hover:text-secondary" />
          <FaLinkedin className="w-3 h-3 cursor-pointer hover:text-secondary" />
          <FaYoutube className="w-3 h-3 cursor-pointer hover:text-secondary" />
          <FaWhatsapp className="w-3 h-3 cursor-pointer hover:text-secondary" />
        </div>
        <p className="hidden sm:block text-xs leading-5 tracking-wide text-center mt-2">
          Copyright © 2021 by PT Eratani Teknologi Nusantara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
