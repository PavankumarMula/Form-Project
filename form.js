document.getElementById('btn').addEventListener('click',userdetails);
var fullname=document.getElementById('fullname').value;
var email=document.getElementById('email').value;
var phone=document.getElementById('Phone').value;
var date=document.getElementById('date').value;
var time=document.getElementById('time').value;
//storing as an object
var inputs=document.querySelectorAll('input');
console.log(inputs);
var string_obj=JSON.stringify(inputs)

function userdetails(e){
    localStorage.setItem('name',fullname);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);
    localStorage.setItem('date',date);
    localStorage.setItem('time',time);
    localStorage.setItem('userobj',string_obj);
}
locatArray = new Array();

    function save() {
        var fieldValue = document.getElementById("input").value;
        var locatItem = locatArray.push(fieldValue);

        localStorage.setItem("text", JSON.stringify(locatArray));
    }

    window.onload = function load() {
        var storedValue = JSON.parse(localStorage.getItem("text"));
        if(storedValue) {
            document.getElementById("display").innerHTML = (storedValue);
        }
    }
