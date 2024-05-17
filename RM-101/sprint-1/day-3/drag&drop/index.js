const dragables=document.querySelectorAll(".dragable")

dragables.forEach(dragable=>{
    dragable.addEventListener("dragstart",()=>{
        dragable.classList.add("dragging")
        event.dataTransfer.setData("text/html",event.target.innerHTML)
        event.dataTransfer.dropEffect = "copy";
    })

    dragable.addEventListener("dragend",()=>{
        // console.log(event)
        if(event.dataTransfer.dropEffect=="none"){
            dragable.classList.remove("dragging")
        }
    })

    dragable.addEventListener("dragleave",()=>{
        dragable.style.opacity=1
    })


    dragable.addEventListener("dragover",()=>{
        event.preventDefault()
        dragable.style.opacity=0
    })


    dragable.addEventListener("drop",()=>{
        event.preventDefault()
        // console.log("hello")
        const data=event.dataTransfer.getData("text/html")
        const dragging=document.querySelector(".dragging")  
        console.log(dragable)
        dragging.innerHTML=dragable.innerHTML
        dragging.classList.remove("dragging")
        dragable.innerHTML=data
        dragable.style.opacity=1
    })
})