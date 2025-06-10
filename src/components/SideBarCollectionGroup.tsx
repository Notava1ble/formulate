"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "./ui/sidebar";
import CollectionSidebarItem from "./CollectionSidebarItem";
import { useSessionData } from "@/providers/session-data-provider";

const SideBarCollectionGroup = ({
  type,
}: {
  type: "user-created" | "premade";
}) => {
  const {
    collections,
    subCollections,
    premadeCollections,
    premadeSubCollections,
  } = useSessionData();
  return (
    <>
      {type === "user-created" && collections && collections.length >= 1 && (
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
      {type === "premade" &&
        premadeCollections &&
        premadeCollections.length >= 1 && (
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
    </>
  );
};
export default SideBarCollectionGroup;
