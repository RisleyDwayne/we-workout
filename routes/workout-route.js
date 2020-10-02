const router = require("express").Router();
var db = require("../models");

router.get("/all", function(req, res) {
    db.Workout.findAll({
        include: [db.Post]
    })
});

router.get("/:id", function (req, res) {
        
    db.Workout.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Post]
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});

router.post("/", function (req, res) {
    db.Workout.create(req.body).then(function (dbWorkout) {
        dbWorkout.add(db.Exercise, req.exerciseIds);
        res.json(dbWorkout);
    });
});

router.delete("/:id", function (req, res) {
    db.Workout.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbWorkout) {
        res.json(dbWorkout);
    });
});

module.exports = router