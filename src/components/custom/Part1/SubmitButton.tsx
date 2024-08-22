'use client';
import { useTranslations } from "next-intl";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const t = useTranslations("Part1");
  const {pending} = useFormStatus();
  return (
    <button
      className="bg-primary rounded-md py-2 mt-4 text-white" aria-disabled={pending} type="submit"
    >
      {t("send")}
    </button>
  );
}