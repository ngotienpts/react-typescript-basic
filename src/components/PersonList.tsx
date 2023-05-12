import { Name } from "./Person.types";

type PropsList = {
  names: Name[];
};

const PersonList = (props: PropsList) => {
  return (
    <div>
      {props.names.map((item, index) => (
        <h2 key={index}>
          {" "}
          {item.first} {item.last}
        </h2>
      ))}
    </div>
  );
};
export default PersonList;
