import { redirect } from "next/navigation";
export default function Home() {
  redirect("/signup");
  return <div>Welcome to Task_Board</div>;
}
