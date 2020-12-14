document.getElementById("btAlex").addEventListener("click",mostrarInfo);
document.getElementById("btMary").addEventListener("click",mostrarInfo);
document.getElementById("btOmar").addEventListener("click",mostrarInfo);
document.getElementById("btWendy").addEventListener("click",mostrarInfo);
function mostrarInfo(){
    let info = "";
    if(this.id == "btAlex"){
        info = "E-mail: alscipion@gmail.com\nPhone: 314 7783240";
    }else if(this.id=="btMary"){
        info = "E-mail: mafe_crespo@hotmail.com\nPhone: 316 4802936";
    }else if(this.id=="btOmar"){
        info = "E-mail: ocarjul@hotmail.com\nPhone:";
    }else if(this.id=="btWendy"){
        info = "E-mail: wacm2006@hotmail.com\nPhone:";
    }
    alert(info);
}