console.log("hello~~~");

function calculate(){
    quantity = document.getElementById('quantity').value;
    price = document.getElementById('price').value;
    tax = document.getElementById('tax').value;
    discount = document.getElementById('discount').value;
    total = quantity * price;
    tax = tax/100;
    tax++;
    total *= tax;
    total-=discount;
    total = total.toFixed(2);
    
    document.getElementById('total').innerText = total;

    return false; //不回傳 讓total留在畫面
}
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

