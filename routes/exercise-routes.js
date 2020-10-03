const router = require("express").Router();
var db = require("../models");
const exercise = require("../models/exercise");


router.get("/all", function (req, res) {
    db.Exercise.all(function(data) {
        var hbsObject = {
          db: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
});

router.get("/:id", function (req, res) {

    db.Exercise.findOne({
        where: {
            id: req.params.id
        },
        include: [db.Post]
    }).then(function (dbExercise) {
        res.render("exercise", {
            exercise: dbExercise,
            name: exercise_name,
            description: exercise_description,
        });
    });
});

router.get("/:upperbody", function (req, res) {
    db.Exercise.findAll({
        where: {
            bodyZone: req.params.body_zone.zone.value[1],
        },
        include: [db.Post]
    }). then(function (dbExercise){
        res.render("upperbody", {
            exercise: dbExercise,
            body_zone: {value: 'Upper Body'},
        }
        );
    });
});

router.get("/:lowerbody", function (req, res) {
    db.Exercise.findAll({
        where: {
            body_zone: req.params.body_zone.zone.value[2],
        },
        include: [db.Post]
    }). then(function (dbExercise){
        res.render("lowerbody", {
            exercise: dbExercise,
            body_zone: {value: 'Lower Body'},
        });
    });
});

router.get("/:cardio", function (req, res) {
    db.Exercise.findAll({
        where: {
            body_zone: req.params.body_zone.zone.value[3],
        },
        include: [db.Post]
    }). then(function (dbExercise){
        res.render("cardio", {
            exercise: dbExercise,
            body_zone: {value: "Cario"},
        });
    });
});

router.post("/", function (req, res) {
    db.Exercise.create(req.body).then(function (dbExercise) {
        res.json(dbExercise);
    });
});

router.delete("/:id", function (req, res) {
    db.Exercise.destroy({
        where: {
            id: req.params.id
        }
    }).then(function (dbExercise) {
        res.json(dbExercise);
    });
});

module.exports = router