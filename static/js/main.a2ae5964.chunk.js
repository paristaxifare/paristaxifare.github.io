(this.webpackJsonpparistaxifare=this.webpackJsonpparistaxifare||[]).push([[0],{19:function(t,n,e){},20:function(t,n,e){},27:function(t,n,e){"use strict";e.r(n);var r=e(0),c=e.n(r),i=e(8),a=e.n(i),s=(e(19),e(20),e(4)),o=e.n(s),u=e(9),d=e(2),j=e(10),f=e(11);var b=function(t){var n=new Date(t.startTime);console.log("startTime:"+n);var e=t.duration,r=n;return r.setSeconds(r.getSeconds()+e),console.log("endTime:"+r),r};var p=function(t){console.log("props:"+t);var n=new Date(t.startTime),e=b(t),r=n.toString().match(/\d\d(?=:)/),c=e.toString().match(/\d\d(?=:)/);r=r[0],c=c[0];var i=r>20||r<6?1:0,a=r>16&&r<19?1:0;return 1+2.5*t.distance+.5*i+1*a};var x,l=function(t){var n=b(t),e=new Date(1e3*t.duration).toISOString().substr(11,8);alert("Duration: "+e+"\n\n ETA: "+n)},h=e(1),O=f.a.button(x||(x=Object(j.a)(["\n    background-color: ",";\n    color: white;\n    font-size: 20px;\n    padding: 10px 60px;\n    border-radius: 5px;\n    margin: 10px 0px;\n    cursor: pointer;\n    "])),(function(t){return t.distance>2?"darkred":"black"}));var v=function(t){var n=Object(r.useState)(""),e=Object(d.a)(n,2),c=e[0],i=e[1];return Object(h.jsx)("div",{children:Object(h.jsxs)(O,{onClick:function(){l(t),i("Clicked")},distance:t.distance,children:["Taxi n\xb0",t.id,"  Price: ",p(t)," ",c]})})},g=function(t){return Object(h.jsx)("div",{children:t.taxis.map((function(t){return Object(h.jsx)("div",{children:Object(h.jsx)(v,{id:t.id,distance:t.distance,duration:t.duration,startTime:t.startTime})},t.id)}))})},m=function(){var t=Object(r.useState)(!1),n=Object(d.a)(t,2),e=(n[0],n[1]),c=Object(r.useState)([]),i=Object(d.a)(c,2),a=i[0],s=i[1];function j(){return(j=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://test001.free.beeceptor.com/taxis");case 2:t.sent.json().then((function(t){return s(t)})).catch((function(t){return e(t)}));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),Object(h.jsx)("div",{children:Object(h.jsx)(g,{taxis:a})})};var S=function(){return Object(h.jsxs)("div",{className:"App",children:["Paris Taxi Fare",Object(h.jsx)(m,{})]})},T=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,28)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;e(t),r(t),c(t),i(t),a(t)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),T()}},[[27,1,2]]]);
//# sourceMappingURL=main.a2ae5964.chunk.js.map