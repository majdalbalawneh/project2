
document.getElementById("btn2").onclick = function(){
    location.href = "other/register.html";
}

document.getElementById("btn1").onclick = function(){
    document.getElementById("pop").style.display = "flex";
}

document.getElementById("close").onclick = function(){
    document.getElementById("pop").style.display = "none";
    document.getElementById("erroruser").style.display = "none";
}

let arrobj=JSON.parse(localStorage.data);
console.log(arrobj);

document.getElementById("button").onclick=function(){ 
    console.log("IN1");
    for(let i=0; i < arrobj.length; i++){
        console.log("i: "+i);
        console.log("arrobj.length: "+arrobj.length);
        if (arrobj[i].username == document.getElementById("name").value){
            if(arrobj[i].pass == document.getElementById("password").value){
             document.getElementById("main1").style.display="none";
             document.getElementById("main2").style.display="block";
             document.getElementById("pop").style.display="none";
             document.getElementById("welcome").textContent=arrobj[i].username;
             document.getElementById("position").textContent = arrobj[i].position;
             document.getElementById("erroruser").style.display = "none";
             localStorage.usrpos = arrobj[i].position;
                
            }else {
                document.getElementById("erroruser").style.display = "block";
                document.getElementById("erroruser").innerHTML= '<i class="fa-solid fa-circle-exclamation"></i> Invalid user-name or password.';
            }
           
        }else{
            console.log("error");
            document.getElementById("erroruser").style.display = "block";
            document.getElementById("erroruser").innerHTML= '<i class="fa-solid fa-circle-exclamation"></i> Invalid user-name or password.';
        }
    }
}

document.getElementById("start").onclick = function(){
    location.href = "other/quizzes.html";
}