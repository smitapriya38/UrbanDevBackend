const db = require("../config/db.config");

exports.salary_service_fill_info = (data, callBack)=>{
    db.query(
        `insert into salarydetails values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.orderno, data.empid, data.sal, data.inc_amt, data.sal_aft_inc, data.orderdate, data.absent, data.month_sal, data.sal_status],
        (error)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, "Salary details stored successfully"); 
        }
    );
};

exports.salary_service_get_info = (data, callBack)=>{
    db.query(
        `select * from salarydetails`,
        [],
        (error, result)=>{
            if(error){
                return callBack(error);
            }
            return callBack(null, result); 
        }
    );
};