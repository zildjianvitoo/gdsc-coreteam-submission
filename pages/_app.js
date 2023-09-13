import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import SideBar from "@/components/SideBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {" "}
      <div className={`flex w-full  ${poppins.className}`}>
        <SideBar />
        <div className="flex flex-col w-4/5 md:flex-row">
          <div className="w-full md:w-2/3">
            <Component {...pageProps} />
          </div>
          <div className="w-full p-5 bg-white md:w-1/3">Member</div>
        </div>
      </div>
    </SessionProvider>
  );
}
