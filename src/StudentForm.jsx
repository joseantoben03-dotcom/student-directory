
import React, { useState } from "react";

function StudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(name, course);
    setName("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.addBtn}>
        Add
      </button>
    </form>
  );
}

const styles = {
  form: { marginBottom: "20px" },
  input: {
    padding: "10px",
    margin: "5px",
    width: "200px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addBtn: {
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default StudentForm;
