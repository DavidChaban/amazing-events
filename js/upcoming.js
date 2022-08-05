let fechaActual = (data.currentDate);
console.log(fechaActual)


let text = "";
array = data.events;
let container1 = document.getElementById("container");

let card = "";
function displayCards(array) {
  if(array.length > 0){
    let card = ""
    array.forEach(array =>{
      if(fechaActual < array.date)
    card += `<div class="card01 card">
        <img src="${array.image}" class="card-img-top w-3 img2 imgCard"  alt="${array.name}">
        <div class="card-body d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-start bg-black d-flex align-items-center justify-content-center align-content-center dateCard">
        <p class="card-text m-3 p">${array.date}</p>
        </div>
        <h5 class="card-title">${array.name}</h5>
        <p class="card-text m-3"> ${array.description}   </p>
        <div class="d-flex justify-content-around">
                   <p class="pt-2">Price: $${array.price} </p>

                   <a href="./details.html?id=${array._id}" class="btn btn-primary" ${array.price}>See more...</a>
                   </div>
                   </div>
                   </div>
                   `
    })            //  container1.appendChild(card);
                  container1.innerHTML=card;
}
else{
  container1.innerHTML = `<p style="color:black">No Search Found </p>`
}
}
//=

//-----------generador de checks -------------------------------------------------------------------------------------------------------
// let category = [...checkbox(new Set(data.events.map(a =>a.category)))];
let checkboxContainer = document.getElementById("checkId");
let checkboxs = [];
let datahola = data.events.forEach((a) => {
  if (!checkboxs.includes(a.category)) {
    checkboxs.push(a.category);
  }
});
// console.log(checkboxs)
//--------------imprimir-----*/*/-*-*-*-*---------------------------------
function printCategory() {
  let checkboxs1 = "";
  checkboxs.forEach((a) => {
    // printCategory(a)
    checkboxs1 += `<div class="form-check form-switch m-3">
  <input class="form-check-input" type="checkbox" role="switch" id="${a}">
  <label class="form-check-label" for="${a}">${a}</label>
</div>`;
    checkboxContainer.innerHTML = checkboxs1;
  });
}
printCategory();
//////*********************busqueda */
let textVacie = "";
function search() {
  let search = document.getElementById("searchh");
  search.addEventListener("keyup", (e) => {
    textVacie = e.target.value;
    console.log(textVacie);
    filter();
  });
}
search();
// keyup evento

///-----------Eventos click - checkbox-----------------
let checkboxClick = [];
let checkbox = document.querySelectorAll("input[type=checkbox]");
function checkboxx() {
  checkbox.forEach((checkedd) =>
    checkedd.addEventListener("click", (event) => {
      let checked = event.target.id;
      console.log(checked);
      if (checkedd.checked) {
        checkboxClick.push(checked);
        console.log(checkboxClick);
        filter();
      } else {
        checkboxClick = checkboxClick.filter((uncheck) => uncheck !== checked);
        console.log(checkboxClick);
      }
      filter();
    })
  );
}
checkboxx();


///----------- Filter()-----------------
function filter() {
  let filterArray = [];
  if (checkboxClick.length > 0 && textVacie !== "") {
    //categoria clikeada y texto
    checkboxClick.map((checked) =>
      filterArray.push(
        ...array.filter(
          (event) =>
            event.name.toLowerCase().includes(textVacie.trim().toLowerCase()) &&
            event.category == checked
        )
      )
    ); // la suma de los 2
    console.log(filterArray);
  } else if (checkboxClick.length > 0 && textVacie === "") {
    //categoria clickeada sin texto
    checkboxClick.map((checked) => {
      filterArray.push(...array.filter((events) => events.category == checked));
    }); //le mete todos los eventos y compara q las categorias sean igual q la categoria que guardaste al principio
    console.log(checkboxClick);
  } else if (checkboxClick.length == 0 && textVacie !== "") {
    // no hay checkbox categoria clickeado,pero hay texto.//tiene q haber texto
    filterArray.push(
      ...array.filter((event) =>
        event.name.toLowerCase().includes(textVacie.trim().toLowerCase())
      )
    );
    console.log(filterArray);
  } else {
    //no hay texto, ni checkbox clickeado
    filterArray.push(...array); //te agrega todos los eventos
  }
  console.log(filterArray);
  displayCards(filterArray);
}

filter();

