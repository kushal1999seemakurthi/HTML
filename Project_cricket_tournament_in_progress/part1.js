
dic = {
  // Here t1 represent score of team1 and t12 repewsent the score of winner in 1 vs 2 teams in next round
  't1' : 200,
  't2' : 300,
  't3' : 400,
  't4' : 500,
  't5' : 600,
  't6' : 700,
  't7' : 800,
  't8' : 900,
  't12' : 200,
  't34' : 300,
  't56' : 200,
  't78' : 300,
  't1234' : 200,
  't5678' : 300,
  update1 : function(string , string1, string2, D = 1000){
    if(this[string1]>this[string2]){
      // y= document.querySelector("#"+string)
      // y.style.backgroundColor = $("#" + string1).css("backgroundColor")
      $("#"+string).fadeOut(100).css({backgroundColor: $("#"+ string1).css("backgroundColor")}).fadeIn(D).delay(D);
      this[string] = string1;
    }
    else if (this[string1]<this[string2]){
      // y= document.querySelector("#"+string)
      // y.style.backgroundColor = $("#" + string2).css("backgroundColor")
      $("#"+string).fadeOut(100).css({backgroundColor: $("#"+ string2).css("backgroundColor")}).fadeIn(D).delay(D);
      this[string]= string2;
    }
  }
}

function getGoing(){
  dic.update1("t12", "t1", "t2", 5000);
  dic.update1("t34", "t3", "t4", 5000);
  dic.update1("t56", "t5", "t6", 5000);
  dic.update1("t78", "t7", "t8", 5000);

  dic.update1("t1234", "t34", "t12", 10000);
  dic.update1("t5678", "t78", "t56", 10000);

  dic.update1("t12345678", "t1234", "t5678", 11000);
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
  document.getElementById("mySidepanel").style.height= "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("mySidepanel").style.height= "0";
  $("#hello").slideDown(5000);
}

function funup(){
  $("#hello").slideUp(5000);
}

function funup2(){
  if (document.getElementById("#container2").style.width ===0){
    document.getElementById("mySidepanel").style.width = "auto";
    document.getElementById("mySidepanel").style.height= "auto";
  }
  else {
    document.getElementById("mySidepanel").style.width = "0px";
    document.getElementById("mySidepanel").style.height= "0px";
  }
}

function scoll(){
  $('#container1').html($('#newID').html());
}
