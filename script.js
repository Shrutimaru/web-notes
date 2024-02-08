show();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) notesobj = [];
  else notesobj = JSON.parse(notes);
  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  show();
});

function show() {
  let notes = localStorage.getItem("notes");
  if (notes == null) notesobj = [];
  else notesobj = JSON.parse(notes);
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="card text-center border-4 border-t-sky-500 my-3 mx-2" style="width: 18rem; id="cardtxt">
        <div class="card-body my-4">
            <h5 class="card-title font-serif underline text-3xl">Note ${
              index + 1
            }</h5>
            <p class="card-text text-2xl" id="card-text">${element}</p>
            <button id="${index}" onclick="delete_n(this.id)" class="btn btn-primary border-2 border-neutral-900">DELETE NOTE</button>
        </div>
    </div>`;
  });
  let notesel = document.getElementById("notes");
  if (notesobj.length != 0) 
  notesel.innerHTML = html;
  else 
  notesel.innerHTML = "Nothing to show!";
}

function delete_n(index) {
  console.log("I am deleting", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) 
  notesobj = [];
  else notesobj = JSON.parse(notes);
  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  show();
}

let search = document.getElementById("searchtxt");
search.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(search.id);
//   let ipval = document.getElementById("searching").innerText.toLowerCase();
  let cards = document.getElementsByClassName("card");
//   console.log(cards)
  console.log(ipval)
  Array.from(cards).forEach(function (element) {
    let cardtxt = element.document.getElementsByTagName('p')[0].innerHTML;
    // let cardtxt=element.getElementsByTagName('p')[0].innerHTML;
    if (cardtxt.includes(ipval)) {
      element.style.display = "block";
      console.log("yes");
    } 
    else {
      element.style.display = "none";
      console.log("no");
      // console.log(cardtxt);
    }
  });
});