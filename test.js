function Divde(num1 , num2){
    if (num2 == 0) {
        throw "Error"
    }
    return num1 / num2
}
 
 try{
    let num = Divde(2 , 0)
    console.log(num)
 } 
 catch(e){
    console.log("ckghdfj")
 }
 