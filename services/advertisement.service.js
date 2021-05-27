const db = require("../config/db.config");

exports.ad_service_fill_info = (data, callBack)=>{
    db.query(
        `insert into advertisementdetails values (?, ?, ?, ?)`,
        [data.ad_letter_no, data.ad_date, data.dept, data.remarks],
        (error)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, "Advertisement details stored successfully");
        }
    );
};

exports.ad_service_get_info = (data, callBack)=>{
    db.query(
        `select * from advertisementdetails`,
        data,
        (error, result)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result);
        }
    );
};