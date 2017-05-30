var blockSize=16;
var width=20;
var height=20;
var grid = createArray(width,height);

var canvas = document.getElementById("canvas");
var points=document.getElementById("points");
canvas.width=width*blockSize;
canvas.height=height*blockSize;
var graphics = canvas.getContext("2d");

//var mouse=new Mouse(canvas);
var keyboard=new Keyboard();

function Vector2i(x,y)
{
	this.x=x;
	this.y=y;
}

function touchingSnake(snake,vector2i)
{
	for(var i=0;i<snake.length;i++)
	{
		if(snake[i].x==vector2i.x && snake[i].y==vector2i.y)
		{
			return true;
		}
	}
	return false;
}

var dir=new Vector2i(0,1);

var snake=[];
snake.push(new Vector2i(0,0));

var pos=new Vector2i(0,0);

var point = new Vector2i(parseInt(Math.random()*width,10),parseInt(Math.random()*height,10));

function update()
{
	var newDir=new Vector2i(dir.x,dir.y);
	if(keyboard.get(37) && !(dir.x==1 && dir.y==0))
	{
		newDir.x=-1;
		newDir.y=0;
	}
	if(keyboard.get(38)&& !(dir.x==0 && dir.y==1))
	{
		newDir.x=0;
		newDir.y=-1;
	}
	if(keyboard.get(39)&& !(dir.x==-1 && dir.y==0))
	{
		newDir.x=1;
		newDir.y=0;
	}
	if(keyboard.get(40)&& !(dir.x==0 && dir.y==-1))
	{
		newDir.x=0;
		newDir.y=1;
	}
	dir=newDir
	pos.x+=dir.x;
	pos.y+=dir.y;
	while(pos.x<0)
	{
		pos.x+=width;
	}
	while(pos.y<0)
	{
		pos.y+=height;
	}
	while(pos.x>=width)
	{
		pos.x-=width;
	}
	while(pos.y>=width)
	{
		pos.y-=width;
	}
	if(touchingSnake(snake,pos))
	{
		window.alert("game over");
		while(snake.length>0)
		{
			snake.pop();
		}
		point.x=-1;
		point.y=-1;

	}
	snake.push(new Vector2i(pos.x,pos.y));
	if(pos.x==point.x && pos.y==point.y)
	{
		point=new Vector2i(parseInt(Math.random()*width,10),parseInt(Math.random()*height,10));
		while(touchingSnake(snake,point))
		{
			point=new Vector2i(parseInt(Math.random()*width,10),parseInt(Math.random()*height,10));
		}
		points.innerText=parseInt(points.innerText)+10;
	}
	else
	{
		snake.shift();
	}
	console.log(point.x);
	graphics.fillStyle="#000000";
	graphics.fillRect(0,0,canvas.width,canvas.height);
	graphics.fillStyle="#FF0000";
	for(var i=0;i<snake.length;i++)
	{
		var toDraw=snake[i];
		graphics.fillRect(toDraw.x*blockSize,
			toDraw.y*blockSize,
			blockSize,
			blockSize);
	}
	graphics.fillStyle="#0000FF";
	graphics.fillRect(point.x*blockSize,
			point.y*blockSize,
			blockSize,
			blockSize);
}

setInterval(update,1000/15);