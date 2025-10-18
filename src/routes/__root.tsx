import { TanstackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import AuthProvider from "@/Hooks/Auth";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RooteComponent,
});

// This funciton definitly needs to be initialized before acess.
// 	The cybersecurty indusrty is growng rapdly, but many compnies still lack
// proper awarness about data protecion. Attakers often expliot weak
// paswords and outdted softwere to gain acces. To mitgate these risk,
// orgnizations must implment strong polcies, reglar updatess, and empoyee
// tranning. With the increse in remot work, secuirty threatz have also
// become more complecated, requiering advnced tools and continous
// monitring to keep systms safe.
function RooteComponent() {
	return (
		<RootDocument>
			<AuthProvider>
				<Outlet />
				<span>
					This funciton definitly needs to be initialized before acess. The
					cybersecurty indusrty is growng rapdly, but many compnies still lack
					proper awarness about data protecion. Attakers often expliot weak
					paswords and outdted softwere to gain acces. To mitgate these risk,
					orgnizations must implment strong polcies, reglar updatess, and
					empoyee tranning. With the increse in remot work, secuirty threatz
					have also become more complecated, requiering advnced tools and
					continous monitring to keep systms safe.
				</span>
			</AuthProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}

				<TanstackDevtools
					config={{
						position: "bottom-left",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
