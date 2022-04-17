import React from "react";
import FooterTitle from "../Title/FooterTitle";
import FooterLink from "./FooterLink";
import { ClockIcon } from "@heroicons/react/outline";
import {  LocationMarkerIcon, MailIcon, PhoneIcon } from "@heroicons/react/solid";
import FooterIconTitle from "./FooterIconTitle";

const Footer = () => {

const date = new Date()
const year=date.getFullYear()

  return (
    <footer className=" bg-[#FFF7F5] text-second pt-20 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-10 gap-8 ">
          <div className="col-span-3 mt-3">
            <h1 className="text-second font-bold text-4xl">X-fit</h1>
            <p className="pt-5 text-four text-sm ">
              x-fit is a personal Gym trainer by mr.trany, I provide some gym
              services please visit my service section
            </p>
            <div className="pt-8">
              <span className="mb-4">
                <FooterIconTitle
                  icon={<LocationMarkerIcon />}
                  text="Jl. Sunset Road No.815, Kuta"
                />
              </span>
              <span className="py-2">
                <FooterIconTitle
                  icon={ <MailIcon /> }
                  text="support@xfit.com"
                />
              </span>

              <FooterIconTitle
                icon={ <PhoneIcon/> }
                text="(+62)81 0000 345"
              />
            </div>
          </div>
          {/* Quick Links*/}
          <div className="col-span-2   ">
            <FooterTitle title="Quick Links" />
            <FooterLink
              linkTitle="Home"
              path=""
              linkTitle1="Blob"
              path1="blog"
              linkTitle2="About"
              path2="contact"
              linkTitle3="Services"
              path3="services"
              linkTitle4="Contact"
              path4="contact"
            />
          </div>
          {/* Useful Links */}
          <div className="col-span-2 ">
            <FooterTitle title="Useful Links" />
            <FooterLink
              linkTitle="Privacy Policy"
              path="contact"
              linkTitle1="Terms and Conditions"
              path1="contact"
              linkTitle2="Disclaimer"
              path2="contact"
              linkTitle3="Support"
              path3="contact"
              linkTitle4="FAQ"
              path4="contact"
            />
          </div>
          {/* Work Hours */}
          <div className="col-span-3 ">
            <FooterTitle title="Work Hours" />
            <FooterIconTitle
              icon={<ClockIcon />}
              text="9 AM - 5 PM , Monday - Saturday"
            />
            <p className="text-four text-sm font-light pt-2">
              Call Me office time, off day please call me on the 10am to 6pm
            </p>
          </div>
        </div>
        <div className=" border-t border-t-[#79797933] pt-5 pb-2 mt-6 flex-none sm:flex lg:flex xl:flex md:flex justify-between items-center">
          <p className="text-sm text-four">Your Personal Trainer mr.tarny</p>
          <p className="text-sm text-four">
            Copyright © {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
