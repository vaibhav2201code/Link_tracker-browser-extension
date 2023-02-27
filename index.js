let myLeads =[];
const inputBtn = document.getElementById("input-btn");
const inputEl=document.getElementById("input-el");
const unEl = document.getElementById("unordered");

const deleteBtn = document.getElementById("delete-btn");

const saveTab = document.getElementById("tab-btn");

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
     myLeads=leadsFromLocalStorage
     render(myLeads);
}



saveTab.addEventListener("click",function(){
    ///chrome API To get the current tab url
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //pushing the url in myleads array and saving it to local storage
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);

    });
    
}) 


function render(leads){
    let listItems="";
    for(let i = 0;i<leads.length;i++){
        //way of creating list dynamically inside of unordered list
        //const li=document.createElement("li");
        //li.textContent=myLeads[i];
        //unEl.append(li);
        //code to render list inside of unordered list
        //listItems+= "<li><a href ='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>";


        //using template literal string
        listItems+=`<li>
        <a href='${leads[i]}' target=_blank>
          ${leads[i]}
        </a>
        </li>`
        
      }
      unEl.innerHTML=listItems;
}


//code for input button
inputBtn.addEventListener("click",function(){
 //to get value from the input text field 
  myLeads.push(inputEl.value);
  //to clear the input field after fetching the value
  inputEl.value="";
  //Storing the array in the local storage as string
  localStorage.setItem("myLeads",JSON.stringify(myLeads))
   render(myLeads);
  
});



//code for delete button

deleteBtn.addEventListener("click",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads)
});





 





