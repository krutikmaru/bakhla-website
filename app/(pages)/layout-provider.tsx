import Footer from "@/components/ui/footer";
import Navigation from "@/components/ui/navigation";
import React from "react";

function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default LayoutProvider;
