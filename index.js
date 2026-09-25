const button = document.getElementById('mybtn');
const message = document.getElementById('message');
button.addEventListener('click', () => {
    document.body.classList.add('shake-effect');
    message.style.display = 'block';
    
    setTimeout(() => {
        document.body.classList.remove('shake-effect');
         message.style.display = 'none';
    }, 3000); 
});





// button.addEventListener('click', () => {
//     alert('lol');
// });