const db = require("../config/db.config");

exports.city_service_get_info = (data, callBack) =>{
    db.query(
        `select * from cities`,
        data,
        (error, result)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result);
        }
    );
};