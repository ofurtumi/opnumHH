const folk = document.querySelectorAll(".folk")
const footer = document.querySelector(".settings")
let docStyle = getComputedStyle(document.documentElement);

gogn()

async function gogn() {
    let ol = document.createElement("ol")
    let html = "";
    let dropdown;
    dropdown = await fetch("data.json")
    dropdown = await dropdown.json()


    dropdown.forEach(element => {
        html += "<option value=" + element["link"]  + ">" +element["nafn"] + "</option>"
    });

    let select = document.createElement("select")
    select.innerHTML = html

    folk.forEach(e => {
        let dropCopy = select.cloneNode(true)
        let nafnOutput = e.querySelector("p")
        let imgOutput = e.querySelector("img")
        dropCopy.addEventListener("change",()=>{
            nafnOutput.textContent = dropCopy.options[dropCopy.options.selectedIndex].text
            imgOutput.src = "./images/folk/"+dropCopy.value
        })
        let li = document.createElement("li")
        let ul = document.createElement("ul")
        ul.classList.add("hreyfingar")
        
        li.appendChild(dropCopy)
        ol.appendChild(li)
    });

    let titill = document.createElement("h1")
    titill.textContent = "Stillingar"
    titill.id = "stitill"
    footer.appendChild(titill)
    footer.appendChild(ol)
    litir()
    letur()
}

function litir() {
    let t = document.createElement("h1")
    t.textContent = "Bakgrunnur"
    t.id = "ltitill"
    let l = document.createElement("input")
    l.type = "color"
    l.value = docStyle.getPropertyValue('--main-background')
    l.classList.add("litir")
    l.addEventListener("change",()=>{
        let lighter = shadeColor(l.value,20)
        document.documentElement.style.setProperty('--main-background', l.value);
        document.documentElement.style.setProperty('--name-background', lighter);

    })
    footer.append(t,l)
}

function letur() {
    let d = document.createElement("div")
    d.classList.add("leturLitir")
    let lTitle = document.createElement("h1")
    // ltTitle.classList.add("lTitle")
    lTitle.textContent = "Letur litir"
    let dt = document.createElement("div")
    let lt = document.createElement("input")
    let ltTitle = document.createElement("h2")
    ltTitle.textContent = "Nöfn"
    lt.type = "color"
    lt.value = docStyle.getPropertyValue('--name-text-color')

    lt.addEventListener("change",()=>{
        document.documentElement.style.setProperty('--name-text-color', lt.value)
    })
    dt.append(ltTitle,lt)

    let db = document.createElement("div")
    let lb = document.createElement("input")
    let lbTitle = document.createElement("h2")
    lbTitle.textContent = "Texti"
    lb.type = "color"
    console.log(docStyle.getPropertyValue('--main-text-color'))
    lb.value = docStyle.getPropertyValue('--main-text-color')
    lb.addEventListener("change",()=>{
        document.documentElement.style.setProperty('--main-text-color', lb.value)
    })
    db.append(lbTitle,lb)

    d.append(dt,db)
    footer.append(lTitle,d)
}

function shadeColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
    var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
    var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
}