import { getWorkspaceProjectsByWorkspaceId } from "@/app/data/project/get-workspace-project";
import { getUserById } from "@/app/data/user/get-user";
import { $Enums, User } from "@/lib/generated/prisma/client";
import React from "react";
import AppSideBar from "./AppSideBar";
import { ProjectProps, WorkspaceMemberProps } from "@/types";

interface WorkspaceItem {
  id: string;
  // name : String
  createdAt: Date;
  userId: string;
  accessLevel: $Enums.AccessLevel;
  workspaceId: string;
  workspace: {
    name: string;
  };
}

export interface AppSideBarDataProps extends User {
  workspaces: WorkspaceItem[];
}

const AppSidebarContainer = async ({
  data,
  workspaceid,
}: {
  data: AppSideBarDataProps;
  workspaceid: string;
}) => {
  const { projects, workspaceMembers } =
    await getWorkspaceProjectsByWorkspaceId(workspaceid);

  const user = await getUserById();
  return (
    <AppSideBar
      data={data}
      projects={projects as unknown as ProjectProps[]}
      workspaceMembers={workspaceMembers as unknown as WorkspaceMemberProps[]}
      user={user as User}
    />
  );
};

export default AppSidebarContainer;
