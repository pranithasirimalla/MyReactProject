function Hello({ person }) {
  return (
    <h1>
      Hello from a component {person.message} {person.name} {person.emoji},
      {person.seatNumbers.join(", ")}
    </h1>
  );
}
export default Hello;
