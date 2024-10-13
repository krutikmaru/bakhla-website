import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="mt-[92px] ">
      <div className="w-full h-screen relative flex items-center justify-center">
        <Image
          src="/images/banners/about.jpg"
          alt="Ramadan Banner"
          fill
          className="absolute left-0 object-left object-cover"
        />
        <h1 className="scroll-m-20 relative z-10 text-4xl font-extrabold lg:text-5xl text-white uppercase">
          About Bakhla
        </h1>
      </div>
      <div className=" my-5 px-6 sm:px-10 md:px-20 py-10 max-w-[1900px] mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h2 className="scroll-m-20 text-center text-3xl text-bakhla-red font-semibold tracking-tight first:mt-0 ">
            Our Origins and Story
          </h2>
          <p>BETTER PILGRIMAGE</p>
        </div>
        <div className="flex flex-col space-y-10 mt-10 lg:space-x-10 lg:space-y-0 lg:flex-row">
          <div className="w-full">
            <div className="w-full h-[300px] md:h-[550px] relative">
              <Image
                src="/images/founder.jpg"
                alt="Mr. Rashid Bakhla"
                fill
                className="absolute left-0 object-left object-cover"
              />
            </div>
            <p className="mt-5">
              Bakhla Tours & Travels Pvt. Ltd. creates Luxury Umrah Packages
              from all across India. We are serving pilgrims from the last 35
              years.
            </p>
          </div>
          <div className="w-full h-full space-y-6">
            <p>
              We at Bakhla Tours & Travels Pvt. Ltd. are serving pilgrims for
              more than 3 decades <b>(36 years)</b> With the help of the founder
              of our company. <b>Mr. Rashid Ahmed Bakhla</b> established this
              company in 1989. Overall these years of service to our pilgrims we
              have achieved the trust from pilgrims all across the globe and
              given them services that helped them in self-purification journeys
              (Hajj, Umrah & Ziyarat). Our team support in India & in Saudi
              Arabia helps our pilgrims to be hassle-free in this sacred
              journey.
            </p>
            <p>
              Mr. Rashid Bakhla started the company in the early 90’s. He
              started to serve the pilgrims in a time we’re going for Hajj and
              Umrah was very rare. During that time people in India had just
              started to use airplanes as a medium of transport for foreign
              traveling. Mr. Rashid Bakhla along with his wife and mother used
              to take pilgrims for Hajj Umrah and Ziyart with the whole and sole
              responsibility of applying visas, documentation, ticketing and
              hotel arrangements in both the holy cities Makkah & Madinah.
            </p>
            <p>
              <b className="text-bakhla-red">
                Bakhla Tours & Travels Pvt. Ltd.
              </b>{" "}
              Hajj Umrah Travel Company believes in providing the best services
              to its pilgrims (Hajis) in every way according to the package they
              select, Whether it be providing Luxurious hotels, Transportation &
              Food in the holy cities. We are officially recognized by the
              governments of both countries ( India & Saudi Arabia ) for
              providing services to pilgrims globally. Building the trust in the
              thousands of pilgrims by providing them with additional knowledge
              and support during this sacred journey. We are the solutions for
              all the problems a pilgrim faces in the sacred journey of Hajj,
              Umrah & Ziyarat.
            </p>
          </div>
        </div>
        <p className="mt-10">
          We at Bakhla Tours & Travels Pvt. Ltd. have all types of packages for
          all the 3 journeys ( Hajj, Umrah & Ziyarat Packages). People wanting a
          Luxurious travel plan or a customized package we got you covered.
          Group Tour Economy Packages, Semi Deluxe, Deluxe & Super Deluxe
          Different packages for different budgets. ONE-STOP SHOP for all the
          pilgrimage tours. We are awaiting your presence!
        </p>
        <div className="flex flex-col justify-center items-center mt-10">
          <h2 className="scroll-m-20 text-center text-3xl text-bakhla-red font-semibold tracking-tight first:mt-0 ">
            CERTIFIED TO PROVIDE SERVICES.
          </h2>
          <p className="text-center mt-2">
            Bakhla Tours & Travels Pvt. Ltd. has earned many certifications and
            appreciations as we are providing services and packages to our
            clients for 3 decades . We have the following associations and
            certifications :
          </p>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 mt-5">
            <div className="w-full h-52 flex flex-col justify-start items-center">
              <Image
                src="/images/logos/3.webp"
                alt="IATA"
                width={150}
                height={150}
              />
              <h3 className="text-bakhla-red text-xl font-semibold text-center">
                IATA
              </h3>
              <p className="text-center">
                International Air Transport Association
              </p>
            </div>
            <div className="w-full h-52 flex flex-col justify-start items-center">
              <Image
                src="/images/logos/4.webp"
                alt="IATA"
                width={150}
                height={150}
              />
              <h3 className="text-bakhla-red text-xl font-semibold text-center">
                AIHUTOA
              </h3>
              <p className="text-center">
                All India Hajj Umrah Tour Organizers Association
              </p>
            </div>
            <div className="w-full h-52 flex flex-col justify-start items-center">
              <Image
                src="/images/logos/5.webp"
                alt="IATA"
                width={150}
                height={150}
              />
              <h3 className="text-bakhla-red text-xl font-semibold text-center">
                MOMA
              </h3>
              <p className="text-center">Ministry Of Minority Affairs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
