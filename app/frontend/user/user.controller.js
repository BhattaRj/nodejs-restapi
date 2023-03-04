const UserService = require('../../services/user.service');

async function list(req, res, next) {
    try {
        const users = await UserService.list(req.query);
        const userCount = await UserService.count();
        res.json({
            total_count: userCount,
            items: users
        });
    } catch (error) {
        next(error);
    }
}

async function get(req, res, next) {
    try {
        const user = await UserService.get(req.params.id);
        res.json(user);
    } catch (error) {
        next(error);
    }
}

async function update(req, res, next) {
    try {
        const user = await UserService.update(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
}

async function create(req, res, next) {
    try {
        const user = await UserService.create(req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
}

async function remove(req, res, next) {
    try {
        const user = await UserService.remove(req.params.id);
        res.json(user);
    } catch (error) {
        next(error);
    }
}


module.exports = {
    list,
    get,
    create,
    update,
    remove,
}