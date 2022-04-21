var bd = document.querySelector('body');
var el = document.querySelector('h1');
// var R = 200;
// var colval = "rgb(" + R + ",10,100)";
// el.setAttribute('style', "background-color:rgb(0,0,"+ R + ");");

dic = {
  valueb : 30,
  valuer : 200,
  multiple : 10,
  dinamic : function(){
    this.valueb = this.valueb %250
    if (this.valueb<30){
      this.valueb = 30;
      this.multiple = 10;
    }
    if (this.valueb>230){
      this.valueb = 230;
      this.multiple = -10;
    }
    this.valuer = 250 -this.valueb;
    el.setAttribute('style', 'color:rgb(' + this.valuer + ',0,' + this.valueb + ');');
    this.valueb += this.multiple;
  }
}

// var x= event.target.x, y = event.target.y;
bd.addEventListener(
        "mousemove", function (e) {
        x = e.offsetX;
        y = e.offsetY;
        bd.style.backgroundColor
            = `rgb(${x}, 0, 0)`;
    });

setInterval("dic.dinamic()", 200)
