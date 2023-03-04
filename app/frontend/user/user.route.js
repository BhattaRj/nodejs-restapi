const express = require('express');
const router = express.Router();

const { validateUser } = require('../../services/user.service');
const ctrl = require('./user.controller');

router.route('')

    /** GET /api/user - get user list */
    .get(ctrl.list)

    /** POST /api/user - Create user */
    .post(validateUser, ctrl.create)

router.route('/:id')

    /** GET /api/user/:id - Get user */
    .get(ctrl.get)

    /** PUT /api/user/:id - Update user. */
    .put(validateUser, ctrl.update)

    /** PUT /api/user/:id - Delete user. */
    .delete(ctrl.remove);

module.exports = router;

