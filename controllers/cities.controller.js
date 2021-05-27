const cityService = require("../services/cities.service");

exports.city_controller_get_info = (req, res) =>{
    const data = {};
    cityService.city_service_get_info(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(201).send(result);
    });
};