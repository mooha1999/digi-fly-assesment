import Form from "./Form";
import TableWrapper from "./TableWrapper";
import { UsersInfoPayload } from "@/models/users-info";
import { UsersState } from "@/lib/redux/slices/users-slice";

export default async function Part1Data() {

  let users:UsersState[] = [];

  try {
    const url = process.env.NEXT_PUBLIC_API_URL;

    if (!url) {
      throw new Error("API URL not found");
    }

    const data = await fetch(url);

    const json:UsersInfoPayload[] = await data.json();

    console.log(json);

    users = json.map((user) => {
      return {
        first: user.FirstName,
        last: user.LastName,
        mobile: user.Phone,
        email: user.Email,
      };
    });
  }
  catch (error: any) {
    alert(error.message);
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
        <Form />
        <TableWrapper users={users} />
      </div>
    </div>
  );
}
