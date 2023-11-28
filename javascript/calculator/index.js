// const num1 =document.getElementById('one');
// const num2 = document.getElementById('two');
// const ans = document.querySelector('result')

let p = document.getElementsByName("button");
p.forEach((button) =>
  button.addEventListener("onclick", (e) => {
    let display = document.querySelector("result");
    display.innerHTML = e.target.innerHTML;
  })
);
