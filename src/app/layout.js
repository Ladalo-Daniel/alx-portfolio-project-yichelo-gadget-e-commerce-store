import { DM_Sans } from 'next/font/google';
import './globals.css'
import Provider from "../components/Providers"
import Header from '../components/navigation/Header';



const sans = DM_Sans({ weight: ["300", "500", "700", "900"], subsets: ["latin"] })

export const metadata = {
  title: "PaySlate",
  description:
    "Fees and Payments at your doorstep",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sans.className} suppressHydrationWarning={true}>
        <Header />
        <div className="overflow-x-hidden bg-blue-800    w-full">
          <Provider>
           {children}
          </Provider>
        </div>

        {/* <Footer /> */}
      </body>
    </html>
  )
}
