(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=(n(17),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),v=n(9),p=n(7),d=n(10),h=(n(19),n(20),n(8)),f=n.n(h);var _=function(e){var t=e.title,n=e.poster,a=e.genres,r=e.synopsis;return o.a.createElement("div",{className:"Movie"},o.a.createElement("div",{className:"Movie__Columns"},o.a.createElement(g,{poster:n,alt:t})),o.a.createElement("div",{className:"Movie__Columns"},o.a.createElement("h1",null,t),o.a.createElement("div",{className:"Movie__Genre"},a.map(function(e,t){return o.a.createElement(w,{genre:e,key:t})})),o.a.createElement("p",{className:"Movie__Synopsis"},o.a.createElement(f.a,{text:r,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))};function g(e){var t=e.poster,n=e.alt;return o.a.createElement("img",{className:"Movie__Poster",alt:n,title:n,width:"300",height:"400",src:t})}function w(e){var t=e.genre;return o.a.createElement("span",{className:"Movie__Genre"},t,"\xa0")}var E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return console.log(e),o.a.createElement(_,{title:e.title_english,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis,key:e.id})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e)})),n._callApi=function(){return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){console.log("did render");var e=this.state.movies;return o.a.createElement("div",{className:e?"App":"App--loading"},this.state.movies?this._renderMovies():"loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.f6398cb3.chunk.js.map