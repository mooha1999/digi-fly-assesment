"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ChangeLangButton() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();

  const handleLangChange = () => {
    const newLang = locale === "en" ? "ar" : "en";
    router.push(`/${newLang}`);
  };

  return (
    <>
      <button
        onClick={handleLangChange}
        className="basis-[10%] flex flex-row-reverse items-center gap-2 items-center"
      >
        <Image
          src={`/icons/${t("icon")}.svg`}
          alt="lang"
          width={24}
          height={24}
        />
        <span>{t("lang")}</span>
      </button>
    </>
  );
}
