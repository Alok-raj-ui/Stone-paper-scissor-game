
let name = window.prompt('enter you name')

document.getElementById('greet').innerHTML += name;

function sps(ui) {
  let resulttxt ='';
  var x = ['stone','paper','scissor']
  let ci = x[Math.floor(Math.random() * x.length)]
  
  if (ui == ci){
    resulttxt = 'its a tie !';
  }
  else if((ui === 'stone') && (ci === 'paper') || (ui === 'paper') && (ci === 'scissor') || (ui === 'scissor') && (ci === 'stone')){
    resulttxt = 'You lost!'
  }
  else{
    resulttxt = 'you won'
  }
  document.getElementById('cc').innerHTML = `computer choose: ${ci}`;
  document.getElementById("result").innerHTML = `||  damn ${resulttxt}  ||`
}


