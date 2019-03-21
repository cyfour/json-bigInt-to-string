# json-bigInt-to-string
json-bigInt-to-string

Because the precision loss of large integers in JS is essentially the same as that of floating-point numbers, and the largest tail digit is 52 bits, the largest integer that can be accurately represented in JS is Math. pow (2, 53), and the decimal system is 9007199254740992.

Json-bigInt-to-string enables large integers in JSON strings to be converted into strings

test:

    var testJSON_1="{num:123456789123456789}";// normal
    console.log(bigintToStr(testJSON_1,16,""));// {num:"123456789123456789"}
    console.log(bigintToStr(testJSON_1,20,""));//{num:123456789123456789}  min 20
    console.log(bigintToStr(testJSON_1,16,17));//{num:123456789123456789}  min 16 max 17
    var testJSON_2="{num:123456789123456789,num2:12345678912345678912}";//
    console.log(bigintToStr(testJSON_2,20,""));// {num:123456789123456789,num2:"12345678912345678912"}
    var testJSON_3="{\n" +
        "  \"num\": 123456789123456789,\n" +
        "  \"num2\": 12345678912345678912,\n" +
        "}";//   other formats
    console.log(bigintToStr(testJSON_3,20,""));
    /*{
        "num": 123456789123456789,
        "num2": "12345678912345678912",
    }*/
