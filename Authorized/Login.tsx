import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function App() {
  const handleSuccess = (credentialResponse:any) => {
    console.log("JWT Token:", credentialResponse.credential);

    // Decode the JWT token (not secure, just for demo)
    const base64Url = credentialResponse.credential.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const user = JSON.parse(jsonPayload);
    console.log("User Info:", user);
    alert(`Hello, ${user.name}`);
  };

  return (
    <GoogleOAuthProvider clientId="649759643167-p9vhtn72or04ovc77mcnucodu9q9r52c.apps.googleusercontent.com">
      <div style={{ marginTop: 100, textAlign: "center" }}>
        <h2>React Google Login Demo</h2>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
