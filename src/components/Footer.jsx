import logo from "../assets/img/1.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-[#4a4e69] py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-extrabold">Excellent Glam</h1>
            <div className="mb-4">
              <span className="text-2xl">076 743 0043</span>
            </div>
          </div>
          <div className="flex space-x-20">
            <div>
              <h2 className="font-semibold mb-2">Solutions and Services</h2>
              <ul className="font-semibold">
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Natural Glam
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Soft Glam
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Bridal Full Day
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Digital Business
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Flowegirl
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold mb-2">About Altron</h2>
              <ul>
                <li className="mb-1">
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Referrals
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Newsroom
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold mb-2">Legal & Compliance</h2>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Privacy Statement
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-[#4a4e69] pt-4 flex justify-between items-center">
          <span>© Excellent Glam 2024</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Website Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="flex justify-between items-center">
              <FaFacebook />
              <span className="pl-2">Facebook</span>
            </a>
            <a href="#" className="flex justify-between items-center">
              <FaLinkedin />
              <span className="pl-2">LinkedIn</span>
            </a>
            <a href="#" className="flex justify-between items-center">
              <FaInstagramSquare />
              <span className="pl-2">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
