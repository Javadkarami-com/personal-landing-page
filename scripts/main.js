msg = "Amir Creepy - Discord Develoepr"; +  msg;pos = 0;
msg = msg+' | ';
function scrollMSG() {
document.title = msg.substring(pos, msg.length) + msg.substring(0, pos);
pos++;
if (pos > msg.length) pos = 0
window.setTimeout("scrollMSG()",200);
}
scrollMSG();

const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("You can run several commands:");
  createCode("projects", "My github page with my projects. Follow me there ;)");
  createCode("about me", "Who am i and what do i do.");
  createCode("social -a", "All my social networks.");
  createCode("clear", "Clean the terminal.");

  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/ImNotCreepy";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/ImNotCreepy' target='_blank'><i class='fab fa-github white'></i> github.com/ImNotCreepy</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi My Name Is Amir Samkan ;)")
    createText("Im 18 Y.O. I study Humanity Grade 12. I Love Coding My Favorite Coding Language Is Java Script. Advanced Discord Configure Telegram And Discord Bot Developer.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/ImNotCreepy' target='_blank'><i class='fab fa-github white'></i> github.com/ImNotCreepy</a>")
    createText("<a href='https://dsc.bio/CreepyAmir' target='_blank'><i class='fab fa-discord white'></i> dsc.bio/CreepyAmir</a>")
    createText("<a href='https://instagram.com/_smamirpv' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/_smamirpv</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();




$('a.smoth-scroll').on("click", function (e) {
  var anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 50
  }, 1000);
  e.preventDefault();
});
