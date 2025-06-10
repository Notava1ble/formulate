"use client";

import { ChevronUp, User2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarMenuButton } from "./ui/sidebar";
import { useSessionData } from "@/providers/session-data-provider";

const SidebarUserItem = () => {
  const { user } = useSessionData();
  return (
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
  );
};
export default SidebarUserItem;
