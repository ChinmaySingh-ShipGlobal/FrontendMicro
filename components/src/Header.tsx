export default function Header() {
  return (
    <div className="w-40 h-20 bg-slate-500">
      <h3>Header inside app1</h3>
      <input
        type="text"
        onChange={(e) => console.log(`I am changing by ${e.target.value} `)}
        className="border border-blue-700"
      />
    </div>
  );
}
