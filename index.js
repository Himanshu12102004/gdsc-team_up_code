let n=40;
let a=document.getElementById("grid");
a.style.display="grid";
a.style.gridTemplateColumns=`repeat(${n},20px)`;
a.style.gridTemplateRows=`repeat(${n},20px)`;
for(let i=0;i<n;i++)
{
for(let j=0;j<n;j++)
{
let b=document.createElement("div");
b.setAttribute("class","element");
b.setAttribute("id",`a${i}-${j}`);
a.appendChild(b);

}

}
for(i=3;i<=10;i++)
{
document.getElementById('a2-'+i).style.backgroundColor="black";

}


for(i=4;i<=11;i++)
{
document.getElementById(`a${i}-`+1).style.backgroundColor="black";

}

for(i=4;i<=9;i++)
{
document.getElementById(`a${i}-`+12).style.backgroundColor="black";

}
for(i=3;i<=8;i++)
{
document.getElementById('a12-'+i).style.backgroundColor="black";

}

for(i=3;i<=11;i++)
{
document.getElementById(`a${i}-`+3).style.backgroundColor="rgb(1,128,255)";

}
for(i=4;i<=10;i++)
{
document.getElementById(`a${i}-`+2).style.backgroundColor="rgb(1,128,255)";

}
for(i=3;i<=9;i++)
{
document.getElementById(`a${i}-`+10).style.backgroundColor="rgb(1,128,255)";

}
for(i=3;i<=10;i++)
{
document.getElementById(`a${i}-`+9).style.backgroundColor="rgb(1,128,255)";

}
for(i=4;i<=8;i++)
{
document.getElementById(`a${i}-`+11).style.backgroundColor="rgb(1,128,255)";

}
for(i=3;i<=8;i++)
{
document.getElementById(`a${i}-`+8).style.backgroundColor="rgb(1,128,255)";

}
for(i=3;i<=8;i++)
{
document.getElementById(`a${i}-`+4).style.backgroundColor="rgb(1,128,255)";

}
for(i=5;i<=7;i++)
{
document.getElementById('a7-'+i).style.backgroundColor="rgb(1,128,255)";

}
for(i=5;i<=7;i++)
{
document.getElementById('a8-'+i).style.backgroundColor="rgb(1,128,255)";

}
for(i=4;i<=8;i++)
{
document.getElementById('a10-'+i).style.backgroundColor="rgb(255,187,128)";

}
for(i=4;i<=8;i++)
{
document.getElementById('a11-'+i).style.backgroundColor="rgb(255,187,128)";

}
for(i=11;i<=13;i++)
{
document.getElementById('a10-'+i).style.backgroundColor="rgb(255,0,0)";

}
for(i=11;i<=13;i++)
{
document.getElementById('a12-'+i).style.backgroundColor="rgb(255,0,0)";

}
for(i=11;i<=13;i++)
{
document.getElementById('a16-'+i).style.backgroundColor="rgb(255,0,0)";

}
for(i=11;i<=13;i++)
{
document.getElementById('a18-'+i).style.backgroundColor="rgb(255,0,0)";

}
for(i=13;i<=15;i++)
{
document.getElementById(`a${i}-`+10).style.backgroundColor="rgb(255,0,0)";

}
for(i=13;i<=15;i++)
{
document.getElementById(`a${i}-`+14).style.backgroundColor="rgb(255,0,0)";

}
for(i=11;i<=13;i++)
{
document.getElementById('a13-'+i).style.backgroundColor="rgb(1,128,255)";

}
for(i=11;i<=13;i++)
{
document.getElementById('a15-'+i).style.backgroundColor="rgb(1,128,255)";

}
for(i=13;i<=15;i++)
{
document.getElementById(`a${i}-`+8).style.backgroundColor="rgb(255,0,0)";

}
for(i=13;i<=15;i++)
{
document.getElementById(`a${i}-`+16).style.backgroundColor="rgb(255,0,0)";

}
for(i=11;i<=13;i++)
{
document.getElementById('a19-'+i).style.backgroundColor="rgb(0,0,0)";

}
for(i=13;i<=15;i++)
{
document.getElementById(`a${i}-`+17).style.backgroundColor="rgb(0,0,0)";

}
for(i=13;i<=15;i++)
{
document.getElementById(`a${i}-`+7).style.backgroundColor="rgb(0,0,0)";

}
for(i=14;i<=16;i++)
{
document.getElementById(`a${i}-`+1).style.backgroundColor="rgb(0,0,0)";

}
for(i=14;i<=20;i++)
{
document.getElementById(`a${i}-`+3).style.backgroundColor="rgb(0,0,0)";

}
for(i=3;i<=6;i++)
{
document.getElementById('a13-'+i).style.backgroundColor="rgb(1,128,255)";

}for(i=2;i<=5;i++)
{
document.getElementById('a14-'+i).style.backgroundColor="rgb(1,128,255)";

}for(i=4;i<=6;i++)
{
document.getElementById('a15-'+i).style.backgroundColor="rgb(1,128,255)";

}for(i=4;i<=9;i++)
{
document.getElementById('a18-'+i).style.backgroundColor="rgb(1,128,255)";

}