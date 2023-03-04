const { body, validationResult } = require('express-validator');
const db = require('./../../setting/db/db');

validateUser = [

    body('name')
        .not()
        .isEmpty()
        .withMessage('Name can not be empty!')
        .trim()
        .escape(),

    body('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Please provide a valid email!'),

    body('contact_number')
        .not()
        .isEmpty()
        .withMessage('Contact number cant be empty!')
        .trim()
        .escape(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(422).json({ errors: errors.array()[0].msg });
        next();
    },
];


async function list(query) {
    const { limit = 30, skip = 0 } = query;
    let queryString = `
        SELECT *FROM 
        users 
    `;
    if (query.sort == 'start_date' && query.sortDirection) {
        queryString += ` ORDER BY start_date  ${query.sortDirection}`;
    }
    queryString += ` LIMIT ${limit} OFFSET ${skip} `;
    return db.query(queryString);
}


async function count() {
    let queryString = `
        SELECT COUNT('guid') as count
        FROM users
    `;
    try {
        const response = await db.query(queryString);
        if (!response) {
            throw new Error('Error on count !');
        }

        return response[0].count;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    validateUser,
    list,
    count
};

