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