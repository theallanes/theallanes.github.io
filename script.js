function popupFn(type) {

  if(type == 'about'){
    document.getElementById(
      "about"
    ).style.display = "flex";
  }
  else if(type == 'skills'){
    document.getElementById(
      "skills"
    ).style.display = "flex";
  }
  else if(type == 'experience'){
    document.getElementById(
      "experience"
    ).style.display = "flex";
  }
  else if(type== 'projects'){
    document.getElementById(
      "projects"
    ).style.display = "flex";
  }
  else if(type== 'contact'){
    document.getElementById(
      "contact"
    ).style.display = "flex";
  }
}

function closeFn() {
  document.getElementById(
      "about"
  ).style.display = "none";
  document.getElementById(
    "skills"
  ).style.display = "none";
  document.getElementById(
      "experience"
  ).style.display = "none";
  document.getElementById(
    "projects"
).style.display = "none";
  document.getElementById(
    "contact"
  ).style.display = "none";
}

dragElement(document.getElementById("skills"));
dragElement(document.getElementById("experience"));
dragElement(document.getElementById("about"));
dragElement(document.getElementById("contact"));
dragElement(document.getElementById("projects"));
dragElement(document.getElementById("project1"));
dragElement(document.getElementById("project2"));
dragElement(document.getElementById("project3"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;

    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {

    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function currentDate(){
  var today = new Date();
  const formatDate = today.toLocaleString();
  document.getElementById('time').innerHTML = formatDate;

}

window.setInterval(currentDate, 1000);


function openProject(type){
  if(type == 'project1'){
    document.getElementById("project1").style.display = "flex";
  }
  else if(type == 'project2'){
    document.getElementById("project2").style.display = "flex";
  }
  else if(type == 'project3'){
    document.getElementById("project3").style.display = "flex";
  }
}

function closeProject(){
  document.getElementById("project1").style.display = "none";
  document.getElementById("project2").style.display = "none";
  document.getElementById("project3").style.display = "none";
}

function copyFn(){
  var copyText = 'zenthea07@gmail.com';

  navigator.clipboard.writeText(copyText);

  alert("Email has been copied to clipboard")
}

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

function lightMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  element.classList.toggle("windows-dark-mode");
}
