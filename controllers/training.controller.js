const trainingService = require("../services/training.service");
const moment = require("moment");

exports.training_controller_fill_info = (req, res)=>{
    const data = {
        empid: req.body.empid,
        ttype: req.body.ttype,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        totaldays: moment(req.body.enddate).diff(moment(req.body.startdate), 'days')+1,
        attendance: req.body.attendance
    };
    trainingService.training_service_fill_info(data, (error, results)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad Request"});
        }
        return res.status(201).send({success: 1, data: results});
    });
};