const members = [
    {
        name: "Ori Abutbul",
        age: 22,
        address: "Nahariya",
        number: "0523336625",
        imgSrc: "person1.jpg"
    },
    {
        name: "Ram Turjman",
        age: 36,
        address: "Nahariya",
        number: "0552263345",
        imgSrc: "person1.jpg"
    },
    {
        name: "Rafi Refael",
        age: 25,
        address: "Nahariya",
        number: "0502525886",
        imgSrc: "person1.jpg"
    }
];

const memberList = document.getElementById('members');
function createMemberElement(item,index){
 const li = document.createElement('li');
    li.innerHTML =  `<img src="${item.imgSrc}" alt="" width="80" height="80">${item.name} <button class="details"> <img src="./images/details_icon.png" alt="" width="20" height="20"></button>
                <button class="edit"> <img src="./images/edit_icon.png" alt="" width="20" height="20"></button> <button class="delete"><img src="./images/deletIcon.png" alt="" width="20" height="20"></button>`
    li.setAttribute('data-id', index)
                return li;
}
members.forEach((item , index) => {
    const memberElement = createMemberElement(item, index)
    memberList.appendChild(memberElement)
})
