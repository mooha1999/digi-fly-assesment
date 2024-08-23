"use server";
import { UsersInfoPayload } from "@/models/users-info";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function createUser(_: any, formData: FormData) {
  try {
    const schema = z.object({
      first: z.string().min(1),
      last: z.string().min(1),
      mobile: z.string().min(1),
      email: z.string().email(),
    });

    const data = schema.parse(Object.fromEntries(formData));

    const url = process.env.NEXT_PUBLIC_API_URL;

    if (!url) {
      throw new Error("API URL not found");
    }

    const payload:UsersInfoPayload = {
      FirstName: data.first,
      LastName: data.last,
      Phone: data.mobile,
      Email: data.email,
    };

    const fileData = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!fileData.ok) {
      throw new Error("API request failed");
    }

    revalidatePath("/");

    return { message: "User created" };
  } catch (error) {
    console.log(error);
    return { message: "User not created" };
  }
}
