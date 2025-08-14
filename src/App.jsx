import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentCard from "./StudentCard";

function App() {
  const [students, setStudents] = useState([]);

  // Add student
  const addStudent = (name, course) => {
    if (name.trim() && course.trim()) {
      const newStudent = { id: Date.now(), name, course };
      setStudents([...students, newStudent]);
    } else {
      alert("Please fill in both fields!");
    }
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Student Directory</h1>
      <StudentForm onAdd={addStudent} />

      <div style={styles.cardContainer}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onDelete={deleteStudent}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", padding: "20px", fontFamily: "Arial" },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default App;
