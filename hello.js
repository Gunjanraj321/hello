function saveonlocalStorage(event){
    event.preventDefault();
    const name=event.target.username.value;
    const email=event.target.emailId.value;
    const phone=event.target.phone.value;

    const obj={
        name,email,phone
    }
    localStorage.setItem(obj.email,JSON.stringify(obj))
    showUserOnScreen(obj)
}

function showUserOnScreen(obj){
    const parentElem =document.getElementById('ul1')
    const childElem = document.createElement('li')
    childElem.textContent=obj.name+" "+ obj.email+" "+obj.phone
    parentElem.appendChild(childElem)
}