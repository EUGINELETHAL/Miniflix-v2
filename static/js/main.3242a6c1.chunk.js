(window.webpackJsonptodo=window.webpackJsonptodo||[]).push([[0],{1:function(e,t,a){},10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(15),a(2)),i=a(3),m=a(5),s=a(4),u=a(6),h=a(7),b=(a(1),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"clearfix"},r.a.createElement("nav",{className:"navbar navbar-default"},r.a.createElement("div",{className:"container"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",null,r.a.createElement("a",{href:"",className:"navbar-brand"},"Miniflix")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:""},"Browse"))),r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",null,r.a.createElement("div",{className:"inset"},r.a.createElement("img",{src:"http://rs775.pbsrc.com/albums/yy35/PhoenyxStar/link-1.jpg~c200"}))))))))}),v=function(e){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid mt-5 text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("i",{className:"fa fa-search"})," Search for a movie ,TV series .."),r.a.createElement("form",{id:"searchForm",onSubmit:e.onSubmit},r.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search Movies, TV Series ...",onChange:e.onChange}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-bg mt-3"},"Search"))))},f=function(e){return r.a.createElement("div",{className:"col-md-3 mb-5"},r.a.createElement("div",{className:"card card-body bg-dark text-center h-100"},r.a.createElement("img",{className:"image-styling",src:"http://image.tmdb.org/t/p/w185".concat(e.image),alt:"Card image cap"}),r.a.createElement("h5",{className:"text-light card-title"},e.cast)))},d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=0ea2b1048640167f7abb52a7eff8d3ca&query=".concat(a.state.searchTerm)).then((function(e){return e.json()})).then((function(e){console.log(e),a.setState({movies:Object(h.a)(e.results)})}))},a.onChange=function(e){a.setState({searchTerm:e.target.value})},a.state={movies:[],searchTerm:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/popular?api_key=0ea2b1048640167f7abb52a7eff8d3ca").then((function(e){return e.json()})).then((function(t){return e.setState({movies:Object(h.a)(t.results)})}))}},{key:"render",value:function(){var e=this.state.movies.map((function(e){return r.a.createElement(f,{key:e.id,image:e.poster_path,overview:e.cast,year:e.year})}));return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(v,{onSubmit:this.onSubmit,onChange:this.onChange}),r.a.createElement("br",null),e)}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3242a6c1.chunk.js.map