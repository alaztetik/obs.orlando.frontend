import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/students/Students";
import ProspectForm from "./pages/students/ProspectForm";
import ProspectsAll from "./pages/students/ProspectsAll";
import Payments from "./pages/payments/Payments";
import StudentsAll from "./pages/students/StudentsAll";
import StudentForm from "./pages/students/StudentForm";
import Education from "./pages/education/Education";
import Enrollments from "./pages/education/Enrollments";
import EnrollmentForm from "./pages/education/EnrollmentForm";
import Groups from "./pages/education/Groups";
import GroupForm from "./pages/education/GroupForm";
import Reports from "./pages/reports/Reports";
import Expenses from "./pages/payments/Expenses";
import ExpenseForm from "./pages/payments/ExpenseForm";
import ReceivePayment from "./pages/payments/ReceivePayment";

export default function App() {
  return (
    <div className="App m-0 p-0 w-full">
      <BrowserRouter>
      
        <Navbar />

        <div className="pages m-0 p-0 bg-red-500">
          <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/login" element={<Login />} />
            

            <Route path="/dashboard" element={<Dashboard />} />


            <Route path="/students" element={<Students />} />

            <Route path="/students/students" element={<StudentsAll />} />

            <Route path="/students/student" element={<StudentForm />} />

            <Route path="/students/prospects" element={<ProspectsAll />} />

            <Route path="/students/prospect" element={<ProspectForm />} />


            <Route path="/education" element={<Education />} />

            <Route path="/education/enrollments" element={<Enrollments />} />

            <Route path="/education/enrollment" element={<EnrollmentForm />} />

            <Route path="/education/groups" element={<Groups />} />

            <Route path="/education/group" element={<GroupForm />} />
            

            <Route path="/payments" element={<Payments />} />

            <Route path="/payments/payment" element={<ReceivePayment />} />

            <Route path="/payments/expenses" element={<Expenses />} />

            <Route path='/payments/expense' element={<ExpenseForm />} />


            <Route path='/reports' element={<Reports />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
