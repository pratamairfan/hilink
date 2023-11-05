import React from "react";
import {
  FOOTER_CONTACT_INFO,
  FOOTER_LINKS,
  SOCIALS,
} from "data";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <NavLink>
            <img
              src="hilink-logo.svg"
              alt="logo"
              width={74}
              height={74}
            />
          </NavLink>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn
                title={columns.title}
                key={index}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <li key={link}>
                      <NavLink to={"/"}>{link}</NavLink>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn
                title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map(
                  (link, index) => (
                    <NavLink
                      to={"/"}
                      key={index}
                      className="flex gap-4 md:flex-col lg:flex-row">
                      <p className="whitespace-nowrap">
                        {link.label}:
                      </p>
                      <p className="medium-14 whitespace-nowrap text-blue-70">
                        {link.value}
                      </p>
                    </NavLink>
                  )
                )}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <li key={link}>
                      <NavLink to={"/"}>
                        <img
                          src={link}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2023 Hilink | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
