'use strict';
const members = [
    {
        name: "Ori Abutbul",
        address: "Nahariya",
        number: "0523336625",
        mail: "rafi@gmail.com",
        text: "hi world",
        favorite: true 

    },
    {
        name: "Ram Turjman",
        address: "Nahariya",
        number: "0552263345",
        mail: "rafi@gmail.com",
        text: "hello world",
        favorite: false 

    },
    {
        name: "Rafi Refael",
        address: "Nahariya",
        number: "0502525886",
        mail: "rafi@gmail.com",
        text: "HELLO world",
        favorite: true 


    },
    {
        name: "Zeev Cohen",
        address: "Nahariya",
        number: "0563325878",
        mail: "zeev@gmail.com",
        text: "i love javaScript ",
        favorite: false 


    }
];

//#region load first page
const memberList = document.getElementById('members');
function createMemberElement(item,index){
 const li = document.createElement('li');
 li.className = "mouseOutLi";
    li.innerHTML =  ` <div class="info contact" >
    <strong class = "name">${item.name}</strong> 
     <span class="phone">${item.number}</span>
     </div>
    <div class="buttons contact">
    <button class="edit"> ✏️</button> 
    <button class="delete">🗑️</button>
    </div>`
    li.setAttribute('data-id',index);

                return li;
}

memberList.addEventListener('mouseover' , (e) =>{
    const li = e.target.closest('li');
    if('li')
        li.className = "mouseOverLi";
})
memberList.addEventListener('mouseout' , (e) =>{
    const li = e.target.closest('li');
    if('li')
        li.className = "mouseOutLi";
})
const emptyTitle = document.getElementById('emptyTitle');
function fillPage(members){
    const ALLli = document.querySelectorAll('.contact');
        ALLli.forEach(li => {
            li.style.display='none';
        })
        if(members.length===0)
            emptyTitle.style.display = 'block';

        let faveArr = [];
        let regularArr = [] ;
        members.forEach(item =>
        {
            if(item.favorite)
                faveArr.push(item);
            else
            regularArr.push(item);
        }
        )
        faveArr.sort((a, b) => a.name.localeCompare(b.name));
        regularArr.sort((a, b) => a.name.localeCompare(b.name));
        const organizeArr = [];
        faveArr.forEach(item =>{
            organizeArr.push(item);
        })
        regularArr.forEach(item =>{
            organizeArr.push(item);
        })
       
        
        organizeArr.forEach((item , index) => {
    const memberElement = createMemberElement(item, index)
    memberList.appendChild(memberElement)
})
for(let i = 0 ; i<members.length ; i++)
{
    members[i] = organizeArr[i];
}
console.log(members,organizeArr);

return organizeArr;
}
const organizeArr = fillPage(members);

fillPage(members);
//#endregion
//#region change color over
memberList.addEventListener('mouseover' , (e) =>{
    const li = e.target.closest('li');
    if('li')
        li.className = "mouseOverLi";
})
memberList.addEventListener('mouseout' , (e) =>{
    const li = e.target.closest('li');
    if('li')
        li.className = "mouseOutLi";
})
//#endregion
//#region memberModal
memberList.addEventListener('click', (e)=> {
if(e.target && e.target.tagName != 'BUTTON' ){
    document.getElementById('detailsModal').style.display = 'flex'
    document.body.style.overflow= 'hidden';
    const li = e.target.closest('li');
    fillmodal(li.getAttribute('data-id'))
    
}
} )
const detailsModal = document.getElementById('modal__inner')

const fillmodal = (index) =>{
    detailsModal.innerHTML = `<div id="#modalText"><h2>${members[index].name}</h2><br>
                                                  <P class="modal-p">Number: ${members[index].number}</P>
                                                  <P class="modal-p">Address:  ${members[index].address} </P>
                                                  <P class="modal-p">Mail: ${members[index].mail}</P>
                                                  <P class="modal-p">${members[index].text}</P></div> `
  }
 
 //#endregion 

 //#region delete func
 memberList.addEventListener('click', (e)=> {
    if(e.target && e.target.tagName === 'BUTTON' && e.target.className === 'delete'){
      { alert("are you sure?")
      
        e.target.closest('li').style.display = 'none'
        const index =e.target.closest('li').getAttribute('data-id');
        organizeArr.splice(index,1);
        console.log(organizeArr);
        fillPage(organizeArr);
      
      }
    }
    } )
    const deletALL = document.getElementById('delete-all-btn');
    deletALL.addEventListener('click' ,()=>{
        alert("are you sure?")
        memberList.style.display = 'none'   
        emptyTitle.style.display='block';
    })
