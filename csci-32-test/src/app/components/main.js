export default function Main({ children }) {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex  bg-slate-500 rounded-sm border-r-[3px] border-4  border-black p-12 flex-col gap-6">
        {children}
      </div>
    </main>
  )
}
