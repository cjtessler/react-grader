(window["webpackJsonpreact-grader"]=window["webpackJsonpreact-grader"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),l=a(7),c=a(5),u=a(1),d=a(8),i=a(0),o=a.n(i),s=a(6),h=a.n(s),m=(a(15),function(e){var t=e.reduce(function(e,t){return e+t}),a=0;return e.forEach(function(e){e&&a++}),a>0?t/a:""});function g(e){for(var t=[],a=1;a<=5;a++)t.push(o.a.createElement("label",{key:a},"Test ",a,": ",o.a.createElement("span",null," "),o.a.createElement("input",{type:"text",onChange:e.onChange,name:a})));return t.push(o.a.createElement("label",{key:6},"Homework: ",o.a.createElement("span",null," "),o.a.createElement("input",{type:"text",onChange:e.onChange,name:"6"}))),o.a.createElement("div",{className:"form"},o.a.createElement("form",null,t))}function E(e){var t=m(e.grades);return o.a.createElement("div",null,o.a.createElement("p",null,"Current Average: ",Math.round(100*t)/100," "),e.grades.includes(null)&&o.a.createElement("table",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Desired Score"),o.a.createElement("th",null,"Score on Final")),o.a.createElement("tr",null,o.a.createElement("td",null,"A"),o.a.createElement("td",null)),o.a.createElement("tr",null,o.a.createElement("td",null,"B"),o.a.createElement("td",null))))}var p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name,n=e.target.value,r=a.state.grades.slice();r[t-1]=n?parseInt(n,10):null,a.setState({grades:r})},a.handleSelectChange=function(e){var t=e.target.value;a.setState({requiredGrade:{A:94,B:84,C:74,D:64}[t]})},a.state={grades:Array(6).fill(null),requiredGrade:null},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.handleSelectChange=a.handleSelectChange.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"page"},o.a.createElement("h3",null,"Explorations in Mathematics Grader"),o.a.createElement("p",null,"Enter your grades in the form. "),o.a.createElement(g,{onChange:this.handleChange}),o.a.createElement(E,{onChange:this.handleSelectChange,grades:this.state.grades,requiredGrade:this.state.requiredGrade}))}}]),t}(o.a.Component);h.a.render(o.a.createElement(p,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.795329cd.chunk.js.map