document.getElementById('btn').addEventListener('click',userdetails);
var fullname=document.getElementById('fullname').value;
var email=document.getElementById('email').value;
var phone=document.getElementById('Phone').value;
var date=document.getElementById('date').value;
var time=document.getElementById('time').value;

function userdetails(e){
    localStorage.setItem('name',fullname);
    localStorage.setItem('email',email);
    localStorage.setItem('phone',phone);
    localStorage.setItem('date',date);
    localStorage.setItem('time',time);
}
