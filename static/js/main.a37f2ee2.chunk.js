(this.webpackJsonptodolist_react=this.webpackJsonptodolist_react||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(8),i=c.n(a),r=(c(13),c(2)),u=(c(14),c(7)),o=c(0),l=function(e){var t=e.inputValue,c=e.tasks,s=e.setTask,a=e.setSelectItems,i=e.setInputValue,l=Object(n.useState)(!1),j=Object(r.a)(l,2),b=j[0],d=j[1],O=Object(n.useState)(""),f=Object(r.a)(O,2),h=f[0],k=f[1];return Object(n.useEffect)((function(){!function(){switch(h){case"Checked":a(c.filter((function(e){return!0===e.checked})));break;case"Unchecked":a(c.filter((function(e){return!1===e.checked})));break;default:a(Object(u.a)(c))}}()}),[c,h]),Object(o.jsxs)("div",{className:"input",children:[Object(o.jsx)("h1",{style:{color:b?"red":"white",fontSize:b?"40px":"32px"},children:"Dodaj zadanie"}),Object(o.jsxs)("form",{type:"submit",children:[Object(o.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},value:t}),Object(o.jsx)("button",{onClick:function(e){if(e.preventDefault(),""===t)return d(!0);s([].concat(Object(u.a)(c),[{task:t,checked:!1,id:Math.random()}])),i(""),d(!1)},children:Object(o.jsx)("i",{className:"fas fa-plus"})}),Object(o.jsxs)("select",{onChange:function(e){k(e.target.value)},children:[Object(o.jsx)("option",{children:"All"}),Object(o.jsx)("option",{children:"Checked"}),Object(o.jsx)("option",{children:"Unchecked"})]})]})]})},j=c(3),b=function(e){var t=e.tasks,c=e.setTask,s=e.selectItems,a=Object(n.useState)(!1),i=Object(r.a)(a,2),u=i[0],l=i[1],b=Object(n.useState)(""),d=Object(r.a)(b,2),O=d[0],f=d[1];return Object(o.jsx)("ul",{className:"task-list",children:s.map((function(e){return Object(o.jsxs)("li",{className:"task",children:[Object(o.jsx)("p",{style:{textDecoration:e.checked?"line-through":"none"},children:u?(n=e.id,void c(t.map((function(e){return e.id===n?Object(j.a)(Object(j.a)({},e),{},{task:O}):Object(j.a)({},e)})))):e.task}),Object(o.jsx)("button",{className:"check",onClick:function(){return function(e){c(t.map((function(t){return t.id===e?Object(j.a)(Object(j.a)({},t),{},{checked:!t.checked}):Object(j.a)({},t)})))}(e.id)},children:Object(o.jsx)("i",{className:"fas fa-check"})}),Object(o.jsx)("button",{className:"trash",onClick:function(){return function(e){c(t.filter((function(t){return t.id!==e})))}(e.id)},children:Object(o.jsx)("i",{className:"far fa-trash-alt"})}),Object(o.jsx)("button",{className:"edit",onClick:function(){return l(!u),void(!0===u&&f(""))},children:Object(o.jsx)("i",{className:"far fa-edit"})})]},e.id);var n}))})};var d=function(){var e=Object(n.useState)((function(){return null!==window.localStorage.getItem("task")?JSON.parse(window.localStorage.getItem("task")):[]})),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(r.a)(a,2),u=i[0],j=i[1],d=Object(n.useState)(""),O=Object(r.a)(d,2),f=O[0],h=O[1];Object(n.useEffect)((function(){k()}),[c]);var k=function(){window.localStorage.setItem("task",JSON.stringify(c))};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{inputValue:f,setInputValue:h,tasks:c,setTask:s,selectItems:u,setSelectItems:j}),Object(o.jsx)(b,{inputValue:f,setInputValue:h,tasks:c,setTask:s,selectItems:u})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),O()}},[[16,1,2]]]);
//# sourceMappingURL=main.a37f2ee2.chunk.js.map