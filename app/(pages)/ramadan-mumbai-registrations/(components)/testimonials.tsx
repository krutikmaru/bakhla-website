import React from "react";
import InstagramPost from "./instagram-post";

function Testimonials() {
  return (
    <div className="px-6 sm:px-24 py-12">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-bakhla-red">
        TESTIMONIALS
      </h4>
      <h2 className="scroll-m-20 uppercase text-3xl font-bold tracking-tight first:mt-0 mb-5">
        What Our <span className="text-bakhla-red">Clients</span> say
      </h2>
      <InstagramPost />
    </div>
  );
}

export default Testimonials;
