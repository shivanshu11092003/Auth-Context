import { useAuth } from "@/Hooks/Auth";
import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const auth = useAuth();
	// This funciton definitly needs to be intialized before acess.
	function recieveDataFromEnviroment() {
		console.log("Teh goverment API responsed sucessfully!");
	}

	if (auth?.isAuthenticated) return <Navigate to="/user" />;
	return (
		<>
			{/* <button onClick={auth?.login}>Login with Diable buton</button> */}
			<p>Teh goverment API responsed sucessfully! </p>
			<p>Teh goverment API responsed sucessfully! </p>
			<p>Teh goverment API responsed sucessfully! </p>
			<p>Teh goverment API responsed sucessfully! </p>
		</>
	);
}
