(this.webpackJsonpdeckgl_globe=this.webpackJsonpdeckgl_globe||[]).push([[0],{126:function(e,n){},171:function(e,n,t){},193:function(e,n){},199:function(e,n,t){"use strict";t.r(n);var r,c,o,a,i,u,s,l,d,b=t(9),f=t.n(b),j=t(148),p=t.n(j),h=(t(171),t(42)),O=t(64),g=t.n(O),x=t(81),v=t(38),k=t(43),m=t(110),w=t(149),y=t.n(w),C=function(){var e=Object(x.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://gist.githubusercontent.com/RominaMartin/7ab40a307c57721eb036e2dfa12edcbf/raw/06d184f0d9634aed7aa218162867e8e8a2dffd24/countries.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(x.a)(g.a.mark((function e(){var n,t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return n=e.sent,t=["ESP","FRA","VEN","CAN","ITA","USA","BEL","NLD","COL","DEU","GBR","DNK"],e.abrupt("return",{countries:n,selected:t});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=t(19),_=k.a.div(r||(r=Object(h.a)(["\n  position: absolute;\n  right: 20px;\n  top: 50px;\n  padding: 8px;\n  box-sizing: border-box;\n  background: #f5f5f5;\n  width: 200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n\n  > span {\n    font-weight: bold;\n  }\n"]))),L=k.a.span(c||(c=Object(h.a)([""]))),I=function(e){var n=e.area;return Object(E.jsxs)(_,{children:[Object(E.jsx)("span",{children:"Area"}),Object(E.jsxs)(L,{children:[n," km\xb2"]})]})},B=k.a.li(o||(o=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  background-color: ",";\n  padding: 8px;\n  border-bottom: 1px solid #eee;\n  gap: 10px;\n\n  span:first-child {\n    text-align: center;\n  }\n\n  :hover {\n    background: #ccc;\n    cursor: pointer;\n  }\n"])),(function(e){return e.selected?"#ababab":"#fff"})),F=function(e){var n=e.data,t=e.onHover,r=e.onClick,c=e.selected;return Object(E.jsxs)(B,{onMouseEnter:function(){return t(n)},onMouseLeave:function(){return t(null)},onClick:function(){return r(n.iso)},selected:c,children:[Object(E.jsx)("span",{children:n.flag}),Object(E.jsx)("span",{children:n.name})]})},H=k.a.div(a||(a=Object(h.a)(["\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  padding: 8px;\n  box-sizing: border-box;\n  background: #fff;\n  max-height: calc(100vh - 40px);\n  width: 250px;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: #f1f1f1;\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: #888;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: #555;\n  }\n"]))),z=k.a.input(i||(i=Object(h.a)(["\n  box-sizing: border-box;\n  padding: 10px;\n  margin-bottom: 4px;\n  border-style: none;\n  background: #f5f5f5;\n  width: 100%;\n\n  :focus {\n    background: #eee;\n    outline: none;\n  }\n"]))),A=k.a.div(u||(u=Object(h.a)(["\n  margin: 10px 0;\n\n  label:hover,\n  input:hover {\n    cursor: pointer;\n  }\n"]))),M=k.a.div(s||(s=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  button {\n    height: fit-content;\n    background: transparent;\n    border: 1px solid #ccc;\n  }\n\n  button:hover {\n    cursor: pointer;\n    border-color: #5b5b5b;\n  }\n"]))),R=function(e){var n=e.data,t=e.selected,r=e.search,c=e.onItemHover,o=void 0===c?function(){}:c,a=e.onItemClick,i=void 0===a?function(){}:a,u=e.handleClearSelection,s=void 0===u?function(){}:u,l=Object(b.useRef)(),d=Object(b.useState)(n),f=Object(v.a)(d,2),j=f[0],p=f[1],h=Object(b.useState)(r),O=Object(v.a)(h,2),g=O[0],x=O[1],k=Object(b.useState)(!1),w=Object(v.a)(k,2),y=w[0],C=w[1];Object(b.useEffect)((function(){p(n)}),[n]),Object(b.useEffect)((function(){""===r&&x(r),l.current.focus()}),[r]),Object(b.useEffect)((function(){S()}),[t,g,y]);var S=function(){var e=Object(m.a)(n);y&&(e=e.filter((function(e){return t.includes(e.iso)}))),g&&(e=e.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())}))),p(e)};return Object(E.jsxs)(H,{children:[Object(E.jsx)(z,{ref:l,type:"text",placeholder:"Search",value:g,onChange:function(e){x(e.target.value)},autoFocus:!0}),Object(E.jsxs)(M,{children:[Object(E.jsxs)(A,{onClick:function(){return C(!y)},children:[Object(E.jsx)("input",{type:"checkbox",name:"input_select",checked:y,readOnly:!0}),Object(E.jsx)("label",{htmlFor:"input_select",children:"Only selected"})]}),t.length?Object(E.jsx)("button",{onClick:s,children:"Clear"}):Object(E.jsx)(E.Fragment,{})]}),Object(E.jsx)("ul",{children:j.map((function(e){return Object(E.jsx)(F,{data:e,onHover:o,onClick:i,selected:t.includes(e.iso)},e.iso)}))})]})},N=t(128),D=t(217),P=t(212),T=t(159),G=t(214),J={latitude:40.454572474788996,longitude:-3.7027573585510254,zoom:1},U={light:{border:[161,105,40],polygon:[189,146,90],background:[214,189,141],selected:[237,234,194],container:"#b5c8b8",hovered:[121,167,172],hoveredBorder:[40,135,161]},dark:{border:[35,41,49],polygon:[57,62,70],background:[170,170,170],selected:[78,204,163],container:"#222831",hovered:[255,239,161],hoveredBorder:[246,245,245]}},V=function(e){var n=e.data,t=e.theme,r=e.hovered,c=e.onItemClick,o=void 0===c?function(){}:c,a=Object(b.useRef)(null),i=Object(b.useState)(J),u=Object(v.a)(i,2),s=u[0],l=u[1],d=new D.a({x:120});Object(b.useEffect)((function(){r&&l(Object(N.a)(Object(N.a)({},s),r.coordinates))}),[r]);var f=function(e){return n.includes(e.properties.iso_a3)?t.selected:r&&r.iso===e.properties.iso_a3?t.hovered:t.polygon},j=function(e){return r&&r.iso===e.properties.iso_a3?t.hoveredBorder:t.border};return Object(E.jsxs)(P.a,{ref:a,views:d,viewState:s,controller:!0,onViewStateChange:function(e){return l(e.viewState)},children:[Object(E.jsx)(T.a,{data:[[[[-180,90],[0,90],[180,90],[180,-90],[0,-90],[-180,-90]]]],opacity:.5,getPolygon:function(e){return e},stroked:!1,filled:!0,getFillColor:t.background,parameters:{cull:!0}}),Object(E.jsx)(G.a,{data:"https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries.geojson",lineWidthMinPixels:2,stroked:!0,filled:!0,getLineColor:j,getFillColor:f,pickable:!0,updateTriggers:{getFillColor:f,getLineColor:j},onClick:function(e){return o(e.object.properties.iso_a3)}})]})},q=k.a.div(l||(l=Object(h.a)(["\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n"])),(function(e){return e.background})),K=k.a.div(d||(d=Object(h.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  z-index: 1;\n"]))),W=function(){var e=Object(b.useState)("dark"),n=Object(v.a)(e,1)[0],t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"letter",t=Object(b.useState)(""),r=Object(v.a)(t,2),c=r[0],o=r[1];function a(t){var r=t.key;!e&&"letter"===n&&r.match(/^[A-Za-z]$/)?o(r):"letter"===n&&"Escape"===r?o(""):r===e&&o(!0)}return Object(b.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[]),c}(),r=Object(b.useState)([]),c=Object(v.a)(r,2),o=c[0],a=c[1],i=Object(b.useState)(null),u=Object(v.a)(i,2),s=u[0],l=u[1],d=Object(b.useState)([]),f=Object(v.a)(d,2),j=f[0],p=f[1],h=Object(b.useState)(t),O=Object(v.a)(h,2),k=O[0],w=O[1],y=Object(b.useState)(null),C=Object(v.a)(y,2),_=C[0],L=C[1];Object(b.useEffect)((function(){Object(x.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:n=e.sent,a(n.countries),p(n.selected);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(b.useEffect)((function(){w(t)}),[t]),Object(b.useEffect)((function(){L(function(e){var n=e.data,t=e.selected;return Math.floor(n.reduce((function(e,n){return(t.includes(n.iso)?n.area:0)+e}),0))}({data:o,selected:j}))}),[o,j]);var B=function(e){var n=function(e){var n=e.current,t=e.selected;return n.includes(t)?n.filter((function(e){return e!==t})):[].concat(Object(m.a)(n),[t])}({current:j,selected:e});p(n)};return Object(E.jsxs)(q,{background:U[n].container,children:[Object(E.jsx)(K,{children:Object(E.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=rominamartin&repo=deckgl_globe&type=star&count=true",frameBorder:"0",width:"100",scrolling:"0",height:"20",title:"GitHub"})}),Object(E.jsx)(V,{data:j,theme:U[n],hovered:s,onItemClick:B}),Object(E.jsx)(R,{data:o,onItemHover:l,onItemClick:B,selected:j,search:k,handleClearSelection:function(){p([]),w("")}}),Object(E.jsx)(I,{area:_})]})};p.a.render(Object(E.jsx)(f.a.StrictMode,{children:Object(E.jsx)(W,{})}),document.getElementById("root"))}},[[199,1,2]]]);
//# sourceMappingURL=main.3755d919.chunk.js.map