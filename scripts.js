function time(){
let h = new Date();
hours = h.getHours();

let m = new Date();
minutes = m.getMinutes();

let s = new Date();
seconds = s.getSeconds();

document.querySelector('.txt').innerHTML =
hours + ":" + minutes + ":" + seconds;
}

setInterval(time,1000);
