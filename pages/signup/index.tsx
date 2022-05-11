import { useQuery } from "react-query";
import axios from "axios";

function SignUp() {
  const { isLoading, error, data, isFetching } = useQuery<any, Error>("repoData", async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data[0];
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error?.message;

  return (
    <div>
      <h1>{data.userId}</h1>
      <p>{data.title}</p>
      <strong>👀 {data.body}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
}

export default SignUp;
