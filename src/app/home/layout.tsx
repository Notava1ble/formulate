import { cookies } from "next/headers";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const cookieSidebarState = cookieStore.get("sidebar_state");
  const defaultOpen = cookieSidebarState
    ? cookieSidebarState.value === "true"
    : true;

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="relative w-full">
        <Navbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
