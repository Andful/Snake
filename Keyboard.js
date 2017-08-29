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
	window.addEventListener("keydown",function(evt)
	{
		keyboard[evt.which]=true;
	});
	window.addEventListener("keyup",function(evt)
	{
		keyboard[evt.which]=false;
	})
}