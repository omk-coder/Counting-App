let countEl = document.getElementById("count-el");

let count = 0;
function increment(){
    count = count + 1;
    if(count === 10 || count === 20 || count===30){
        saveEl.innerText = "BOOM BOOM BAM";
    }else{
        saveEl.innerText +=  countstr;
    }
    countEl.innerText = count;
}
function decrement(){
    count = count -1;
    countEl.innerText = count;
}
let saveEl = document.getElementById("save-el");
function save(){
   let countstr = count + "-";
   saveEl.innerText += countstr;

}
let refreshEl = document.getElementById("save-el");
function refresh(){
      refreshEl.innerText = "Previous Entry: " + 0;
}

