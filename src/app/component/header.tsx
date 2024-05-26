import Link from "next/link";

export  const Header=() =>{
  return (
    <header className="text-center">
      <Link href="/" >
        Index  
      </Link>

      {"   "}

      <Link href="/about" >
        About
      </Link>
    </header>
  );
}