async function getPics() {
    pics = await fetch("../dataDone.json")
    pics = await pics.json()
    
    let count = 1;
    pics.forEach(img => {
        count++
        let link = "/images/folk/"+img['link']
        let instance = document.createElement("img")
        instance.src = link
        let holder = document.querySelector("#d"+(count%3))
        if (link.includes("tom.png")) instance.classList.add("tomi")
        holder.appendChild(instance)
    });

    console.log('pics.length --> ' + pics.length)
}

getPics()