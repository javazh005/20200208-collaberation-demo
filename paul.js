console.log("hello~~~");

function doFirst() {
  document.getElementById("theForm").onsubmit = limitedChar;
}
function limitedChar() {
  let commands = document.getElementById('commands');
  let limitedText = commands.value.slice(0,100);

  // alert(limitedText.length);

  document.getElementById('count').value = limitedText.length;
  document.getElementById('result').value = limitedText;
  
  return false;
}


window.addEventListener("load", doFirst);

