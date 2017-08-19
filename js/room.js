window.onload = function(){
    var lastpanel = document.querySelector(".panel:nth-child(4)");
    var endpanel = document.querySelector(".panel:nth-child(6)");
    var onepanel = document.querySelector(".panel:nth-child(5)");
    var firstpanel = document.querySelector(".panel:nth-child(1)");
    var room = document.querySelector(".room");
    var sw = document.documentElement.clientWidth;
    var sh = document.documentElement.clientHeight;

    firstpanel.style.cssText="height:"+sw+"px;";
    lastpanel.style.cssText="height:"+sw+"px;top:"+sh+"px";
    endpanel.style.transform="translate3d(0,0,"+(sw)+"px)";

    //单击旋转180
    var falg = false; //开关
    var falg4 = true;
    //welcome
    onepanel.onclick = function(){
        if(falg4){
            falg4 = false;
        console.log("onepanel");
        room.style.transform="rotateY(180deg)";
        room.addEventListener("webkitTransitionEnd",function(){
            falg = true;
        })
    }
    };

    //鼠标控制
    var angle=180;
    var angle1=0;
    var falg2=false;  //开关，是否angle加度数；
    document.onmousedown = function(e){
        if(falg){
            var startX = e.clientX;
            var startY = e.clientY;
            e.preventDefault();
        document.onmousemove = function(e){
            falg2 = true;
            e.preventDefault();
            room.style.transition = "null";
            var mouseX = e.clientX;
            var mouseY = e.clientY;
            var x = mouseX-startX;
            var y = mouseY-startY;
            angle1 = Math.abs(x)>Math.abs(y)?x:y;
            room.style.transform = "translate3d(0,0,-100px) rotate3d(0,1,0,"+(angle+angle1)+"deg)";
        };
        document.onmouseup = function(e){
            document.onmousemove = null;
            document.onmouseup = null;
            if(falg2){
                falg2 = false;
                angle+=angle1;
                e.preventDefault();
            }else{
                return false;
            }

        }
        }
    };

    //点击墙面放大/缩小
    var falg1=true;
    var panels = document.querySelectorAll(".panel");
    for(var i=0;i<panels.length;i++){
        panels[i].ondblclick = function(e){
            e.preventDefault();
            if(falg1){
            room.style.transform = "translate3d(0,0,400px) rotate3d(0,1,0,"+(angle+angle1)+"deg)";
            falg1=false;
            }else{
                falg1=true;
                room.style.transform = "translate3d(0,0,-100px) rotate3d(0,1,0,"+(angle+angle1)+"deg)";
            }
        }
    }

    var person = document.querySelector(".person");
    var falg3 = true;
    person.onclick = function(e){
        e.preventDefault();
        if(falg3){
            falg3 = false;
            person.style.transform="translate3d(-100px,100px,-500px) rotate3d(0,1,0,20deg)";
        }else{
            falg3 = true;
            person.style.transform="translate3d(0,0,-2px)";
        }
    };
};
