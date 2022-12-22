//toggle button
const toggleButton = document.getElementById('toggleButton');
const navItems = document.getElementById('navItems');
toggleButton.addEventListener('click',()=>{
    navItems.classList.toggle('active');
    toggleButton.clasList.toggle('fa-times');
});

//change icon
changeIcon = (icon) => icon.classList.toggle('fa-times');
