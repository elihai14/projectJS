
const members = [
    {
        name: "Ori Abutbul",
        age: 22,
        address: "Nahariya",
        number: "0523336625",
        imgSrc: "person1.jpg",
        mail: "rafi@gmail.com",
        text: "hi world"

    },
    {
        name: "Ram Turjman",
        age: 36,
        address: "Nahariya",
        number: "0552263345",
        imgSrc: "person1.jpg",
        mail: "rafi@gmail.com",
        text: "hello world"


    },
    {
        name: "Rafi Refael",
        age: 25,
        address: "Nahariya",
        number: "0502525886",
        imgSrc: "person1.jpg",
        mail: "rafi@gmail.com",
        text: "HELLO world"

    }
];
//#region load first page
const memberList = document.getElementById('members');
function createMemberElement(item,index){
 const li = document.createElement('li');
    li.innerHTML =  `<img src="${item.imgSrc}" alt="" width="80" height="80">${item.name} 
    <button class="details"> <img src="details_icon.png" alt="" width="20" height="20"></button>
    <button class="edit"> <img src="edit_icon.png" alt="" width="20" height="20"></button> 
    <button class="delete"><img src="deletIcon.png" alt="" width="20" height="20"></button>`
    li.setAttribute('data-id',index);

                return li;
}
members.forEach((item , index) => {
    
    const memberElement = createMemberElement(item, index)
    memberList.appendChild(memberElement)
})
//#endregion
//#region memberModal
memberList.addEventListener('click', (e)=> {
if(e.target && e.target.tagName === 'BUTTON' && e.target.className === 'details'){
    document.getElementById('detailsModal').style.display = 'flex'
    // body.style.overflow = 'hidden';
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
 function closeModal(){
    document.getElementById('detailsModal').style.display = 'none'

 }
 //#endregion 



  

