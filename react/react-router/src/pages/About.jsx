import { useSearchParams } from "react-router-dom";

export default function About() {
  let [searchParams, setSearchParams] = useSearchParams();
  let name = searchParams.get("name");

  return <div>About {name}</div>;
}
