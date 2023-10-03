"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[6187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,g=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:6,description:"Cryptographic signing of artifacts, be they source code commits, configurations, binaries or other, allow for verification of the consistency and integrity of the data they contain."},o="Signing",c={unversionedId:"capabilities/signing",id:"capabilities/signing",title:"Signing",description:"Cryptographic signing of artifacts, be they source code commits, configurations, binaries or other, allow for verification of the consistency and integrity of the data they contain.",source:"@site/docs/capabilities/signing.mdx",sourceDirName:"capabilities",slug:"/capabilities/signing",permalink:"/docs/capabilities/signing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/capabilities/signing.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Cryptographic signing of artifacts, be they source code commits, configurations, binaries or other, allow for verification of the consistency and integrity of the data they contain."},sidebar:"tutorialSidebar",previous:{title:"Secret Repositories",permalink:"/docs/capabilities/secret-repository"},next:{title:"Developer Portal",permalink:"/docs/capabilities/developer-portal"}},s={},l=[],p={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing"},"Signing"),(0,i.kt)("p",null,"Cryptographic signing of artifacts to allow for verification of the consistency and integrity of the data they contain.\nData frquently includes source code commits, configs, binaries and meta-data but can also be any data blob.\nCryptographic signatures can also provide attribution and provenance data (lineage and chain of custody).\nWhen combined with attestations (meta-data with a specific predicate in regards to the material being signed) they can be used to build up \u201ctrust telemetry\u201d or verifiable signals about the material and how it was processed.\nThese are foundational elements of a Secure Software Supply Chain."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allows for verifying Consistency and Integrity of contents"),(0,i.kt)("li",{parentName:"ul"},"Can also provide provenance and attribution"),(0,i.kt)("li",{parentName:"ul"},'Can be combined with attestations to crete "Trust Telemetry"'),(0,i.kt)("li",{parentName:"ul"},"Foundational to Secure Software Supply Chain practices"),(0,i.kt)("li",{parentName:"ul"},"Common tools to perform signing include:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sigstore"),(0,i.kt)("li",{parentName:"ul"},"PGP"),(0,i.kt)("li",{parentName:"ul"},"PKCS #11")))))}f.isMDXComponent=!0}}]);