const router = require("express").Router();
var db = require("../models");


    router.get("/all", function (req, res) {
        db.Exercise.findAll({
            include: [db.Post]
        }).then(function (dbExercise) {
            res.json(dbExercise);
        });
    });

    router.get("/:id", function (req, res) {
        
        db.Exercise.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function (dbExercise) {
            res.json(dbExercise);
        });
    });

    router.get("/:upperbody", )

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