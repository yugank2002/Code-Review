const aiService = require('../services/ai.services')

module.exports.getReview = async (req,res) => {
    const code = req.body.code;

    if(!code){
        return res.status(400).send({message: 'Please provide a prompt.'});
    }

    const response = await aiService(code);

    res.send(response);
}