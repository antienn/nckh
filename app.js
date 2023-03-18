document.querySelectorAll(".item_option").forEach(e => e.addEventListener('click',()=>{
    document.querySelectorAll(".item_option").forEach(ec=>{
        if(ec.classList.contains("active")){
            ec.classList.remove("active");
        }
    })
    e.classList.toggle('active');
}))