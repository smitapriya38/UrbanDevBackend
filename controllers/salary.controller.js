const salaryService = require("../services/salary.service");

exports.salary_controller_fill_info = (req, res)=>{
    const data = {
        orderno: req.body.orderno,
        empid: req.body.empid,
        sal: req.body.sal,
        inc_amt: req.body.inc_amt,
        sal_aft_inc: req.body.sal*(1+(req.body.inc_amt/100)),
        orderdate: req.body.orderdate,
        absent: req.body.absent,
        sal_status: req.body.sal_status
    };
    data.month_sal = data.sal_aft_inc/12;
    
    salaryService.salary_service_fill_info(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success: 0, data: "Bad request"});
        }
        return res.status(201).send({success: 1, data: result});
    });
};