import { redirect } from "react-router-dom";
import LoginSection from "../components/authentication/LoginSection";
import { API_BASE_URL } from "../util/constants";

export default function LoginPage() {
  return <LoginSection />;
}

export async function action({ request }) {

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw new Response({
      message: "Could not authenticated user",
      status: 500,
    });
  }

  const responseData = await response.json();
  const token = responseData.token;

  localStorage.setItem("token", token);
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 1);
  localStorage.setItem("expiration", expirationDate.toISOString());
  return redirect("/dashboard");
}
