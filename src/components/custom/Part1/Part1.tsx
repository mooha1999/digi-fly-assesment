import { useTranslations } from "next-intl";
import Part1Data from "./Part1Data";

export default function Part1() {
  const t = useTranslations("Part1");

  return (
    <article className="flex flex-col justify-start gap-[70px] px-1 lg:px-20 pt-28 pb-[90px]">
      <section className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold flex gap-4 items-center">
          <div className="h-1 w-16 bg-custom-purple rounded-full"></div>
          {t("part1")}
        </h1>
        <p className="text-lg text-custom-gray max-w-[1020px]">
          {t("content")}
        </p>
      </section>
      <section>
        <Part1Data />
      </section>
    </article>
  );
}
