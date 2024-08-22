document.addEventListener("DOMContentLoaded" , function(){
    const navItems = document.querySelectorAll ('.nav li');
    const dropdowns = document.querySelectorAll('.dropdown-menu');

    navItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.stopPropagation();
    const targetId=this.id;
    const dropdown = document.querySelector(`.dropdown-menu#${targetId}`);

    dropdowns.forEach(menu => {
        if (menu !== dropdown) {
            menu.style.display='none';
        }
    });

    if (dropdown.style.display === 'block'){
        dropdown.style.display = 'none';
         } else {
            dropdown.style.display ='block';
         }
        });
    });


document.addEventListener('click' , function(){
    dropdowns.forEach(menu => {
        menu.style.display = 'none';
    });
    });
});


document.addEventListener("DOMContentLoaded" , function() {
    const contactMeBox = document.querySelector('.contact-me');
    const modal = document.getElementById("contact-modal");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    if (contactMeBox){
    contactMeBox.addEventListener('click' , function() {
        modal.style.display = "block";
    });
}

if (closeBtn){
    closeBtn.addEventListener('click' , function (){
        modal.style.display = "none";
    });
}

    window.addEventListener('click', function (event){
        if (event.target == modal) {
            modal.style.display ="none";

        }
    });

    if (form){
    form.addEventListener('submit', function (event){
        event.preventDefault();
        form.style.display = 'none';
        thankYouMessage.style.display ='block';
    });
    }

});

document.addEventListener('DOMContentLoaded' , function () {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn-1');

setTimeout(function(){
    popup.style.display = 'block';
    }, 15000);

    
    closeBtn.addEventListener('click' , function () {
    popup.style.display = 'none';
});
});




document.getElementById('search-button').addEventListener('click' , function() {
    const query = document.getElementById('search-input').value.toLowerCase();

    if (query === 'cats') {
        window.location.href = 'index1.html';
    } else {
        alert('Sorry! I do not work! I am only 2 pages of website! Unless you search "cats", try that!');

    }
});

document.getElementById('search-input').addEventListener('keypress' ,function (event){
    if (event.key === 'Enter') {
        event.preventDefault ();
        const query = event.target.value.toLowerCase();

        if (query === 'cats'){
            window.location.href = 'index1.html';
        } else{
            alert('Sorry! I do not work! I am only 2 pages of website! Unless you search "cats", try that!');

        }
    }
});
