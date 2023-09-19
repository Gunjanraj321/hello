//Fetch data from crudcrud when the page loads
window.addEventListener('load', () => {
    fetchDataFromCrudCrud();
});

function fetchDataFromCrudCrud(){
    axios.get("https://crudcrud.com/api/45960af336f045fb846c4b4bfc01863b/appointmentData")
    .then((res) => {

        for(var i=0;i<res.data.length;i++){
            showUserOnScreen(res.data[i])           
        }
    })
    .catch((err) => {
        console.log(err);
    })
}


function crudcrudoperation(event){
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

    }

   

    function showUserOnScreen(obj){

    const parentElem =document.getElementById('ul1')
    const childElem = document.createElement('li')
    childElem.textContent=`${obj.name} ${obj.email} ${obj.phone}`
    parentElem.appendChild(childElem)

    const deletebtn=document.createElement('input')
    deletebtn.value='Delete';
    deletebtn.type= 'button'
    deletebtn.addEventListener('click',()=>{
        //Handle delete action
        parentElem.removeChild(childElem)
        
    });
    
    const editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='Edit'
    editbtn.addEventListener('click',()=>{
        //Handle edit action here
        parentElem.removeChild(childElem)
        document.getElementById('usernameInputTag').value=obj.name
        document.getElementById('emailInputTag').value =obj.email
        document.getElementById('phoneInputTag').value=obj.phone
        parentElem.removeChild(childElem);
    });
    childElem.appendChild(deletebtn)
    childElem.appendChild(editbtn)
    parentElem.appendChild(childElem)
}

