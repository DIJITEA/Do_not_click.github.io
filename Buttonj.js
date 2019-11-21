
function dontpush1() {
  document.getElementById("DP1").classList.toggle("BTS1");
  document.getElementById("T2").id = "ppo";
  document.getElementById("DP2").id = NaN;
}
function dontpush2() {
  document.getElementById("ppo").id = "T2";
  document.getElementById("Z").id = "ZZ";
  document.getElementById("T2").classList.toggle("Bout");
}
function dontpush3() {
  document.getElementById("ZZ").id = "Z";
  document.getElementById("W").id = "WW";
  document.getElementById("Z").classList.toggle("Bout");
}
function dontpush4() {
  document.getElementById("WW").id = "W";
  document.getElementById("E").id = "EE";
  document.getElementById("W").classList.toggle("Bout");
}
function dontpush5() {
  document.getElementById("EE").id = "E";
  document.getElementById("F").id = "FF";
}
function dontpush6() {
  document.getElementById("FF").id = "F";
  document.getElementById("D").id = "DD";
}
function dontpush7() {
  document.getElementById("DD").id = "D";
  document.getElementById("A").id = "AA";
}
function dontpush8() {
  document.getElementById("AA").id = "A";
  document.getElementById("A").classList.toggle("Bout");
  document.getElementById("B").id = "BB";
  document.getElementById("BB").classList.toggle("Bout");
  document.getElementById("BB").classList.toggle("BTSpos");
}
function dontpush9() {
  document.getElementById("BB").id = "B";
  document.getElementById("Photo").classList.toggle("low");
  document.getElementById("Photo").id = "Photo2";
  document.getElementById("B").classList.toggle("low");
  alert(
    "Кнопка все еще на страничке, она никуда не делась, но какие же крутые фотки! Интересно, кто их автор? 🙃"
  );
}
function dontpush10() {
  document.getElementById("C").id = "CC";
  document.getElementById("CC").classList.toggle("low");
  document.getElementById("Photo2").classList.toggle("low");
  document.getElementById("CC").classList.toggle("low");
  document.getElementById("CO").classList.toggle("low");
}
function dontpush11() {
  document.getElementById("dead").classList.toggle("low");
  document.getElementById("dead").id = "notdead";
  document.getElementById("deadt").classList.toggle("magick");
  alert("Желаю удачи в нажатии кнопки");
  document.getElementById("CC").id = "C";
  document.getElementById("CC").classList.toggle("low");
}
function sayHi() {
  document.getElementById("DP1").classList.toggle("low");
  document.getElementById("DP2").classList.toggle("low");
  document.getElementById("DP2").classList.toggle("BTSpos");
}
setTimeout(sayHi, 10000);

function DDc() {
    if (
      document.getElementById("codtw").value ==
      "11010000 10111000 11010000 10110100 11010000 10111000 100000 11010000 10111000 100000 11010001 10000001 11010000 10111100 11010000 10111110 11010001 10000010 11010001 10000000 11010000 10111000"
    )
      DcO();
  }

  function DcO() {
    document.getElementById("notdead").id = "dead";
    document.getElementById("Last").id = "notLast";
  }