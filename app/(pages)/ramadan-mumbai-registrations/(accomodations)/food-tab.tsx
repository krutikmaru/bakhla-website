import React from "react";
import { TabsContent } from "@/components/ui/tabs";

function FoodTab() {
  return (
    <TabsContent
      value="food"
      className="border-[1px] border-neutral-200 p-10 rounded-md mt-5"
    >
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Explore The Rich Tapestry Of Flavors with Bakhla Tours and Travels Pvt.
        Ltd.
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        Our culinary offerings are not just about sustenance; they are a
        carefully crafted symphony of flavors that nourish both body and soul.
        From Suhoor to Iftar, savour the richness of tradition and the
        simplicity of elegance in our thoughtfully prepared meals.
      </p>
      <div className="flex justify-center items-center mt-5">
        <video
          src="https://bakhlatours.com/wp-content/uploads/2023/10/hotel_food_video.mp4"
          controls
        ></video>
      </div>
    </TabsContent>
  );
}

export default FoodTab;
