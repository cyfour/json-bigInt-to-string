var bigintToStr=function(json,min,max){
    try {
        JSON.parse(json)
    }catch (e) {
        alert("JSON string error")
        return false;
    }
    var par=new RegExp("[: ]{1}[\\d]{"+min+","+max+"}[\\r\\n},]{1}","g");
    var match_arr = json.match(par);
    var result=json;
    if(match_arr){
        match_arr.forEach(d=>{
            result=json.replace(d,d[0]+'"'+d.slice(1,d.length-1)+'"'+d[d.length-1]);
        })
    }
    return result;
}

