"use client";

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

import { ChevronUp, House, Plus, User2 } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useSessionData } from "@/providers/session-data-provider";
import CollectionSidebarItem from "./CollectionSidebarItem";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AppSidebar() {
  const {
    collections,
    subCollections,
    premadeCollections,
    premadeSubCollections,
    user,
  } = useSessionData();
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
          <SidebarGroupLabel>Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={`/home/create`}>
                    <Plus />
                    Create
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User created sidebar group */}
        {collections && collections.length >= 1 && (
          <SidebarGroup>
            <SidebarGroupLabel>Your Collections</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {collections.map((collection) => {
                  const subCollectionsForCollection = subCollections
                    ? subCollections.filter(
                        (sub_collection) =>
                          sub_collection.collection_id == collection.id
                      )
                    : [];
                  // console.log(collection, subCollectionsForCollection);
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
        )}

        {/* Premade sidebar group */}
        {premadeCollections && premadeCollections.length >= 1 && (
          <SidebarGroup>
            <SidebarGroupLabel>Premade Collections</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {premadeCollections.map((collection) => {
                  const subCollectionsForCollection = premadeSubCollections
                    ? premadeSubCollections.filter(
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
        )}
      </SidebarContent>

      {/* SIDEBAR FOOTER */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar>
                    <AvatarImage src={user?.user_metadata.avatar_url} />
                    <AvatarFallback>
                      <User2 />
                    </AvatarFallback>
                  </Avatar>
                  {user?.user_metadata.full_name}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <form action="/auth/signout" method="post">
                  <DropdownMenuItem asChild>
                    <button type="submit" className="w-full h-full">
                      Sign out
                    </button>
                  </DropdownMenuItem>
                </form>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
