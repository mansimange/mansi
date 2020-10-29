
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "What is the full form of PHP",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertype Preprocessor",
      "Hypertext",
      "Hypertext Preprocessor",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "What kind of lanuguage is Javascript",
    answer: "Scripting",
    options: [
      "Programming",
      "Scripting",
      "Processing",
      "None of these"
    ]
  },
  
  {
    id: 6,
    question: "What is DBMS",
    answer: "Database Management System",
    options: [
      "Data Management System",
      "Management System",
      "Database Management System",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "Which one is non-linear data structure",
    answer: "Graph",
    options: [
      "Stack",
      "Queue",
      "linklist",
      "Graph"
    ]
  },
  {
    id: 8,
    question: "Full form of LAN",
    answer: "Local Area Network",
    options: [
      "Local Area Network",
      "LAN Area Network",
      "Land Area Network",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "Full form of DOM",
    answer: "Document Object Model",
    options: [
      "Document Object Model",
      "Domain Object Model",
      "Doc Object Model",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "Full form DML",
    answer: "Data Manipulation Language",
    options: [
      "Data Manipulation Language",
      "Document Manipulation Language",
      "Database Manipulation Load",
      "None of these"
    ]
  },
  {
    id: 11,
    question: "which one not a type of key in DBMS",
    answer: "Attribute Key",
    options: [
      "Super Key",
      "Candidate Key",
      "Primary Key",
      "Attribute Key"
    ]
  },
  {
    id: 12,
    question: "Full form HTTP",
    answer: "Hypertext Transfer Protocol",
    options: [
      "Text Transfer Protocol",
      "Hypertext Transfer Protocol",
      "Hyper Transfer Protocol",
      "None of these"
    ]
  },
  {
    id: 13,
    question: "Full form DML",
    answer: "Data Manipulation Language",
    options: [
      "Data Manipulation Language",
      "Document Manipulation Language",
      "Database Manipulation Load",
      "None of these"
    ]
  },
  {
    id: 14,
    question: "I in ACID is",
    answer: "Isolation",
    options: [
      "Isolation",
      "Increment",
      "Involve",
      "None of these"
    ]
  },
  {
    id: 15,
    question: "Full form of CSS",
    answer: "Cascading Style Sheets",
    options: [
      "Code Style Sheets",
      "Cascading Style Sheets",
      "Cascading Style Shape",
      "None of these"
    ]
  },
  {
    id: 16,
    question: "Which one is not a concept in OOPS",
    answer: "None of these",
    options: [
      "Abstraction",
      "Inheritance",
      "Polymorphism",
      "None of these"
    ]
  },
  {
    id: 17,
    question: "Full form of OS",
    answer: "Operating System",
    options: [
      "Operational System",
      "Operational Sheets",
      "Operating System",
      "None of these"
    ]
  },
  {
    id: 18,
    question: "Which one is premptive Scheduling algorithm",
    answer: "Round Robin",
    options: [
      "Round Robin",
      "FCFS",
      "Shortest Job Next",
      "None of these"
    ]
  },
  {
    id: 19,
    question: "Which is hardware layer in OSI model",
    answer: "Physical Layer",
    options: [
      "Application Layer",
      "Physical Layer",
      "Presentation Layer",
      "None of these"
    ]
  },
  {
    id: 20,
    question: "Full form of SQL",
    answer: "Structured Query Language",
    options: [
      "Structured Query Language",
      "Shared Query Language",
      "Shock Query Language",
      "None of these"
    ]
  },
  


  

];

var list = [];
while (list.length != 5)
{
  n = Math.floor(Math.random() * 19);
  if(!list.includes(n))
  {
    list.push(n);
  }
}

// var i;
// for(i in list)
// {
//   //q = questions[list[i]]['question'];
//   q = list[i];
// }

//document.getElementById("questions").innerHTML =list

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == list.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[list[question_count]].answer) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(question_count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[list[question_count]].options;

  question.innerHTML = `
  <h2>Q${question_count + 1}. ${questions[list[question_count]].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}

