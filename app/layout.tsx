import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/components/footer";

import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <section className="h-screen flex flex-col w-full">
            <nav className="w-full flex items-center border-b ">
              <SidebarTrigger className="ml-4 bg-red-100" />
              <Header />
            </nav>
            {children}
            <Footer />
          </section>
        </SidebarProvider>
      </body>
    </html>
  );
}
