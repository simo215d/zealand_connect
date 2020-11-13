var express = require('express');
var router = express.Router();
const db = require('../models');
const limit = 10;


router.get('/', function (req, res, next) {
    var query = req.query;
    var offset = 0;

    var sort;
    var sortName;

    var dtmCb = ""
    var hoeCb = ""
    var foeCb = ""
    var ihmCb = ""
    var ioeCb = ""
    var bkCb = ""
    var btCb = ""
    var insCb = ""

    console.log(query);

    if (query.page != null) {
        offset = limit * parseInt(query.page-1);
    }

    if (query.sort == null) {
        sort = "updatedAt";
        sortName = "Senest opdateret";
    } else {
        sort = query.sort
        switch (sort) {
            case "overskrift":
                sortName = "Overskrift";
                break;
            case "updatedAt":
                sortName = "Senest opdateret";
        }
    }

    var filter = JSON.parse("[]");
    if (query.uddannelse != null) {

        if (req.query.uddannelse.includes("Datamatiker")) {
            dtmCb = "checked";
        }
        if (req.query.uddannelse.includes("Handelsøkonom")) {
            hoeCb = "checked";
        }
        if (req.query.uddannelse.includes("Finansøkonom")) {
            foeCb = "checked";
        }
        if (req.query.uddannelse.includes("International Handel og Markedsføring")) {
            ihmCb = "checked";
        }
        if (req.query.uddannelse.includes("Innovation og Entrepreneurship")) {
            ioeCb = "checked";
        }
        if (req.query.uddannelse.includes("Bygningskontruktør")) {
            bkCb = "checked";
        }
        if (req.query.uddannelse.includes("Byggetekniker")) {
            btCb = "checked";
        }
        if (req.query.uddannelse.includes("Installatør, stærkstrøm")) {
            insCb = "checked";
        }

        if (Array.isArray(query.uddannelse)) {
            for (let index = 0; index < query.uddannelse.length; index++) {
                const element = "" + query.uddannelse[index];
                let obj = {
                    uddannelse: element
                };
                filter.push(obj);
            }
        } else {
            let obj = {
                uddannelse: query.uddannelse
            };
            console.log(obj);
            filter.push(obj);
        }
        console.log(filter);

        if (filter.includes("Datamatiker")) {
            dtmCb = "checked";
        }
        if (filter.includes("Handelsøkonom")) {
            hoeCb = "checked";
        }
        if (filter.includes("Finansøkonom")) {
            foeCb = "checked";
        }
        if (filter.includes("International Handel og Markedsføring")) {
            ihmCb = "checked";
        }
        if (filter.includes("Innovation og Entrepreneurship")) {
            ioeCb = "checked";
        }
        if (filter.includes("Bygningskontruktør")) {
            bkCb = "checked";
        }
        if (filter.includes("Byggetekniker")) {
            btCb = "checked";
        }
        if (filter.includes("Installatør, stærkstrøm")) {
            insCb = "checked";
        }

        const {
            Op
        } = require("sequelize");
        db.CV.findAll({
            limit: limit,
            offset: offset,
            raw: true,
            order: [
                [sort, 'DESC']
            ],
            where: {
                [Op.or]: filter
            }
        }).then((cvs) => {

            res.render('search_cv', {
                json: cvs,
                resultater: cvs.length,
                sortName: sortName,
                sort: sort,
                show: "show",
                dtmCb:dtmCb,
                hoeCb:hoeCb,
                foeCb:foeCb,
                ihmCb:ihmCb,
                ioeCb:ioeCb,
                bkCb:bkCb,
                btCb:btCb,
                insCb:insCb
            });
        })
    } else {

        const {
            Op
        } = require("sequelize");
        db.CV.findAll({
            limit: limit,
            offset: offset,
            raw: true,
            order: [
                [sort, 'DESC']
            ]
        }).then((cvs) => {

            res.render('search_cv', {
                json: cvs,
                resultater: cvs.length,
                sortName: sortName,
                sort: sort,
                dtmCb:dtmCb,
                hoeCb:hoeCb,
                foeCb:foeCb,
                ihmCb:ihmCb,
                ioeCb:ioeCb,
                bkCb:bkCb,
                btCb:btCb,
                insCb:insCb
            });
        })

    }
});

router.get('/:id', function (req, res) {
    let id = req.params.id

    db.CV.findOne({
        raw: true,
        where: {
            id: parseInt(id)
        }
    }).then((cv) => {
        console.log(cv);
      
        if (cv.hjemmeside.includes("://")) {
            console.log(cv.hjemmeside.indexOf("://") + 3)
            cv.hjemmeside = cv.hjemmeside.substring(cv.hjemmeside.indexOf("://") + 3);
            //console.log(cv.linkedIn);
        } 
        
        if (cv.linkedIn.includes("://")) {
            console.log(cv.linkedIn.indexOf("://")  + 3)
            cv.linkedIn = cv.linkedIn.substring(cv.linkedIn.indexOf("://")  + 3);
            //console.log(cv.linkedIn);
        }

        res.render('cv', {json: cv});
      
    });

});


module.exports = router;