import axios from "axios";

export interface Test {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getTest(index: number): Promise<Test> {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data[index];
}
