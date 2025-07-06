import { ModeToggle } from "./components/mode-toggle"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <div className="relative min-h-svh">
        <div className="absolute right-8 top-8">
          <ModeToggle />
        </div>
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App