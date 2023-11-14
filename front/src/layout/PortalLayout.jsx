import { Link } from "react-router-dom";
import React, { MouseEvent } from "react";
import { useAuth } from "../auth/AuthProvider";
import { API_URL } from "../auth/constants";

export default function PortalLayout({ children }) {
  const auth = useAuth();

  async function handleSignOut(e) {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/signout`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getRefreshToken()}`,
        },
      });
      if (response.ok) {
        auth.signout();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/me">Perfil</Link>
            </li>
            <li>
              <Link to="/me">{auth.getUser()?.username ?? ""}</Link>
            </li>
            <li>
            <Link to="/dashboard/ejercicios">Ir a Ejercicios</Link>            </li>
            <li>
              <a href="#" onClick={handleSignOut}>
                Cerrar sesion
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="dashboard">{children}</main>
    </>
  );
}