// var el = document.getElementById('pickme');
var el = document.querySelectorAll('.jumbotron');
// var R = 200;
// var colval = "rgb(" + R + ",10,100)";
// el.setAttribute('style', "background-color:rgb(0,0,"+ R + ");");

dic = {
  valueb : 30,
  valuer : 200,
  multiple : 5,
  dinamic : function(){
    this.valueb = this.valueb %250
    if (this.valueb<30){
      this.valueb = 30;
      this.multiple = 5;
    }
    if (this.valueb>230){
      this.valueb = 230;
      this.multiple = -5;
    }
    this.valuer = 250 -this.valueb;
    for (i of el){i.setAttribute('style', 'background-color:rgb(' + this.valuer + ',0,' + this.valueb + ');');}

    this.valueb += this.multiple;
  }
}


setInterval("dic.dinamic()", 200)
