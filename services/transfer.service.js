const db = require("../config/db.config");

exports.transfer_service_fill_info = (data, callBack) =>{
    db.query(
        `insert into transferdetails values (?, ?, ?, ?, ?, ?)`,
        Object.values(data),
        (error)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, "Transfer details stored successfully");
        }
    );
};