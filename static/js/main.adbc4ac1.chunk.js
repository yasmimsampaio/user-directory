(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),a=n.n(c),s=n(16),i=n.n(s),o=(n(23),n.p+"static/media/logo.6ce24c58.svg"),l=(n(24),n(3)),u=n(4),j=n(6),h=n(5),d=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)("p",{children:"hello"})}}]),n}(c.Component),b=n(17),O=n.n(b),p=function(){return O.a.get("https://randomuser.me/api/?results=100")},m=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:"Jill"}),Object(r.jsx)("td",{children:"Smith"}),Object(r.jsx)("td",{children:"50"})]})}}]),n}(c.Component),f=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={humans:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){return e.setState({humans:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("table",{style:{width:100},children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Firstname"}),Object(r.jsx)("th",{children:"Lastname"}),Object(r.jsx)("th",{children:"Email"})]}),this.state.humans.map((function(t){return Object(r.jsx)(m,{firstName:t.name.first,image:t.image,Button:function(){return Object(r.jsx)("button",{onClick:function(){return e.handleHumansDelete(t._id)},className:"btn btn-danger ml-2",children:"Delete"})}},t._id)}))]})}}]),n}(c.Component);var x=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(r.jsx)(d,{}),Object(r.jsxs)("p",{children:["Party ",Object(r.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(r.jsx)(f,{}),Object(r.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.adbc4ac1.chunk.js.map