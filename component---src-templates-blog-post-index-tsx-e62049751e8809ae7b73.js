(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1NhI":function(e,t,n){"use strict";var a=n("wx14"),o=n("Ff2n"),i=n("q1tI"),r=n("17x9"),c=n.n(r),s=(n("E9XD"),n("A+CX")),l=n("2mql"),d=n.n(l),m=n("tr08"),p=n("LEIi"),f=n("aXM8");function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(f.a)(),o=Object(s.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var r="function"==typeof e?e(n):e;r=r.replace(/^@media( ?)/m,"");var c="undefined"!=typeof window&&void 0!==window.matchMedia,l=Object(a.a)({},o,t),d=l.defaultMatches,m=void 0!==d&&d,p=l.matchMedia,u=void 0===p?c?window.matchMedia:null:p,b=l.noSsr,v=void 0!==b&&b,h=l.ssrMatchMedia,w=void 0===h?null:h,g=i.useState((function(){return v&&c?u(r).matches:w?w(r).matches:m})),x=g[0],O=g[1];return i.useEffect((function(){var e=!0;if(c){var t=u(r),n=function(){e&&O(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[r,u,c]),x}var b=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?p.b.indexOf(e)<=p.b.indexOf(t):p.b.indexOf(e)<p.b.indexOf(t)},v=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?p.b.indexOf(t)<=p.b.indexOf(e):p.b.indexOf(t)<p.b.indexOf(e)},h="undefined"==typeof window?i.useEffect:i.useLayoutEffect,w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.withTheme,r=void 0!==n&&n,c=e.noSSR,l=void 0!==c&&c,p=e.initialWidth;function f(e){var n=Object(m.a)(),c=e.theme||n,d=Object(s.a)({theme:c,name:"MuiWithWidth",props:Object(a.a)({},e)}),f=d.initialWidth,b=d.width,v=Object(o.a)(d,["initialWidth","width"]),w=i.useState(!1),g=w[0],x=w[1];h((function(){x(!0)}),[]);var O=c.breakpoints.keys.slice().reverse().reduce((function(e,t){var n=u(c.breakpoints.up(t));return!e&&n?t:e}),null),y=Object(a.a)({width:b||(g||l?O:void 0)||f||p},r?{theme:c}:{},v);return void 0===y.width?null:i.createElement(t,y)}return d()(f,t),f}};function g(e){var t=e.children,n=e.only,a=e.width,o=Object(m.a)(),i=!0;if(n)if(Array.isArray(n))for(var r=0;r<n.length;r+=1){if(a===n[r]){i=!1;break}}else n&&a===n&&(i=!1);if(i)for(var c=0;c<o.breakpoints.keys.length;c+=1){var s=o.breakpoints.keys[c],l=e["".concat(s,"Up")],d=e["".concat(s,"Down")];if(l&&b(s,a)||d&&v(s,a)){i=!1;break}}return i?t:null}g.propTypes={children:c.a.node,className:c.a.string,implementation:c.a.oneOf(["js","css"]),initialWidth:c.a.oneOf(["xs","sm","md","lg","xl"]),lgDown:c.a.bool,lgUp:c.a.bool,mdDown:c.a.bool,mdUp:c.a.bool,only:c.a.oneOfType([c.a.oneOf(["xs","sm","md","lg","xl"]),c.a.arrayOf(c.a.oneOf(["xs","sm","md","lg","xl"]))]),smDown:c.a.bool,smUp:c.a.bool,width:c.a.string.isRequired,xlDown:c.a.bool,xlUp:c.a.bool,xsDown:c.a.bool,xsUp:c.a.bool};var x=w()(g),O=n("rePB"),y=n("NqtD"),D=n("H2TA");var U=Object(D.a)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(n,a){return n["only".concat(Object(y.a)(a))]=Object(O.a)({},e.breakpoints.only(a),t),n["".concat(a,"Up")]=Object(O.a)({},e.breakpoints.up(a),t),n["".concat(a,"Down")]=Object(O.a)({},e.breakpoints.down(a),t),n}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,n=e.classes,a=e.className,r=e.only,c=(Object(o.a)(e,["children","classes","className","only"]),Object(m.a)()),s=[];a&&s.push(a);for(var l=0;l<c.breakpoints.keys.length;l+=1){var d=c.breakpoints.keys[l],p=e["".concat(d,"Up")],f=e["".concat(d,"Down")];p&&s.push(n["".concat(d,"Up")]),f&&s.push(n["".concat(d,"Down")])}return r&&(Array.isArray(r)?r:[r]).forEach((function(e){s.push(n["only".concat(Object(y.a)(e))])})),i.createElement("div",{className:s.join(" ")},t)}));t.a=function(e){var t=e.implementation,n=void 0===t?"js":t,r=e.lgDown,c=void 0!==r&&r,s=e.lgUp,l=void 0!==s&&s,d=e.mdDown,m=void 0!==d&&d,p=e.mdUp,f=void 0!==p&&p,u=e.smDown,b=void 0!==u&&u,v=e.smUp,h=void 0!==v&&v,w=e.xlDown,g=void 0!==w&&w,O=e.xlUp,y=void 0!==O&&O,D=e.xsDown,j=void 0!==D&&D,k=e.xsUp,E=void 0!==k&&k,N=Object(o.a)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===n?i.createElement(x,Object(a.a)({lgDown:c,lgUp:l,mdDown:m,mdUp:f,smDown:b,smUp:h,xlDown:g,xlUp:y,xsDown:j,xsUp:E},N)):i.createElement(U,Object(a.a)({lgDown:c,lgUp:l,mdDown:m,mdUp:f,smDown:b,smUp:h,xlDown:g,xlUp:y,xsDown:j,xsUp:E},N))}},ANW5:function(e,t,n){},Dh6X:function(e,t,n){},oxKA:function(e,t,n){},v3C4:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return f}));var a=n("q1tI"),o=n.n(a),i=n("soUV"),r=n("vrFN"),c=n("R/WZ"),s=(n("Dh6X"),function(e){var t=e.content,n=e.className,a=l();return o.a.createElement("div",{className:n+" "+a.tableOfContent+" table-of-contents",dangerouslySetInnerHTML:{__html:t}})}),l=Object(c.a)((function(e){return{tableOfContent:{position:"sticky",top:"75px"}}})),d=n("tRbT"),m=n("ofer"),p=n("1NhI"),f=(n("ANW5"),n("oxKA"),t.default=function(e){var t,n=e.data,a=(e.location,e.pageContext,u()),c=n.markdownRemark,l=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";n.previous,n.next;return o.a.createElement(i.a,{siteTitle:l},o.a.createElement(r.a,{title:c.frontmatter.title,description:c.frontmatter.description||c.excerpt}),o.a.createElement(d.a,{container:!0},o.a.createElement(d.a,{item:!0,xs:12,md:12,lg:8},o.a.createElement(m.a,{variant:"h1",className:a.title},c.frontmatter.title),o.a.createElement(m.a,{className:a.date,variant:"subtitle1"},c.frontmatter.date),o.a.createElement("div",{className:a.blogContent+" blog-contents",dangerouslySetInnerHTML:{__html:c.html}})),o.a.createElement(p.a,{mdDown:!0},o.a.createElement(d.a,{item:!0,xs:12,md:12,lg:4},o.a.createElement(s,{content:n.markdownRemark.tableOfContents,className:a.tableOfContents})))))},"1896353127"),u=Object(c.a)((function(e){for(var t={},n=1;n<=6;n++)t["& h"+n]=Object.assign({},e.typography["h"+n],{margin:e.spacing(6,0,3,0)});return{title:{margin:e.spacing(4,0,0,0)},date:{margin:e.spacing(0,0,4,0)},tableOfContents:{margin:e.spacing(0,0,4,0)},blogContent:Object.assign({},t,{"& figcaption":{"& p":{"&::before":{content:'"[ "'},"&::after":{content:'" ]"'},textAlign:"center",color:e.typography.caption.color,fontSize:e.typography.caption.fontSize}}})}}))}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-tsx-e62049751e8809ae7b73.js.map