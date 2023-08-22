const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener("keypress", async function(event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");

  createCode("about me", "Who am I and what do I do.");
  createCode("all", "See all commands.");
  createCode("social -a", "All my social networks.");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "guest@";
  span2.textContent = "dimas7:~$";
  p.appendChild(span1);
  p.appendChild(span2);

  const input = document.createElement("input");
  p.appendChild(input);
  app.appendChild(p);
  input.focus();

  input.addEventListener("keypress", async function(event) {
    if (event.key === "Enter") {
      await delay(150);
      const value = input.value;
      span2.textContent = `dimas7:~$ ${value}`; 
      p.style.color = "#3dff4771";
      span2.style.color = "#3dff4771";
      await delay(150);
      processCommand(value); 
      input.style.display = "none"; 
    
    }
  });
}

function removeInput() {
  const input = document.querySelector("input");
  const parentP = input.parentElement; 
  parentP.removeChild(input); 
}


async function getInputValue() {
  const input = document.querySelector("input");
  const value = input.value.trim(); // Remover espaços em branco extras no início e no fim
  if (value === "all") {
    createCode("projects", "My GitHub page with my projects. Follow me there ;)");
    createCode("about me", "Who am I and what do I do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
  } else if (value === "projects") {
    createText(
      "<a href='https://github.com/dimas7git' target='_blank'><i class='fab fa-github white'></i> github.com/dimas7git</a>"
    );
  } else if (value === "about me") {
    createText("Oi, meu nome é Dimas ;)");
    createText(
      "Entusiasta de sistemas, tecnologia e segurança da informação, encontro paixão tanto em explorar vulnerabilidades quanto em acelerar o desenvolvimento com sólidas práticas de segurança em todas as etapas de criação. Com habilidades versáteis de desenvolvimento, incluindo AWS e Docker, minha dedicação à CyberSecurity visa criar um ambiente online mais seguro. Dominando linguagens como Java, PHP e Python, busco unir agilidade e solidez para proteger o mundo digital."
    );
  } else if (value === "social -a") {
    createText(
      "<a href='https://github.com/dimas7git' target='_blank'><i class='fab fa-github white'></i> github.com/dimas7git</a>"
    );
    createText(
      "<a href='https://www.linkedin.com/in/dimas7/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/dimas7</a>"
    );
    createText(
      "<a href='https://www.instagram.com/dimas7fe/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/dimas7fe</a>"
    );
  } else if (value === "social") {
    createText("Didn't you mean: social -a?");
  } else if (value === "clear") {
    removeAllElements();
  } else {
    falseValue(`command not found: ${value}`);
  }

  input.value = ""; 
}


function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = value;
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
