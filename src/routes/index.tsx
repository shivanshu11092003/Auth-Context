import { useAuth } from "@/Hooks/Auth";
import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const auth = useAuth();
	if (auth?.isAuthenticated) return <Navigate to="/user" />;
	return (
		<>
			<button onClick={auth?.login}>Login with Diable buton</button>
		</>
	);
}
