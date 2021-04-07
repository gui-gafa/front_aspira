// document.getElementById("submit_button").addEventListener("click",function () {
//     myClick();
// })
function myClick() {
  document.getElementById("output_medido").innerHTML =
    String(document.getElementById("medido").value) + "%";
  document.getElementById("output_empenhado").innerHTML =
    String(document.getElementById("empenhado").value) + "%";
  document.getElementById("output_executado").innerHTML =
    String(document.getElementById("executado").value) + "%";
}
