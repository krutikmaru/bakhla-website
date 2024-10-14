import React from "react";
import Main from "./(components)/main";
import { cookies } from "next/headers";

function Page() {
  const showPrices = cookies().has("show_prices");
  return <Main showPrices={showPrices} />;
}

export default Page;
