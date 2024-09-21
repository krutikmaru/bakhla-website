"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Page() {
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    async function fetchImage() {
      const response = await axios.post(
        "http://bakhla.devdusija.com/data/get_image"
      );
      console.log(response);
    }
    fetchImage();
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Image src={imageUrl} alt="meera" width={400} height={300} />
      Page
    </div>
  );
}

export default Page;
