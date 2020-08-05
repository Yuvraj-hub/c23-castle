var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
var n;

function setup() {
  createCanvas(800,800);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(400,300,40,150);
  c = createSprite(530,390,300,40);
  d = createSprite(660,300,40,150);
  e = createSprite(660,200,50,50);
  f = createSprite(520,320,40,100);
  j = createSprite(530,300,200,150);
  g = createSprite(530,320,40,100);
  h = createSprite(550,320,40,100);
  i = createSprite(400,300,40,150);
  l = createSprite(400,300,40,150);
 
  a.shapeColor = "gray";
  b.shapeColor = "gray";
  c.shapeColor = "gray";
  d.shapeColor = "gray";
  e.shapeColor = "gray";
  f.shapeColor = "gray";
  g.shapeColor = "gray";
  h.shapeColor = "gray";
  j.shapeColor = "gray";
  i.shapeColor = "gray";
  l.shapecolor = "gray";
}

function draw() {
  background(255,255,255);  
  triangle(400,210,680,210,550,50)
  drawSprites();
}