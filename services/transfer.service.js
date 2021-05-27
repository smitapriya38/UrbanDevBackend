const db = require("../config/db.config");

exports.transfer_service_get_info = (data, callBack) =>{
    db.query(
        `select * from transferdetails`,
        data,
        (error, result)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result);
        }
    );
};