export function Input({ placeholder, className = "" }) {
  return <input placeholder={placeholder} className={`p-2 border rounded w-full ${className}`} />;
}
