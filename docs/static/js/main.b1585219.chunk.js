(this.webpackJsonpquizzapp=this.webpackJsonpquizzapp||[]).push([[0],[,,,function(e,n,t){e.exports={Button:"Button_Button__3uB4O"}},,function(e,n,t){e.exports={Container:"Quizz_Container__2mdsi",ButtonsContainer:"Quizz_ButtonsContainer__2nSxZ"}},,,function(e,n,t){e.exports={Header:"Header_Header__15tb2"}},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),s=t(1),a=t(7),i=t.n(a),o=(t(14),t(8)),c=t.n(o),u=function(){return Object(r.jsx)("header",{className:c.a.Header,children:Object(r.jsx)("h1",{children:"QuizzApp | Jopt05"})})},h=t(4),d=t(2),l=t(3),w=t.n(l),j=function(e){var n=e.value,t=e.answer,s=e.handleCheck;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("button",{className:w.a.Button,onClick:function(){return s(n,t)},children:n})})},b=t(5),p=t.n(b),f=[{question:"How many soccer players should each team have on the field at the start of each match?",answers:["11","9","8","10"],rightAnswer:"11"},{question:"What country won the very first FIFA World Cup in 1930?",answers:["Argentina","Spain","USA","Uruguay"],rightAnswer:"Uruguay"},{question:"Which boxer was known as \u201cThe Greatest\u201d and \u201cThe People\u2019s Champion\u201d?",answers:["Muhammad Ali","Sugar Ray Robinson","Joe Louis","Michael Phelps"],rightAnswer:"Muhammad Ali"},{question:"What\u2019s the shortcut for the \u201ccopy\u201d function on most computers?",answers:["SHIFT + C","CTRL + V","ALT + C","CTRL + C"],rightAnswer:"CTRL + C"},{question:"Google Chrome, Safari, Firefox, and Explorer are different types of what?",answers:["Music genre","Cars","Web browsers","Fast food"],rightAnswer:"Web browsers"},{question:"Who was the first woman to win a Nobel Prize (in 1903)?",answers:["Nadia Murad","Abella Anderson","Marie Curie","Marilyn Monroe"],rightAnswer:"Marie Curie"},{question:"What is the symbol for potassium?",answers:["It hasnt","K","As","F"],rightAnswer:"K"},{question:"Which planet is the hottest in the solar system?",answers:["Earth","Saturn","Venus","The Moon"],rightAnswer:"Venus"},{question:"Which natural disaster is measured with a Richter scale?",answers:["Thunderstorm","Inundation","Rain","Earthquake"],rightAnswer:"Earthquake"},{question:"Which animal can be seen on the Porsche logo?",answers:["Bird","Cat","Cow","Horse"],rightAnswer:"Horse"}],m=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=Object(s.useState)(e),t=Object(h.a)(n,2),r=t[0],a=t[1],i=r.cursor,o=r.points,c=(r.finished,r.winner,function(e,n){i<9?a(e===n?Object(d.a)(Object(d.a)({},r),{},{cursor:i+1,points:o+1}):Object(d.a)(Object(d.a)({},r),{},{cursor:i+1})):9==i&&a(e===n?Object(d.a)(Object(d.a)({},r),{},{points:o+1,finished:!0,cursor:0,winner:o>=7}):Object(d.a)(Object(d.a)({},r),{},{finished:!0,cursor:0,winner:o>=7}))});return[r,c,function(){a({cursor:0,points:0,finished:!1,winner:!1})}]}({cursor:0,points:0,finished:!1,winner:!1}),n=Object(h.a)(e,3),t=n[0],a=n[1],i=n[2],o=t.cursor,c=t.points,u=t.winner,l=t.finished;return Object(r.jsx)("div",{className:p.a.Container,children:l?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h2",{children:["You have ",u?"won!":"lost!"," with ",c," points."]}),Object(r.jsx)("div",{className:p.a.ButtonsContainer,children:Object(r.jsx)("button",{className:w.a.Button,onClick:i,children:"Try again?"})})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:f[o].question}),Object(r.jsx)("div",{className:p.a.ButtonsContainer,children:f[o].answers.map((function(e){return Object(r.jsx)(j,{value:e,answer:f[o].rightAnswer,handleCheck:a})}))})]})})},O=(t(15),function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(u,{}),Object(r.jsx)(m,{})]})});i.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.b1585219.chunk.js.map