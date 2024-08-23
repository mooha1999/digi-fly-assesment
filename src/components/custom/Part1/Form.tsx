'use client';
import { useTranslations } from "next-intl";
import { useFormState } from "react-dom";
import { createUser } from "@/actions/create-user";
import SubmitButton from "./SubmitButton";

const initialState = {
  message: "",
};

export default function Form() {
  const t = useTranslations("Part1");
  const [state, formAction] = useFormState(createUser, initialState);

  return (
    <div className="flex flex-col justify-center items-center">
      <form action={formAction} className="flex flex-col w-full">
        <div className="flex gap-7 items-center flex-col xl:flex-row w-full">
          <div className="flex flex-col flex-grow w-full">
            <label htmlFor="first" className="text-sm font-medium">
              {t("first")}
            </label>
            <input
              type="text"
              id="first"
              name="first"
              placeholder={t("first")}
              className="border border-[#E0E0E0] rounded-sm py-2 mt-1 ps-6"
            />
          </div>
          <div className="flex flex-col flex-grow w-full">
            <label htmlFor="last" className="text-sm font-medium">
              {t("last")}
            </label>
            <input
              type="text"
              id="last"
              name="last"
              placeholder={t("last")}
              className="border border-[#E0E0E0] rounded-sm py-2 mt-1 ps-6"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-4">
          <label htmlFor="mobile" className="text-sm font-medium ">
            {t("mobile")}
          </label>
          <input
            // type="tel"
            id="mobile"
            name="mobile"
            placeholder={t("mobile")}
            className="border border-[#E0E0E0] rounded-sm py-2 px-3 mt-1 ps-6"
          />
        </div>
        <div className="flex flex-col w-full mt-4">
          <label htmlFor="email" className="text-sm font-medium">
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("email")}
            className="border border-[#E0E0E0] rounded-sm py-2 px-3 mt-1 ps-6"
          />
        </div>
        <SubmitButton />
        <p arial-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </form>
    </div>
  );
}
