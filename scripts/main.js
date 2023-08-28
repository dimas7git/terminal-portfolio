const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

let isPortuguese = false;
let input; // Variável para armazenar o elemento input
let firstCommandExecuted = false; // Variável de controle

async function open_terminal() {
  createText("Choose a language");
  await delay(500);
  createCode("Portuguese or English?", "choice");
  await delay(500);
  new_line();
  app.addEventListener("click", function(event) {
    input.focus();
  });
}

app.addEventListener("keypress", async function(event) {
  if (event.key === "Enter") {
    await delay(150);
    processCommand();

    removeInput();
    await delay(150);
    if (firstCommandExecuted) {
      new_line(); // Chama a new_line() após a primeira execução
    } else {
      firstCommandExecuted = true; // Define a variável como true após a primeira execução
    }
  }
});

async function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "guest@";
  span2.textContent = "dimas7:~$";
  p.appendChild(span1);
  p.appendChild(span2);

  input = document.createElement("input"); // Atribuir à variável input
  p.appendChild(input);
  app.appendChild(p);
  input.focus();

  input.addEventListener("keypress", async function(event) {
    if (event.key === "Enter") {
      await delay(150);
      const value = input.value.trim().toLowerCase();
      span2.textContent = `dimas7:~$ ${value}`;
      p.style.color = "#3dff4771";
      span2.style.color = "#3dff4771";
      await delay(150);
      processCommand(value);
      input.style.display = "none";
      input.value = "";
    }
  });
}

function removeInput() {
  const input = document.querySelector("input");
  const parentP = input.parentElement;
  parentP.removeChild(input);
}

async function processCommand(command) {
  if (command.trim().toLowerCase() === "portugues" || command.trim().toLowerCase() === "português" || command.trim().toLowerCase() === "portuguese") {
    isPortuguese = true;
    await delay(700);
    createText("Iniciando o servidor...");
    await delay(500);
    // Remova essa chamada
    createText("Você pode executar vários comandos:");

    createCode("sobre mim", "Quem sou eu e o que faço.");
    createCode("todos", "Ver todos os comandos.");
    createCode("social -a", "Todas as minhas redes sociais.");
    await delay(500);
    new_line(); 
  } else if (command.trim().toLowerCase() === "ingles" || command.trim().toLowerCase() === "inglês" || command.trim().toLowerCase() === "english") {
    isPortuguese = false;
    await delay(700);
    createText("Starting the server...");
    await delay(1500);
    createText("You can run several commands:");
    createCode("about me", "Who am I and what do I do.");
    createCode("all", "See all commands.");
    createCode("social -a", "All my social networks.");
    await delay(500);
    new_line(); 
  } else {
    processUserInput(command);
  }
}

function processUserInput(value) {

  if (isPortuguese) {
    if (value.trim().toLowerCase() === "todos") {
      createCode("projetos", "Minha página GitHub com meus projetos. Siga-me lá ;)");
      createCode("sobre mim", "Quem sou eu e o que faço.");
      createCode("social -a", "Todas as minhas redes sociais.");
      createCode("limpar", "Limpar o terminal.");
    } else if (value.trim().toLowerCase() === "projetos") {
      createText(
        "<a href='https://github.com/dimas7git' target='_blank'><i class='fab fa-github white'></i> github.com/dimas7git</a>"
      );
    } else if (value.trim().toLowerCase() === "sobre mim") {
      createText("Oi, meu nome é Dimas ;)");
      createText(
        "Entusiasta de sistemas, tecnologia e segurança da informação, encontro paixão tanto em explorar vulnerabilidades quanto em acelerar o desenvolvimento com sólidas práticas de segurança em todas as etapas de criação. Com habilidades versáteis de desenvolvimento, incluindo AWS e Docker, minha dedicação à CyberSecurity visa criar um ambiente online mais seguro. Dominando linguagens como Java, PHP e Python, busco unir agilidade e solidez para proteger o mundo digital."
      );
    } else if (value.trim().toLowerCase() === "social -a") {
      createText(
        "<a href='https://github.com/dimas7git' target='_blank'><i class='fab fa-github white'></i> github.com/dimas7git</a>"
      );
      createText(
        "<a href='https://www.linkedin.com/in/dimas7/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/dimas7</a>"
      );
      createText(
        "<a href='https://www.instagram.com/dimas7fe/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/dimas7fe</a>"
      );
    } else if (value.trim().toLowerCase() === "social") {
      createText("Você quis dizer: social -a?");
    } else if (value.trim().toLowerCase() === "limpar") {
      removeAllElements();
    } else {
      falseValue(`Comando não encontrado: ${value}`);
    }
  } else {
    if (value.trim().toLowerCase() === "all") {
      createCode("projects", "My GitHub page with my projects. Follow me there ;)");
      createCode("about me", "Who am I and what do I do.");
      createCode("social -a", "All my social networks.");
      createCode("clear", "Clean the terminal.");
    } else if (value.trim().toLowerCase() === "projects") {
      createText(
        "<a href='https://github.com/dimas7git' target='_blank'><i class='fab fa-github white'></i> github.com/dimas7git</a>"
      );
    } else if (value.trim().toLowerCase() === "about me") {
      createText("Hi, my name is Dimas ;)");
      createText(
        "Passionate about systems, technology, and information security, I find joy in both exploring vulnerabilities and accelerating development with solid security practices at every stage of creation. With versatile development skills including AWS and Docker, my dedication to CyberSecurity aims to create a safer online environment. Mastering languages like Java, PHP, and Python, I seek to combine agility and solidity to protect the digital world."
      );
      
    } else if (value.trim().toLowerCase() === "social -a") {
      createText(
        "<a href='https://github.com/dimas7git' target='_blank'><i class='fab fa-github white'></i> github.com/dimas7git</a>"
      );
      createText(
        "<a href='https://www.linkedin.com/in/dimas7/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/dimas7</a>"
      );
      createText(
        "<a href='https://www.instagram.com/dimas7fe/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/dimas7fe</a>"
      );
    } else if (value.trim().toLowerCase() === "social") {
      createText("Did you mean: social -a?");
      
    } else if (value.trim().toLowerCase() === "clear") {
      removeAllElements();
    } else {
      falseValue(`Command not found: ${value}`);
    }
  }
  
}

function removeAllElements() {
  app.innerHTML = "";
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