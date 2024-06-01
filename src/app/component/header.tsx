import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
]

export const Header = () => {
  return (
    <header className="text-center">


      {NAV_ITEMS.map((item) => {
        return (
          <div>
            < Link key={item.href} href={item.href} >
              {item.label}
            </Link>
          </div>
        )
      })}
    </header >
  );
}