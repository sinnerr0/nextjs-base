import { useQuery } from "react-query";
import axios from "axios";

export function useGetTest(index: number) {
  return useQuery<any, Error>(["tempService/test", index], async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data[index];
  });
}
