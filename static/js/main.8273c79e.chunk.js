(this["webpackJsonpcovid-dashboard-react"]=this["webpackJsonpcovid-dashboard-react"]||[]).push([[0],{310:function(e,t,n){},311:function(e,t,n){},472:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),o=n.n(s),r=(n(310),n(311),n(31)),i=n(93),l=n(244),u=n(63),d=Object(u.b)("ACTIVE_CASES_FETCH"),b=Object(u.b)("ACTIVE_CASES_FETCH_SUCCESS"),j=n(8);Object(i.b)((function(e){return{activeCasesDaily:e.activeCases.activeCasesDaily}}),(function(e){return{fetchActiveCases:function(){return e(d())}}}))((function(e){var t=e.fetchActiveCases,n=e.activeCasesDaily,s=a.a.useMemo((function(){return n.map((function(e){return{year:e.year,month:e.month,day:e.day,positive:e.positive,negative:e.negative,pending:e.pending,hospitalized:e.hospitalizedCurrently,inIcuCurrently:e.inIcuCurrently,onVentilatorCurrently:e.onVentilatorCurrently,deaths:e.deaths,totalTestResults:e.totalTestResults,positiveIncrease:e.positiveIncrease,deathIncrease:e.deathIncrease,hospitalizedIncrease:e.hospitalizedIncrease,totalTestResultsIncrease:e.totalTestResultsIncrease}}))}),[n]),o=a.a.useMemo((function(){return[{Header:"Year",accessor:"year"},{Header:"Month",accessor:"month"},{Header:"Day",accessor:"day"},{Header:"Positive",accessor:"positive"},{Header:"Negative",accessor:"negative"},{Header:"Pending",accessor:"pending"},{Header:"Hospitalized",accessor:"hospitalizedCurrently"},{Header:"ICU",accessor:"inIcuCurrently"},{Header:"Ventilator",accessor:"onVentilatorCurrently"},{Header:"Deaths",accessor:"deaths"},{Header:"Test Results",accessor:"totalTestResults"},{Header:"Positive Increase",accessor:"positiveIncrease"},{Header:"Death Increase",accessor:"deathIncrease"},{Header:"Hospitalized Increase",accessor:"hospitalizedIncrease"},{Header:"Test Results Increase",accessor:"totalTestResultsIncrease"}]}),[]),i=Object(l.useTable)({columns:o,data:s}),u=i.getTableProps,d=i.getTableBodyProps,b=i.headerGroups,f=i.rows,h=i.prepareRow;return Object(c.useEffect)((function(){console.log("useEffect: fetching active cases"),t()}),[t]),Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("button",{onClick:function(){t()},children:"Fetch Active Cases"}),Object(j.jsxs)("table",Object(r.a)(Object(r.a)({},u()),{},{children:[Object(j.jsx)("thead",{children:b.map((function(e){return Object(j.jsx)("tr",Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(j.jsx)("th",Object(r.a)(Object(r.a)({},e.getHeaderProps()),{},{children:e.render("Header")}))}))}))}))}),Object(j.jsx)("tbody",Object(r.a)(Object(r.a)({},d()),{},{children:f.map((function(e){return h(e),Object(j.jsx)("tr",Object(r.a)(Object(r.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(j.jsx)("td",Object(r.a)(Object(r.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}))}))}))]}))]})}));var f=n(283),h=n(38),O=n(284),p=n(517),v=n(519),x=n(278),m=n(154),C=n(504),y=n(245),g=n(37),I=n(513),D=function(e){var t=e.label,n=e.selectedDate,c=e.onChange;return Object(j.jsx)(g.a,{utils:y.a,children:Object(j.jsx)(C.a,{container:!0,justify:"space-around",children:Object(j.jsx)(I.a,{margin:"normal",label:t,format:"MM/dd/yyyy",value:n,onChange:c,KeyboardButtonProps:{"aria-label":"change date"}})})})},N=n(511),T=n(280),H=n(264),w=n.n(H),z=Object(T.a)({palette:{primary:{main:w.a[800]}}});var R=Object(i.b)((function(e){return{activeCasesDaily:e.activeCases.activeCasesDaily}}),(function(e){return{fetchActiveCases:function(){return e(d())}}}))((function(e){var t=e.fetchActiveCases,n=e.activeCasesDaily,a=Object(c.useState)("United States"),s=Object(h.a)(a,2),o=s[0],r=(s[1],Object(c.useState)(new Date(2020,1,1))),i=Object(h.a)(r,2),l=i[0],u=i[1],d=Object(c.useState)(new Date(2021,12,31)),b=Object(h.a)(d,2),C=b[0],y=b[1],g=Object(c.useState)(["positive"]),I=Object(h.a)(g,2),T=I[0],H=I[1],w=["#673ab7","#3f51b5","#2196f3","#00bcd4","#009688","#8bc34a","#cddc39","#ffc107","#607d8b","#795548","#880e4f","#9e9e9e"];Object(c.useEffect)((function(){console.log("useEffect: fetching active cases"),t()}),[t]),Object(c.useEffect)((function(){var e=n[0];(null===e||void 0===e?void 0:e.date)&&u(e.date)}),[n]),Object(c.useEffect)((function(){var e=n[n.length-1];(null===e||void 0===e?void 0:e.date)&&y(e.date)}),[n]);var R=function(e,t){if(T.includes(t)){var n=T.filter((function(e){return e!==t}));H(n)}else k(t)},k=function(e){H([].concat(Object(f.a)(T),[e]))},S=Object(c.useMemo)((function(){return console.log("test"),n.map((function(e){return{date:(t=e.date,(null===t||void 0===t?void 0:t.toLocaleDateString())||""),year:e.year,month:e.month,day:e.day,positive:e.positive,negative:e.negative,pending:e.pending,hospitalized:e.hospitalizedCurrently,inIcuCurrently:e.inIcuCurrently,onVentilatorCurrently:e.onVentilatorCurrently,death:e.death,totalTestResults:e.totalTestResults,positiveIncrease:e.positiveIncrease,deathIncrease:e.deathIncrease,hospitalizedIncrease:e.hospitalizedIncrease,totalTestResultsIncrease:e.totalTestResultsIncrease};var t})).filter((function(e){return new Date(e.date)>=new Date(l)&&new Date(e.date)<=new Date(C)}))}),[n,l,C]),E=T.map((function(e,t){return Object(j.jsx)(O.a,{type:"monotone",stroke:w[t],dataKey:e,dot:!1},"line-".concat(e))}));return Object(j.jsx)(N.a,{theme:z,children:Object(j.jsxs)("div",{className:"flex flex-col items-center w-full h-full",children:[Object(j.jsx)("h1",{className:"mb-6 text-xl font-bold text-center",children:o}),Object(j.jsx)(p.a,{width:"80%",height:375,children:Object(j.jsxs)(v.a,{data:S,children:[E,Object(j.jsx)(x.a,{dataKey:"date"}),Object(j.jsx)(m.a,{formatter:function(e,t,n){return c=e,Intl.NumberFormat("en").format(c);var c}})]})}),Object(j.jsxs)("div",{className:"flex flex-wrap justify-center sm:flex-nowrap sm:space-x-6",children:[Object(j.jsx)(D,{className:"mx-2",onChange:function(e){console.log(e),u(e)},label:"Start Date",selectedDate:l}),Object(j.jsx)(D,{className:"mx-2",onChange:function(e){console.log(e),y(e)},label:"End Date",selectedDate:C})]}),Object(j.jsxs)("div",{className:"flex flex-wrap justify-center mt-6 mb-2",children:[Object(j.jsx)("button",{className:"mx-4 focus:outline-none ".concat(T.includes("totalTestResults")&&"font-bold"),onClick:function(){return R(0,"totalTestResults")},children:"Tests"}),Object(j.jsx)("button",{className:"mx-4 focus:outline-none ".concat(T.includes("positive")&&"font-bold"),onClick:function(){return R(0,"positive")},children:"Positive"}),Object(j.jsx)("button",{className:"mx-4 focus:outline-none ".concat(T.includes("negative")&&"font-bold"),onClick:function(){return R(0,"negative")},children:"Negative"}),Object(j.jsx)("button",{className:"mx-4 focus:outline-none ".concat(T.includes("pending")&&"font-bold"),onClick:function(){return R(0,"pending")},children:"Pending"}),Object(j.jsx)("button",{className:"mx-4 focus:outline-none ".concat(T.includes("inIcuCurrently")&&"font-bold"),onClick:function(){return R(0,"inIcuCurrently")},children:"ICU"}),Object(j.jsx)("button",{className:"mx-4 focus:outline-none ".concat(T.includes("hospitalized")&&"font-bold"),onClick:function(){return R(0,"hospitalized")},children:"Hospitalized"}),Object(j.jsx)("button",{className:"mx-4 focus:outline-none ".concat(T.includes("onVentilatorCurrently")&&"font-bold"),onClick:function(){return R(0,"onVentilatorCurrently")},children:"Ventilators"}),Object(j.jsx)("button",{className:"mx-4 focus:outline-none ".concat(T.includes("death")&&"font-bold"),onClick:function(){return R(0,"death")},children:"Deaths"})]}),Object(j.jsxs)("div",{className:"flex flex-wrap justify-center my-2",children:[Object(j.jsx)("button",{className:"mx-2 focus:outline-none ".concat(T.includes("positiveIncrease")&&"font-bold"),onClick:function(){return R(0,"positiveIncrease")},children:"Positive Increase"}),Object(j.jsx)("button",{className:"mx-2 focus:outline-none ".concat(T.includes("deathIncrease")&&"font-bold"),onClick:function(){return R(0,"deathIncrease")},children:"Death Increase"}),Object(j.jsx)("button",{className:"mx-2 focus:outline-none ".concat(T.includes("hospitalizedIncrease")&&"font-bold"),onClick:function(){return R(0,"hospitalizedIncrease")},children:"Hospitalized Increase"}),Object(j.jsx)("button",{className:"mx-2 focus:outline-none ".concat(T.includes("totalTestResultsIncrease")&&"font-bold"),onClick:function(){return R(0,"totalTestResultsIncrease")},children:"Test Increase"})]})]})})})),k=function(e){var t=e.title;return Object(j.jsx)("h1",{className:"text-2xl font-bold text-purple-700",children:t})},S=function(e){var t=e.title;return Object(j.jsx)("div",{className:"flex items-center h-16 px-8 py-4 text-lg",children:Object(j.jsx)(k,{title:t})})};var E=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(j.jsx)(S,{title:"Covid Dashboard"}),Object(j.jsx)("div",{className:"flex-grow mt-2",children:Object(j.jsx)(R,{})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,521)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))},V=n(514),A=n(47),F=n(518),M=n(512),_=Object(u.c)({activeCasesDaily:[]},(function(e){e.addCase(b,(function(e,t){return Object(r.a)(Object(r.a)({},e),{},{activeCasesDaily:t.payload.activeCasesDaily})}))})),B=n(285),U=n(520),K=n(279),L=n(144),G=function(e){return e.response.map((function(e){var t=e.date.toString(),n=+t.slice(0,4),c=+t.slice(4,6),a=+t.slice(6,8);return Object(r.a)(Object(r.a)({},e),{},{year:n,month:c,day:a,date:new Date(n,c,a)})}))},J=[function(e){return e.pipe(Object(B.a)(d),Object(K.a)((function(e){return Object(U.a)("https://covid-dashboard-api-nest.herokuapp.com/active-cases").pipe(Object(L.a)((function(e){var t=G(e);return b({activeCasesDaily:t})})))})))}],Y=function(e,t,n){return F.a.apply(void 0,J)(e,t,n).pipe(Object(M.a)((function(e,t){return console.error(e),t})))},q=Object(A.c)({activeCases:_}),Q=Object(V.a)(),W=[Q];o.a.render(Object(j.jsx)(i.a,{store:function(){var e=Object(u.a)({reducer:q,middleware:W});return Q.run(Y),e}(),children:Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(E,{})})}),document.getElementById("root")),P()}},[[472,1,2]]]);
//# sourceMappingURL=main.8273c79e.chunk.js.map