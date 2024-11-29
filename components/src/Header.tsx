export default function Header({ className }: { className?: string }) {
  return (
    <div className={`w-40 h-20 ${className}`}>
      <h3>Header inside app1</h3>
      <input
        type="text"
        onChange={(e) => console.log(`I am changing by ${e.target.value} `)}
        className="border border-blue-700"
      />
    </div>
  );
}
