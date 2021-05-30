const db = require("../config/db.config");

exports.apt_service_fill_info = (data, callBack) =>{
    db.query(
        `insert into appointmentdetails
        (empid, apt_order_no, ad_letter_no, ename, father_name, contact, email, dob, gender, marital_status, category, religion, home_state, home_district, permanent_address, present_address, aadhaar, experience, apt_order_date, apt_status, apt_date, emp_type, designation, create_date, updated_date, pan) 
        values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        Object.values(data),
        (error)=>{
            if(error){
                callBack(error);
            }
            callBack(null, "Appointment details stored successfully");
        }
    );
};

exports.apt_service_get_info = (data, callBack) =>{
    db.query(
        `select * from appointmentdetails`,
        data,
        (error, result)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result);
        }
    );
};