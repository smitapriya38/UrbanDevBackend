const transferService = require("../services/transfer.service");

exports.transfer_controller_fill_info = (req, res)=>{
    const data = {
        empid: req.body.empid,
        ulb_from: req.body.ulb_from,
        ulb_to: req.body.ulb_to,
        order_no: req.body.order_no,
        order_date: req.body.order_date,
        joindate: req.body.joindate,
    };
    transferService.transfer_service_fill_info(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success:0, data: "Bad request"});
        }
        return res.status(201).send({success:1, data: result});
    });
};

exports.transfer_controller_get_info = (req, res)=>{
    const data = {};
    transferService.transfer_service_get_info(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success:0, data: "Bad request"});
        }
        return res.status(201).send({success:1, data: result});
    });
};