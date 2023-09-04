const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

let isPortuguese = false;
let input; // Variável para armazenar o elemento input
let firstCommandExecuted = false; // Variável de controle

async function open_terminal() {
  createText("Define a language");
  await delay(500);
  createCode("Portuguese or English?", "Your choice:");
  await delay(500);
  new_line();
  app.addEventListener("click", function(event) {
    input.focus();
  });
}

app.addEventListener("keypress", async function(event) {
  if (event.key === "Enter") {
    await delay(30);
    processCommand();

    removeInput();
    await delay(30);
    if (firstCommandExecuted) {
      new_line(); 
    } else {
      firstCommandExecuted = true; 
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

  input = document.createElement("input"); 
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
    createText("Você pode executar vários comandos:");

    createCode("sobre mim", "Quem sou eu e o que faço.");
    createCode("habilidades", "Algumas das minhas habilidades técnicas.");
    createCode("social -a", "Todas as minhas redes sociais.");
    createCode("todos", "Ver todos os comandos.");
    await delay(500);
    new_line(); 
  } else if (command.trim().toLowerCase() === "ingles" || command.trim().toLowerCase() === "inglês" || command.trim().toLowerCase() === "english") {
    isPortuguese = false;
    await delay(700);
    createText("Starting the server...");
    await delay(1500);
    createText("You can run several commands:");
    createCode("about me", "Who am I and what do I do.");
    createCode("skills", "Some of my technical skills")
    createCode("social -a", "All my social networks.");
    createCode("all", "See all commands.");
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
      createCode("habilidades", "Algumas das minhas habilidades técnicas");
      createCode("cowsay", "Escreva algo para a vaca falar.");
      createCode("limpar", "Limpar o terminal.");
    } else if (value.trim().toLowerCase() === "projetos") {
      createText(
        "<a href='https://github.com/dimas7git' target='_blank'><i class='fab fa-github white'></i> github.com/dimas7git</a>"
      );
    } 
    else if (value.trim().toLowerCase() === "habilidades") {
      createText("Aqui estão algumas das minhas principais habilidades técnicas:");

      createCode1("Linguagens de Programação:", "Java, Python, C++, C#, PHP, JavaScript");
      createCode1("Desenvolvimento Web:", "HTML5, CSS3, Node.js, Laravel");
      createCode1("Banco de Dados:", "MySQL, PostgreSQL");
      createCode1("Servidores Web:", "Nginx, Apache");
      createCode1("Frameworks e Plataformas:", "Spring (Java), Bootstrap, AWS (Amazon Web Services)");
      createCode1("Controle de Versão:", "Git");
      createCode1("Contêinerização:", "Docker");
      createCode1("Sistema Operacional:", "Linux, Windows");
    
      createText("Além disso, tenho conhecimentos em várias ferramentas de pentest, incluindo:");
      createCode1("Ferramentas de Pentest:", "Burp Suite, Nmap, Metasploit, Wireshark");
      createCode1("Análise de Vulnerabilidades:", "Identificação e correção de vulnerabilidades de segurança");
      createCode1("Segurança da Informação:", "Práticas de segurança em desenvolvimento e operações");
    
      createText("Estou sempre aprendendo e atualizando minhas habilidades para enfrentar novos desafios na área de tecnologia.");
      
    } else if (value.trim().toLowerCase() === "sobre mim") {
      createText("Oi, meu nome é Dimas ;)");
      createText(
        "Entusiasta de sistemas, tecnologia e segurança da informação, encontro paixão tanto em explorar vulnerabilidades quanto em acelerar o desenvolvimento com sólidas práticas de segurança em todas as etapas de criação. Com habilidades versáteis de desenvolvimento, incluindo AWS e Docker, minha dedicação à CyberSecurity visa criar um ambiente online mais seguro. Dominando linguagens como Java, PHP e Python, busco unir agilidade e solidez para proteger o mundo digital."
      );
    }else if (value.toLowerCase().startsWith("cowsay ")) {
      const message = value.substring(7).trim();
   
      const generateCowsayMessage = (message) => {
        const cowMessage = `
         ______________
        < ${message} >
         --------------
                \\   ^__^
                 \\  (oo)\\_______
                    (__)\\       )\\/\\
                        ||----w |
                        ||     ||`;
        return cowMessage;
      };
    
      if (message) {
        const cowsayText = generateCowsayMessage(message);
        createText(`<pre>${cowsayText}</pre>`);
      } else {
        createText("Escreva uma mensagem para a vaca");
      }
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
      createCode("skills", "Some of my technical skills");
      createCode("cowsay", "Write something for the cow to say.");
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
      
    }else if (value.trim().toLowerCase() === "skills") {
      createText("Here are some of my key technical skills:");
    
      createCode1("Programming Languages:", "Java, Python, C++, C#, PHP, JavaScript");
      createCode1("Web Development:", "HTML5, CSS3, Node.js, Laravel");
      createCode1("Database:", "MySQL, PostgreSQL");
      createCode1("Web Servers:", "Nginx, Apache");
      createCode1("Frameworks and Platforms:", "Spring (Java), Bootstrap, AWS (Amazon Web Services)");
      createCode1("Version Control:", "Git");
      createCode1("Containerization:", "Docker");
      createCode1("Operating Systems:", "Linux, Windows");
    
      createText("Additionally, I have knowledge in various pentest tools, including:");
      createCode1("Pentest Tools:", "Burp Suite, Nmap, Metasploit, Wireshark");
      createCode1("Vulnerability Analysis:", "Identification and remediation of security vulnerabilities");
      createCode1("Information Security:", "Security practices in development and operations");
    
      createText("I'm always learning and updating my skills to tackle new challenges in the technology field.");
    }
     else if (value.trim().toLowerCase() === "social -a") {
      createText(
        "<a href='https://github.com/dimas7git' target='_blank'><i class='fab fa-github white'></i> github.com/dimas7git</a>"
      );
      createText(
        "<a href='https://www.linkedin.com/in/dimas7/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/dimas7</a>"
      );
      createText(
        "<a href='https://www.instagram.com/dimas7fe/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/dimas7fe</a>"
      );
    }else if (value.toLowerCase().startsWith("cowsay ")) {
      const message = value.substring(7).trim();
      const generateCowsayMessage = (message) => {
        const cowMessage = `
        ______________
        < ${message} >
         --------------
                \\   ^__^
                 \\  (oo)\\_______
                    (__)\\       )\\/\\
                        ||----w |
                        ||     ||`;
        return cowMessage;
      };
    
      if (message) {
        const cowsayText = generateCowsayMessage(message);
    
        createText(`<pre>${cowsayText}</pre>`);
      } else {
        createText("Please provide a message for the cow.");
      }
    }
     else if (value.trim().toLowerCase() === "social") {
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

function createCode1(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code1");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}
open_terminal();
