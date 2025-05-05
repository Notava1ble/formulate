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
import { CollectionType } from "@/data/collectionData";

const CollectionSidebarItem = ({
  collection,
}: {
  collection: CollectionType;
}) => {
  return (
    <Collapsible className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton asChild>
            <div>
              <collection.icon />
              <span>{collection.name}</span>
            </div>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {collection.subCollection.map((subCollection) => (
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
