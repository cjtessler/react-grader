(window["webpackJsonpreact-grader"]=window["webpackJsonpreact-grader"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),i=(a(14),a(4)),u=a(5),c=a(7),m=a(6),o=a(1),d=a(8);var b=function(e){for(var t=[],a=1;a<=5;a++)t.push(r.a.createElement("label",{key:a},"Test ",a,": ",r.a.createElement("span",null," "),r.a.createElement("input",{type:"text",onChange:e.onChange,name:a,autoComplete:"off",className:"form-control"})));return t.push(r.a.createElement("label",{key:6},"Homework: ",r.a.createElement("span",null," "),r.a.createElement("input",{type:"text",onChange:e.onChange,name:"6",autoComplete:"off",className:"form-control"}))),r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",null,"Enter your grades in the form below."),r.a.createElement("form",{onSubmit:e.onSubmit},t,r.a.createElement("button",{className:"btn btn-primary"},"Submit")))},h=(a(15),function(e){var t=e.reduce(function(e,t){return e+t}),a=0;return e.forEach(function(e){e&&a++}),a>0?t/a:""});function f(e){var t=h(e.grades);return r.a.createElement("div",null,r.a.createElement("p",null,"Current Average: ",Math.round(100*t)/100," "),r.a.createElement("form",{className:"form-group",onSubmit:e.onSubmit},r.a.createElement("button",{className:"btn btn-primary"},"Reset")))}var p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target.name,n=e.target.value,r=a.state.grades.slice();r[t-1]=parseInt(n,10),a.setState({grades:r})},a.handleSubmit=function(e){e.preventDefault(),a.setState({isSubmitted:!0})},a.handleReset=function(e){a.setState({grades:Array(6).fill(null),isSubmitted:!1})},a.state={grades:Array(6).fill(null),isSubmitted:!1},a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleReset=a.handleReset.bind(Object(o.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h3",null,"Eplorations in Mathematics Grader")),r.a.createElement("div",{className:"grade-entry"},!this.state.isSubmitted&&r.a.createElement(b,{onSubmit:this.handleSubmit,onChange:this.handleChange})),r.a.createElement("div",{className:"results"},this.state.isSubmitted&&r.a.createElement(f,{grades:this.state.grades,requiredGrade:this.state.requiredGrade,onSubmit:this.state.handleReset})))}}]),t}(r.a.Component);s.a.render(r.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.38b70e54.chunk.js.map