webpackJsonp([0xc19374f83753],{210:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),o=n(l),i=a(50),r=n(i),u=a(20),d=n(u),s=d.default.article.withConfig({displayName:"PostListing__Article"})(["font-family:Helvetica,sans-serif,Arial;background-color:rgba(142,209,252,0.3);padding:15px 20px;border-radius:8px;transition:ease-in-out 200ms;text-decoration:none;color:#16161d;margin-bottom:20px;&:hover{box-shadow:3px 3px 15px #b2b2b2;transition:ease-in-out 200ms;transform:scale(1.05);}"]),f=d.default.h3.withConfig({displayName:"PostListing__H3"})(["display:inline-block;margin-bottom:15px;"]),c=d.default.span.withConfig({displayName:"PostListing__Span"})(["float:right;"]),m=d.default.p.withConfig({displayName:"PostListing__P"})(["margin-bottom:0;"]),p=function(e){var t=e.post;return o.default.createElement("div",null,o.default.createElement(r.default,{to:"../"+t.slug,style:{textDecoration:"none"}},o.default.createElement(s,null,o.default.createElement(f,null,t.title),o.default.createElement(c,null,t.createdAt),o.default.createElement(m,null,t.body.childMarkdownRemark.excerpt))))};t.default=p,e.exports=t.default},216:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(2),o=n(l),i=a(210),r=n(i),u=function(e){var t=e.data;return o.default.createElement("div",null,o.default.createElement("h2",null,"The Blog"),t.allContentfulTomWritesCode.edges.map(function(e){var t=e.node;return o.default.createElement(r.default,{key:t.id,post:t})}))};t.default=u;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-blog-js-288b61c72b832e503b16.js.map