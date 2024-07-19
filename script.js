const container = document.querySelector('.container');

for (let i = 0; i < 50; i++) {
    const colors = document.createElement('div');
    colors.classList.add('color-container');

    const span = document.createElement('span');
    span.classList.add('color-code');
    colors.appendChild(span);

    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    colors.appendChild(copyBtn);

    container.append(colors);
}

function randomColor() {
    const chars = '0123456789ABCDEF';
    const codeLength = 6;
    let colorCode = "";
    for (let i = 0; i < codeLength; i++) {
        const random = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(random, random + 1);
    }
    return colorCode;
}

const mainContainer = document.querySelectorAll('.color-container');

function generateColor() {
    for (let i = 0; i < mainContainer.length; i++) {
        const colorContainer = mainContainer[i];
        const newColor = randomColor();
        const colorCode = colorContainer.querySelector('.color-code'); 

        colorContainer.style.backgroundColor = '#' + newColor;
        colorCode.innerHTML = '#' + newColor;
    }
}


generateColor();

mainContainer.forEach((element)=>{
    const cpBtn = element.querySelector('button');
    const colorCode = element.querySelector('.color-code');
    
    cpBtn.addEventListener('click',()=>{
        const colorC = colorCode.innerText;
        copyClipboard(colorC); 
    })
})

function copyClipboard(code){
   
    navigator.clipboard.writeText(code)
    .then(()=>{
             alert("Copied to Clipboard " + code )
    })
    .catch(()=>{
        console.log("Error Detected!")
    })
}