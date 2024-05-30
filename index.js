


document.addEventListener("DOMContentLoaded", function(){
    getSeafoods();
    
})








function getSeafoods(){
    fetch("http://localhost:3000/Seafoods")
        .then(response => {
            return response.json()

        })
        .then(seafoods => {
            renderSeafoods(seafoods)
        })
            
    
}

function renderSeafoods(seafoods){
    seafoods.forEach(seafood=>{
        renderSeafood(seafood)
})
}
  
 function renderSeafood(seafood){
    const List = document.getElementById('List')

    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h3')
    const pComment = document.createElement('pcomment')



    h2.innerText = seafood.name
    h3.innerText = seafood.comment
    h3.innerText = seafood.rating
    pComment.innerText = seafood.comment

    div.appendChild(h2)
    div.appendChild(h3)
    div.appendChild(pComment)

    List.appendChild(div)

    
 } 


const addSubmitListener = ()=>{
    const form = document.getElementById("new-seafood");
    
    form.addEventListener('submit', event => {
      event.preventDefault();
      
        const seafoodName = document.getElementById("new-name")
        const seafoodComment = document.getElementById("new-comment")
        
  
      let newSeafood = {
        name: seafoodName.value,
        comment: seafoodComment.value
         
          
    };
    
    addSeafoodToList(newSeafood);
  
    form.reset()
  
});
     
}
  
      
  
     
function addSeafoodToList(seafoods){
    const List = document.getElementById('List')
    
    const h2 = document.createElement('h2');
  
    h2.innerText = seafoods.name
    h2.innerText = seafoods.comment


  List.appendChild(h2)
  
}

document.addEventListener('DOMContentLoaded', addSubmitListener)



    
document.addEventListener('DOMContentLoaded', function(){
    const h1 = document.querySelector("h1");


h1.addEventListener("click", changeHeaderToBlue)

function changeHeaderToBlue(){
    h1.style.color = "Blue";

}
})



