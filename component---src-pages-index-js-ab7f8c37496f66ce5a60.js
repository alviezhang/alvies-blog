(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{3533:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/0ec2dcbd3298f2ee7566be5040545627/d24ee/lilith.jpg","srcSet":"/static/0ec2dcbd3298f2ee7566be5040545627/d24ee/lilith.jpg 50w,\\n/static/0ec2dcbd3298f2ee7566be5040545627/64618/lilith.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/0ec2dcbd3298f2ee7566be5040545627/d4bf4/lilith.avif 50w,\\n/static/0ec2dcbd3298f2ee7566be5040545627/ee81f/lilith.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/0ec2dcbd3298f2ee7566be5040545627/3faea/lilith.webp 50w,\\n/static/0ec2dcbd3298f2ee7566be5040545627/6a679/lilith.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,l){"use strict";var a=l(7294),i=l(5444),r=l(3217);t.Z=function(){var e,t,n=(0,i.K2)("3257411868"),s=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=n.site.siteMetadata)||void 0===t||t.social;return a.createElement("div",{className:"bio"},a.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/lilith.jpg",width:50,height:50,quality:95,alt:"Profile logo",__imageData:l(3533)}),(null==s?void 0:s.name)&&a.createElement("div",null,a.createElement("p",null,"Written by"," ",a.createElement("a",{href:"/about"},s.name)),s.summary&&a.createElement("p",null,s.summary)))}},7704:function(e,t,l){"use strict";l.r(t);var a=l(7294),i=l(5444),r=l(9535),n=l(7198),s=l(3751);t.default=function(e){var t,l=e.data,c=e.location,o=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;return 0===m.length?a.createElement(n.Z,{location:c,title:o},a.createElement(s.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(n.Z,{location:c,title:o},a.createElement(s.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("ol",{style:{listStyle:"none"}},m.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.rU,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-ab7f8c37496f66ce5a60.js.map