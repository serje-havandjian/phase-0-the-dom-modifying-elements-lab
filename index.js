
const main = document.getElementById("main")
main.remove()





const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")

newHeader.textContent = "YOUR-NAME is the champion"




const grabBody = document.querySelector("body")

const p = document.createElement("p")

grabBody.append(p)
p.append(newHeader)