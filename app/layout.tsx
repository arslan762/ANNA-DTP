import './globals.css'
import Navbar from "../components/Navbar";

export const metadata = {
  title: 'ANNA-DTP',
  description: 'AI Native Digital Twinning Platform'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>

        <Navbar />

        {children}

      </body>

    </html>
  )
}

