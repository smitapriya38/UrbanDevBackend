const aptService = require("../services/appointment.service");

exports.apt_controller_fill_info = (req, res)=>{
    const data = {
        apt_order_no: req.body.apt_order_no,
        ad_letter_no: req.body.ad_letter_no,
        empid: req.body.empid,
        ename: req.body.ename,
        father_name: req.body.father_name,
        contact: req.body.contact,
        email: req.body.email,
        dob: req.body.dob,
        gender: req.body.gender,
        marital_status: req.body.marital_status,
        category: req.body.category,
        religion: req.body.religion,
        home_state: req.body.home_state,
        home_district: req.body.home_district,
        present_address: req.body.present_address,
        permanent_address: req.body.permanent_address,
        aadhaar: req.body.aadhaar,
        pan: req.body.pan,
        experience: req.body.experience,
        apt_order_date: req.body.apt_order_date,
        apt_status: req.body.apt_status,
        emp_type: req.body.emp_type,
        designation: req.body.designation
    };
    aptService.apt_service_fill_info(data, (error, result)=>{
        if(error){
            console.log(error);
            return res.status(400).send({success:0, data: "Bad request"});
        }
        return res.status(201).send({success:1, data: result});
    });
};