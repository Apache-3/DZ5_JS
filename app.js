let button = document.querySelector('.c_button')
button.addEventListener('click',() =>{
    let text = prompt('enter')
    if (text){
        document.getElementById('text').innerText = text;
    }else{
        alert('error')
    }
})

const mixArray = ['frontend', 3, 34, 45, null, undefined, null, 45, 'text', 'text',  true, false,  23, null, 'qwerty', '456']
const newArray = [];
for (let i in mixArray) {
    const item = mixArray[i];
    const itemType = typeof item;
    if (!newArray[itemType]) {
        newArray[itemType] = [];
    }
    newArray[itemType].push(item);
}
console.log(newArray);
const arrayValues = Object.values(newArray)
arrayValues.sort((n1, n2) => n2.length - n1.length)
console.log(arrayValues);
const filteredArray = mixArray.filter(item => {    return (typeof item !== 'number' && typeof item !== 'boolean') ||
    (typeof item === 'string' && item.length > 3) || typeof item === 'boolean';
});
console.log(filteredArray);