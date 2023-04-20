var list=document.getElementById('list');
let amount=document.getElementById('expense');
let description=document.getElementById('description');
let category=document.getElementById('category');
let submit=document.getElementById('submit');
let count=0
// let expense=document.createElement('li')
// expense.appendChild(document.createTextNode(amount.value))
// list.appendChild(expense)
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    count++
    let expense=document.createElement('li')
    expense.appendChild(document.createTextNode(amount.value+' Rs - '+description.value+' - '+category.value+'  '))
    list.appendChild(expense)
    
    let ebutton=document.createElement('button')
    ebutton.className='btn btn-primary btn-sm'
    ebutton.appendChild(document.createTextNode('Edit Expense'))
    // <button type="button" class="btn btn-primary btn-sm">Small button</button>
    let dbutton=document.createElement('button')
    dbutton.className='btn btn-secondary btn-sm'
    dbutton.appendChild(document.createTextNode('Delete Expense'))
    
    expense.appendChild(dbutton)
    expense.appendChild(ebutton)
    list.append(document.createTextNode(' '))
    let OBJ=JSON.stringify({'amount': amount.value,'description':description.value,'category':category.value})
    localStorage.setItem(count,OBJ)
    
})

list.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('btn-secondary')){
        let parent=e.target.parentElement
        list.removeChild(parent)
        localStorage.removeItem(count)
        count--
    }
    
})
list.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.classList.contains('btn-primary')){
        // amount.value=1000
        let parent=e.target.parentElement
        list.removeChild(parent)
        localStorage.removeItem(count)
        count--
    }
})