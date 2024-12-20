import { Inter, Noto_Serif } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

// const inter = Inter({ subsets: ["latin"] });
const notoSerif = Noto_Serif({ subsets: ["latin"] });

export const metadata = {
  title: "Playlixt",
  description: "Playlixt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSerif.className}`}>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
