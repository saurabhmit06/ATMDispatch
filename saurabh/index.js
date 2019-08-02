

const currancy = [2000, 500, 200, 100, 50, 20, 10, 2, 1];

let form = document.getElementsByTagName("form");
form[0].addEventListener("submit", function(event) {
  let total = 0;
  currancy.reduce((amount, item) => {
    let noteCount = amount / item;
    total += parseInt(noteCount);
    document.getElementById("note" + item).innerHTML = parseInt(noteCount);
    return amount % item;
  }, document.getElementById("inputValue").value);
  document.getElementById("total").innerHTML = total;
  event.preventDefault();
});
