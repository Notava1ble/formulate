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
} from "@/components/ui/sidebar";
import { readCollections } from "@/lib/supabase/collection";

import { House } from "lucide-react";
import Link from "next/link";
import CollectionSidebarItem from "./CollectionSidebarItem";
import { getAllSubCollections } from "@/lib/supabase/subCollection";

export default async function AppSidebar() {
  const [collections, sub_collections] = await Promise.all([
    readCollections(),
    getAllSubCollections(),
  ]);

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
        <SidebarGroup>
          <SidebarGroupLabel>Premade Collections</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {collections &&
                collections.map((collection) => {
                  const subCollectionsForCollection = sub_collections
                    ? sub_collections.filter(
                        (sub_collection) =>
                          sub_collection.collection_id == collection.id
                      )
                    : [];
                  return (
                    <CollectionSidebarItem
                      collection={collection}
                      sub_collections={subCollectionsForCollection}
                      key={collection.id}
                    />
                  );
                })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
