// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";
import '@mantine/dropzone/styles.css';

import type { Metadata } from "next";
import { Layout } from "./components";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "GPT DATA DAO",
  description:
    "Join with your chatGPT account and receive governance rights. Vote to sell the data to other AI companies, or vote to delete it if OpenAI open sources GPT-4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
