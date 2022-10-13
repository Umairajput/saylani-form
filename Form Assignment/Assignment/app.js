
function Call() {
    var getName = document.getElementById("name").value

    var nameValidation = /^.{5,}$/.test(getName)
    if (nameValidation === false) {
        swal("The name  must be at least five characters")
    } else {
        localStorage.setItem("name", getName)
    }
    var getFatherName = document.getElementById("father_name").value
    var fatherNameValidation = /^.{6,}$/.test(getFatherName)
    if (fatherNameValidation === false) {
        swal("The father name  must be at least six characters")
    } else {
        localStorage.setItem("father name", getFatherName)
    }
    var email = document.getElementById("email").value
    var emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    if (emailValidation === false) {
        swal("Email is invalid")
    } else {
        localStorage.setItem("email", email)
    }
    var number = document.getElementById("number").value
    var numberValidation = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test(number)
    if (numberValidation === false) {
        swal("Phone number is invalid")
    } else {
        localStorage.setItem("phone number", number)
    }
    var fatherCnic = document.getElementById("father_cnic").value
    var fatherCnicValidation = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(fatherCnic)
    if (fatherCnicValidation === false) {
        swal("your father CNIC number is invalid")
    } else {
        localStorage.setItem("father CNIC", fatherCnic)
    }
    var getDate = document.getElementById("getDate").value
    if (getName === "" || getFatherName === "" || email === "" || number === "" || fatherCnic === "" || getDate === "") {
        swal("Please fill all values")
    }
    else {
        localStorage.setItem("Date of birth", getDate)
    }
    // var name = localStorage.getItem("name")
    // console.log(name)
    // var para = document.getElementById("para")
    // console.log(para.innerHTML = name)
    // console.log(para)
}
function newPage() {
    var newPage = window.open("index1.html")
    `<p>
        Hello world
    </p>`
    var name = localStorage.getItem("name")
    // console.log(name)
    // var para = document.getElementById("para")
    // console.log(para.innerHTML = name)
    // console.log(name)
    // var para = document.getElementById("para")
    // para.innerHTML = name
    // name.innerHTML = newPage
    // console.log(name)
}
function callMe() {
    // `<p>
    //     Hello world
    // </p>`
    var name = localStorage.getItem("name")
    var paragraph = document.getElementById("paragraph")
    paragraph.innerHTML = name
    var faterName = localStorage.getItem("father name")
    var fName = document.getElementById("fatherName")
    fName.innerHTML = faterName
    var emailResult = document.getElementById("emailResult")
    var getEmail = localStorage.getItem("email")
    emailResult.innerHTML = getEmail
}

// var getQualification = document.getElementById("getQualification").value
// localStorage.setItem("Qualification",getQualification)
// var cnic = document.getElementById("cnic").value
// var cnicValidation = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic)
// if (cnicValidation === false) {
//     alert("your CNIC number is invalid")
// }else {
//     localStorage.setItem("CNIC NO", cnic)
// }
// var getCityOptions = document.getElementById("cityOptions").value
// localStorage.setItem("City",getCityOptions)
//     var getCourseOptions = document.getElementById("courseOptions").value
// localStorage.setItem("City",getCourseOptions)
//     var getGenderOptions = document.getElementById("genderOptions").value
// localStorage.setItem("Gender",getGenderOptions)
// var getAddress  = document.getElementById("getAddress").value
// localStorage.setItem("Address",getAddress)