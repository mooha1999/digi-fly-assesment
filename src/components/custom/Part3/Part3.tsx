import { useTranslations } from "next-intl";
import TextEditor from "./TextEditor";

export default function Part3() {

  const t = useTranslations("Part3");

  return (
    <article className="flex flex-col justify-start gap-[70px] px-1 lg:px-20 pt-28 pb-[90px]">
      <section className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold">{t("part3")}</h1>
        <p className="text-lg text-custom-gray max-w-[1020px]">{t("content")}</p>
      </section>
      <TextEditor />
    </article>
  );
}