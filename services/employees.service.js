
const db = require("../config/db.config");

exports.fill_info = (data, callBack) => {
    db.query(
        `insert into joiningdetails values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [data.empid, data.po_no, data.po_date, data.city, data.ulb, data.ofcname, data.doj, data.jconf,data.jcdate,data.uco_n,data.ucdate,data.jsal],
        (error, results, fields) => {
            if(error){
                return callBack(error);
            }
            return callBack(null, 'Employee details stored successfully');
        }
    );
};