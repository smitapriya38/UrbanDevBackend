const db = require("../config/db.config");

exports.ad_service_fill_info = (data, callBack)=>{
    db.query(
        `insert into advertisementdetails values (?, ?, ?, ?)`,
        Object.values(data),
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

exports.ad_service_get_ad_letter_no = (data, callBack)=>{
    db.query(
        `select ad_letter_no from advertisementdetails`,
        data,
        (error, result)=>{
            if(error){
                return callBack(error);
            }
            console.log(result);
            return callBack(null, result);
        }
    );
};