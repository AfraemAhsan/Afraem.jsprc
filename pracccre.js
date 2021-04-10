const panels=document.querySelectorAll(".panel");
panels.forEach(panel => {
    // removeActiveclassese();
    panel.addEventListener("click",()=>{
        panel.classList.toggle("active");
    })
});

// function removeActiveclassese(){
//     panels.forEach(panel => {
//         panel.classList.remove("active");
//     });
    
// }