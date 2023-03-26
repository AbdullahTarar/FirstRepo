numsquare=6
var colors=generaterandomcolors(numsquare);
var square=document.querySelectorAll(".square");
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("colordisplay")
var message=document.getElementById("message")
var h1=document.querySelector("h1");
var button=document.querySelector("#reset")
var easybtn=document.querySelector("#easybtn")
var hardbtn=document.querySelector("#hardbtn")
colordisplay.textContent=pickedcolor;
for(var i=0;i<square.length;i++)
{
	square[i].style.background=colors[i];

	square[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		 
		if(clickedcolor === pickedcolor)
		{
			message.textContent="Correct!"
			changecolors(clickedcolor);
			h1.style.background=clickedcolor;
			button.textContent="Play again?"

		}
		else{
			this.style.background="#232323";
			message.textContent="Try again";
		}
		
	})
}
function changecolors(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background = color;
	}

} 
function pickcolor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generaterandomcolors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolors())

	}

	return arr;
}

function randomcolors()
{
	 var r = Math.floor(Math.random()*256);
	 var g = Math.floor(Math.random()*256);
	 var b = Math.floor(Math.random()*256);

	 return "rgb(" + r +", " + g + ", " + b +")";
}

button.addEventListener("click",function(){
	
	button.textContent="New Colors"
	colors=generaterandomcolors(6);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background=colors[i]
	}
	h1.style.background= "steelblue"
	message.textContent=""

})

easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected")
	easybtn.classList.add("selected")
	numsquare=3
	colors=generaterandomcolors(numsquare);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor
	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.background=colors[i]

		}
		else{
			square[i].style.display="none"
		}
		
	}


})
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected")
	easybtn.classList.remove("selected")
	numsquare=6
	colors=generaterandomcolors(numsquare);
	pickedcolor=pickcolor();
	colordisplay.textContent=pickedcolor
	for(var i=0;i<square.length;i++)
	{
		square[i].style.background=colors[i]
		square[i].style.display="block"
	
	}
})