export function Button({ children, onClick, variant = "solid" }) {
  return (
    <button onClick={onClick} className={`p-2 rounded ${variant === "ghost" ? "bg-transparent" : "bg-blue-600 text-white"}`}>
      {children}
    </button>
  );
}
