const db = require("../config/db.config");

exports.apt_service_fill_info = (data, callBack) =>{
    db.query(
        `insert into appointmentdetails values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
                callBack(error);
            }
            callBack(null, result);
        }
    );
};