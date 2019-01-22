/**
* CargueController
*
* @description :: Server-side actions for handling incoming requests.
* @help :: See https://sailsjs.com/docs/concepts/actions
*/
module.exports = {
    /**
    * `CategoryController.create()`
    */
    create: function (req, res) {
        let data;
        // to convert category name's first letter capital
        data = { name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1) }
        Category.create(data).fetch().exec(function (err, category) {
            if (err) return (err);
            return res.json(category);
        })
    },

    /**
* `CategoryController.show()`
*/
show: function (req, res) {
    Category.find().exec(function (err, category) {
    return res.json(category);
    });
    },

    /**
* `CategoryController.edit()`
*/
edit: function (req, res) {
    let query;
    let data;
    query = { "id": req.param('categoryId') }
    // to convert category to first letter capital, rest of them are small letters
    data = { name: req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1) }
    Category.update(query,data).fetch().exec(function (err, category) {
    categoryName = data.name;
    return res.json(category)
    })
    },

     

/**
* `CategoryController.delete()`
*/
delete: function (req, res) {
    let query;
    query = { "id": req.param('categoryId') }
    Category.destroy(query).fetch().exec(function (err, category) {
    if (err) return(err);
    return res.json(category)
    })
    },
    };