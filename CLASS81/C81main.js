canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");


ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(150 ,143 ,430 ,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 2;
ctx.arc(250, 225, 40, 0, 2*Math.PI );
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(350, 225, 40, 0, 2*Math.PI );
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.arc(450, 225, 40, 0, 2*Math.PI );
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 2;
ctx.arc(300, 255, 40, 0, 2*Math.PI );
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 2;
ctx.arc(400, 255, 40, 0, 2*Math.PI );
ctx.stroke();



