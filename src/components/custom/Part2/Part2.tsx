import { useTranslations } from "next-intl";
import MapWrapper from "./MapWrapper";

export default function Part2(){
  const t = useTranslations("Part2");

  return (
    <article className="flex flex-col gap-20">
      <div className="px-1 lg:px-20 py-4 flex flex-col gap-8">
        <h1 className="text-4xl font-bold">{t("part2")}</h1>
        <p className="text-lg text-custom-gray">{t("content")}</p>
      </div>
      <MapWrapper />
    </article>
  );
}