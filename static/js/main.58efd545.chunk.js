(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){e.exports={body:"FiveDaysForecast_body__-Ye2w",temp:"FiveDaysForecast_temp__2wpxQ",temp_body:"FiveDaysForecast_temp_body__3KeQf",temp_block:"FiveDaysForecast_temp_block__3pySd",temp_info:"FiveDaysForecast_temp_info__1EZYu",min_max_value:"FiveDaysForecast_min_max_value__1LmKh"}},18:function(e,t,a){e.exports={locationBox:"OneDayForecast_locationBox__3HvK5",weatherBox:"OneDayForecast_weatherBox__dMWyk",temp:"OneDayForecast_temp__CGDqS"}},20:function(e,t,a){e.exports={searchBox:"SearchMenu_searchBox__24qi0",searchBar:"SearchMenu_searchBar___Wmy2",buttonInput:"SearchMenu_buttonInput__2eJH2"}},21:function(e,t,a){e.exports={active_button:"ToggleDays_active_button__3VB6o",daysBlock:"ToggleDays_daysBlock__1O8Bu"}},24:function(e,t,a){e.exports={dateNum:"GetDateMonth_dateNum__2JVYQ",month:"GetDateMonth_month__1pSll"}},41:function(e,t,a){},63:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(16),s=a.n(r),i=(a(41),a(3)),o=a(4),u=a(18),d=a.n(u),l=a(10),j=a(19),b="42229ffaf56b4ce2a6822b86133c960a",m="https://api.weatherbit.io/v2.0/current",h="https://api.weatherbit.io/v2.0/forecast/daily",_=function(){return j.get("".concat(m,"?city=Kiev?&key=").concat(b)).then((function(e){return e.data}))},O=function(e){return j.get("".concat(m,"?city=").concat(e,"?&key=").concat(b)).then((function(e){return e.data}))},p=function(e){return j.get("".concat(h,"?city=").concat(e,"?&key=").concat(b,"&days=5")).then((function(e){return e}))},x=function(e,t,a,c,n){return{type:"SET_WEATHER_DATA",data:{app_temp:e,city_name:t,country_code:a,datetime:c,description:n}}},v={data:{app_temp:null,city_name:null,country_code:null,datetime:null,description:null},forecast:{app_max_temp:null,app_min_temp:null,datetime:null},isLoaded:!1,query:"Brovary"},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WEATHER_DATA":return Object(l.a)(Object(l.a)({},e),{},{data:Object(l.a)({},t.data)});case"SET_FORECAST_TEN_DAYS":return Object(l.a)(Object(l.a)({},e),{},{forecast:t.data.data,isLoaded:!0});case"SET_LOADED":return Object(l.a)(Object(l.a)({},e),{},{isLoaded:t.payload});case"SET_QUERY":return Object(l.a)(Object(l.a)({},e),{},{query:t.query});default:return e}},f=(a(63),a(1)),N=function(e){switch(e){case"Clear sky":return Object(f.jsx)("div",{className:"sun",children:Object(f.jsx)("div",{className:"rays"})});case"Scattered Clouds":case"Scattered clouds":case"Few clouds":return Object(f.jsx)("div",{className:"cloud white",children:Object(f.jsx)("div",{className:"sunny",children:Object(f.jsx)("div",{className:"m-rays"})})});case"Patchy rain possible":return Object(f.jsxs)("div",{className:"cloud white",children:[Object(f.jsx)("div",{className:"sunny",children:Object(f.jsx)("div",{className:"m-rays"})}),Object(f.jsx)("div",{className:"rain"}),Object(f.jsx)("div",{className:"rain"})]});case"Overcast":return Object(f.jsx)("div",{className:"cloud white",children:Object(f.jsx)("div",{className:"cloudy"})});case"Light rain":return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"cloud"}),Object(f.jsx)("div",{className:"rain"}),Object(f.jsx)("div",{className:"rain"})]});case"Overcast Clouds":case"Overcast clouds":return Object(f.jsx)("div",{className:"cloud white",children:Object(f.jsx)("div",{className:"cloudy"})});default:return null}},D=function(e){var t=e.weather;return Object(f.jsx)("div",{className:"weather-animation",children:Object(f.jsx)("div",{className:"weather-icon",children:Object(f.jsx)("div",{className:"icon",children:N(t)})})})},w=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){var t=e.weatherData;return{data:t.data,query:t.query}})).data,a=t.description;return Object(c.useEffect)((function(){e((function(e){_().then((function(t){var a=t.data[0],c=a.app_temp,n=a.city_name,r=a.country_code,s=a.datetime,i=t.data[0].weather.description;e(x(c,n,r,s,i))}))}))}),[e]),Object(f.jsx)("main",{children:"undefined"!=typeof t&&Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:d.a.locationBox,children:[Object(f.jsx)("div",{children:Object(f.jsxs)("p",{children:[t.country_code," /"," ",t.city_name]})}),Object(f.jsx)("div",{children:t.datetime})]}),Object(f.jsx)(D,{weather:a}),Object(f.jsx)("div",{className:d.a.weatherBox,children:Object(f.jsxs)("div",{className:d.a.temp,children:[Math.round(t.app_temp),"\xb0\u0421"]})})]})})},S=a(24),F=a.n(S),g=function(e){var t=e.datetime,a=t.slice(8,10),c=t.slice(5,7);return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:F.a.dateNum,children:a}),Object(f.jsx)("div",{className:F.a.month,children:function(){switch(c){case"01":return"January";case"02":return"February";case"03":return"March";case"04":return"April";case"05":return"May";case"06":return"June";case"07":return"July";case"08":return"August";case"9":return"September";case"10":return"October";case"11":return"November";case"12":return"December"}}()})]})},E=a(13),B=a.n(E),T=function(){var e=Object(o.c)((function(e){var t=e.weatherData;return{forecast:t.forecast,isLoaded:t.isLoaded}})),t=e.forecast,a=e.isLoaded;return Object(f.jsx)("main",{children:Object(f.jsx)("div",{className:B.a.temp_body,children:a&&t.map((function(e,t){return Object(f.jsx)("div",{className:B.a.temp_block,children:Object(f.jsxs)("div",{className:B.a.temp_info,children:[Object(f.jsx)("div",{className:"date_time",children:Object(f.jsx)(g,{datetime:e.datetime})}),Object(f.jsxs)("div",{className:B.a.min_max_value,children:[Object(f.jsx)("p",{children:"max"}),Object(f.jsx)("p",{children:"min"})]}),Object(f.jsxs)("div",{className:B.a.temp,children:[Object(f.jsxs)("div",{children:[e.app_max_temp,"\xb0"]}),Object(f.jsxs)("div",{children:[e.app_min_temp,"\xb0"]})]})]})},t)}))})})},k=a(20),q=a.n(k),A=function(e){var t=e.query,a=Object(o.b)();return Object(f.jsx)("div",{className:q.a.searchBox,children:Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(function(e){return function(t){O(e).then((function(e){var a=e.data[0],c=a.app_temp,n=a.city_name,r=a.country_code,s=a.datetime,i=e.data[0].weather.description;t(x(c,n,r,s,i))}))}}(t))},children:[Object(f.jsx)("input",{type:"text",className:q.a.searchBar,placeholder:"Search...",value:t,onChange:function(e){return function(e){a(function(e){return{type:"SET_QUERY",query:e}}(e))}(e.target.value)}}),Object(f.jsx)("input",{type:"submit",value:"Submit",className:q.a.buttonInput})]})})},C=a(27),L=a(12),M=a(21),J=a.n(M),Y=function(){var e=Object(o.b)(),t=Object(c.useState)(!0),a=Object(C.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),i=Object(C.a)(s,2),u=i[0],d=i[1],l=Object(o.c)((function(e){var t=e.weatherData;return{data:t.data,query:t.query}})).query;return Object(f.jsxs)("div",{className:J.a.daysBlock,children:[Object(f.jsx)(L.b,{to:"/",children:Object(f.jsx)("button",{onClick:function(){u&&(d(!1),r(!0))},className:n?J.a.active_button:null,children:"1 day"})}),Object(f.jsx)(L.b,{to:"/forecastFiveDays",children:Object(f.jsx)("div",{onClick:function(){n&&(r(!1),d(!0))},children:Object(f.jsx)("button",{onClick:function(){e(function(e){return function(t){p(e).then((function(e){t(function(e){return{type:"SET_FORECAST_TEN_DAYS",data:e}}(e.data)),console.log(e.data)}))}}(l))},className:u?J.a.active_button:null,children:"5 days"})})})]})};var R=function(){var e=Object(o.c)((function(e){return e.weatherData})).query;return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(A,{query:e}),Object(f.jsx)(Y,{}),Object(f.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(f.jsx)(w,{})}}),Object(f.jsx)(i.b,{path:"/forecastFiveDays",render:function(){return Object(f.jsx)(T,{})}}),Object(f.jsx)(i.a,{to:"/"})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))},Q=a(15),H=Object(Q.b)({weatherData:y}),K=a(36),W=Object(Q.c)(H,Object(Q.a)(K.a));s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(L.a,{children:Object(f.jsx)(o.a,{store:W,children:Object(f.jsx)(R,{})})})}),document.getElementById("root")),I()}},[[67,1,2]]]);
//# sourceMappingURL=main.58efd545.chunk.js.map