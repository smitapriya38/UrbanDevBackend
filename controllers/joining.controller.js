const joiningService = require("../services/joining.service");

exports.joining_controller_fill_info = (req, res) =>{
    //validation area
    const data = {
        empid: req.body.empid,
        po_no: req.body.po_no,
        po_date: req.body.po_date,
        city: req.body.city,
        ulb: req.body.ulb,
        ofcname: req.body.ofcname,
        doj: req.body.doj,
        jconf: req.body.jconf,
        jconfdate: req.body.jconfdate,
        ucno: req.body.ucno,
        joinsal: req.body.joinsal
    };
    joiningService.joining_service_fill_info(data, (error, results)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad Request"});
        }
        return res.status(201).send({
            success: 1,
            data: results
        });
    });
};

