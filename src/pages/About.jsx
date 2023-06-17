import { useLocation } from "react-router-dom";
import queryString from "query-string";

export default function About() {
  const searchParam = useLocation().search;
  console.log(searchParam); //?name=mark
  const query = queryString.parse(searchParam);
  console.log(query); //{name: "mark"}

  return (
    <div>
      <h2>About Page</h2>
      {query.name && <p>name은 {query.name} 입니다.</p>}
    </div>
  );
}
