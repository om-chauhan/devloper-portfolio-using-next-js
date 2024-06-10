"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{8152:function(e,t,n){n.d(t,{VY:function(){return Y},fC:function(){return B},xz:function(){return A},zt:function(){return Z}});var r=n(2110),o=n(4090),l=n(4991),i=n(1266),a=n(4104),u=n(1260),s=n(8687),c=n(5341),p=(n(7881),n(2642)),d=n(9586),f=n(9143),g=n(9310),h=n(1780);let[v,y]=(0,a.b)("Tooltip",[c.D7]),b=(0,c.D7)(),x="tooltip.open",[m,w]=v("TooltipProvider"),E="Tooltip",[C,T]=v(E),k="TooltipTrigger",_=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,...a}=e,u=T(k,n),s=w(k,n),p=b(n),f=(0,o.useRef)(null),g=(0,i.e)(t,f,u.onTriggerChange),h=(0,o.useRef)(!1),v=(0,o.useRef)(!1),y=(0,o.useCallback)(()=>h.current=!1,[]);return(0,o.useEffect)(()=>()=>document.removeEventListener("pointerup",y),[y]),(0,o.createElement)(c.ee,(0,r.Z)({asChild:!0},p),(0,o.createElement)(d.WV.button,(0,r.Z)({"aria-describedby":u.open?u.contentId:void 0,"data-state":u.stateAttribute},a,{ref:g,onPointerMove:(0,l.M)(e.onPointerMove,e=>{"touch"===e.pointerType||v.current||s.isPointerInTransitRef.current||(u.onTriggerEnter(),v.current=!0)}),onPointerLeave:(0,l.M)(e.onPointerLeave,()=>{u.onTriggerLeave(),v.current=!1}),onPointerDown:(0,l.M)(e.onPointerDown,()=>{h.current=!0,document.addEventListener("pointerup",y,{once:!0})}),onFocus:(0,l.M)(e.onFocus,()=>{h.current||u.onOpen()}),onBlur:(0,l.M)(e.onBlur,u.onClose),onClick:(0,l.M)(e.onClick,u.onClose)})))}),[D,M]=v("TooltipPortal",{forceMount:void 0}),L="TooltipContent",P=(0,o.forwardRef)((e,t)=>{let n=M(L,e.__scopeTooltip),{forceMount:l=n.forceMount,side:i="top",...a}=e,u=T(L,e.__scopeTooltip);return(0,o.createElement)(p.z,{present:l||u.open},u.disableHoverableContent?(0,o.createElement)(H,(0,r.Z)({side:i},a,{ref:t})):(0,o.createElement)(R,(0,r.Z)({side:i},a,{ref:t})))}),R=(0,o.forwardRef)((e,t)=>{let n=T(L,e.__scopeTooltip),l=w(L,e.__scopeTooltip),a=(0,o.useRef)(null),u=(0,i.e)(t,a),[s,c]=(0,o.useState)(null),{trigger:p,onClose:d}=n,f=a.current,{onPointerInTransitChange:g}=l,h=(0,o.useCallback)(()=>{c(null),g(!1)},[g]),v=(0,o.useCallback)((e,t)=>{let n=e.currentTarget,r={x:e.clientX,y:e.clientY},o=function(e,t){let n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),o=Math.abs(t.right-e.x),l=Math.abs(t.left-e.x);switch(Math.min(n,r,o,l)){case l:return"left";case o:return"right";case n:return"top";case r:return"bottom";default:throw Error("unreachable")}}(r,n.getBoundingClientRect());c(function(e){let t=e.slice();return t.sort((e,t)=>e.x<t.x?-1:e.x>t.x?1:e.y<t.y?-1:e.y>t.y?1:0),function(e){if(e.length<=1)return e.slice();let t=[];for(let n=0;n<e.length;n++){let r=e[n];for(;t.length>=2;){let e=t[t.length-1],n=t[t.length-2];if((e.x-n.x)*(r.y-n.y)>=(e.y-n.y)*(r.x-n.x))t.pop();else break}t.push(r)}t.pop();let n=[];for(let t=e.length-1;t>=0;t--){let r=e[t];for(;n.length>=2;){let e=n[n.length-1],t=n[n.length-2];if((e.x-t.x)*(r.y-t.y)>=(e.y-t.y)*(r.x-t.x))n.pop();else break}n.push(r)}return(n.pop(),1===t.length&&1===n.length&&t[0].x===n[0].x&&t[0].y===n[0].y)?t:t.concat(n)}(t)}([...function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n})}return r}(r,o),...function(e){let{top:t,right:n,bottom:r,left:o}=e;return[{x:o,y:t},{x:n,y:t},{x:n,y:r},{x:o,y:r}]}(t.getBoundingClientRect())])),g(!0)},[g]);return(0,o.useEffect)(()=>()=>h(),[h]),(0,o.useEffect)(()=>{if(p&&f){let e=e=>v(e,f),t=e=>v(e,p);return p.addEventListener("pointerleave",e),f.addEventListener("pointerleave",t),()=>{p.removeEventListener("pointerleave",e),f.removeEventListener("pointerleave",t)}}},[p,f,v,h]),(0,o.useEffect)(()=>{if(s){let e=e=>{let t=e.target,n={x:e.clientX,y:e.clientY},r=(null==p?void 0:p.contains(t))||(null==f?void 0:f.contains(t)),o=!function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,l=t.length-1;e<t.length;l=e++){let i=t[e].x,a=t[e].y,u=t[l].x,s=t[l].y;a>r!=s>r&&n<(u-i)*(r-a)/(s-a)+i&&(o=!o)}return o}(n,s);r?h():o&&(h(),d())};return document.addEventListener("pointermove",e),()=>document.removeEventListener("pointermove",e)}},[p,f,s,d,h]),(0,o.createElement)(H,(0,r.Z)({},e,{ref:u}))}),[O,I]=v(E,{isInside:!1}),H=(0,o.forwardRef)((e,t)=>{let{__scopeTooltip:n,children:l,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:s,...p}=e,d=T(L,n),g=b(n),{onClose:v}=d;return(0,o.useEffect)(()=>(document.addEventListener(x,v),()=>document.removeEventListener(x,v)),[v]),(0,o.useEffect)(()=>{if(d.trigger){let e=e=>{let t=e.target;null!=t&&t.contains(d.trigger)&&v()};return window.addEventListener("scroll",e,{capture:!0}),()=>window.removeEventListener("scroll",e,{capture:!0})}},[d.trigger,v]),(0,o.createElement)(u.XB,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:e=>e.preventDefault(),onDismiss:v},(0,o.createElement)(c.VY,(0,r.Z)({"data-state":d.stateAttribute},g,p,{ref:t,style:{...p.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"}}),(0,o.createElement)(f.A4,null,l),(0,o.createElement)(O,{scope:n,isInside:!0},(0,o.createElement)(h.f,{id:d.contentId,role:"tooltip"},i||l))))}),Z=e=>{let{__scopeTooltip:t,delayDuration:n=700,skipDelayDuration:r=300,disableHoverableContent:l=!1,children:i}=e,[a,u]=(0,o.useState)(!0),s=(0,o.useRef)(!1),c=(0,o.useRef)(0);return(0,o.useEffect)(()=>{let e=c.current;return()=>window.clearTimeout(e)},[]),(0,o.createElement)(m,{scope:t,isOpenDelayed:a,delayDuration:n,onOpen:(0,o.useCallback)(()=>{window.clearTimeout(c.current),u(!1)},[]),onClose:(0,o.useCallback)(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>u(!0),r)},[r]),isPointerInTransitRef:s,onPointerInTransitChange:(0,o.useCallback)(e=>{s.current=e},[]),disableHoverableContent:l},i)},B=e=>{let{__scopeTooltip:t,children:n,open:r,defaultOpen:l=!1,onOpenChange:i,disableHoverableContent:a,delayDuration:u}=e,p=w(E,e.__scopeTooltip),d=b(t),[f,h]=(0,o.useState)(null),v=(0,s.M)(),y=(0,o.useRef)(0),m=null!=a?a:p.disableHoverableContent,T=null!=u?u:p.delayDuration,k=(0,o.useRef)(!1),[_=!1,D]=(0,g.T)({prop:r,defaultProp:l,onChange:e=>{e?(p.onOpen(),document.dispatchEvent(new CustomEvent(x))):p.onClose(),null==i||i(e)}}),M=(0,o.useMemo)(()=>_?k.current?"delayed-open":"instant-open":"closed",[_]),L=(0,o.useCallback)(()=>{window.clearTimeout(y.current),k.current=!1,D(!0)},[D]),P=(0,o.useCallback)(()=>{window.clearTimeout(y.current),D(!1)},[D]),R=(0,o.useCallback)(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{k.current=!0,D(!0)},T)},[T,D]);return(0,o.useEffect)(()=>()=>window.clearTimeout(y.current),[]),(0,o.createElement)(c.fC,d,(0,o.createElement)(C,{scope:t,contentId:v,open:_,stateAttribute:M,trigger:f,onTriggerChange:h,onTriggerEnter:(0,o.useCallback)(()=>{p.isOpenDelayed?R():L()},[p.isOpenDelayed,R,L]),onTriggerLeave:(0,o.useCallback)(()=>{m?P():window.clearTimeout(y.current)},[P,m]),onOpen:L,onClose:P,disableHoverableContent:m},n))},A=_,Y=P}}]);