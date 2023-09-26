import jwtDecode from "jwt-decode";

export default function VerifyAdmin({ children }: { children: any }) {
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken: any = jwtDecode(token);
    if (decodedToken.role === "admin") {
      return children;
    }
  } else {
    return window.location.replace("/");
  }
}
