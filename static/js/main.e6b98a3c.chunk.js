(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n.n(c),i=n(41),r=n.n(i),o=(n(47),n(48),n(37)),s=n(11),d=n(12),u=n(0),l=n(1),j=n(42),b=n(20),p=n(22),h=Object(j.a)({apiKey:"AIzaSyAMfQhX6wmkk8RqEJL3voMkzX24lMeUK_8",authDomain:"fir-auth-d3bd0.firebaseapp.com",projectId:"fir-auth-d3bd0",storageBucket:"fir-auth-d3bd0.appspot.com",messagingSenderId:"434572771653",appId:"1:434572771653:web:ff598af2ee1d0084843e2c",measurementId:"G-N08PQCSK9B"}),O=Object(b.c)(h),v=(Object(p.d)(h),new b.a,function(){var e=Object(l.a)(Object(u.a)().mark((function e(t,n){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.g)(O,t,n);case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,n){return e.apply(this,arguments)}}()),f=function(){Object(b.i)(O)},m=n(33),x=(n(49),n(14));var g=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(d.a)(i,2),o=r[0],u=r[1],l=Object(m.a)(O),j=Object(d.a)(l,3),b=j[0],p=j[1],h=(j[2],Object(s.m)());return Object(c.useEffect)((function(){p||b&&h("/dashboard")}),[b,p]),Object(x.jsx)("div",{className:"login",children:Object(x.jsxs)("div",{className:"login__container",children:[Object(x.jsx)("input",{type:"text",className:"login__textBox",value:n,onChange:function(e){return a(e.target.value)},placeholder:"E-mail Address"}),Object(x.jsx)("input",{type:"password",className:"login__textBox",value:o,onChange:function(e){return u(e.target.value)},placeholder:"Password"}),Object(x.jsx)("button",{className:"login__btn",onClick:function(){return v(n,o)},children:"Login"})]})})};n(51);var w=function(){var e,t,n,a,i,r,o=Object(m.a)(O),s=Object(d.a)(o,1)[0],j=Object(c.useState)([]),b=Object(d.a)(j,2),p=b[0],h=b[1],v=function(){var e=Object(l.a)(Object(u.a)().mark((function e(){return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"https://weatherapi-com.p.rapidapi.com/current.json?q=6.9271%2C79.8612",fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=6.9271%2C79.8612",{method:"GET",headers:{"X-RapidAPI-Key":"dd492a5d5emsh560d82943d77095p13179cjsnfd8cc1d8226e","X-RapidAPI-Host":"weatherapi-com.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){console.log(e),h(e)})).catch((function(e){console.log(e.message)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s||v()}),[s]),Object(x.jsx)("div",{className:"dashboard",children:Object(x.jsxs)("div",{className:"dashboard__container",children:[Object(x.jsx)("h2",{children:"Colombo Weather"}),Object(x.jsxs)("div",{children:["Condition : ",null===p||void 0===p||null===(e=p.current)||void 0===e||null===(t=e.condition)||void 0===t?void 0:t.text]}),Object(x.jsxs)("div",{children:["Temp (Celsius) : ",null===p||void 0===p||null===(n=p.current)||void 0===n?void 0:n.temp_c]}),Object(x.jsxs)("div",{children:["Wind (KPH) : ",null===p||void 0===p||null===(a=p.current)||void 0===a?void 0:a.wind_kph]}),Object(x.jsxs)("div",{children:["Humidity : ",null===p||void 0===p||null===(i=p.current)||void 0===i?void 0:i.humidity]}),Object(x.jsxs)("div",{children:["Time : ",null===p||void 0===p||null===(r=p.location)||void 0===r?void 0:r.localtime]}),Object(x.jsx)("div",{}),Object(x.jsx)("button",{className:"dashboard__btn",onClick:f,children:"Logout"})]})})};var _=function(){return Object(x.jsx)("div",{className:"app",children:Object(x.jsx)(o.a,{children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{exact:!0,path:"/",element:Object(x.jsx)(g,{})}),Object(x.jsx)(s.a,{exact:!0,path:"/dashboard",element:Object(x.jsx)(w,{})})]})})})};r.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(_,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e6b98a3c.chunk.js.map