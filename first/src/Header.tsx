export default function Header() {
  return (
    <div className="bg bg-yellow-100 w-full">
      <input
        type="text"
        className="bg bg-white w-full"
        onChange={(e) => console.log(`I am changing by ${e.target.value} `)}
      />
    </div>
  );
}
