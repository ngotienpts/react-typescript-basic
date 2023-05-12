import { PropsPerson } from "./Person.types";

export const Person = (props: PropsPerson) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
