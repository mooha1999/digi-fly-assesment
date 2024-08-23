'use client';
import { useAppSelector } from "@/lib/redux/hooks";
import { selectUsers } from "@/lib/redux/selectors/users-selectors";
import { useTranslations } from "next-intl";

export default function Table() {
  const t = useTranslations("Part1");
  const headings = [t("first"), t("last"), t("mobile"), t("email")];
  const users = useAppSelector(selectUsers);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-custom-purple font-bold">{t("results")}</h1>
      <div className="overflow-y-auto bg-white max-h-96 shadow-lg">
        <table className="table-auto shadow-lg w-full">
          <thead>
            <tr>
              {headings.map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-7 text-left text-sm font-normal text-custom-gray-2 text-start"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((data) => (
              <tr key={Math.random()}>
                {Object.keys(data).map((key) => (
                  <td
                    key={key}
                    className="border-t border-gray px-6 py-7 text-sm font-semibold text-custom-gray-1 text-start"
                  >
                    {data[key as keyof typeof data]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}