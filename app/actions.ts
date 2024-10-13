"use server";

import { cookies } from "next/headers";

export async function handleSendInquiry(
  cuurentState: { message: string; type: string },
  formData: FormData
) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const body = {
    name,
    email_id: email,
    mobile_number: phone,
  };
  console.log(body);
  cookies().set("show_prices", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 7 * 24 * 60 * 60, // 7 days
    sameSite: "strict",
    path: "/",
  });
  return {
    message: "lol",
    type: "success",
  };
}
