
import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../ui/Title";

const Footer = () => {
  const [footer, setFooter] = useState([]);
  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  }, []);
  console.log(footer);
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title className="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Denizli-Pamukkale University</span>
              
              </a>
              <a href={`tel:${footer?.phoneNumber}`}>
                <i className="fa fa-phone"></i>
                
                <span className="inline-block ml-2">
                  Call: +90 258 202 2020{footer?.phoneNumber}
                </span>
              </a>
              <a href={`mailto:${footer?.email}`}>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">emircica.ec@gmail.com</span>
              
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title className="text-[38px]">FoodHouse</Title>
            
            <p className="mt-3">{footer?.desc}FoodHouse. The Best Restaurant in the World.</p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              
              {footer?.socialMedia?.map((item) => (
                <a
                  href={item?.link}
                  className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
                  key={item._id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="md:flex-1">
            <Title className="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                
                <span className="inline-block ml-2">
                  {footer?.openingHours?.day} Every Day
                </span>
              </div>
              <div>
                
                <span className="inline-block ml-2">
                  {footer?.openingHours?.hour} 10.00-22.00
                </span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 All Rights Reserved By Emir Cica
        </p>
      </div>
    </div>
  );
};

export default Footer;