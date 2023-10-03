"use strict";(self.webpackChunkcnoe=self.webpackChunkcnoe||[]).push([[4521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:0,description:"A multitudinal and communal plan",title:"Installation"},o="Installation",l={unversionedId:"reference-implementation/installations/installations",id:"reference-implementation/installations/installations",title:"Installation",description:"A multitudinal and communal plan",source:"@site/docs/reference-implementation/installations/installations.md",sourceDirName:"reference-implementation/installations",slug:"/reference-implementation/installations/",permalink:"/docs/reference-implementation/installations/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference-implementation/installations/installations.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,description:"A multitudinal and communal plan",title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Reference Implementations",permalink:"/docs/reference-implementation/"},next:{title:"Application IDP",permalink:"/docs/reference-implementation/installations/app-idp"}},s={},c=[{value:"Basic installation flow",id:"basic-installation-flow",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation"},"Installation"),(0,i.kt)("admonition",{title:"github repo",type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/cnoe-io/reference-implementation-aws"},"cnoe-io/reference-implementation-aws"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Installation script must be used with a EKS cluster because we use IRSA to talk to AWS services."),(0,i.kt)("li",{parentName:"ul"},"Components are installed as ArgoCD Applications."),(0,i.kt)("li",{parentName:"ul"},"Files under the ",(0,i.kt)("inlineCode",{parentName:"li"},"/packages")," directory are meant to be usable without any modifications. This means certain configuration options like domain name must be passed outside of this directory. e.g. use ArgoCD's Helm parameters.")),(0,i.kt)("h2",{id:"basic-installation-flow"},"Basic installation flow"),(0,i.kt)("p",null,"The installation process follows the following pattern. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a GitHub App for Backstage integration."),(0,i.kt)("li",{parentName:"ol"},"Install ArgoCD and configure it to be able to monitor your GitHub Organization."),(0,i.kt)("li",{parentName:"ol"},"Run Terraform. Terraform is responsible for:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Managing AWS resources necessary for the Kubernetes operators to function. Mostly IAM Roles."),(0,i.kt)("li",{parentName:"ul"},"Install components as ArgoCD applications. Pass IAM role information where necessary."),(0,i.kt)("li",{parentName:"ul"},"Apply Kubernetes manifests such as secrets and ingress where information cannot easily be passed to ArgoCD."),(0,i.kt)("li",{parentName:"ul"},"Run all the above in an order because installation order matters for many of these components. For example, Keycloak must be installed and ready before Backstage can be installed and configured.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"installation",src:n(8023).Z,width:"1195",height:"585"})),(0,i.kt)("p",null,"This installation pattern where some Kubernetes manifests are handled in Terraform while others are handled in GitOps manner may not be suitable for many organizations. If you can be certain about parameters such as domain name and certificate handling, it is better to utilize GitOps approach where these information are committed to a repository. The reason it is handled this way is to allow for customization for different organizations without forking this repository and committing organization specific information into the repository."))}u.isMDXComponent=!0},8023:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installation-6dddb51edde995dd7d234f3e4e6e43f1.png"}}]);