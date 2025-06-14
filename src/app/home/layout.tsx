import { cookies } from "next/headers";

import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { getUserData } from "@/lib/data";
import { SessionDataProvider } from "@/providers/session-data-provider";

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

  const allUserData = await getUserData();

  return (
    <SessionDataProvider initialData={allUserData}>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="relative w-full">
          <Navbar />
          {children}
        </main>
      </SidebarProvider>
    </SessionDataProvider>
  );
}
