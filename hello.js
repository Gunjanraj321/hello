//Fetch data from crudcrud when the page loads
window.addEventListener('load', () => {
    fetchDataFromCrudCrud();
});

const fetchDataFromCrudCrud = async () => {
    try{
        const response = await axios.get("https://crudcrud.com/api/3d7204c49c774672ba41a7960a3158c8/appointmentData")

        for(var i=0;i<response.data.length;i++){
            showUserOnScreen(response.data[i])
        }
    }
    catch(err) {
        console.log(err)
    }
}


async function crudcrudoperation(event){
    event.preventDefault();
    const name =event.target.username.value;
    const email=event.target.emailId.value;
    const phone=event.target.phone.value;

    const obj={
         name,
        email,
        phone
    }

    try{
        const res = await axios.post("https://crudcrud.com/api/3d7204c49c774672ba41a7960a3158c8/appointmentData",obj)
        showUserOnScreen(res.data)
    }catch(err){
        console.log(err)
    }
}

   

    function showUserOnScreen(obj){

    const parentElem =document.getElementById('ul1')
    const childElem = document.createElement('li')
    childElem.textContent=`${obj.name} ${obj.email} ${obj.phone}`
    parentElem.appendChild(childElem)

    const deletebtn=document.createElement('input')
    deletebtn.value='Delete';
    deletebtn.type= 'button'
    deletebtn.addEventListener('click', ()=>{
        //Handle delete action
        parentElem.removeChild(childElem);
        deleteDataFromCrudCrud(obj._id);
    });
    
    const editbtn=document.createElement('input')
    editbtn.type='button'
    editbtn.value='Edit'
    editbtn.addEventListener('click',()=>{
        //Handle edit action here
        parentElem.removeChild(childElem)
        deleteDataFromCrudCrud(obj._id);
        document.getElementById('userNameInputTag').value=obj.name
        document.getElementById('emailInputTag').value =obj.email
        document.getElementById('phoneInputTag').value=obj.phone
        parentElem.removeChild(childElem);
        editDataFromCrudCrud(obj._id);
    });
    childElem.appendChild(deletebtn)
    childElem.appendChild(editbtn)
    parentElem.appendChild(childElem)
}

async function deleteDataFromCrudCrud(id) {
    try{
        await axios.delete(`https://crudcrud.com/api/3d7204c49c774672ba41a7960a3158c8/appointmentData/${id}`)
    }
    catch(err){
        console.log(err)
    }
}

async function editDataFromCrudCrud(id){
    const updateName = document.getElementById('userNameInputTag').value;
    const updateEmail = document.getElementById('emailInputTag').value;
    const updatePhone =document.getElementById("phoneInputTag").value;

    const updateObj = {
        name : updateName,
        email: updateEmail,
        phone: updatePhone
    };
    try {
        const res = await axios.put(`https://crudcrud.com/api/3d7204c49c774672ba41a7960a3158c8/appointmentData/${id}`,)
        showUserOnScreen(res.data)
    }
    catch (err) {
        console.log(err);
    }       
}