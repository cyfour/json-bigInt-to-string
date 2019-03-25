var bigintToStr=function(json,min,max){
    try {
        JSON.parse(json)
    }catch (e) {
        alert("JSON string error")
        return false;
    }
    var par=new RegExp("([: ]{1})([\\d]{"+min+","+max+"})([\\r\\n},]{1})","g");
    var result=json;
    result=result.replace(par,'$1"$2"$3');
    return result
}

