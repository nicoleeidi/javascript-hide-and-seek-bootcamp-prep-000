function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  //document.getElementById('nested').querySelectorAll('div div div div.target')
const collection= document.getElementById('nested').getElementsByClassName('target')
return collection[0]
}

function increaseRankBy(n){
    const lis=document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
      lis[i].innerHTML = parseInt(lis[i].innerHTML, 10) + n
  }
}
function deepestChild(){

  var grandnode= document.getElementById('grand-node')
  var alldescendents= grandnode.querySelectorAll('*')
  //let current=
  //let next=[]
  for (let i=0;i<alldescendents.length;i++){
    if (alldescendents[i].childElementCount===0){
      return grandnode.querySelectorAll('*')[i]
      //doesnt work because even [3].hasChildNodes= true!
      //but cant do [4] because only goes up to 3!
    }

  }
  //document.querySelector('#grand-node div div div div')

}
