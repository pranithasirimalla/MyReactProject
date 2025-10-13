export default function Message({ text }) {
  function handleClick() {
    alert(text);
  }
  return <button onClick={handleClick}>Click Here to get Alert</button>;
}
