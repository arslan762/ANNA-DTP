import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "ANNA-DTP | AI Native Network Automation & Digital Twin Platform",
  description:
    "ANNA-DTP is an AI-native network automation and REC digital twin platform for scalable telecom intelligence, orchestration, and future 5G/6G ecosystems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="bg-[#020617] text-white overflow-x-hidden">

        {/* GLOBAL NAVBAR */}

        <Navbar />

        {/* PAGE CONTENT */}

        <main className="w-full overflow-x-hidden">
          {children}
        </main>

      </body>

    </html>
  );
}