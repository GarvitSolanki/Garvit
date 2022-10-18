const Company = require('../models/company')

module.exports = {
     create: async (req, res) => {
        return await Company.create({
            name: req.body.name
        })
    }
}