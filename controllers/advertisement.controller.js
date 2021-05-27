const adService = require("../services/advertisement.service");

exports.ad_controller_fill_info = (req, res)=>{
    const data = {
        ad_letter_no: req.body.ad_letter_no,
        ad_date: req.body.ad_date,
        dept: req.body.dept,
        remarks: req.body.remarks
    };
    adService.ad_service_fill_info(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(201).send({success: 1, data: result});
    });
};