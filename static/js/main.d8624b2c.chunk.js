(this["webpackJsonpcovid-dashboard-react"]=this["webpackJsonpcovid-dashboard-react"]||[]).push([[0],{309:function(e,t,n){},310:function(e,t,n){},471:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(18),r=n.n(c),i=(n(309),n(310),n(31)),o=n(92),l=n(244),u=n(63),d=Object(u.b)("ACTIVE_CASES_FETCH"),j=Object(u.b)("ACTIVE_CASES_FETCH_SUCCESS"),b=n(8);Object(o.b)((function(e){return{activeCasesDaily:e.activeCases.activeCasesDaily}}),(function(e){return{fetchActiveCases:function(){return e(d())}}}))((function(e){var t=e.fetchActiveCases,n=e.activeCasesDaily,c=s.a.useMemo((function(){return n.map((function(e){return{year:e.year,month:e.month,day:e.day,positive:e.positive,negative:e.negative,pending:e.pending,hospitalized:e.hospitalizedCurrently,inIcuCurrently:e.inIcuCurrently,onVentilatorCurrently:e.onVentilatorCurrently,deaths:e.deaths,totalTestResults:e.totalTestResults,positiveIncrease:e.positiveIncrease,deathIncrease:e.deathIncrease,hospitalizedIncrease:e.hospitalizedIncrease,totalTestResultsIncrease:e.totalTestResultsIncrease}}))}),[n]),r=s.a.useMemo((function(){return[{Header:"Year",accessor:"year"},{Header:"Month",accessor:"month"},{Header:"Day",accessor:"day"},{Header:"Positive",accessor:"positive"},{Header:"Negative",accessor:"negative"},{Header:"Pending",accessor:"pending"},{Header:"Hospitalized",accessor:"hospitalizedCurrently"},{Header:"ICU",accessor:"inIcuCurrently"},{Header:"Ventilator",accessor:"onVentilatorCurrently"},{Header:"Deaths",accessor:"deaths"},{Header:"Test Results",accessor:"totalTestResults"},{Header:"Positive Increase",accessor:"positiveIncrease"},{Header:"Death Increase",accessor:"deathIncrease"},{Header:"Hospitalized Increase",accessor:"hospitalizedIncrease"},{Header:"Test Results Increase",accessor:"totalTestResultsIncrease"}]}),[]),o=Object(l.useTable)({columns:r,data:c}),u=o.getTableProps,d=o.getTableBodyProps,j=o.headerGroups,h=o.rows,f=o.prepareRow;return Object(a.useEffect)((function(){console.log("useEffect: fetching active cases"),t()}),[t]),Object(b.jsxs)("div",{className:"flex flex-col",children:[Object(b.jsx)("button",{onClick:function(){t()},children:"Fetch Active Cases"}),Object(b.jsxs)("table",Object(i.a)(Object(i.a)({},u()),{},{children:[Object(b.jsx)("thead",{children:j.map((function(e){return Object(b.jsx)("tr",Object(i.a)(Object(i.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(b.jsx)("th",Object(i.a)(Object(i.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(b.jsx)("tbody",Object(i.a)(Object(i.a)({},d()),{},{children:h.map((function(e){return f(e),Object(b.jsx)("tr",Object(i.a)(Object(i.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(b.jsx)("td",Object(i.a)(Object(i.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})}));var h=n(38),f=n(516),O=n(518),v=n(283),p=n(278),C=n(153),x=n(503),m=n(245),y=n(37),g=n(512),I=function(e){var t=e.label,n=e.selectedDate,a=e.onChange;return Object(b.jsx)(y.a,{utils:m.a,children:Object(b.jsx)(x.a,{container:!0,justify:"space-around",children:Object(b.jsx)(g.a,{margin:"normal",label:t,format:"MM/dd/yyyy",value:n,onChange:a,KeyboardButtonProps:{"aria-label":"change date"}})})})},D=n(507),T=n(280),H=n(264),N=n.n(H),P=Object(T.a)({palette:{primary:{main:N.a[800]}}});var z=Object(o.b)((function(e){return{activeCasesDaily:e.activeCases.activeCasesDaily}}),(function(e){return{fetchActiveCases:function(){return e(d())}}}))((function(e){var t=e.fetchActiveCases,n=e.activeCasesDaily,s=Object(a.useState)("Positive Cases"),c=Object(h.a)(s,2),r=c[0],i=c[1],o=Object(a.useState)("positive"),l=Object(h.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(new Date(2020,1,1)),x=Object(h.a)(j,2),m=x[0],y=x[1],g=Object(a.useState)(new Date(2021,12,31)),T=Object(h.a)(g,2),H=T[0],N=T[1];Object(a.useEffect)((function(){console.log("useEffect: fetching active cases"),t()}),[t]),Object(a.useEffect)((function(){var e=n[0];(null===e||void 0===e?void 0:e.date)&&y(e.date)}),[n]),Object(a.useEffect)((function(){var e=n[n.length-1];(null===e||void 0===e?void 0:e.date)&&N(e.date)}),[n]);var z=function(e,t){i(e),d(t)},R=Object(a.useMemo)((function(){return console.log("test"),n.map((function(e){return{date:(t=e.date,(null===t||void 0===t?void 0:t.toLocaleDateString())||""),year:e.year,month:e.month,day:e.day,positive:e.positive,negative:e.negative,pending:e.pending,hospitalized:e.hospitalizedCurrently,inIcuCurrently:e.inIcuCurrently,onVentilatorCurrently:e.onVentilatorCurrently,death:e.death,totalTestResults:e.totalTestResults,positiveIncrease:e.positiveIncrease,deathIncrease:e.deathIncrease,hospitalizedIncrease:e.hospitalizedIncrease,totalTestResultsIncrease:e.totalTestResultsIncrease};var t})).filter((function(e){return new Date(e.date)>=new Date(m)&&new Date(e.date)<=new Date(H)}))}),[n,m,H]);return Object(b.jsx)(D.a,{theme:P,children:Object(b.jsxs)("div",{className:"flex flex-col items-center w-full h-full",children:[Object(b.jsx)("h1",{className:"mb-6 text-xl font-bold text-center",children:r}),Object(b.jsx)(f.a,{width:"80%",height:"60%",children:Object(b.jsxs)(O.a,{data:R,children:[Object(b.jsx)(v.a,{type:"monotone",dataKey:u,stroke:"#8884d8",dot:!1}),Object(b.jsx)(p.a,{dataKey:"date"}),Object(b.jsx)(C.a,{formatter:function(e,t,n){return a=e,Intl.NumberFormat("en").format(a);var a}})]})}),Object(b.jsxs)("div",{className:"flex items-center space-x-4",children:[Object(b.jsx)(I,{onChange:function(e){console.log(e),y(e)},label:"Start Date",selectedDate:m}),Object(b.jsx)(I,{onChange:function(e){console.log(e),N(e)},label:"End Date",selectedDate:H})]}),Object(b.jsxs)("div",{className:"flex items-center my-4 mb-4 space-x-4",children:[Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Total Test Results","totalTestResults")},children:"Tests"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Positive Cases","positive")},children:"Positive"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Negative Cases","negative")},children:"Negative"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Pending Tests","pending")},children:"Pending"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Currently in ICU","inIcuCurrently")},children:"ICU"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Hospitalized","hospitalized")},children:"Hospitalized"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Currently on Ventilator","onVentilatorCurrently")},children:"Ventilators"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Deaths","death")},children:"Deaths"})]}),Object(b.jsxs)("div",{className:"flex items-center mb-4 space-x-4",children:[Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Positive Increase","positiveIncrease")},children:"Positive Increase"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Death Increase","deathIncrease")},children:"Death Increase"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Hospitalized Increase","hospitalizedIncrease")},children:"Hospitalized Increase"}),Object(b.jsx)("button",{className:"focus:outline-none",onClick:function(){return z("Total Test Results Increase","totalTestResultsIncrease")},children:"Test Increase"})]})]})})})),R=function(e){var t=e.title;return Object(b.jsx)("h1",{className:"text-2xl font-bold text-purple-700",children:t})},k=function(e){var t=e.title;return Object(b.jsx)("div",{className:"flex items-center h-16 px-8 py-4 text-lg",children:Object(b.jsx)(R,{title:t})})};var w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(b.jsx)(k,{title:"Covid Dashboard"}),Object(b.jsx)("div",{className:"flex-grow mt-2",children:Object(b.jsx)(z,{})})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,520)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))},E=n(513),V=n(47),A=n(517),F=n(511),M=Object(u.c)({activeCasesDaily:[]},(function(e){e.addCase(j,(function(e,t){return Object(i.a)(Object(i.a)({},e),{},{activeCasesDaily:t.payload.activeCasesDaily})}))})),_=n(284),B=n(519),U=n(279),K=n(143),L=function(e){return e.response.map((function(e){var t=e.date.toString(),n=+t.slice(0,4),a=+t.slice(4,6),s=+t.slice(6,8);return Object(i.a)(Object(i.a)({},e),{},{year:n,month:a,day:s,date:new Date(n,a,s)})}))},G=[function(e){return e.pipe(Object(_.a)(d),Object(U.a)((function(e){return Object(B.a)("https://covid-dashboard-api-nest.herokuapp.com/active-cases").pipe(Object(K.a)((function(e){var t=L(e);return j({activeCasesDaily:t})})))})))}],J=function(e,t,n){return A.a.apply(void 0,G)(e,t,n).pipe(Object(F.a)((function(e,t){return console.error(e),t})))},Y=Object(V.c)({activeCases:M}),q=Object(E.a)(),Q=[q];r.a.render(Object(b.jsx)(o.a,{store:function(){var e=Object(u.a)({reducer:Y,middleware:Q});return q.run(J),e}(),children:Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})})}),document.getElementById("root")),S()}},[[471,1,2]]]);
//# sourceMappingURL=main.d8624b2c.chunk.js.map