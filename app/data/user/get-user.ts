import db from "@/lib/db";
import { userRequired } from "./is-authenticated";

export const getUserById = async () => {
  try {
    const { user } = await userRequired();

    const data = await db.user.findUnique({
      where: { id: user?.id },
    });
   
    return data;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: true,
      message: "Something went wrong ",
    };
  }
};
