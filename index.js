let input = Document.getElementById("talkk");
let div = Document.getElementById("talk");
input.addEventListener("submit", (e) => {
    div.innerHTML(e.currentTarget.value)
})