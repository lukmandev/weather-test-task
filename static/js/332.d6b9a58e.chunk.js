"use strict";(self.webpackChunkcodica_test_task=self.webpackChunkcodica_test_task||[]).push([[332],{8660:function(n,r,o){o.d(r,{C:function(){return a},T:function(){return e}});var t=o(9434),e=function(){return(0,t.I0)()},a=t.v9},8232:function(n,r,o){var t=o(7621),e=o(9504),a=o(890),c=o(2363),i=o(3504),l=o(184);r.Z=function(n){var r=n.item;return(0,l.jsxs)(t.Z,{sx:{width:"100%",border:"1px solid black"},children:[(0,l.jsxs)(e.Z,{children:[(0,l.jsx)(a.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),(0,l.jsx)(a.Z,{variant:"h5",component:i.rU,to:"/weather/".concat(r.id),children:r.name}),(0,l.jsx)(a.Z,{sx:{mb:1.5},color:"text.secondary",children:r.base}),(0,l.jsx)("img",{style:{width:"100%"},src:"http://openweathermap.org/img/wn//".concat(r.weather[0].icon,"@4x.png")}),(0,l.jsxs)(a.Z,{variant:"body2",children:[r.weather[0].main,(0,l.jsx)("br",{}),r.weather[0].description,(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"\u0427\u0443\u0441\u0442\u0432\u0443\u0435\u0442\u0441\u044f \u043a\u0430\u043a: ",r.main.feels_like,(0,l.jsx)("br",{}),"\u0412\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u044c: ",r.main.humidity,(0,l.jsx)("br",{}),"\u0414\u0430\u0432\u043b\u0435\u043d\u0438\u0435: ",r.main.pressure,(0,l.jsx)("br",{}),"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",r.main.temp_max,(0,l.jsx)("br",{}),"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ",r.main.temp_min,(0,l.jsx)("br",{})]})]}),(0,l.jsx)(c.Z,{children:(0,l.jsx)(i.rU,{to:"/weather/".concat(r.id),children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"})})]})}},7332:function(n,r,o){o.r(r),o.d(r,{default:function(){return I}});var t=o(885),e=o(890),a=o(4554),c=o(6445),i=o(4281),l=o(2455),d=o(2791),u=o(8660),s=o(7565),m=o(1413),p=o(5861),h=o(7757),y=o.n(h),f=o(5351),x=o(3239),g=o(3042),v=o(9195),b=o(1265),k=o(2292),Z=o(6341),j=o(7404),w=o(184),R=(0,l.Z)({modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,border:"2px solid #000",padding:"40px",background:"#fff"},form:{display:"grid",gridTemplateColumns:"1fr",gridRowGap:"10px",position:"relative"},formProgress:{position:"absolute",left:0,top:0,width:"100%",height:"100%",background:"rgb(255, 255, 255, 0.6)",display:"grid",placeItems:"center",zIndex:"10000"}}),U=k.Ry().shape({title:k.Z_().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430")}),N=function(n){var r,o=n.open,t=n.handleClose,e=(0,u.T)(),c=(0,v.cI)({resolver:(0,b.X)(U),mode:"onBlur"}),l=c.register,d=c.formState,s=d.errors,h=d.isSubmitting,k=c.handleSubmit,N=c.setError,C=c.reset,P=R(),I=function(){var n=(0,p.Z)(y().mark((function n(r){var o,t,a;return y().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,Z.e4)(r.title)).unwrap();case 2:o=n.sent,t=o.error,a=o.data,t.hasError?N("title",{message:t.message}):(e((0,j.QF)(a)),C());case 6:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}();return(0,w.jsx)(f.Z,{open:o,onClose:t,children:(0,w.jsx)(a.Z,{className:P.modal,children:(0,w.jsxs)("form",{className:P.form,onSubmit:k(I),children:[h&&(0,w.jsx)(a.Z,{className:P.formProgress,children:(0,w.jsx)(x.Z,{})}),(0,w.jsx)(g.Z,(0,m.Z)({error:!(null===s||void 0===s||!s.title),label:null===(r=s.title)||void 0===r?void 0:r.message,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c"},l("title"))),(0,w.jsx)(i.Z,{variant:"contained",type:"submit",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})})},C=o(8232),P=(0,l.Z)({container:{padding:"40px 15px"},gridWrapper:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gridColumnGap:"20px",gridRowGap:"20px"},topSide:{padding:"40px 0",display:"flex",justifyContent:"flex-end",alignItems:"center"}}),I=function(){var n=P(),r=(0,u.C)(s.i),o=(0,d.useState)(!1),l=(0,t.Z)(o,2),m=l[0],p=l[1];return(0,w.jsxs)(c.Z,{className:n.container,children:[(0,w.jsx)(a.Z,{className:n.topSide,children:(0,w.jsx)(i.Z,{variant:"contained",onClick:function(){p(!0)},children:"OPEN MODAL"})}),r.myCities.length?(0,w.jsx)(a.Z,{className:n.gridWrapper,children:r.myCities.map((function(n,r){return(0,w.jsx)(C.Z,{item:n},r)}))}):(0,w.jsx)(e.Z,{children:"There is no cities add it"}),(0,w.jsx)(N,{open:m,handleClose:function(){p(!1)}})]})}},6341:function(n,r,o){o.d(r,{e4:function(){return x},gT:function(){return y},Bq:function(){return f}});var t=o(5861),e=o(7757),a=o.n(e),c=o(8785),i=o(763),l=o.n(i),d=o(1413),u=o(4569),s=o.n(u)().create({baseURL:"https://api.openweathermap.org"});s.interceptors.request.use((function(n){return n.params=(0,d.Z)((0,d.Z)({},n.params),{},{appid:"f9a4d9ae1e4c03a60aae940410297e18",units:"metric"}),n}),(function(n){return Promise.reject(n)}));var m=s,p=JSON.parse('[{"id":707860,"name":"Hurzuf","country":"UA","coord":{"lon":34.283333,"lat":44.549999}},{"id":519188,"name":"Novinki","country":"RU","coord":{"lon":37.666668,"lat":55.683334}},{"id":1283378,"name":"Gorkh\u0101","country":"NP","coord":{"lon":84.633331,"lat":28}},{"id":1270260,"name":"State of Hary\u0101na","country":"IN","coord":{"lon":76,"lat":29}},{"id":708546,"name":"Holubynka","country":"UA","coord":{"lon":33.900002,"lat":44.599998}},{"id":1283710,"name":"B\u0101gmat\u012b Zone","country":"NP","coord":{"lon":85.416664,"lat":28}},{"id":529334,"name":"Mar\u2019ina Roshcha","country":"RU","coord":{"lon":37.611111,"lat":55.796391}},{"id":1269750,"name":"Republic of India","country":"IN","coord":{"lon":77,"lat":20}},{"id":1283240,"name":"Kathmandu","country":"NP","coord":{"lon":85.316666,"lat":27.716667}},{"id":703363,"name":"Laspi","country":"UA","coord":{"lon":33.733334,"lat":44.416668}},{"id":3632308,"name":"Merida","country":"VE","coord":{"lon":-71.144997,"lat":8.598333}},{"id":473537,"name":"Vinogradovo","country":"RU","coord":{"lon":38.545555,"lat":55.423332}},{"id":384848,"name":"Qarah Gawl al \u2018Uly\u0101","country":"IQ","coord":{"lon":45.6325,"lat":35.353889}},{"id":569143,"name":"Cherkizovo","country":"RU","coord":{"lon":37.728889,"lat":55.800835}},{"id":713514,"name":"Alupka","country":"UA","coord":{"lon":34.049999,"lat":44.416668}},{"id":2878044,"name":"Lichtenrade","country":"DE","coord":{"lon":13.40637,"lat":52.398441}},{"id":464176,"name":"Zavety Il\u2019icha","country":"RU","coord":{"lon":37.849998,"lat":56.049999}},{"id":295582,"name":"\u2018Azriqam","country":"IL","coord":{"lon":34.700001,"lat":31.75}},{"id":1271231,"name":"Gh\u016bra","country":"IN","coord":{"lon":79.883331,"lat":24.766666}},{"id":690856,"name":"Tyuzler","country":"UA","coord":{"lon":34.083332,"lat":44.466667}},{"id":464737,"name":"Zaponor\u2019ye","country":"RU","coord":{"lon":38.861942,"lat":55.639999}},{"id":707716,"name":"Il\u2019ich\xebvka","country":"UA","coord":{"lon":34.383331,"lat":44.666668}},{"id":697959,"name":"Partyzans\u2019ke","country":"UA","coord":{"lon":34.083332,"lat":44.833332}},{"id":803611,"name":"Yurevichi","country":"RU","coord":{"lon":39.934444,"lat":43.600555}},{"id":614371,"name":"Gumist\u2019a","country":"GE","coord":{"lon":40.973888,"lat":43.026943}},{"id":874560,"name":"Ptitsefabrika","country":"GE","coord":{"lon":40.290558,"lat":43.183613}},{"id":874652,"name":"Orekhovo","country":"GE","coord":{"lon":40.146111,"lat":43.351391}},{"id":2347078,"name":"Birim","country":"NG","coord":{"lon":9.997027,"lat":10.062094}},{"id":2051302,"name":"Priiskovyy","country":"RU","coord":{"lon":132.822495,"lat":42.819168}},{"id":563692,"name":"Dzhaga","country":"RU","coord":{"lon":42.650002,"lat":43.25}},{"id":481725,"name":"Tret\u2019ya Rota","country":"RU","coord":{"lon":39.681389,"lat":43.741943}},{"id":2638976,"name":"Ruislip","country":"GB","coord":{"lon":-0.42341,"lat":51.573441}},{"id":2892705,"name":"Karow","country":"DE","coord":{"lon":13.48117,"lat":52.609039}},{"id":2922336,"name":"Gatow","country":"DE","coord":{"lon":13.18285,"lat":52.483238}},{"id":975511,"name":"Mkuze","country":"ZA","coord":{"lon":32.038609,"lat":-27.616409}},{"id":1280737,"name":"Lhasa","country":"CN","coord":{"lon":91.099998,"lat":29.65}},{"id":745042,"name":"\u0130stanbul","country":"TR","coord":{"lon":28.983311,"lat":41.03508}},{"id":3496831,"name":"Mao","country":"DO","coord":{"lon":-71.078133,"lat":19.551861}},{"id":2017370,"name":"Russian Federation","country":"RU","coord":{"lon":100,"lat":60}},{"id":2045761,"name":"De-Friz","country":"RU","coord":{"lon":131.991394,"lat":43.27861}},{"id":1257986,"name":"Rumbak","country":"IN","coord":{"lon":77.416664,"lat":34.049999}},{"id":476350,"name":"Vavibet","country":"RU","coord":{"lon":34.916668,"lat":67.933334}},{"id":1343000,"name":"Surtag\u0101n Chib","country":"PK","coord":{"lon":64.656113,"lat":26.474443}},{"id":456169,"name":"R\u012bgas Rajons","country":"LV","coord":{"lon":24.333332,"lat":57}},{"id":475279,"name":"Verkhneye Shchekotikhino","country":"RU","coord":{"lon":36.133331,"lat":53}},{"id":711349,"name":"Bucha","country":"UA","coord":{"lon":30.366671,"lat":50.583328}},{"id":798544,"name":"Republic of Poland","country":"PL","coord":{"lon":20,"lat":52}},{"id":3094325,"name":"Kuchary","country":"PL","coord":{"lon":19.383329,"lat":52.150002}},{"id":6255149,"name":"North America","country":"","coord":{"lon":-100.546883,"lat":46.073231}},{"id":3575514,"name":"Brumaire","country":"KN","coord":{"lon":-62.73333,"lat":17.299999}},{"id":1861387,"name":"Ishikawa-ken","country":"JP","coord":{"lon":136.770493,"lat":36.77145}},{"id":1857578,"name":"Matoba","country":"JP","coord":{"lon":133.949997,"lat":34.25}},{"id":1299298,"name":"Pya","country":"MM","coord":{"lon":95.599998,"lat":21.51667}},{"id":3256023,"name":"Kalanac","country":"BA","coord":{"lon":18.78389,"lat":44.86861}},{"id":2921044,"name":"Federal Republic of Germany","country":"DE","coord":{"lon":10.5,"lat":51.5}},{"id":2861876,"name":"Land Nordrhein-Westfalen","country":"DE","coord":{"lon":7,"lat":51.5}},{"id":802899,"name":"Mutaykutan","country":"RU","coord":{"lon":47.660641,"lat":42.818859}}]'),h=o(7404),y=(0,c.hg)("fetchCities",function(){var n=(0,t.Z)(a().mark((function n(r,o){var t,e,c,i,d,u,s,y,f;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for((t=o.dispatch)((0,h.ih)(!1)),t((0,h.g9)(null)),e=[],c=[],i=0;i<p.length;i++)d=p[i],u=m.get("/data/2.5/weather?q=".concat(d.name,"&lang=ru")),e.push(u);return n.prev=6,n.next=9,Promise.allSettled(e);case 9:s=n.sent,y=l().filter(s,(function(n){return n.status&&n.value})),c=l().map(y,(function(n){return n.value.data})),n.next=16;break;case 14:n.prev=14,n.t0=n.catch(6);case 16:!(f=l().uniqBy(c,(function(n){return n.id}))).length&&t((0,h.g9)("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043a\u0430\u043a\u0430\u044f \u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430")),t((0,h.Ix)(f)),t((0,h.ih)(!0));case 20:case"end":return n.stop()}}),n,null,[[6,14]])})));return function(r,o){return n.apply(this,arguments)}}()),f=(0,c.hg)("fetchCityWeather",function(){var n=(0,t.Z)(a().mark((function n(r,o){var t,e,c,i,l,d,u,s;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=o.dispatch)((0,h.ie)(!1)),n.prev=2,n.next=5,m.get("/data/2.5/weather?id=".concat(r));case 5:return e=n.sent,c=e.data.coord,i=c.lon,l=c.lat,n.next=11,m.get("/data/2.5/onecall?lat=".concat(l,"&lon=").concat(i,"&exclude=minutely"));case 11:d=n.sent,u=d.data,t((0,h.F7)(u)),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(2),(s=n.t0).response&&s.response.status?t((0,h.LO)("\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")):t((0,h.LO)("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043a\u0430\u043a\u0430\u044f \u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430"));case 20:return n.prev=20,t((0,h.ie)(!0)),n.finish(20);case 23:case"end":return n.stop()}}),n,null,[[2,16,20,23]])})));return function(r,o){return n.apply(this,arguments)}}()),x=(0,c.hg)("checkForExistence",function(){var n=(0,t.Z)(a().mark((function n(r,o){var t,e,c,i,l;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={error:{hasError:!1,message:""},data:null},n.prev=1,n.next=4,m.get("/data/2.5/weather?q=".concat(r));case 4:e=n.sent,c=e.data,t.data=c,n.next=14;break;case 9:n.prev=9,n.t0=n.catch(1),t.error.hasError=!0,404===(null===(l=n.t0)||void 0===l||null===(i=l.response)||void 0===i?void 0:i.status)?t.error.message="\u0422\u0430\u043a\u043e\u0439 \u0433\u043e\u0440\u043e\u0434 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d":t.error.message="\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043a\u0430\u043a\u0430\u044f \u0442\u043e \u043e\u0448\u0438\u0431\u043a\u0430";case 14:return n.prev=14,n.abrupt("return",t);case 17:case"end":return n.stop()}}),n,null,[[1,9,14,17]])})));return function(r,o){return n.apply(this,arguments)}}())},7565:function(n,r,o){o.d(r,{i:function(){return t}});var t=function(n){return n.cities}}}]);
//# sourceMappingURL=332.d6b9a58e.chunk.js.map