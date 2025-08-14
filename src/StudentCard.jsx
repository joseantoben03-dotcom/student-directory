import React from "react";

function StudentCard({ student, onDelete }) {
  return (
    <div style={styles.card}>
      <h3>{student.name}</h3>
      <p>{student.course}</p>
      <button onClick={() => onDelete(student.id)} style={styles.deleteBtn}>
        Delete
      </button>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    color:"black",
    padding: "15px",
    margin: "10px",
    width: "200px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  deleteBtn: {
    backgroundColor: "red",
    color: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default StudentCard;
