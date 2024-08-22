import Form from "./Form";
import Table from "./Table";
import fs from "fs";
import TableWrapper from "./TableWrapper";

export default async function Part1Data() {

  let users = [];

  try {
    const data = await fs.promises.readFile("data.json", "utf-8");
    users = JSON.parse(data);
  } catch (error) {
    
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
