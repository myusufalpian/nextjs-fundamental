import Navbar from "../components/layouts/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>Oehoey</h1>
      </div>
      <Link href={"./about"}>Pindah about sini cuy</Link>
    </>
  )
}
