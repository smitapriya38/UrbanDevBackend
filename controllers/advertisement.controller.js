const adService = require("../services/advertisement.service");

exports.ad_controller_fill_info = (req, res)=>{
    const data = {
        ad_letter_no: req.body.ad_letter_no,
        ad_date: req.body.ad_date,
        dept: req.body.dept,
        remarks: req.body.remarks,
        create_date: req.body.create_date,
        updated_date: req.body.updated_date,
    };
    adService.ad_service_fill_info(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(201).send({success: 1, data: result});
    });
};

exports.ad_controller_get_info = (req, res)=>{
    const data = {};
    adService.ad_service_get_info(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(201).send({success: 1, data: result});
    });
};

exports.ad_controller_get_ad_letter_no = (req, res)=>{
    const data = {};
    adService.ad_service_get_ad_letter_no(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(201).send({success: 1, data: result});
    });
};