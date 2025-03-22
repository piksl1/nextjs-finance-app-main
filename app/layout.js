import { Inter } from "next/font/google";
import "./globals.css";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | FinancePro",
    default: "FinancePro",
  },
  description: "FinancePro - Smart Finance Management Made Simple",
};

export default function RootLayout({ children }) {
  const theme = useServerDarkMode();
  return (
    <html lang="en" className={theme}>
      <body className={`${inter.className} min-h-screen flex flex-col px-8`}>
        {(process.env.NODE_ENV === "development" ||
          process.env.VERCEL_ENV === "preview") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-recording-token="7dBir864aexYItOmzGlbVBBWhF9B3F8ye1JkwkEX"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
        {children}
      </body>
    </html>
  );
}
