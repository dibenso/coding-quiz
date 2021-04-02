(this["webpackJsonpcoding-quiz"]=this["webpackJsonpcoding-quiz"]||[]).push([[0],{119:function(e,t,n){},462:function(e,t,n){},463:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(22),s=n.n(i),a=(n(118),n(119),n(10)),o=n(468),j=n(23),l=n(113),u=n(471),d=n(109),b=n(476),h=n(73),O=n.n(h),x=n(477),f=n(467),v=n(475),g=n(1),m={code:function(e){var t=e.value;return Object(g.jsx)(x.a,{style:f.a,language:"javascript",children:t})}},p=function(){return Object(g.jsx)("hr",{style:{borderTop:"1px solid rgba(0, 0, 0, 0.3)"}})},w={marginLeft:5,marginRight:5},S=function(e,t,n){var c=e.answer,r=e.correct;return n?c!==r&&c===t?"rgba(255, 0, 0, 0.3)":c===t||r===t?"rgba(0, 128, 0, 0.3)":void 0:"white"};function y(e){var t=e.question,n=e.finished,r=e.index,i=e.isFirst,s=e.isLast,l=e.onLast,u=e.onNext,d=e.onSubmit,b=Object(c.useState)(null),h=Object(a.a)(b,2),x=h[0],f=h[1];return Object(g.jsxs)("div",{style:{textAlign:"left",borderRadius:10,margin:20,padding:20,boxShadow:"5px 5px 10px 5px rgba(0, 0, 0, 0.5)"},children:[Object(g.jsxs)(v.a.Group,{children:[Object(g.jsx)(v.a.Label,{children:Object(g.jsx)(O.a,{renderers:m,children:"#### ".concat(r+1,". ").concat(t.text)})}),Object(g.jsx)(p,{}),t.choices.map((function(e,c){return Object(g.jsx)(v.a.Check,{disabled:n||void 0!==t.answer,type:"radio",label:Object(g.jsx)(O.a,{children:e}),name:String(r),onClick:function(){return f(c)},style:{backgroundColor:S(t,c,n)}},String(c))})),Object(g.jsx)(p,{})]}),!i&&Object(g.jsxs)(o.a,{variant:"primary",onClick:l,style:w,children:[Object(g.jsx)(j.a,{size:20,color:"white"})," ","Previous"]}),!s&&Object(g.jsxs)(o.a,{variant:"primary",onClick:u,style:w,children:["Next"," ",Object(g.jsx)(j.b,{size:20,color:"white"})]}),void 0===t.answer&&!n&&Object(g.jsx)(o.a,{className:"float-right",variant:"success",disabled:null===x,onClick:function(){return d(x)},children:"Submit Answer"})]})}var k=n(469),C=function(e,t){var n=e.answer,c=e.correct;return n===c?"success":void 0!==n&&n!==c||t?"danger":"primary"};function T(e){var t=e.questions,n=e.finished,c=e.onChange;return Object(g.jsx)(k.a,{"aria-label":"Question Numbers",children:t.map((function(e,t){return Object(g.jsxs)(o.a,{variant:C(e,n),style:{marginLeft:5,marginRight:5},onClick:function(){return c(t)},children:[(void 0!==e.answer||n)&&(r=e,r.answer===r.correct?Object(g.jsx)(j.c,{size:10,color:"white"}):Object(g.jsx)(j.e,{size:10,color:"white"}))," ",t+1]},String(t));var r}))})}var L=n(74),z=n.n(L),F=n(110),q=n(474),N=n(472),I=n(108),P=n(473),W=n(111),J=n.n(W),B=n(470);function M(e){var t=e.scores;return console.log(t),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h2",{children:"Scores"}),Object(g.jsxs)(B.a,{striped:!0,bordered:!0,hover:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Initials"}),Object(g.jsx)("th",{children:"Score"})]})}),Object(g.jsx)("tbody",{children:t.map((function(e,t){var n=e.initials,c=e.score;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:n}),Object(g.jsx)("td",{children:c})]},t)}))})]})]})}function Q(e){var t=e.questions,n=t.filter((function(e){return e.answer===e.correct})).length,r=n/t.length*100,i=Object(c.useState)(null),s=Object(a.a)(i,2),j=s[0],l=s[1],b=Object(c.useState)(!1),h=Object(a.a)(b,2),O=h[0],x=h[1],f=Object(c.useState)(!1),v=Object(a.a)(f,2),m=v[0],p=v[1],w=Object(c.useState)(null),S=Object(a.a)(w,2),y=S[0],k=S[1],C=Object(c.useState)(!0),T=Object(a.a)(C,2),L=T[0],W=T[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(q.a,{show:L,onHide:function(){return W(!1)},children:[Object(g.jsx)(q.a.Header,{closeButton:!0,children:Object(g.jsx)(q.a.Title,{children:"Enter Your Initials"})}),Object(g.jsx)(q.a.Body,{children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(d.a,{md:4}),Object(g.jsx)(d.a,{md:4,children:Object(g.jsx)(N.a,{children:Object(g.jsx)(I.a,{onChange:function(e){return l(e.target.value)}})})}),Object(g.jsx)(d.a,{md:4})]})}),Object(g.jsx)(q.a.Footer,{children:Object(g.jsx)(o.a,{variant:"primary",disabled:!j||""===j,onClick:Object(F.a)(z.a.mark((function e(){var t;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),W(!1),e.prev=2,e.next=5,fetch("/api/scores",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({score:r,initials:j})});case 5:return t=e.sent,p(!1),x(!1),e.t0=k,e.next=11,t.json();case 11:e.t1=e.sent.sort((function(e,t){return e.score<t.score})),(0,e.t0)(e.t1),e.next=19;break;case 15:e.prev=15,e.t2=e.catch(2),p(!0),x(!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])}))),children:"Submit Score"})})]}),Object(g.jsxs)(P.a,{children:[Object(g.jsxs)("h1",{children:[r," %"]}),Object(g.jsxs)("p",{children:[n," / ",t.length," questions answered correctly"]}),n!==t.length&&Object(g.jsx)("p",{children:"Scroll down to review quiz"}),O&&Object(g.jsx)(J.a,{type:"Puff",color:"black",height:100,width:100}),m&&"Unable to fetch / submit score",y&&Object(g.jsx)(M,{scores:y})]})]})}var R=n(112),A=n.n(R);function E(e){var t=e.timeLeft,n=e.setTimeLeft;return A()((function(){return n(t-1)}),1e3),Object(g.jsxs)("h2",{children:[t," Seconds"]})}var D=[{text:"In JavaScript, you can't assign a `function` to a variable.",choices:["True","False"],correct:1,answer:void 0},{text:"What method is used to return a `Promise` with a given value?",choices:["`accept()`","`then()`","`finally()`","`resolve()`"],correct:3,answer:void 0},{text:"What is the value of `sum` after the loop?     \n\n    let sum = 0;\n    for(var i = 0; i < 5; i++) {\n      sum += i % 2 === 0 ? 10 : 0;\n    }",choices:["20","30","0","10"],correct:1,answer:void 0},{text:"Which data type holds `true` and `false` values?",choices:["`String`","`boolean`","`Object`","`Number`"],correct:1,answer:void 0},{text:'What is the value of `indicator`?\n    \n    const indicator = 2 == "2";',choices:["`null`","0","`true`","`false`"],correct:2,answer:void 0},{text:"Node.js applications cannot run in a web browser.",choices:["True","False"],correct:0,answer:void 0},{text:"Which of the follwing is an alternative package manager to NPM?",choices:["Webpack","Gulp","Yarn","package.json"],correct:2,answer:void 0},{text:"Which of the following is a valid method used for fetching initial data in React?",choices:["`componentDidMount()`","`setState()`","`document.onload()`","`document.ready()`"],correct:0,answer:void 0},{text:"JavaScript has a garbage collector to reclaim unused memory.",choices:["True","False"],correct:0,answer:void 0},{text:"In the context of async / await, how do you handle errors?",choices:["`await`","`reject`","`catch`","`then`"],correct:2,answer:void 0}];function G(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(180),s=Object(a.a)(i,2),j=s[0],h=s[1],O=Object(c.useState)(!1),x=Object(a.a)(O,2),f=x[0],v=x[1],m=Object(c.useState)(setTimeout((function(){return v(!0)}),1e3*j)),p=Object(a.a)(m,2),w=p[0],S=p[1],k=Object(c.useState)(D),C=Object(a.a)(k,2),L=C[0],z=C[1],F=function(e){return r(e)};return Object(c.useEffect)((function(){L.filter((function(e){return void 0!==e.answer})).length===L.length&&v(!0)}),[L]),Object(g.jsxs)(u.a,{children:[Object(g.jsx)(d.a,{md:3}),Object(g.jsxs)(d.a,{md:6,children:[f?Object(g.jsx)(Q,{questions:L}):Object(g.jsx)(E,{timeLeft:j,setTimeLeft:h}),Object(g.jsx)(b.a,{activeIndex:n,onSelect:F,controls:!1,indicators:!1,interval:864e5,children:L.map((function(e,t){return Object(g.jsx)(b.a.Item,{children:Object(g.jsx)(y,{question:e,finished:f,index:t,isFirst:0===t,isLast:t===L.length-1,onLast:function(){return r(t-1)},onNext:function(){return r(t+1)},onSubmit:function(e){if(L[t].answer=e,z(Object(l.a)(L)),L[t].correct!==e){var n=j-10;h(n),clearTimeout(w),S(setTimeout((function(){return v(!0)}),1e3*n))}t!==L.length-1&&r(t+1)}})},String(t))}))}),Object(g.jsx)(T,{questions:L,finished:f,onChange:F}),Object(g.jsx)("br",{}),!f&&Object(g.jsx)(o.a,{variant:"success",size:"lg",style:{marginTop:5},onClick:function(){v(!0),r(0)},children:"Submit Quiz"})]}),Object(g.jsx)(d.a,{md:3})]})}n(462);var H=function(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h2",{children:"Coding Quiz"}),n?Object(g.jsx)(G,{}):Object(g.jsxs)(o.a,{variant:"primary",onClick:function(){return r(!0)},children:[Object(g.jsx)("p",{children:"Start Quiz"}),"3 Minutes"," ",Object(g.jsx)(j.d,{size:20,color:"white"})]})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,478)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(H,{})}),document.getElementById("root")),Y()}},[[463,1,2]]]);
//# sourceMappingURL=main.016b39a8.chunk.js.map