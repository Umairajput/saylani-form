function newPage() {
    var newPage = window.open("index1.html")
    var name = localStorage.getItem("name")
    console.log(name)
    var para = document.getElementById("para")
    para.innerHTML = name
    // name.innerHTML = newPage
    // console.log(name)
}