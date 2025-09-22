export default function Header({ children }) {
  return (
    <header className="flex  w-screen">
      <div className="flex  w-screen bg-slate-500 border-b-4  border-black p-12 flex-col">{children}</div>
    </header>
  )
}
