var bigintToStr=function(json){
    try {
        JSON.parse(json)
    }catch (e) {
        alert("JSON string error")
        return false;
    }
    var result=json;
    var par = /([^\\]{1}[":]{2}[ \[]{0,2})([\d]{16,})([\r\n},\]]{1})/g;
    const arrReg = /\[((\d,)*\d)*\]/g;
    result = result.replace(arrReg, (match) => {
        if (match.length > 2) {
            return match.charAt(0) + match.slice(1, match.length - 1).replace(/([\d]{16,})/g, '"$1"') + match.charAt(match.length - 1)
        } else {
            return match
        }
    })
    result = result.replace(par, '$1"$2"$3');
    return result;
}

