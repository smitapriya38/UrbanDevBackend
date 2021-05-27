const db = require("../config/db.config");

exports.apt_service_fill_info = (data, callBack) =>{
    db.query(
        `insert into appointmentdetails values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        Object.values(data),
        (error)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, "Appointment details stored successfully");
        }
    );
};