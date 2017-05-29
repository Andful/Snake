function Keyboard()
{
	for(var i=0;i<230;i++)
	{
		this[i]=false;
	}
	this.get=function(char)
	{
		return this[char];
	};
	var keyboard=this;
	window.onkeydown=function(evt)
	{
		keyboard[evt.which]=true;
	};
	window.onkeyup=function(evt)
	{
		keyboard[evt.which]=false;
	};
}