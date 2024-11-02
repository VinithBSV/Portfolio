function checkScreenSize()
{
    let pros=document.querySelectorAll('.med');
    if(window.matchMedia("(max-width:640px)").matches)
    {
        pros.forEach(function(pro)
        {
        pro.classList.add("hidden");
    });
    }
    else
    {
        pros.forEach(function(pro)
        {
        pro.classList.remove("hidden");
    });
}
}
checkScreenSize();
window.addEventListener('resize',checkScreenSize);
