function saveTolocalStorage(event){
    event.preventDefault();
    const name =event.target.username.value;
    const email=event.target.emailId.value;
    const phone=event.target.phone.value;

    const obj={
         name,
        email,
        phone
    }

    axios.post("https://crudcrud.com/api/45960af336f045fb846c4b4bfc01863b/appointmentData",obj)
        .then((res) => {
           showUserOnScreen(res.data)
        })
        .catch((err) => {
            console.log(err);
        })

    //localStorage.setItem(obj.email, JSON.stringify(obj))
    //showUserOnScreen(obj)
    }

    function showUserOnScreen(obj){
    const parentElem =document.getElementById('ul1')
    const childElem = document.createElement('li')
    childElem.textContent=obj.name+" "+ obj.email+" "+obj.phone
    parentElem.appendChild(childElem)

        const deletebtn=document.createElement('input')
        deletebtn.value='Delete'
        deletebtn.onclick= ()=>{
            localStorage.removeItem(obj.email)
            parentElem.removeChild(childElem)
        }
        childElem.appendChild(deletebtn)
        parentElem.appendChild(childElem)

        const editbtn=document.createElement('input')
        editbtn.type='button'
        editbtn.value='Edit'
        editbtn.onclick= ()=>{
            localStorage.removeItem(obj.email)
            parentElem.removeChild(childElem)
            document.getElementById('usernameInputTag').value=obj.name
            document.getElementById('emailInputTag').value =obj.email
            document.getElementById('phoneInputTag').value=obj.phone
    }   
        childElem.appendChild(deletebtn)
        childElem.appendChild(editbtn)
        parentElem.appendChild(childElem)
}