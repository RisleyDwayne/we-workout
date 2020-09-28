var db = require("../models");

module.exports = function (app) {
    app.get("/api/exercise", function (req, res) {
        db.Exercise.findAll({
            include: [db.Post]
        }).then(function (dbExercise) {
            res.json(dbExercise);
        });
    });

    app.get("/api/exercise/:id", function (req, res) {
        
        db.Exercise.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Post]
        }).then(function (dbExercise) {
            res.json(dbExercise);
        });
    });

    app.post("/api/exercise", function (req, res) {
        db.Exercise.create(req.body).then(function (dbExercise) {
            res.json(dbExercise);
        });
    });

    app.delete("/api/exercise/:id", function (req, res) {
        db.Exercise.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbExercise) {
            res.json(dbExercise);
        });
    });

};