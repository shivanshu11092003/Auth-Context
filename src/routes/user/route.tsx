import { useAuth } from "@/Hooks/Auth";
import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/user")({
  component: RouteComponent,
});

function RouteComponent() {
  const auth = useAuth();
  if (!auth?.isAuthenticated) return <Navigate to="/" />;
  return (
    <>
      <button onClick={auth?.logout}>logout</button>
      <Outlet />
    </>
  );
}
