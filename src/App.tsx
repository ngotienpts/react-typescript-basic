import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import { Status } from "./components/Status";
function App() {
  const personName = {
    first: "Burce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clack",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      <Greet name={"Vishwas!"} isLoggedIn />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placholder text</Heading>
      <Oscar>
        <Heading>Oscar does to Leonardo Dicpario!</Heading>
      </Oscar>
      <Button
        handleClick={(e, id) => {
          console.log("Button object", e);
        }}
      />
      <Input value="" handleChange={(e) => console.log(e.target.value)} />
      <Container styles={{ padding: "1rem", border: "1px solid #000" }} />
    </div>
  );
}

export default App;
