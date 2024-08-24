import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col space-y-2 justify-center items-center">
      <h1>Bakhla 🕋</h1>
      <Button>
        <Link href={"/ramadan-mumbai-registrations"}>Registrations</Link>
      </Button>
    </div>
  );
}
