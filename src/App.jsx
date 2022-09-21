import { BrowserRouter as Router } from "react-router-dom"
import MainRoutes from "./routes/mainRoute"
import { Theme } from "./styles/theme.style"

function App() {
	return (
		<main className={`w-full h-full flex ${Theme.Bg.gradient}`}>
			<Router>
				<MainRoutes />
			</Router>
		</main>
	)
}

export default App
