
//=========================================================GUARDS==============================================================
function strip(s: string| number){
    if( typeof s ==='number'){
        return s.toString();
    }
    else{
        return s.trim()    
    } 
}

class MyResponse {
    header ='response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error message'
}
    
function handle(res: MyResponse | MyError) {
    if(res instanceof MyResponse) {
        return {info: res.header + res.result}
    }else {
        return res.header + res.message;
    }
}
//=====================================
type AlertType = 'success' | 'danger' | 'warning'

function setAlertType(type: AlertType){
    /// 
}

setAlertType('success')
setAlertType('danger')
// setAlertType('default') -- cant accept it


