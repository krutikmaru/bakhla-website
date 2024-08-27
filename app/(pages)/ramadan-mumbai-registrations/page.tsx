import React from "react";
import Navigation from "./(components)/navigation";
import Banner from "./(components)/banner";
import Accommodations from "./(accomodations)/accomodations";
import Packages from "./(packages)/packages";
import Amenities from "./(components)/amenities";
import Outro from "./(components)/outro";
import Footer from "./(components)/footer";
import Testimonials from "./(components)/testimonials";

function Page() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Accommodations />
      <Packages />
      <Amenities />
      <Outro />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Page;
