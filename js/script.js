// document.title = "New title";


// let Name = document.getElementsByName("name")[0];
// let Surname = document.getElementsByName("surname")[0];

// console.log(Name.value);
// console.log(Surname.value);

// Name.value = "Qasim";

// console.log(document.forms[0].elements[0].classList);

// let ul = document.querySelector(".wrapper ul");

// console.log(ul.childNodes);
// console.log(ul.children);

// let lis = [...ul.children];

// for (let i = 0; i < lis.length; i++) {
//     console.log(lis[i]);
// }

// for (let i = 0; i < ul.childNodes.length; i++) {
//     console.log(ul.childNodes[i].nodeType)
// }

// console.log(ul.parentElement);
// console.log(ul.parentNode);

// console.log(ul.childNodes);
// console.log(ul.children);
// console.log(ul.firstChild);
// console.log(ul.firstElementChild);


// console.log(ul.lastChild);
// console.log(ul.lastElementChild);

// console.log(ul.nextSibling);
// console.log(ul.nextElementSibling);

// console.log(ul.closest(".row"));
// console.log(ul.previousElementSibling);


// let Paragraph = document.querySelector("#Paragraph");
// Paragraph.classList.add("newClass");
// Paragraph.classList.remove("p1");
// console.log(Paragraph.classList.contains("newClass"));
// Paragraph.classList.replace("newClass", "p1");
// console.log(Paragraph.classList);

// let submit = document.getElementById("submit");
// let surname = document.getElementsByName("surname")[0];
// submit.addEventListener("click", function (e) {
//     e.preventDefault();
//     console.log(e);
// });

// surname.addEventListener("keyup", function (e) {
//     // e.preventDefault();
//     console.log(this.value);
// });


let submit = document.getElementById("submit");
submit.addEventListener("click", function(e) {
    e.preventDefault();

    let name = document.forms[0].elements[0];
    let surname = document.forms[0].elements[1];

    if (name.value == "") {
        name.nextElementSibling.style.display = "block";
        return;
    }

    if (surname.value == "") {
        surname.nextElementSibling.style.display = "block";
        return;
    }


    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = name.value;

    let td2 = document.createElement("td");
    td2.textContent = surname.value;

    tr.appendChild(td1);
    tr.appendChild(td2);

    let tbody = document.querySelector("#table tbody");
    tbody.appendChild(tr);

    name.value = "";
    surname.value = "";
});

document.forms[0].elements[0].addEventListener("blur", function(e) {
    e.preventDefault();
    if (this.value != "") {
        this.nextElementSibling.style.display = "none";
    }
});

document.forms[0].elements[1].addEventListener("blur", function(e) {
    e.preventDefault();
    if (this.value != "") {
        this.nextElementSibling.style.display = "none";
    }
});