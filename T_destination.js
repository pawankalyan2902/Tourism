let img=document.querySelector("li img");
function imagechanger()
{
    img.classList.add("imagehover");
}
img.addEventListener('click',imagechanger);