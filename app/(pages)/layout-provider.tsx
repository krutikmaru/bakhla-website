import FixedWidgets from "@/components/ui/fixed-widgets";
import Footer from "@/components/ui/footer";
import Navigation from "@/components/ui/navigation";
import TimelyDialog from "@/components/ui/timely-dialog";
import { Toaster } from "@/components/ui/toaster";
import { cookies } from "next/headers";
import React from "react";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const hasActiveInquiry = cookies().has("show_prices");
  return (
    <>
      <Toaster />
      <Navigation />
      <FixedWidgets />
      {children}
      <Footer />
      {!hasActiveInquiry && <TimelyDialog />}
    </>
  );
}

export default LayoutProvider;
