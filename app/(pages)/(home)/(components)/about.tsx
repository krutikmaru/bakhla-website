"use client";
import React, { useState } from "react";
import { mapHtmlToReact } from "@/lib/utils-tsx";
import { Button } from "@/components/ui/button";
function About() {
  const [viewMore, setViewMore] = useState<boolean>(false);
  return (
    <div className="py-10 px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col justify-center items-center max-w-[1900px] mx-auto">
      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 ">
        Bakhla Tours & Travels Pvt. Ltd.
      </h2>
      <Introduction />
      {viewMore && mapHtmlToReact(html_content)}
      <Button
        onClick={() => setViewMore(!viewMore)}
        className="bg-bakhla-red hover:bg-bakhla-red/90 mt-5"
      >
        {viewMore ? "View Less" : "View More"}
      </Button>
    </div>
  );
}

export default About;

function Introduction() {
  return (
    <div className="mt-5 flex flex-col items-center justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        Best Hajj and Umrah Package Tour Operator in Mumbai, India
      </h2>
      <p>
        We are the best Hajj and Umrah Tour Agency all across India. Our service
        of more than three decades helps us in being the best in the Hajj and
        Umrah package tours industry. Our travel agency is with the pilgrim from
        the time he/she plans for Hajj, Umrah or Ziyarat. Guiding the pilgrims
        throughout the journey is what we have been doing. Better pilgrimage is
        our motto for all pilgrims. We have been setting up benchmarks in trust
        and commitments. Apart from the tour packages, we offer many additional
        services like guidance in performing the self-purification of Hajj and
        Umrah.
      </p>
    </div>
  );
}

