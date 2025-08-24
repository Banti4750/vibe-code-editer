import { Button } from "@/components/ui/button";
import UserButton from "@/features/auth/components/user-button";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl">Home</h1>
      <UserButton />
    </div>
  );
}
