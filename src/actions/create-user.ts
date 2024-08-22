"use server";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import fs from "fs";

export async function createUser(_: any, formData: FormData) {
  try {
    const schema = z.object({
      first: z.string().min(1),
      last: z.string().min(1),
      mobile: z.string().min(1),
      email: z.string().email(),
    });

    const data = schema.parse(Object.fromEntries(formData));

    const fileData = await fs.promises.readFile("data.json", "utf-8");

    const users: (typeof data)[] = JSON.parse(fileData);

    users.push(data);

    await fs.promises.writeFile("data.json", JSON.stringify(users));

    revalidatePath("/");

    return { message: "User created" };
  } catch (error) {
    console.log(error);
    return { message: "User not created" };
  }
}
