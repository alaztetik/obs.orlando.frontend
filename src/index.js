import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./context/AuthProvider";
import { StudentProvider } from "./context/StudentContext";
import { EnrollmentProvider } from "./context/EnrollmentContext";
import {ExpenseProvider} from "./context/ExpenseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StudentProvider>
        <EnrollmentProvider>
          <ExpenseProvider>
            <App />
          </ExpenseProvider>
        </EnrollmentProvider>
      </StudentProvider>
    </AuthProvider>
  </React.StrictMode>
);
