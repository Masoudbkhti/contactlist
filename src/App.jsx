import { useState } from "react";
import Form from "./components/Form";
import StudentList from "./components/StudentsList";

function App() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      setStudents([
        ...students,
        { id: students.length + 1, name: value, email: email, phone: phone },
      ]);
      setValue("");
      setEmail("");
      setPhone("");
    } else {
      alert("Please enter a name");
    }
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container">
      <Form
        submitFormHandler={submitFormHandler}
        inputChangeHandler={inputChangeHandler}
        emailChangeHandler={emailChangeHandler}
        phoneChangeHandler={phoneChangeHandler}
        searchHandler={searchHandler}
        value={value}
        email={email}
        phone={phone}
        searchTerm={searchTerm}
      />
      <StudentList students={students} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
