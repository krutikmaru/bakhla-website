"use client";
import { handleSendInquiry } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function ContactForm({ showPrices }: { showPrices: boolean }) {
  const initialState = {
    message: "",
    type: "",
  };
  const { toast } = useToast();
  const [formState, formAction] = useFormState(handleSendInquiry, initialState);

  useEffect(() => {
    if (formState?.type === "success") {
      toast({
        title: "Sent",
        description: "Our team will be in touch with you shortly.",
      });
    }
  }, [formState, toast]);
  return (
    <div className="w-full h-80  relative top-0 md:w-[500px] md:sticky md:top-28">
      <form action={formAction}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>₹X,XX,XXX/-</CardTitle>
            <CardDescription>per person</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name *</Label>
                <Input required name="name" id="name" placeholder="Your Name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  required
                  name="phone"
                  id="phone"
                  type="number"
                  placeholder="Your Phone"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email *</Label>
                <Input
                  required
                  id="email"
                  name="email"
                  placeholder="Your Email"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <SubmitButton />
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

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
