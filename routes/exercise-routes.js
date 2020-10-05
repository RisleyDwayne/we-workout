/* eslint-disable camelcase */
const router = require("express").Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Exercise.findAll({
    include: [db.Post]
  }).then(dbExercise => {
    res.json(dbExercise);
  });
});

router.get("/:id", (req, res) => {
  db.Exercise.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Post]
  }).then(dbExercise => {
    res.json(dbExercise);
  });
});

router.get("/:upperbody", (req, res) => {
  db.Exercise.findAll({
    where: {
      body_zone: req.params.upperbody
    },
    include: [db.Post]
  }).then(dbExercise => {
    res.json(dbExercise);
  });
});

router.get("/:lowerbody", (req, res) => {
  db.Exercise.findAll({
    where: {
      body_zone: req.params.lowerbody
    },
    include: [db.Post]
  }).then(dbExercise => {
    res.json(dbExercise);
  });
});

router.get("/:cardio", (req, res) => {
  db.Exercise.findAll({
    where: {
      body_zone: req.params.cardio
    },
    include: [db.Post]
  }).then(dbExercise => {
    res.json(dbExercise);
  });
});

router.post("/", (req, res) => {
  db.Exercise.create(req.body).then(dbExercise => {
    res.json(dbExercise);
  });
});

router.delete("/:id", (req, res) => {
  db.Exercise.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbExercise => {
    res.json(dbExercise);
  });
});

module.exports = router;
