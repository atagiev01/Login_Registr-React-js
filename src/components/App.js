import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import UpdateProfile from "./UpdateProfile";
import SignUp from "./SignUp";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute"; 


function App() {
  return (
    <div className="text-white" style={{ background: "rgb(70 0 0)"}}>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/" Component={PrivateRoute}>
                  <Route path="/" Component={Dashboard} />
                  <Route path="/update-profile" Component={UpdateProfile} />
                </Route>

              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
