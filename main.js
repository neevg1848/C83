var touchEvent = "empty";
var lx, ly;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

var screenWidth = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;

if (screenWidth<992){
    document.getElementById('myCanvas').width=new_width;
    document.getElementById('myCanvas').width=new_height;
    document.body.style.overflow = "hidden";
}

    canvas.addEventListener("touchstart", my_touchStart);
    
    function my_touchStart(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;

        lx = e.touches[0].clientX - canvas.offsetLeft;
        ly = e.touches[0].clientY - canvas.offsetTop;
        //Addictonal Activity ends

        touchEvent = "touchstart";
    }

    canvas.addEventListener("touchmove", my_touchMove);    

    function my_touchMove(e)
    {
        currx = e.touches[0].clientX - canvas.offsetLeft;
        curry = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(lx, ly);
        ctx.lineTo(currx, curry);
        ctx.stroke();
        lx = currx; 
        ly = curry;
    }

