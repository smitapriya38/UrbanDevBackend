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

exports.joining_service_get_emp_info = (data, callBack) =>{
    db.query(
        `select empid from joiningdetails`,
        data,
        (error, result)=>{
            if(error){
               return callBack(error);
            }
            return callBack(null, result);
        }
    );
};

exports.joining_service_delete_info = (data, callBack) =>{
    db.query(
        `delete from salarydetails where empid=?`,
        Object.values(data),
        (error, result)=>{
            if(error){
                console.log("Here1");
                return callBack(error);
            }
            if(result.affectedRows===1)
                return callBack(null, "Row(s) successfully deleted");
            else{
                console.log("Here2");
                return callBack(new Error("Not a valid id was provided"));
            }
        }
    );
};