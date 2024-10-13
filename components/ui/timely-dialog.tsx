"use client";
import React, { useState, useEffect, useRef } from "react";
import { Dialog } from "./dialog";
import InquiryDialog from "./inquiry-dialog";

function TimelyDialog() {
  const [open, setOpen] = useState<boolean>(false); // Initially closed
  const timeoutRef = useRef<number | null>(null); // Ref to store the timeout ID

  useEffect(() => {
    // Function to open the dialog after a delay
    const openDialog = (delay: number) => {
      timeoutRef.current = window.setTimeout(() => {
        setOpen(true); // Show the dialog after the delay
      }, delay);
    };

    // After the dialog is closed, show it again after a random delay (between 1 and 3 minutes)
    const setRandomTimeout = () => {
      const randomDelay = Math.floor(Math.random() * (180000 - 60000)) + 60000; // Random delay between 1 and 3 minutes
      openDialog(randomDelay);
    };

    if (!open) {
      setRandomTimeout();
    }

    // Cleanup function to clear the timeout when component unmounts or updates
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [open]);

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setOpen(false); // Close the dialog
        }
      }}
    >
      <InquiryDialog
        setSubmissionActive={(val: boolean) => {}}
        submissionActive={true}
        setOpen={setOpen}
      />
    </Dialog>
  );
}

export default TimelyDialog;
