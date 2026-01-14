import db from "@/lib/db";
import { userRequired } from "../user/is-authenticated";
import { AccessLevel, Prisma } from "@/lib/generated/prisma/client";

export const getWorkspaceProjectsByWorkspaceId = async (
  workspaceId: string
) => {
  try {
    const { user } = await userRequired();

    const isUserMember = await db.workspaceMember.findUnique({
      where: {
        userId_workspaceId: {
          userId: user?.id || "",
          workspaceId,
        },
      },
    });

    if (!isUserMember) {
      throw new Error("User is not member of workspace");
    }

    // when owner create any project so by default its assigne all users , suppose owner wants such that specific project align to specific user that time we user projectAccess feature

    const query: Prisma.ProjectWhereInput =
      isUserMember.accessLevel === AccessLevel.OWNER
        ? { workspaceId }
        : {
            projectAccess: {
              some: {
                hasAccess: true,
                workspaceMember: {
                  userId: user?.id,
                  workspaceId,
                },
              },
            },
          };

    const [projects, workspaceMembers] = await Promise.all([
      db.project.findMany({
        where: query,
        select: {
          name: true,
          id: true,
          workspaceId: true,
          description: true,
        },
      }),

      // here we just want all members that pertiicular workspace
      db.workspaceMember.findMany({
        where: { workspaceId },
        include : {
            user : {
                select : {name : true , image : true , id : true}
            }
        }
      }),
    ]);


    return {projects , workspaceMembers}
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
      message: "Something went wrong ",
    };
  }
};
