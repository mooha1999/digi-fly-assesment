import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import ChangeLangButton from "./ChangeLangButton";

export default function Navbar() {
  const t = useTranslations("Navbar");

  const links = [
    { href: "/", label: t("home"), className: "font-semibold text-primary" },
    { href: "/", label: t("categories") },
    { href: "/", label: t("contact") },
    { href: "/", label: t("about") },
  ];

  return (
    <nav className="flex justify-evenly gap-4 px-0 lg:px-20 py-4">
      <div className="basis-[10%]">
        <Image src={"/icons/logo.svg"} alt="Logo" width={76.57} height={56} />
      </div>
      <div className="flex gap-4 items-center flex-grow">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`font-semibold hover:text-primary p-0 sm:p-4 ${link.className}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <ChangeLangButton />
    </nav>
  );
}
