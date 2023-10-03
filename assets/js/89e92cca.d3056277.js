"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return r?o.createElement(b,a(a({ref:t},u),{},{components:r})):o.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3,description:"Enable developers to collaborate on configuration asynchronously while keeping historical lineage of changes."},a="Config Repositories",s={unversionedId:"capabilities/config-repository",id:"capabilities/config-repository",title:"Config Repositories",description:"Enable developers to collaborate on configuration asynchronously while keeping historical lineage of changes.",source:"@site/docs/capabilities/config-repository.mdx",sourceDirName:"capabilities",slug:"/capabilities/config-repository",permalink:"/docs/capabilities/config-repository",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/capabilities/config-repository.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Enable developers to collaborate on configuration asynchronously while keeping historical lineage of changes."},sidebar:"tutorialSidebar",previous:{title:"Code Repositories",permalink:"/docs/capabilities/code-repository"},next:{title:"Secret Repositories",permalink:"/docs/capabilities/secret-repository"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"config-repositories"},"Config Repositories"),(0,n.kt)("p",null,"Config repositories are similar to code repositories but specific to application configuration.\nOften takes the form of serialized key value pairs or similar simple data structures.\nFrequently the keys are appended or tagged with meta-data about environment specifics so that they can be targeted.\nMay be built on a heirarchy, tree or graph structure to further instill meta-data about the contents of the keys and values.\nCan be centralized or distributed, but should only have one source of truth for a fully qualified key-value pair.\nThe values should not contain embedded secrets but often contains references to secrets that can be found within secret repositories.\nThe data should be versioned and immutable to allow for point in time snapshots for things like rollbacks."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Usually key/value or other serialized structured data format"),(0,n.kt)("li",{parentName:"ul"},"Often appended or tagged with meta-data about env specifics"),(0,n.kt)("li",{parentName:"ul"},"Keys can be structured in hierarchical or graph format"),(0,n.kt)("li",{parentName:"ul"},"Values should not contain secrets but can contain references"),(0,n.kt)("li",{parentName:"ul"},"Values should be versioned and immutable"),(0,n.kt)("li",{parentName:"ul"},"Keys should only have one current source of truth for their values")))}f.isMDXComponent=!0}}]);