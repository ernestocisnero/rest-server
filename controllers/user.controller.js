const { response } = require('express');

const getUsers = (req, resp = response) => {

    const { q, nombre, apikey, page = 123 } = req.query;

    resp.json({
        msg: "API get - controller", 
        q,
        nombre,
        apikey,
        page
    });
}

const postUsers = (req, resp = response) => {

    const { name, _id, ...rest } = req.body;
    
    resp.json({
        msg: "API post - controller",
        name,
        _id,
        ...rest
    });
}

const putUsers = (req, resp = response) => {

    const _id = req.params._id;

    resp.json({
        msg: "API put - controller",
        _id
    });
}


const deleteUser = (req, resp = response) => {
    const _id = req.params._id;
    resp.json({
        msg: "API delete - controller",
        _id
    });
}

const patchUser = (req, resp = response) => {
    const _id = req.params._id;
    resp.json({
        msg: "API patch - controller",
        _id
    });
}




module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUser,
    patchUser
}