"use client"

import React from "react";
import { AppSideBarDataProps } from "./app-sidebarContainer";
import { User } from "@/lib/generated/prisma/client";
import { ProjectProps, WorkspaceMemberProps, WorkspaceProps } from "@/types";
import { Sidebar, SidebarGroupLabel, SidebarHeader } from "../ui/sidebar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import WorkspaceSelector from "./workspace-selector";
import Link from "next/link";

const AppSideBar = ({
  data,
  projects,
  workspaceMembers,
  user,
}: {
  data: AppSideBarDataProps;
  projects: ProjectProps[];
  workspaceMembers: WorkspaceMemberProps[];
  user: User;
}) => {
  return (

      <Sidebar collapsible="icon">
        <SidebarHeader className="bg-background"></SidebarHeader>

        <div className="flex items-center px-2">
          <Avatar>
            <AvatarImage src={"/next.svg"} />
          </Avatar>

          <SidebarGroupLabel>
            <span className="text-xl ">Project</span>
          </SidebarGroupLabel>
        </div>

        <div className="flex justify-between mb-0 px-2 items-center">
          <SidebarGroupLabel className="mb-2 text-sm font-semibold text-muted-foreground uppercase">
            Workspace
          </SidebarGroupLabel>

          <Button asChild size={"icon"} className="size-5">
            <Link href={"/create-workspace"}>
              <Plus />
            </Link>
          </Button>
        </div>

        <WorkspaceSelector
          workspaces={data?.workspaces as unknown as WorkspaceProps[]}
        />
      </Sidebar>
  );
};

export default AppSideBar;
