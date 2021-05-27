const db = require("../config/db.config");

exports.training_service_fill_info = (data, callBack) =>{
    db.query(
        `insert into trainingdetails values(?, ?, ?, ?, ?, ?)`,
        [data.empid, data.ttype, data.startdate, data.enddate, data.totaldays, data.attendance],
        (error)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, "Training details stored successfully");
        }
    );
};


exports.training_service_get_info = (data, callBack) =>{
    db.query(
        `select * from trainingdetails`,
        [],
        (error, result)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result);
        }
    );
};