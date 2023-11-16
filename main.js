const colors = ["green","red","rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click',function(){
  const randomnNumber = getRandombnNumber();
  document.body.style.backgroundColor = colors[randomnNumber];
  color.textContent = colors[randomnNumber]

})

function getRandombnNumber(){
  return Math.floor(Math.random()* colors.length)
}