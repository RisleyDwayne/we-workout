const router = require("express").Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Workout.findAll({
    include: [db.Post]
  });
});

router.get("/:id", (req, res) => {
  db.Workout.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Post]
  }).then(dbWorkout => {
    res.json(dbWorkout);
  });
});

router.post("/", (req, res) => {
  db.Workout.create(req.body).then(dbWorkout => {
    dbWorkout.add(db.Exercise, req.exerciseIds);
    res.json(dbWorkout);
  });
});

router.delete("/:id", (req, res) => {
  db.Workout.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbWorkout => {
    res.json(dbWorkout);
  });
});

module.exports = router;
