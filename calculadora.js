    const pantalla = document.getElementById("pantalla");
    const botones = document.querySelectorAll(".btn");

    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const valor = boton.textContent;
        if (valor === "=") {
          try {
            const expresion = pantalla.value.replace(/÷/g,"/").replace(/x/g,"*");
            pantalla.value = eval(expresion);
          } catch {
            pantalla.value = "";
          }
        } else if (valor === "C") {
          pantalla.value = "";
        } else {
          pantalla.value += valor;
        }
      });
    });