var express = require('express');
var router = express.Router();
//Import connection object
var con = require('../dbconnection');


/* GET news listing. */
router.get('/', function(req, res, next) {

    //Initialize query string
    const query_string = 'SELECT * FROM news';

    //Run query
    con.query(query_string,function (err,rows,fields) {
        if(err) throw err;

        //Create news list
        var news = JSON.stringify(rows);
        news = JSON.parse(news);


        //Return result
        res.json(news);
    });

});

//Get Single News
router.get('/:id', function(req, res, next) {

    //Initialize the query string
    const id = req.params.id;
    const query_string = 'SELECT * FROM news ' +
        'INNER JOIN authors ' +
        'ON news.author_id = authors.id' +
        ' WHERE news.id = ' + id;

    //Run query
    con.query(query_string,function (err,rows,fields) {
        if(err) throw err;

        var news_obj = {};

        //Fill news object with data
        if(rows.length > 0)
             news_obj = {
                id: rows[0].id,
                title: rows[0].title,
                content: rows[0].content,
                image: rows[0].image,
                author_name: rows[0].name,
                author_picture: rows[0].profile_picture,
            };



        //Return result
        res.json(news_obj);
    });

});

//Create News
router.post('/', function(req, res, next) {

    //Initialize the query string
    const query_string = 'INSERT INTO news(title,content,image,author_id) ' +
        'VALUES ("' + req.body.title + '","' + req.body.content + '","' + req.body.image + '","' + req.body.author_id + '")';

    //Run the Query
    con.query(query_string,function (err,rows,fields) {
        if(err) throw err;

        //Return result
        res.json("Added Successfully");
    });

});

//Delete News
router.delete('/:id', function(req, res, next) {

    //Initialize the query string
    const id = req.params.id;
    const query_string = 'DELETE FROM news WHERE id = ' + id;

    //Run the query
    con.query(query_string,function (err,rows,fields) {
        if(err) throw err;


        //Return result
        res.json("Removed Successfully");
    });

});

module.exports = router;
