(window["webpackJsonpreact-grader"]=window["webpackJsonpreact-grader"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),s=a.n(l),c=(a(16),a(5)),u=a(6),i=a(9),m=a(7),o=a(1),d=a(10);var h=function(e){for(var t=["Test 1","Test 2","Test 3","Test 4","Test 5","Homework"],a=[],n=0;n<t.length;n++)a.push(r.a.createElement("label",{key:n},t[n],r.a.createElement("input",{type:"number",onChange:e.onChange,name:n,autoComplete:"off",className:"form-control",required:!0,min:"0",max:"100",defaultValue:e.grades[n]})));return r.a.createElement("div",{className:"form-group col"},r.a.createElement("label",null,"Enter your grades in the form below."),r.a.createElement("form",{onSubmit:e.onSubmit},a,r.a.createElement("button",{className:"btn btn-primary"},"Submit")))},b=a(8),f=a(2),E=function(e){var t=e.reduce(function(e,t){return e+t}),a=0;return e.forEach(function(e){e&&a++}),a>0?t/a:""},p=function(e){for(var t=[],a=e.reduce(function(e,t){return e+t}),n=Math.min.apply(Math,Object(f.a)(e.slice(0,e.length-1))),l=!1,s=0,c=Object.entries({A:94,"A-":90,"B+":87,B:84,"B-":80,"C+":77,C:74,"C-":70,"D+":67,D:64,"D-":60});s<c.length;s++){var u=c[s],i=Object(b.a)(u,2),m=i[0],o=i[1],d=e.length*o-(a-n),h="";if(d<0?(h=0,l=!0):h=d,t.push(r.a.createElement("tr",{key:m},r.a.createElement("td",null,m),r.a.createElement("td",null,h))),l)break}return t};var g=function(e){var t=e.grades,a=E(t),n=Math.min.apply(Math,Object(f.a)(t.slice(0,t.length-1))),l=p(t);return r.a.createElement("div",null,r.a.createElement("p",null,"Average (no drop): ",Math.round(100*a)/100),r.a.createElement("p",null,"Dropped Test Grade: ",n),r.a.createElement("p",null,"In order to obtain the ",r.a.createElement("em",null,"Desired Course Grade"),", you must earn the specified ",r.a.createElement("em",null,"Score on the Final"),"."),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Desired Course Grade"),r.a.createElement("th",null,"Score on the Final"))),r.a.createElement("tbody",null,l)),r.a.createElement("form",{className:"form-group",onSubmit:e.onSubmit},r.a.createElement("button",{className:"btn btn-primary"},"Reset")))},v=(a(17),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value,l=a.state.grades.slice();l[n]=parseInt(r,10),a.setState({grades:l})},a.handleSubmit=function(e){e.preventDefault(),a.setState({isSubmitted:!0})},a.handleReset=function(e){e.preventDefault(),a.setState({isSubmitted:!1})},a.state={grades:Array(6).fill(null),isSubmitted:!1},a.handleSubmit=a.handleSubmit.bind(Object(o.a)(a)),a.handleReset=a.handleReset.bind(Object(o.a)(a)),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fuild is-Responsive"},r.a.createElement("div",{className:"page-header"},r.a.createElement("h4",null,"Explorations in Mathematics Grader")),this.state.isSubmitted?r.a.createElement("div",{className:"results"},r.a.createElement(g,{grades:this.state.grades,requiredGrade:this.state.requiredGrade,onSubmit:this.handleReset})):r.a.createElement("div",{className:"grade-entry"},r.a.createElement(h,{grades:this.state.grades,onSubmit:this.handleSubmit,onChange:this.handleChange})))}}]),t}(r.a.Component));s.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d24ab1d8.chunk.js.map