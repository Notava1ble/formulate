import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./ui/sidebar";
import { CollectionType } from "@/lib/supabase/collection";
import { SubCollectionType } from "@/lib/supabase/subCollection";
import Icon from "./Icon";

const CollectionSidebarItem = async ({
  collection,
  sub_collections,
}: {
  collection: CollectionType;
  sub_collections: SubCollectionType[];
}) => {
  if (sub_collections.length === 0) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link href={`/home/${collection.id}`}>
            <Icon iconName={collection.icon} className="" />
            <span>{collection.name}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
  return (
    <Collapsible className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton asChild>
            <div>
              <Icon iconName={collection.icon} className="" />
              <span>{collection.name}</span>
            </div>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {sub_collections &&
              sub_collections.map((subCollection) => (
                <SidebarMenuSubItem key={subCollection.id}>
                  <SidebarMenuSubButton asChild>
                    <Link href={`/home/${collection.id}/${subCollection.id}`}>
                      <span>{subCollection.name}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};
export default CollectionSidebarItem;
