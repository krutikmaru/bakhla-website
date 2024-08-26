"use client";
import { Button } from "@/components/ui/button";
import { Book, BookCheck } from "lucide-react";
import React, { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import InquiryDialog from "../(components)/inquiry-dialog";

function ActionButtons() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => (!isOpen ? setOpen(false) : undefined)}
    >
      <div className="mt-10 w-full flex justify-center items-center space-x-2">
        <Button
          onClick={() => setOpen(true)}
          className="bg-bakhla-red hover:bg-bakhla-red/90"
        >
          <Book className="mr-2 w-4 h-4" />
          Download Brochure
        </Button>
        <Button
          onClick={() => setOpen(true)}
          className="bg-bakhla-red hover:bg-bakhla-red/90"
        >
          <BookCheck className="mr-2 w-4 h-4" />
          Book Now
        </Button>
      </div>
      <InquiryDialog />
    </Dialog>
  );
}

export default ActionButtons;
