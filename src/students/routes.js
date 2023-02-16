const express = require("express");
const pool = require("../db");
const queries = require("./queries");
const router = express.Router();

// Get All Students
router.get("/", (req, res) => {
  pool.query(queries.getAllStudents, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.status(200).json(result.rows);
    }
  });
});

// Get Specific student

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
});

// Add students

router.post("/", (req, res) => {
  const { Name, FatherName, Age, Course } = req.body;
  pool.query(queries.isNameExist, [Name], (err, result) => {
    if (result.rows.length) {
      res.status(400).send({ message: "Name already exist" });
    } else {
      pool.query(
        queries.addStudents,
        [Name, FatherName, Age, Course],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).send({ message: "Student created successfully." });
          }
        }
      );
    }
  });
});

module.exports = router;
