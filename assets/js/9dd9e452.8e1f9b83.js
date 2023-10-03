"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[9490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:16,description:"Monitors, reports, and alerts on the overall well-being of the system."},a="Observability",l={unversionedId:"capabilities/observability",id:"capabilities/observability",title:"Observability",description:"Monitors, reports, and alerts on the overall well-being of the system.",source:"@site/docs/capabilities/observability.mdx",sourceDirName:"capabilities",slug:"/capabilities/observability",permalink:"/docs/capabilities/observability",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/capabilities/observability.mdx",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16,description:"Monitors, reports, and alerts on the overall well-being of the system."},sidebar:"tutorialSidebar",previous:{title:"Compute Platform",permalink:"/docs/capabilities/compute-platform"},next:{title:"Deployment Targets",permalink:"/docs/capabilities/deployment-targets"}},s={},c=[],p={toc:c},u="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"observability"},"Observability"),(0,o.kt)("p",null,"The overall well-being of the system is tracked via proper integration with state of the art observability tooling."),(0,o.kt)("p",null,"Building on the existing set of technologies available in the CNCF ecosystem, CNOE needs to work in tandem with open telemetry data collectors and allow its users to view and analyze collected data using technologies such as Prometheus and Grafana."))}b.isMDXComponent=!0}}]);