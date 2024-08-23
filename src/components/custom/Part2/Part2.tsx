import { useTranslations } from "next-intl";
import MapWrapper from "./MapWrapper";

export default function Part2() {
  const t = useTranslations("Part2");

  return (
    <article className="flex flex-col gap-20">
      <section className="px-1 lg:px-20 py-4 flex flex-col gap-8">
        <h1 className="text-4xl font-bold flex gap-4 items-center">
          <div className="h-1 w-16 bg-custom-purple rounded-full"></div>
          {t("part2")}
        </h1>
        <p className="text-lg text-custom-gray max-w-[1020px]">
          {t("content")}
        </p>
      </section>
      <MapWrapper />
    </article>
  );
}
