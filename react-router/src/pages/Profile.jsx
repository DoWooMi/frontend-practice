import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  console.log(id, typeof id);

  return (
    <div>
      <h2>Profile Page</h2>
      {id && <p>id is {id}. </p>}
    </div>
  );
}
