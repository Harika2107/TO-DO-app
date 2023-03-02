const form=document.getElementById('form')
const input=document.getElementById('input')
const error=document.getElementById('error')
const posts=document.getElementById('posts')

form.addEventListener('click',(e)=>{
    e.preventDefault()
    formValidation()
})

const formValidation=()=>{
    if(input.value===''){
        console.log('error')
        error.innerHTML='please enter some text'
    }
    else{
        console.log('success')
        error.innerHTML=''
        acceptData()
        showData()
    }
}

//to store the data from the user
//create an object with the template literals
let data={}
const acceptData=()=>{
    data['name']=input.value
    console.log(data)
}

const showData=()=>{
    posts.innerHTML+=
    `<div>
    <p>${data.name}</p>
    <span class="buttons">
        <i onClick='editData(this)' class="fa-sharp fa-solid fa-pen"></i>
        <i onClick='deleteData(this)' class="fa-solid fa-trash"></i>
    </span>
</div>`
input.value=''
}

//to delete the data entered by user
const deleteData=(e)=>{
    e.parentElement.parentElement.remove()

}
//to edit the data by user
const editData=(e)=>{
    input.value=e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()

}