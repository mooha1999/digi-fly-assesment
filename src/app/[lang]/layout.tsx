import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import { Poppins } from "next/font/google";
import StoreProvider from "@/providers/StoreProvider";

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"]
});

export default async function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const messages = await getMessages();

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <body className={`${poppins.className} bg-[#FCFCFE]`}>
        <NextIntlClientProvider messages={messages}>

          <StoreProvider>{children}</StoreProvider>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
