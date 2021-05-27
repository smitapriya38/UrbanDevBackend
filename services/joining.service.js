const db = require("../config/db.config");

exports.joining_service_fill_info = (data, callBack) => {
    db.query(
        `insert into joiningdetails values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.empid, data.po_no, data.po_date, data.city, data.ulb, data.ofcname, data.doj, data.jconf, data.jconfdate, data.ucno, data.joinsal],
        (error) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, 'Employee details stored successfully');
        }
    );
};

exports.joining_service_get_info = (data, callBack) =>{
    db.query(
        `select * from joiningdetails`,
        data,
        (error, result)=>{
            if(error){
                callBack(error);
            }
            callBack(null, result);
        }
    );
};