import React from "react";
import Navigation from "./navigation";
import Banner from "./banner";
import Accommodations from "./(accomodations)/accomodations";
import Packages from "./(packages)/packages";

function Page() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Accommodations />
      <Packages />
    </div>
  );
}

export default Page;