const html_content = `
    <div className="mt-5 flex flex-col items-start justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        What do we offer?
      </h2>
      <p>
        <ul>
          <li>
            <b>Hajj package</b>: Providing exceptional Hajj Tour Packages for
            the pilgrims from the last 35 years and counting has become a habit
            for us. We at Bakhla Tours strive for excellence in any of our Group
            Hajj Packages. Hajj is not only about providing complete packages to
            pilgrims, what matters the most is the services we provide to Allah
            almighty&apos;s guests. Hajj is the fifth pillar of Islam and we
            help the pilgrims in completing it in the best possible packages.
          </li>
          <li>
            <b>Umrah package</b>: Umrah is the most demanded tour for all
            Muslims. It is a wish of every Muslim to perform Umrah. We provide
            the best Umrah Packages from all across India. Personally, we also
            provide Saudi Arabia custom umrah packages for individual travelers.
            Pilgrims who have already been to Umrah or Hajj before and are
            familiar with Saudi Arabia can construct their own custom hajj umrah
            packages in coordination with our sales team.
          </li>
          <li>
            <b>Umrah package</b>: Umrah is the most demanded tour for all
            Muslims. It is a wish of every Muslim to perform Umrah. We provide
            the best Umrah Packages from all across India. Personally, we also
            provide Saudi Arabia custom umrah packages for individual travelers.
            Pilgrims who have already been to Umrah or Hajj before and are
            familiar with Saudi Arabia can construct their own custom hajj umrah
            packages in coordination with our sales team.
          </li>
          <li>
            <b>Ziyarat tour package</b>: We at Bakhla tours release Baghdad
            Shareef tours in the holy month of Rabiul Akhir. This tour is
            conducted once a year in the month of Rabiul Akhir. Baghdad 
            <b>Ziyarat Tour Package</b> includes Ziyarats of different Islamic
            destinations which are situated in the gulf countries like Iran and
            Iraq. Best accommodations are provided with the best transportation
            and other facilities.
          </li>
          <li>
            <b>Hotels</b>: We are official selling agents of different
            properties in the holy cities of Makkah and Madinah and deal in the
            bulk booking of hotels. Our rates of hotels in Makkah and Madinah is
            challenging to any other hotel providing online portals, as we have
            booked rooms throughout the year for pilgrims arriving from all
            around the world.
          </li>
          <li>
            <b>Visa</b>: We are having a very professionally trained visa
            department which consists of staff members who handle all the Saudi
            Arabia Umrah visas. At 
            <Link className="font-bold text-bakhla-red" href="/contact">
              Bakhla Tours & Travels Pvt. Ltd.
            </Link> 
            we not only provide Umrah visas but also assistance and application
            of visas of other foreign countries like Dubai, Oman, Qatar and
            other gulf countries. We have our own Umrah visa sister concern
            company that makes us the best in the industry of Hajj and Umrah,
            Luxury hajj packages.
          </li>
          <li>
            <b>Tickets</b>: As far as ticketing is concerned we purchase blocks
            of different airlines much before the flying dates this is the
            reason we could declare tickets at the best possible rates. Dealing
            in bulk in every aspect of Hajj and Umrah helps us in giving the
            pilgrims the best possible packages at the best possible rates.
          </li>
        </ul>
      </p>
    </div>
    <div className="mt-5 flex flex-col items-start justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        Why Bakhla Tours & Travels Pvt. Ltd. is the best travel agency for Hajj, Umrah, and Ziyarat tours?
      </h2>
      <p>
      There are many travel companies in the Hajj and Umrah travel industry but we provide you with the best services Hajj Umrah Package from Mumbai, Ahmedabad, Delhi along with commitments. A genuine travel agency of Hajj and Umrah has the responsibility to guide you through not only decision making but in finding the best deals in flights, hotels, and local transportation. <b>Bakhla Tours & Travels Pvt. Ltd.</b> helps you in all of these factors according to your budget. We have gained the trust of thousands of pilgrims and we have been serving them with the best. If you are planning for Hajj, Umrah or Ziyarat tour you are on the perfect company's website.
      </p>
    </div>
    <div className="mt-5 flex flex-col items-start justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        The exceptional experience of more than 30 years
      </h2>
      <p>
      Hajj, Umrah or Ziyarat tours are performed once in a lifetime for most people and if you are planning on completing the 5th pillar of Islam that is Hajj Tour you will have to have trust a <b>Hajj & Umrah package tour</b> provider company who has the best experience in this industry and are approved by Ministry of Minority Affairs. If you as a pilgrim is travelling to a foreign country on a pilgrimage journey where thousands of other people gather for the same purpose, then you might need proper guidance and this guidance will be provided by us to you. Under the guidance of Bakhla Tours & Travels Pvt. Ltd. family and staff members you could find Hajj or Umrah pilgrimage very easy. Making a better and easy pilgrimage is our motto. Our boss and the C.E.O. of Bakhla Tours & Travels Pvt. Ltd., himself has traveled and completed his 30th Hajj journey in the year 2018. Long things explained in short, more experience leads to more contacts, and more contacts lead to easy pilgrimage travel.
      </p>
    </div>
    <div className="mt-5 flex flex-col items-start justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        Trustworthy
      </h2>
      <p>
      As long as the trust is concerned, Bakhla Tours & Travels Pvt. Ltd. has been proving this point since its inception. In today’s modern world, building and maintaining the pilgrim’s or clients’ trust is our first priority and many travel agencies fail. A very fine example of trust is of recent times of the pandemic COVID-19. 
      </p>
      <p>
      Soon as the cancellation of Hajj and Umrah 2020 was announced by the Saudi government, we returned all the booking amounts of our pilgrims to them each and every penny. You can have a look at our client testimonials and see our pilgrims speaking what they feel about us in the matter of trust. The money of Hajj and Umrah is an Amanah for us until you travel and if you are traveling with us for Hajj and Umrah package tour or Baghdad Ziyarat then you are traveling with the best.
      </p>
    </div>
    <div className="mt-5 flex flex-col items-start justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        Services in the Hajj and Umrah industry
      </h2>
      <p>
      In the service sector industry, the company which provides the best service stays ahead of every other company. We serve our pilgrims with top-notch services. There are travel companies that are unable to provide the services they commit to in Saudi Arabia while performing hajj and umrah. Bakhla Tours & Travels Pvt. Ltd. commits to services that they can provide during the pilgrimage journey. We provide all types of packages and services for all types of budgets. Luxury and economy packages of hajj and Umrah both are available in our company. We never do partiality with our pilgrims, as they get what they have paid for and sometimes even more. Hajj and Umrah are the most important journeys of a Muslim's life hence, they need to have the best service provider who can provide them with proper guidance throughout the tour. You can browse our variety of <b>Hajj packages.</b>
      </p>
    </div>
    <div className="mt-5 flex flex-col items-start justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        Indian Cuisines
      </h2>
      <p>
      When you are planning to perform hajj or Umrah with any travel agency the second thing which clicks in your mind would is food. Every pilgrim has a different personality. There are pilgrims who are very particular about the food they eat in any foreign country. The oriental cuisine is mainly of the gulf countries hence Saudi Arabia also has the same. We solve the problem of food in both cities Makkah and Madinah as we have a team of special Indian chefs who prepare proper Indian food for the pilgrims. Preparing food three times a day for all pilgrims is a challenging part for other travel agencies hence they order food from catering companies which compromises the quality of the food. We don't compromise with anything related to our pilgrims we try to serve with the best.
      </p>
    </div>
    <div className="mt-5 flex flex-col items-start justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        We provide Customized Hajj & Umrah Packages on demand
      </h2>
      <p>
      Umrah packages can be customized packages as well. Bakhla Tours & Travels Pvt. Ltd. provides the best custom packages according to your needs, Luxury hajj group packages. We have contacts with all of the departments which are involved in constructing a custom Umrah package. You can set your own dates, choose your types of airlines, your choice of hotel and transportation. You give us a budget and we create the best possible Umrah Package for you. The Custom Umrah packages consist of all the facilities which are three stars and above. If you are familiar with Umrah then only we suggest you go for a Customized Umrah package. In the custom Umrah package the pilgrims are on their own they don’t have a tour guide or other pilgrims along with them as the package has been customized for them only.
      </p>
    </div>
    <div className="mt-5 flex flex-col items-start justify-start space-y-1">
      <h2 className="scroll-m-20 text-center text-lg font-semibold tracking-tight first:mt-0 text-bakhla-red">
        Umrah Package 2024 Departures from Mumbai, Ahmedabad, Delhi, Nagpur, Hyderabad, and Lucknow, India
      </h2>
      <p>
      Planning to perform Umrah in 2024? Best Umrah Tour Operators in Mumbai Bakhla Tours & Travels Pvt. Ltd. offers comprehensive Umrah packages with departures from major cities across India including Mumbai, Ahmedabad, Delhi, Nagpur, Hyderabad, and Lucknow.
      </p>
    </div>
`;
