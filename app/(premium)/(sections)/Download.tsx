"use client";
import Image from "next/image";
import { Element } from "react-scroll";

import { Marker } from "../../../components/Marker";
import { links } from "../../../constants/index";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="max-lg:flex256 relative mr-6 flex-540 max-xl:flex-280 max-md:flex-100">
              <div className="mb-10">
                <Image
                  src="/images/logo.svg"
                  width={160}
                  height={55}
                  alt="IT GyaNepal"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, Web - whatever your
                flavor, we&apos;ve got you covered.
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <button
                      onClick={
                        url === "#"
                          ? () =>
                              alert(
                                "Under Construction Please Use our Web App till then"
                              )
                          : () =>
                              window.open(
                                url.startsWith("http") ? url : `http://${url}`,
                                "_blank"
                              )
                      }
                      className="download_tech-icon_before relative flex size-22 items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <span className="download_tech-icon">{icon}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after relative w-[955px] rounded-40 border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />

                  <img
                    src="/images/screen.png"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Download;