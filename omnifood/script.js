const yearEl = document.querySelector('.year');
const cuurentYear = new Date().getFullYear();
yearEl.textContent = cuurentYear;

// scrooling effect

// const anchor = document.querySelectorAll('a:link');

// anchor.forEach(function(link){
//     link.addEventListener('click',(e)=>{
//         e.preventDefault();

//         // creating a variable to get the required portion
//         const href = link.getAttribute('href');

//         // now we do the scrooling effect
//         if(href==='#'){
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth',
//             });
//         if(href!=="#" && href.startsWith("#")){
//             const sectionEl = document.querySelector(href);
//             sectionEl.scrollIntoView({behavior: "smooth"});
//         }
//         }
//     })
// })

// form btn response when clicked
const btn = document.querySelector('.btn-btn');
const message = document.getElementById("success-message");

// const test = document.getElementById('name');

var Name = document.getElementById('name').value;
var Tele = document.getElementById('tele').value;
var Address = document.getElementById('address').value;
var Code = document.getElementById('code').value;

btn.addEventListener('click' ,()=>{

        btn.textContent = "Done"
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Yay ! Your First Free meal 🥗 on its way ! ',
            showConfirmButton: false,
            timer: 1500
        });
})


    
    // if(Name == '' || Tele == '' || Address == '' || Code == ''){

    //     alert('do something')
        // document.querySelector('.success-popup').style.display = 'block';
        // window.setTimeout(() => {
        //     document.querySelector('.success-popup').style.display = 'none';
        // }, 1550);
    // }
    // } else{
    //     message.textContent = " Fill Details ! ";
    //     message.style.color = "red";
    // }


const menu = document.querySelector('.open-menu');
menu.addEventListener('click',()=>{
    document.querySelector('.nav').style.visibility = 'visible';
    // document.querySelector('.nav').append.style = append.document.querySelector('.style'); 
    document.querySelector('.close-menu').style.display= 'block';
    document.querySelector('.close-menu').addEventListener('click',()=>{
        document.querySelector('.nav').style.visibility = 'hidden';
        document.querySelector('.close-menu').style.display = 'none';
    })
})
