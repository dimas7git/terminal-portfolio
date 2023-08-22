# Meu Portfólio com Estilo de Terminal

Este é o meu projeto de portfólio pessoal inspirado em um estilo de terminal de linha de comando. Ele foi criado com base no projeto original de [heberleonard2](https://github.com/heberleonard2/terminal-style-portfolio-page), que serviu como ponto de partida.

### Motivação para o Fork

Decidi fazer um fork deste projeto para personalizar e adaptar o estilo do portfólio ao meu gosto pessoal. Além disso, esse projeto me permite apresentar de forma criativa minhas habilidades e projetos para outras pessoas.

## Personalizações e Adições

Neste fork do projeto original, adicionei funcionalidades e ajustes para melhorar a experiência do usuário e personalizar o terminal de acordo com as minhas preferências. Abaixo estão algumas das principais alterações que fiz:

### Interatividade Aprimorada
- Personalizei a interação do usuário com o terminal, implementando um sistema que muda a cor do prompt e do texto inserido após pressionar Enter. Isso ajuda a diferenciar as entradas do usuário das respostas do terminal.

```javascript
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
```
### Melhoria na Exibição de Comandos Inválidos
- Aprimorei a exibição dos comandos inválidos, destacando-os em vermelho tanto o comando digitado quanto a mensagem, também foi removido o trueValue.
```javascript
else {
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
```
  Essas personalizações foram projetadas para tornar o terminal mais agradável de usar e fornecer um feedback claro sobre as ações executadas. Continuarei a ajustar e expandir o projeto para aprimorar ainda mais a experiência do usuário.

