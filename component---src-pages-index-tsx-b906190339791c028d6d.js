(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QeBL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return v}));var n=a("tRbT"),i=a("hlFM"),r=a("ofer"),l=a("1NhI"),o=a("30+C"),c=a("lFIR"),s=a("q1tI"),m=a.n(s),p=a("soUV"),d=a("vrFN"),u=a("R/WZ"),g=a("nV8d"),f=a("Wbzz"),E=a("cAH2");t.default=function(e){var t,a=e.data,s=(e.location,e.pageContext,w()),u=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",v=a.allMarkdownRemark.nodes;return m.a.createElement(p.a,{siteTitle:u},m.a.createElement(d.a,{title:"All posts"}),m.a.createElement(n.a,{container:!0},m.a.createElement(n.a,{item:!0,xs:12},m.a.createElement(i.a,{className:s.titleBox},m.a.createElement("img",{src:"/blog-icon-100.gif",height:"100px"}),m.a.createElement(r.a,{className:s.siteTitle,variant:"h1"},u),m.a.createElement(r.a,{className:s.subTitle},"Create What You Want to Use."))),m.a.createElement(l.a,{lgUp:!0},m.a.createElement(n.a,{item:!0,xs:12},m.a.createElement(E.a,{selectedCategory:"All"}))),m.a.createElement(n.a,{item:!0,xs:12,md:12,lg:9},m.a.createElement(n.a,{container:!0,className:s.postListContainer},v.map((function(e){var t=e.frontmatter.title||e.fields.slug;return m.a.createElement(n.a,{item:!0,xs:12,key:e.fields.slug},m.a.createElement(o.a,{variant:"outlined",onClick:function(){return setTimeout((function(){return Object(f.navigate)(e.fields.slug)}),300)},className:s.postItemCard},m.a.createElement(c.a,{className:s.postItemCardArea},m.a.createElement(r.a,{gutterBottom:!0,variant:"h2"},t),m.a.createElement("small",null,e.frontmatter.date),m.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))})))),m.a.createElement(l.a,{mdDown:!0},m.a.createElement(n.a,{item:!0,xs:12,md:12,lg:3,className:s.categoryList},m.a.createElement(g.a,{selectedCategory:"All"})))))};var v="1108659303",w=Object(u.a)((function(e){var t;return{root:{flexGrow:1},categoryList:{position:"sticky",marginTop:"20px",top:"0px",alignSelf:"flex-start"},postListContainer:{margin:e.spacing(0,0,7,0)},postItemCardArea:{padding:e.spacing(3)},postItemCard:{margin:e.spacing(1,0,0,0)},titleBox:{display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(7,0)},siteTitle:(t={margin:e.spacing(4,0,0,0),textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontSize:"48px"},t[e.breakpoints.down("xs")]={fontSize:"36px"},t),subTitle:{margin:e.spacing(-1,0,0,0)}}}))},vrFN:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("TJpk"),l=a("Wbzz"),o=function(e){var t,a,n,o=e.description,c=e.lang,s=e.meta,m=e.title,p=Object(l.useStaticQuery)("2841359383").site,d=o||p.siteMetadata.description,u=null===(t=p.siteMetadata)||void 0===t?void 0:t.title;return i.a.createElement(r.Helmet,{htmlAttributes:{lang:c},title:m,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:d},{property:"og:title",content:m},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=p.siteMetadata)||void 0===a||null===(n=a.social)||void 0===n?void 0:n.twitter)||""},{name:"twitter:title",content:m},{name:"twitter:description",content:d},{name:"google-site-verification",content:"D3zX2_B3puuN1KcEveIwHDRw2fcaW00RvY50hcEngIE"}].concat(s)})};o.defaultProps={lang:"en",meta:[],description:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-index-tsx-b906190339791c028d6d.js.map