var input = document.querySelectorAll("input");
var progresso = document.querySelector("#progress");
var span = document.querySelector("#progress span");
var num = 0;

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("click", () => {
    if (input[i].checked) {
      num++;
    } else {
      num--;
    }

    const porcent = (num / input.length) * 100;

    span.innerHTML = `${porcent}%`;
    progresso.style.width = porcent+"%";
    progresso.style.background = "rgba(22, 243, 10, 0.534)"
  });
}
