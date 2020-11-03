let counter = 0
let counterOfGoods = 1;
let arrayGoods = 
[
  ["Мягкая игрушка “Пикачу”", 500],
  ["Мягкая игрушка “Панды”", 500],
  ["Мягкая игрушка “Зайка”", 500],
  ["Мягкая игрушка “Лисенок”", 500],
  ["Мягкая игрушка “Медведь”", 500],
  ["Мягкая игрушка “Котик”", 500]
]

function addCounterPop(){
  if (counter != 0) {
    counter++;
    let popUp = document.getElementById("bubblePop");
    popUp.innerHTML = counter;
  }
  else{
    counter++;
    let popUp = document.getElementById("bubblePop");
    if (counter == 1) {
      popUp.classList.remove("hide");
      popUp.classList.add("show");
    }
    popUp.innerHTML = counter;
  }
}
