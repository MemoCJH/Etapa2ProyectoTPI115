// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "¿Cómo se le conoce a Typescript?",
    answer: "'superset' de Javascript",
    options: [
      "'superset' de Javascript",
      "plugin de Java",
      "compilador de Node JS"
    ]
  },
    {
    numb: 2,
    question: "¿Cómo se establece un tipo null en Typescript?",
    answer: "let n: null = null",
    options: [
      "let n = null",
      "let n = undefined",
      "let n: null = null"
    ]
  },
    {
    numb: 3,
    question: "¿Cuál es el modelo preferido para escribir programas en JavaScript?",
    answer: "clases \"libres\"",
    options: [
      "asociasiones",
      "clases \"libres\"",
      "class struct"
    ]
  },
    {
    numb: 4,
    question: "¿Cómo se representa any?",
    answer: "let obj:any = {x:0};",
    options: [
      "any = x",
      "let obj:any = {x:0};",
      "let any = 0ge",
      "Structured Query Language"
    ]
  }
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];