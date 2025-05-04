import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import { collectionData } from "@/data/collectionData";
import { userCollectionData } from "@/data/userCollectionData";
import CollectionSidebarItem from "./CollectionSidebarItem";
import { House } from "lucide-react";
import Link from "next/link";

export default function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="offcanvas">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/home"}>
                Home
                <House className="ml-auto" />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* USER COLLECTIONS */}
        <SidebarGroup>
          <SidebarGroupLabel>Your Collections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {userCollectionData.map((collection) => (
                <CollectionSidebarItem
                  key={collection.id}
                  collection={collection}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* PREMADE COLLECTION */}
        <SidebarGroup>
          <SidebarGroupLabel>Premade Collections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {collectionData.map((collection) => (
                <CollectionSidebarItem
                  key={collection.id}
                  collection={collection}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