//#endregion

//#region open edit popup
let index ; 
const saveBtn = document.querySelector('.save-btn');

memberList.addEventListener('click', (e)=> {
    if(e.target && e.target.tagName === 'BUTTON' && e.target.className === 'edit'){
        document.getElementById('editPopup').style.display = 'block'
        document.body.style.overflow= 'hidden';
        index = e.target.closest('li').getAttribute('data-id');

        document.getElementById('Name').value = members[index].name;
        document.getElementById('Address').value = members[index].address;
         document.getElementById('Number').value = members[index].number;
        document.getElementById('Mail').value= members[index].mail;
         document.getElementById('Message').value = members[index].text;
         document.getElementById('Favorite').value = members[index].favorite;
    saveBtn.addEventListener('click' , (e) =>{
        e.preventDefault();
        document.getElementById('editPopup').style.display = 'none'
        let name = document.getElementById('Name').value;
        let number = document.getElementById('Number').value;
       
         if(!name)
         {
            alert("Name is requierd");
            return;
         }
         if(!number)
            {
               alert("Number is requierd");
               return;
            } 
        members[index]["name"] = name;
        members[index]["number"] = number;
        members[index]["address"] = document.getElementById('Address').value;
        members[index]["mail"] = document.getElementById('Mail').value;
        members[index]["text"] = document.getElementById('Message').value;
        members[index]["favorite"] = document.getElementById('Favorite').value;

        fillPage(members);
    })
    }
    } )
//#endregion
//#region open add user popup
   const addUser = document.getElementById('add-btn');
   addUser.addEventListener('click' , (e) =>{
    document.getElementById('editPopup').style.display = 'block';
    saveBtn.addEventListener('click' , (e) =>{
        e.preventDefault();
        document.getElementById('editPopup').style.display = 'none'
    let name = document.getElementById('Name').value 
    let address = document.getElementById('Address').value 
    let number =document.getElementById('Number').value 
    let mail =document.getElementById('Mail').value
    let message = document.getElementById('Message').value
    console.log(message);
     
    let favorite = document.getElementById('Favorite').value 
    if(!name)
        {
           alert("Name is requierd");
           return;
        }
        if(!number)
           {
              alert("Number is requierd");
              return;
           }
    const newUser = {name,address,number,mail,message,favorite};
    members.push(newUser);
    fillPage(members);
   })
   })
//#endregion
   
//#region search member 
    const input = document.querySelector('.search-input');
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click' , () =>{
        emptyTitle.style.display='none';
        const value = input.value;
        console.log(value);
        const newArr = members.filter( (elem) => {            
            if(elem.name.toLowerCase().includes(value.toLowerCase()))    
                return true;
            else{
                return false;
            }
        } )
        if(newArr.length===0)
            emptyTitle.style.display='block';

        const ALLli = document.querySelectorAll('.contact');
        ALLli.forEach(li => {
            li.style.display='none';
        })
        
        newArr.forEach((item , index) => {
            newArr.sort((a, b) => a.name.localeCompare(b.name));
            const memberElement = createMemberElement(item, index)
            memberList.appendChild(memberElement)
        })

        
    })
//#endregion
//#region close details popup
    const closeDetailModal = document.getElementById('closeDetailModal');
    closeDetailModal.addEventListener('click' , () =>{
        document.getElementById('detailsModal').style.display = 'none'
        document.body.style.overflow= '';


    })
    //#endregion
    //#region close edit popup

    const closePopupBtn = document.getElementById('closePopupBtn');
    closePopupBtn.addEventListener('click' , () =>{
        document.getElementById('editPopup').style.display = 'none'
        document.body.style.overflow= '';


    })
    
    const closeeditPopup = document.getElementById('closeeditPopup');
    closeeditPopup.addEventListener('click' , () =>{
        document.getElementById('editPopup').style.display = 'none'
        document.body.style.overflow= '';


    })
    //#endregion
//#region dark mode 
    const DarkModeBtn = document.getElementById('DarkModeBtn');
    const main = document.getElementById('main');
    DarkModeBtn.addEventListener('click', ()=>{
        main.classList.toggle('darkMode')
    })

//#endregion

