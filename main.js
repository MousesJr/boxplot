console.log("main");
//Data
var divValues = document.getElementById("values");
var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var min = document.getElementById("min");
var max = document.getElementById("max");
//Graphic
var divBoxPlot = document.getElementById("boxPlot");
var divRetaX = document.getElementById("retaX");
var divRetaY = document.getElementById("retaY");
var maxLine = document.getElementById("maxLine");
var minLine = document.getElementById("minLine");
var sideL = document.getElementById("sideL");
var sideD= document.getElementById("sideD");
var q1Line = document.getElementById("q1Line");
var median = document.getElementById("median");
var q3Line = document.getElementById("q3Line");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
divBoxPlot.style.visibility = 'hidden';
document.getElementById("submit").addEventListener('click', function(){
  Data.values.push(parseFloat(document.getElementById('valor').value));
  Data.atualizaView();
});
 var Data = {
   'values': [],
   get min(){
     return this.values[0];
     Dados.atualizaView();
   },
   get max(){
     return this.values[Data.values.length-1];
     Dados.atualizaView();
   },
   get secondQuartile(){
     return secondQuartile(Data.values);
     Dados.atualizaView();
   },
   get firstQuartile(){
     return firstQuartile(Data.values);
     Dados.atualizaView();
   },
   get thirdQuartile(){
     return thirdQuartile(Data.values);
     Dados.atualizaView();
   },
   'atualizaView': function () {
   if (this.values.length>0) {
   this.values = this.values.sort(sortfunction);
   max.value = this.max;
   min.value = this.min;
   divValues.textContent = this.values;
   q1.value = this.firstQuartile;
   q2.value = this.secondQuartile;
   q3.value = this.thirdQuartile;
   if(Data.values.length>=4){
     divBoxPlot.style.visibility = 'visible';
   }
   line1.style.height = '350px';
   minLine.style.height = '300px';

  //  minLine.style.height = 0;
   }
 }
}
function firstQuartile(array){
  console.log(array);
  var fq = array.length/4;
  if(parseInt(fq)!=fq){
    fq = (array[parseInt(fq)]+array[parseInt(fq)+1])/2;
  } else {
    fq = array[fq];
  }
  console.log(fq);
  return fq;
}
function secondQuartile(array){
  console.log(array);
  if(array.length/2!=0){
    var sq = array[parseInt(array.length/2)]
  } else {
    sq = (array[array.length/2] + array[(array.length/2)-1])/2;
  }
  console.log(sq);
  return sq;
}
function thirdQuartile(array) {
  console.log(array);
  var tq = 3*(array.length)/4;
  if(parseInt(tq)!=tq){
    tq = (array[parseInt(tq)]+array[parseInt(tq)+1])/2;
  } else {
    tq = array[tq];
  }
  console.log(tq);
  return tq;
}
function sortfunction(a, b){
  return (a - b); //faz com que o array seja ordenado numericamente e de ordem crescente.
}
