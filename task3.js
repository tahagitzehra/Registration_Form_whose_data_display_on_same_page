function myfunction() {
    debugger
    let strTxt = "Name : "+document.getElementById("Name").value;
    let strTxt1 = "Email : "+document.getElementById("Email").value;
    let strTxt2 = "Contact Number : "+document.getElementById("Contact Number").value;
    let strTxt3 = "Address : "+document.getElementById("address").value;
    if(male.checked){
        var strTxt4 = "Gender : Male";
    }
    else if(female.checked){
        var strTxt4 = "Gender : Female";
    }
    else if(other.checked){
        var strTxt4 = "Gender : Other";
    }
    
    // var strText1 = document.getElementById("Email").value;
   
    document.getElementById("p1").innerHTML = strTxt;
    document.getElementById("p2").innerHTML = strTxt1;
    document.getElementById("p3").innerHTML = strTxt2;
    document.getElementById("p4").innerHTML = strTxt3;
    document.getElementById("p4").innerHTML = strTxt4;

}