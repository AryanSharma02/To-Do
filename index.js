var count=0;
function addpls(){
    var task = document.getElementById("i1").value;
    var x = document.getElementById("pop");
    var y = document.getElementById("overlay");
    y.classList.remove("active");
    x.classList.remove("active");
    document.getElementById("i1").value='';
    
    if(task==''){
        return;
    }
    task = task.charAt(0).toUpperCase() + task.slice(1);

    document.getElementById("list").innerHTML += " <div class=task id=remove"+count+"><div class=topic><div>"+task+"</div><div> <button type=button onclick=addtoList2("+count+")>+</button> <button type=button onclick=removediv("+count+")>x</button>&nbsp;</div></div><div class=todo id=todo"+count+"></div></div> ";
    count++;
}

function displaynone(d){
    var x=document.getElementById(d);
    x.style.display="none";
}

function removediv(a){
    var d = "remove"+a;
    var x = document.getElementById(d);
    x.style.scale="0";
    setTimeout(displaynone, 1000,d);
    
}

function addtask(){
    /*var task = "";*/ 
    var x = document.getElementById("pop");
    var y = document.getElementById("overlay");
    y.classList.add("active");
    x.classList.add("active");
    /*if(task==null){
        return;
    }
    task = task.charAt(0).toUpperCase() + task.slice(1);

    document.getElementById("list").innerHTML += " <div class = task><div class=topic><div>"+task+"</div><div><button type=button onclick=addtoList("+count+")>+</button></div></div><div class=todo id=todo"+count+"></div></div> ";
    count++;*/

}
function remove(){
    var x = document.getElementById("pop");
    var y = document.getElementById("overlay");
    y.classList.remove("active");
    x.classList.remove("active");
}

function remove1(){
    var x = document.getElementById("pop1");
    var y = document.getElementById("overlay");
    y.classList.remove("active");
    x.classList.remove("active");
}


var cnt=0;
function check(a){
    var x = "d"+a;
    var z = "l"+a;
    var y = document.getElementById(x);
    //var w = document.getElementById(z);
    //console.log(w);
    if(y.checked == true){
        document.getElementById(z).setAttribute("style","text-decoration:line-through; opacity:0.5;");
    }else{
        document.getElementById(z).setAttribute("style","text-decoration:none; opacity:1;");
    }
    
}

function addtoList2(x){

    
    var todo = "";
    
    todo  = prompt("Enter multiple sub-tasks  , (comma) seperated");
    if(todo==null){
        return;
    }
    var temp="";
    for(var i=0; i<=todo.length ; i++){
        if(i==todo.length || todo[i] == ","){
            var a = "todo"+x;
            console.log(temp);
            temp = temp.charAt(0).toUpperCase() + temp.slice(1);
            document.getElementById(a).innerHTML += "<input type=checkbox id=d"+cnt+" onclick=check("+cnt+")><label id=l"+cnt+">"+temp+"</label><br>";
            cnt++;
            temp="";
        }else{
            temp = temp+todo[i];
        }
    }

    
    
}











/*
<div class = task><div class=topic><div>My todo list</div><div><button type=submit>+</button></div></div><div class=todo><form><input type =checkbox id=d1><label for=d1>go to supermarket</label><br><input type =checkbox id=d2><label for=d1>buy vegetables</label></form></div></div>
var task = document.createElement('div');
task.classList.add('task');
var topic  = document.createElement('div');
topic.classList.add('topic');
*/