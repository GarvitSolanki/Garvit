const companyController = require('../controllers').company

module.exports =   (app) => {
    app.get('/api', (req, res) => res.status(200).send({message: 'Hello world'}))

    app.post('/api/company', (req, res) => companyController.create)
}