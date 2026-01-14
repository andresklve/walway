export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-2xl font-bold">Walway</h1>
      <div className="space-x-4">
        <span>Carrito (0)</span>
        <span>Login</span>
      </div>
    </nav>
  )
}