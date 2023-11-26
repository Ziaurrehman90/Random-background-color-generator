const button=document.getElementById('btn')
const colorText=document.querySelector('.color')

// we have to create the array of string for hec color 
const hex=[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',

]

// function of genrating the new random numbers 
const generateRandomNumber=()=>{
    return Math.floor(Math.random()*hex.length)
}


// we have to click on the button : hence there is a need to add listener 


button.addEventListener('click',()=>{
    // alert("clicked");
    // o clicking we have to generate the hex color
    const hexcolor = generateHexcolor();
    document.body.style.backgroundColor=hexcolor;
    colorText.textContent=hexcolor

})

// function to generate the hedx color

const generateHexcolor= () =>{
    let hexcolor='#';
    for(let i=0;i<6;i++){
        hexcolor+=hex[generateRandomNumber()]
    }
//    alert(hexcolor)
return hexcolor;
}