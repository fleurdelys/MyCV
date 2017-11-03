var guestName = prompt("Hello, what's your name?");

var para = "Hello " + guestName.bold() + ", <br>";
para += "My name is Nguyen Phuong Thao. This page is my resume. The design of the resume is credited to ";
para += "<a href='https://novoresume.com/career-blog/elon-musk-one-page-resume'>Novoresume</a>";
para += ".";

document.getElementById("greeting").innerHTML = para;
