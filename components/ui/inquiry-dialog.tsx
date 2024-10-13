"use client";
import { handleSendInquiry } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/router";

function InquiryDialog({
  submissionActive,
  setSubmissionActive,
  setOpen,
}: {
  submissionActive: boolean;
  setSubmissionActive: (value: boolean) => void;
  setOpen: (value: boolean) => void;
}) {
  const initialState = {
    message: "",
    type: "",
  };
  const { toast } = useToast();
  const [formState, formAction] = useFormState(handleSendInquiry, initialState);

  useEffect(() => {
    if (formState?.type === "success") {
      setOpen(false);
      toast({
        title: "Sent",
        description: "Our team will be in touch with you shortly.",
      });
    }
  }, [formState, setOpen, toast]);
  return (
    <DialogContent>
      <form action={formAction}>
        <DialogHeader>
          <Image
            src="/logo-full.png"
            height={53}
            width={150}
            alt="Bakhla Tours Logo"
            className="mx-auto mb-2"
          />

          <DialogDescription className="text-center">
            {!submissionActive
              ? "You have already made an inquiry"
              : "Our team will get in touch with you. Prices will be visible after sending inquiry."}
          </DialogDescription>
          {!submissionActive && (
            <Button
              onClick={() => setSubmissionActive(true)}
              className="w-full bg-bakhla-red hover:bg-bakhla-red/90 mt-5"
            >
              New Inquiry
            </Button>
          )}
        </DialogHeader>
        {submissionActive && (
          <>
            <div className="space-y-2">
              <div>
                <Label
                  htmlFor="name"
                  className="text-right text-xs text-neutral-500"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Afreen Shaikh"
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="text-right text-xs text-neutral-500"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="afreen@gmail.com"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="text-right text-xs text-neutral-500"
                >
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  required
                  type="number"
                  placeholder="+91 1234567891"
                />
              </div>
              <div className="flex items-center space-x-2 py-2">
                <Checkbox required id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept privacy policy.
                </label>
              </div>
            </div>
            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </>
        )}
      </form>
    </DialogContent>
  );
}

export default InquiryDialog;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-bakhla-red hover:bg-bakhla-red/90 mt-3"
    >
      Send Inquiry
      {pending && <Loader2 className="animate-spin w-4 h-4 ml-2" />}
    </Button>
  );
}
