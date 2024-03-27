"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{16758:function(t,e,o){o.d(e,{Z:function(){return V}});var n=o(10870),r=o(98961),i=o(82554),a=o(42321),l=o(42744),s=o.n(l),c=o(11288),u=o(91478),f=o(9160),p=o(28788),m=o(53079),d=o(19836),v=o(77971),h=o(2265),g=o(13428),b=o(52640),y=o(17146);function w(t){var e=t.prefixCls,o=t.align,n=t.arrow,r=t.arrowPos,i=n||{},a=i.className,l=i.content,c=r.x,u=r.y,f=h.useRef();if(!o||!o.points)return null;var p={position:"absolute"};if(!1!==o.autoArrow){var m=o.points[0],d=o.points[1],v=m[0],g=m[1],b=d[0],y=d[1];v!==b&&["t","b"].includes(v)?"t"===v?p.top=0:p.bottom=0:p.top=void 0===u?0:u,g!==y&&["l","r"].includes(g)?"l"===g?p.left=0:p.right=0:p.left=void 0===c?0:c}return h.createElement("div",{ref:f,className:s()("".concat(e,"-arrow"),a),style:p},l)}function x(t){var e=t.prefixCls,o=t.open,n=t.zIndex,r=t.mask,i=t.motion;return r?h.createElement(b.ZP,(0,g.Z)({},i,{motionAppear:!0,visible:o,removeOnLeave:!0}),function(t){var o=t.className;return h.createElement("div",{style:{zIndex:n},className:s()("".concat(e,"-mask"),o)})}):null}var k=h.memo(function(t){return t.children},function(t,e){return e.cache}),C=h.forwardRef(function(t,e){var o=t.popup,i=t.className,a=t.prefixCls,l=t.style,u=t.target,f=t.onVisibleChanged,p=t.open,m=t.keepDom,v=t.fresh,C=t.onClick,Z=t.mask,E=t.arrow,O=t.arrowPos,$=t.align,P=t.motion,M=t.maskMotion,R=t.forceRender,N=t.getPopupContainer,L=t.autoDestroy,S=t.portal,j=t.zIndex,A=t.onMouseEnter,T=t.onMouseLeave,_=t.onPointerEnter,z=t.ready,B=t.offsetX,D=t.offsetY,I=t.offsetR,V=t.offsetB,Y=t.onAlign,X=t.onPrepare,H=t.stretch,W=t.targetWidth,q=t.targetHeight,F="function"==typeof o?o():o,G=p||m,J=(null==N?void 0:N.length)>0,Q=h.useState(!N||!J),U=(0,r.Z)(Q,2),K=U[0],tt=U[1];if((0,d.Z)(function(){!K&&J&&u&&tt(!0)},[K,J,u]),!K)return null;var te="auto",to={left:"-1000vw",top:"-1000vh",right:te,bottom:te};if(z||!p){var tn,tr=$.points,ti=$.dynamicInset||(null===(tn=$._experimental)||void 0===tn?void 0:tn.dynamicInset),ta=ti&&"r"===tr[0][1],tl=ti&&"b"===tr[0][0];ta?(to.right=I,to.left=te):(to.left=B,to.right=te),tl?(to.bottom=V,to.top=te):(to.top=D,to.bottom=te)}var ts={};return H&&(H.includes("height")&&q?ts.height=q:H.includes("minHeight")&&q&&(ts.minHeight=q),H.includes("width")&&W?ts.width=W:H.includes("minWidth")&&W&&(ts.minWidth=W)),p||(ts.pointerEvents="none"),h.createElement(S,{open:R||G,getContainer:N&&function(){return N(u)},autoDestroy:L},h.createElement(x,{prefixCls:a,open:p,zIndex:j,mask:Z,motion:M}),h.createElement(c.Z,{onResize:Y,disabled:!p},function(t){return h.createElement(b.ZP,(0,g.Z)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:R,leavedClassName:"".concat(a,"-hidden")},P,{onAppearPrepare:X,onEnterPrepare:X,visible:p,onVisibleChanged:function(t){var e;null==P||null===(e=P.onVisibleChanged)||void 0===e||e.call(P,t),f(t)}}),function(o,r){var c=o.className,u=o.style,f=s()(a,c,i);return h.createElement("div",{ref:(0,y.sQ)(t,e,r),className:f,style:(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({"--arrow-x":"".concat(O.x||0,"px"),"--arrow-y":"".concat(O.y||0,"px")},to),ts),u),{},{boxSizing:"border-box",zIndex:j},l),onMouseEnter:A,onMouseLeave:T,onPointerEnter:_,onClick:C},E&&h.createElement(w,{prefixCls:a,arrow:E,arrowPos:O,align:$}),h.createElement(k,{cache:!p&&!v},F))})}))}),Z=h.forwardRef(function(t,e){var o=t.children,n=t.getTriggerDOMNode,r=(0,y.Yr)(o),i=h.useCallback(function(t){(0,y.mH)(e,n?n(t):t)},[n]),a=(0,y.x1)(i,o.ref);return r?h.cloneElement(o,{ref:a}):o}),E=h.createContext(null);function O(t){return t?Array.isArray(t)?t:[t]:[]}var $=o(42120);function P(t,e,o,n){return e||(o?{motionName:"".concat(t,"-").concat(o)}:n?{motionName:n}:null)}function M(t){return t.ownerDocument.defaultView}function R(t){for(var e=[],o=null==t?void 0:t.parentElement,n=["hidden","scroll","clip","auto"];o;){var r=M(o).getComputedStyle(o);[r.overflowX,r.overflowY,r.overflow].some(function(t){return n.includes(t)})&&e.push(o),o=o.parentElement}return e}function N(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number.isNaN(t)?e:t}function L(t){return N(parseFloat(t),0)}function S(t,e){var o=(0,n.Z)({},t);return(e||[]).forEach(function(t){if(!(t instanceof HTMLBodyElement||t instanceof HTMLHtmlElement)){var e=M(t).getComputedStyle(t),n=e.overflow,r=e.overflowClipMargin,i=e.borderTopWidth,a=e.borderBottomWidth,l=e.borderLeftWidth,s=e.borderRightWidth,c=t.getBoundingClientRect(),u=t.offsetHeight,f=t.clientHeight,p=t.offsetWidth,m=t.clientWidth,d=L(i),v=L(a),h=L(l),g=L(s),b=N(Math.round(c.width/p*1e3)/1e3),y=N(Math.round(c.height/u*1e3)/1e3),w=d*y,x=h*b,k=0,C=0;if("clip"===n){var Z=L(r);k=Z*b,C=Z*y}var E=c.x+x-k,O=c.y+w-C,$=E+c.width+2*k-x-g*b-(p-m-h-g)*b,P=O+c.height+2*C-w-v*y-(u-f-d-v)*y;o.left=Math.max(o.left,E),o.top=Math.max(o.top,O),o.right=Math.min(o.right,$),o.bottom=Math.min(o.bottom,P)}}),o}function j(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o="".concat(e),n=o.match(/^(.*)\%$/);return n?parseFloat(n[1])/100*t:parseFloat(o)}function A(t,e){var o=(0,r.Z)(e||[],2),n=o[0],i=o[1];return[j(t.width,n),j(t.height,i)]}function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[t[0],t[1]]}function _(t,e){var o,n=e[0],r=e[1];return o="t"===n?t.y:"b"===n?t.y+t.height:t.y+t.height/2,{x:"l"===r?t.x:"r"===r?t.x+t.width:t.x+t.width/2,y:o}}function z(t,e){var o={t:"b",b:"t",l:"r",r:"l"};return t.map(function(t,n){return n===e?o[t]||"c":t}).join("")}var B=o(16141);o(54812);var D=o(43197),I=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"],V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.Z;return h.forwardRef(function(e,o){var a,l,g,b,y,w,x,k,L,j,V,Y,X,H,W,q,F,G=e.prefixCls,J=void 0===G?"rc-trigger-popup":G,Q=e.children,U=e.action,K=e.showAction,tt=e.hideAction,te=e.popupVisible,to=e.defaultPopupVisible,tn=e.onPopupVisibleChange,tr=e.afterPopupVisibleChange,ti=e.mouseEnterDelay,ta=e.mouseLeaveDelay,tl=void 0===ta?.1:ta,ts=e.focusDelay,tc=e.blurDelay,tu=e.mask,tf=e.maskClosable,tp=e.getPopupContainer,tm=e.forceRender,td=e.autoDestroy,tv=e.destroyPopupOnHide,th=e.popup,tg=e.popupClassName,tb=e.popupStyle,ty=e.popupPlacement,tw=e.builtinPlacements,tx=void 0===tw?{}:tw,tk=e.popupAlign,tC=e.zIndex,tZ=e.stretch,tE=e.getPopupClassNameFromAlign,tO=e.fresh,t$=e.alignPoint,tP=e.onPopupClick,tM=e.onPopupAlign,tR=e.arrow,tN=e.popupMotion,tL=e.maskMotion,tS=e.popupTransitionName,tj=e.popupAnimation,tA=e.maskTransitionName,tT=e.maskAnimation,t_=e.className,tz=e.getTriggerDOMNode,tB=(0,i.Z)(e,I),tD=h.useState(!1),tI=(0,r.Z)(tD,2),tV=tI[0],tY=tI[1];(0,d.Z)(function(){tY((0,v.Z)())},[]);var tX=h.useRef({}),tH=h.useContext(E),tW=h.useMemo(function(){return{registerSubPopup:function(t,e){tX.current[t]=e,null==tH||tH.registerSubPopup(t,e)}}},[tH]),tq=(0,m.Z)(),tF=h.useState(null),tG=(0,r.Z)(tF,2),tJ=tG[0],tQ=tG[1],tU=(0,p.Z)(function(t){(0,u.S)(t)&&tJ!==t&&tQ(t),null==tH||tH.registerSubPopup(tq,t)}),tK=h.useState(null),t0=(0,r.Z)(tK,2),t1=t0[0],t2=t0[1],t4=h.useRef(null),t5=(0,p.Z)(function(t){(0,u.S)(t)&&t1!==t&&(t2(t),t4.current=t)}),t3=h.Children.only(Q),t7=(null==t3?void 0:t3.props)||{},t8={},t6=(0,p.Z)(function(t){var e,o;return(null==t1?void 0:t1.contains(t))||(null===(e=(0,f.A)(t1))||void 0===e?void 0:e.host)===t||t===t1||(null==tJ?void 0:tJ.contains(t))||(null===(o=(0,f.A)(tJ))||void 0===o?void 0:o.host)===t||t===tJ||Object.values(tX.current).some(function(e){return(null==e?void 0:e.contains(t))||t===e})}),t9=P(J,tN,tj,tS),et=P(J,tL,tT,tA),ee=h.useState(to||!1),eo=(0,r.Z)(ee,2),en=eo[0],er=eo[1],ei=null!=te?te:en,ea=(0,p.Z)(function(t){void 0===te&&er(t)});(0,d.Z)(function(){er(te||!1)},[te]);var el=h.useRef(ei);el.current=ei;var es=h.useRef([]);es.current=[];var ec=(0,p.Z)(function(t){var e;ea(t),(null!==(e=es.current[es.current.length-1])&&void 0!==e?e:ei)!==t&&(es.current.push(t),null==tn||tn(t))}),eu=h.useRef(),ef=function(){clearTimeout(eu.current)},ep=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;ef(),0===e?ec(t):eu.current=setTimeout(function(){ec(t)},1e3*e)};h.useEffect(function(){return ef},[]);var em=h.useState(!1),ed=(0,r.Z)(em,2),ev=ed[0],eh=ed[1];(0,d.Z)(function(t){(!t||ei)&&eh(!0)},[ei]);var eg=h.useState(null),eb=(0,r.Z)(eg,2),ey=eb[0],ew=eb[1],ex=h.useState([0,0]),ek=(0,r.Z)(ex,2),eC=ek[0],eZ=ek[1],eE=function(t){eZ([t.clientX,t.clientY])},eO=(a=t$?eC:t1,l=h.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:tx[ty]||{}}),b=(g=(0,r.Z)(l,2))[0],y=g[1],w=h.useRef(0),x=h.useMemo(function(){return tJ?R(tJ):[]},[tJ]),k=h.useRef({}),ei||(k.current={}),L=(0,p.Z)(function(){if(tJ&&a&&ei){var t,e,o,i,l,s,c,f=tJ.ownerDocument,p=M(tJ).getComputedStyle(tJ),m=p.width,d=p.height,v=p.position,h=tJ.style.left,g=tJ.style.top,b=tJ.style.right,w=tJ.style.bottom,C=tJ.style.overflow,Z=(0,n.Z)((0,n.Z)({},tx[ty]),tk),E=f.createElement("div");if(null===(t=tJ.parentElement)||void 0===t||t.appendChild(E),E.style.left="".concat(tJ.offsetLeft,"px"),E.style.top="".concat(tJ.offsetTop,"px"),E.style.position=v,E.style.height="".concat(tJ.offsetHeight,"px"),E.style.width="".concat(tJ.offsetWidth,"px"),tJ.style.left="0",tJ.style.top="0",tJ.style.right="auto",tJ.style.bottom="auto",tJ.style.overflow="hidden",Array.isArray(a))o={x:a[0],y:a[1],width:0,height:0};else{var O=a.getBoundingClientRect();o={x:O.x,y:O.y,width:O.width,height:O.height}}var P=tJ.getBoundingClientRect(),R=f.documentElement,L=R.clientWidth,j=R.clientHeight,B=R.scrollWidth,D=R.scrollHeight,I=R.scrollTop,V=R.scrollLeft,Y=P.height,X=P.width,H=o.height,W=o.width,q=Z.htmlRegion,F="visible",G="visibleFirst";"scroll"!==q&&q!==G&&(q=F);var J=q===G,Q=S({left:-V,top:-I,right:B-V,bottom:D-I},x),U=S({left:0,top:0,right:L,bottom:j},x),K=q===F?U:Q,tt=J?U:K;tJ.style.left="auto",tJ.style.top="auto",tJ.style.right="0",tJ.style.bottom="0";var te=tJ.getBoundingClientRect();tJ.style.left=h,tJ.style.top=g,tJ.style.right=b,tJ.style.bottom=w,tJ.style.overflow=C,null===(e=tJ.parentElement)||void 0===e||e.removeChild(E);var to=N(Math.round(X/parseFloat(m)*1e3)/1e3),tn=N(Math.round(Y/parseFloat(d)*1e3)/1e3);if(!(0===to||0===tn||(0,u.S)(a)&&!(0,$.Z)(a))){var tr=Z.offset,ti=Z.targetOffset,ta=A(P,tr),tl=(0,r.Z)(ta,2),ts=tl[0],tc=tl[1],tu=A(o,ti),tf=(0,r.Z)(tu,2),tp=tf[0],tm=tf[1];o.x-=tp,o.y-=tm;var td=Z.points||[],tv=(0,r.Z)(td,2),th=tv[0],tg=T(tv[1]),tb=T(th),tw=_(o,tg),tC=_(P,tb),tZ=(0,n.Z)({},Z),tE=tw.x-tC.x+ts,tO=tw.y-tC.y+tc,t$=ee(tE,tO),tP=ee(tE,tO,U),tR=_(o,["t","l"]),tN=_(P,["t","l"]),tL=_(o,["b","r"]),tS=_(P,["b","r"]),tj=Z.overflow||{},tA=tj.adjustX,tT=tj.adjustY,t_=tj.shiftX,tz=tj.shiftY,tB=function(t){return"boolean"==typeof t?t:t>=0};eo();var tD=tB(tT),tI=tb[0]===tg[0];if(tD&&"t"===tb[0]&&(l>tt.bottom||k.current.bt)){var tV=tO;tI?tV-=Y-H:tV=tR.y-tS.y-tc;var tY=ee(tE,tV),tX=ee(tE,tV,U);tY>t$||tY===t$&&(!J||tX>=tP)?(k.current.bt=!0,tO=tV,tc=-tc,tZ.points=[z(tb,0),z(tg,0)]):k.current.bt=!1}if(tD&&"b"===tb[0]&&(i<tt.top||k.current.tb)){var tH=tO;tI?tH+=Y-H:tH=tL.y-tN.y-tc;var tW=ee(tE,tH),tq=ee(tE,tH,U);tW>t$||tW===t$&&(!J||tq>=tP)?(k.current.tb=!0,tO=tH,tc=-tc,tZ.points=[z(tb,0),z(tg,0)]):k.current.tb=!1}var tF=tB(tA),tG=tb[1]===tg[1];if(tF&&"l"===tb[1]&&(c>tt.right||k.current.rl)){var tQ=tE;tG?tQ-=X-W:tQ=tR.x-tS.x-ts;var tU=ee(tQ,tO),tK=ee(tQ,tO,U);tU>t$||tU===t$&&(!J||tK>=tP)?(k.current.rl=!0,tE=tQ,ts=-ts,tZ.points=[z(tb,1),z(tg,1)]):k.current.rl=!1}if(tF&&"r"===tb[1]&&(s<tt.left||k.current.lr)){var t0=tE;tG?t0+=X-W:t0=tL.x-tN.x-ts;var t1=ee(t0,tO),t2=ee(t0,tO,U);t1>t$||t1===t$&&(!J||t2>=tP)?(k.current.lr=!0,tE=t0,ts=-ts,tZ.points=[z(tb,1),z(tg,1)]):k.current.lr=!1}eo();var t4=!0===t_?0:t_;"number"==typeof t4&&(s<U.left&&(tE-=s-U.left-ts,o.x+W<U.left+t4&&(tE+=o.x-U.left+W-t4)),c>U.right&&(tE-=c-U.right-ts,o.x>U.right-t4&&(tE+=o.x-U.right+t4)));var t5=!0===tz?0:tz;"number"==typeof t5&&(i<U.top&&(tO-=i-U.top-tc,o.y+H<U.top+t5&&(tO+=o.y-U.top+H-t5)),l>U.bottom&&(tO-=l-U.bottom-tc,o.y>U.bottom-t5&&(tO+=o.y-U.bottom+t5)));var t3=P.x+tE,t7=P.y+tO,t8=o.x,t6=o.y;null==tM||tM(tJ,tZ);var t9=te.right-P.x-(tE+P.width),et=te.bottom-P.y-(tO+P.height);y({ready:!0,offsetX:tE/to,offsetY:tO/tn,offsetR:t9/to,offsetB:et/tn,arrowX:((Math.max(t3,t8)+Math.min(t3+X,t8+W))/2-t3)/to,arrowY:((Math.max(t7,t6)+Math.min(t7+Y,t6+H))/2-t7)/tn,scaleX:to,scaleY:tn,align:tZ})}function ee(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K,n=P.x+t,r=P.y+e,i=Math.max(n,o.left),a=Math.max(r,o.top);return Math.max(0,(Math.min(n+X,o.right)-i)*(Math.min(r+Y,o.bottom)-a))}function eo(){l=(i=P.y+tO)+Y,c=(s=P.x+tE)+X}}}),j=function(){y(function(t){return(0,n.Z)((0,n.Z)({},t),{},{ready:!1})})},(0,d.Z)(j,[ty]),(0,d.Z)(function(){ei||j()},[ei]),[b.ready,b.offsetX,b.offsetY,b.offsetR,b.offsetB,b.arrowX,b.arrowY,b.scaleX,b.scaleY,b.align,function(){w.current+=1;var t=w.current;Promise.resolve().then(function(){w.current===t&&L()})}]),e$=(0,r.Z)(eO,11),eP=e$[0],eM=e$[1],eR=e$[2],eN=e$[3],eL=e$[4],eS=e$[5],ej=e$[6],eA=e$[7],eT=e$[8],e_=e$[9],ez=e$[10],eB=(V=void 0===U?"hover":U,h.useMemo(function(){var t=O(null!=K?K:V),e=O(null!=tt?tt:V),o=new Set(t),n=new Set(e);return tV&&(o.has("hover")&&(o.delete("hover"),o.add("click")),n.has("hover")&&(n.delete("hover"),n.add("click"))),[o,n]},[tV,V,K,tt])),eD=(0,r.Z)(eB,2),eI=eD[0],eV=eD[1],eY=eI.has("click"),eX=eV.has("click")||eV.has("contextMenu"),eH=(0,p.Z)(function(){ev||ez()});Y=function(){el.current&&t$&&eX&&ep(!1)},(0,d.Z)(function(){if(ei&&t1&&tJ){var t=R(t1),e=R(tJ),o=M(tJ),n=new Set([o].concat((0,B.Z)(t),(0,B.Z)(e)));function r(){eH(),Y()}return n.forEach(function(t){t.addEventListener("scroll",r,{passive:!0})}),o.addEventListener("resize",r,{passive:!0}),eH(),function(){n.forEach(function(t){t.removeEventListener("scroll",r),o.removeEventListener("resize",r)})}}},[ei,t1,tJ]),(0,d.Z)(function(){eH()},[eC,ty]),(0,d.Z)(function(){ei&&!(null!=tx&&tx[ty])&&eH()},[JSON.stringify(tk)]);var eW=h.useMemo(function(){var t=function(t,e,o,n){for(var r=o.points,i=Object.keys(t),a=0;a<i.length;a+=1){var l,s=i[a];if(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=arguments.length>2?arguments[2]:void 0;return o?t[0]===e[0]:t[0]===e[0]&&t[1]===e[1]}(null===(l=t[s])||void 0===l?void 0:l.points,r,n))return"".concat(e,"-placement-").concat(s)}return""}(tx,J,e_,t$);return s()(t,null==tE?void 0:tE(e_))},[e_,tE,tx,J,t$]);h.useImperativeHandle(o,function(){return{nativeElement:t4.current,forceAlign:eH}});var eq=h.useState(0),eF=(0,r.Z)(eq,2),eG=eF[0],eJ=eF[1],eQ=h.useState(0),eU=(0,r.Z)(eQ,2),eK=eU[0],e0=eU[1],e1=function(){if(tZ&&t1){var t=t1.getBoundingClientRect();eJ(t.width),e0(t.height)}};function e2(t,e,o,n){t8[t]=function(r){var i;null==n||n(r),ep(e,o);for(var a=arguments.length,l=Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];null===(i=t7[t])||void 0===i||i.call.apply(i,[t7,r].concat(l))}}(0,d.Z)(function(){ey&&(ez(),ey(),ew(null))},[ey]),(eY||eX)&&(t8.onClick=function(t){var e;el.current&&eX?ep(!1):!el.current&&eY&&(eE(t),ep(!0));for(var o=arguments.length,n=Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];null===(e=t7.onClick)||void 0===e||e.call.apply(e,[t7,t].concat(n))}),X=void 0===tf||tf,H=h.useRef(ei),W=h.useRef(!1),H.current!==ei&&(W.current=!0,H.current=ei),h.useEffect(function(){var t=(0,D.Z)(function(){W.current=!1});return function(){D.Z.cancel(t)}},[ei]),h.useEffect(function(){if(eX&&tJ&&(!tu||X)){var t=function(){var t=!1;return[function(e){t=t6(e.target)},function(e){var o=e.target;W.current||!H.current||t||t6(o)||ep(!1)}]},e=t(),o=(0,r.Z)(e,2),n=o[0],i=o[1],a=t(),l=(0,r.Z)(a,2),s=l[0],c=l[1],u=M(tJ);u.addEventListener("mousedown",n,!0),u.addEventListener("click",i,!0),u.addEventListener("contextmenu",i,!0);var p=(0,f.A)(t1);return p&&(p.addEventListener("mousedown",s,!0),p.addEventListener("click",c,!0),p.addEventListener("contextmenu",c,!0)),function(){u.removeEventListener("mousedown",n,!0),u.removeEventListener("click",i,!0),u.removeEventListener("contextmenu",i,!0),p&&(p.removeEventListener("mousedown",s,!0),p.removeEventListener("click",c,!0),p.removeEventListener("contextmenu",c,!0))}}},[eX,t1,tJ,tu,X]);var e4=eI.has("hover"),e5=eV.has("hover");e4&&(e2("onMouseEnter",!0,ti,function(t){eE(t)}),e2("onPointerEnter",!0,ti,function(t){eE(t)}),q=function(){(ei||ev)&&ep(!0,ti)},t$&&(t8.onMouseMove=function(t){var e;null===(e=t7.onMouseMove)||void 0===e||e.call(t7,t)})),e5&&(e2("onMouseLeave",!1,tl),e2("onPointerLeave",!1,tl),F=function(){ep(!1,tl)}),eI.has("focus")&&e2("onFocus",!0,ts),eV.has("focus")&&e2("onBlur",!1,tc),eI.has("contextMenu")&&(t8.onContextMenu=function(t){var e;el.current&&eV.has("contextMenu")?ep(!1):(eE(t),ep(!0)),t.preventDefault();for(var o=arguments.length,n=Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r];null===(e=t7.onContextMenu)||void 0===e||e.call.apply(e,[t7,t].concat(n))}),t_&&(t8.className=s()(t7.className,t_));var e3=(0,n.Z)((0,n.Z)({},t7),t8),e7={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach(function(t){tB[t]&&(e7[t]=function(){for(var e,o=arguments.length,n=Array(o),r=0;r<o;r++)n[r]=arguments[r];null===(e=e3[t])||void 0===e||e.call.apply(e,[e3].concat(n)),tB[t].apply(tB,n)})});var e8=h.cloneElement(t3,(0,n.Z)((0,n.Z)({},e3),e7)),e6=tR?(0,n.Z)({},!0!==tR?tR:{}):null;return h.createElement(h.Fragment,null,h.createElement(c.Z,{disabled:!ei,ref:t5,onResize:function(){e1(),eH()}},h.createElement(Z,{getTriggerDOMNode:tz},e8)),h.createElement(E.Provider,{value:tW},h.createElement(C,{portal:t,ref:tU,prefixCls:J,popup:th,className:s()(tg,eW),style:tb,target:t1,onMouseEnter:q,onMouseLeave:F,onPointerEnter:q,zIndex:tC,open:ei,keepDom:ev,fresh:tO,onClick:tP,mask:tu,motion:t9,maskMotion:et,onVisibleChanged:function(t){eh(!1),ez(),null==tr||tr(t)},onPrepare:function(){return new Promise(function(t){e1(),ew(function(){return t})})},forceRender:tm,autoDestroy:td||tv||!1,getPopupContainer:tp,align:e_,arrow:e6,arrowPos:{x:eS,y:ej},ready:eP,offsetX:eM,offsetY:eR,offsetR:eN,offsetB:eL,onAlign:eH,stretch:tZ,targetWidth:eG/eA,targetHeight:eK/eT})))})}(a.Z)},50006:function(t,e,o){o.d(e,{o2:function(){return a}});var n=o(16141),r=o(50843);let i=r.i.map(t=>`${t}-inverse`);function a(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return e?[].concat((0,n.Z)(i),(0,n.Z)(r.i)).includes(t):r.i.includes(t)}},39972:function(t,e,o){o.d(e,{Z:function(){return l}});var n=o(91910);let r={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},i={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},a=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function l(t){let{arrowWidth:e,autoAdjustOverflow:o,arrowPointAtCenter:l,offset:s,borderRadius:c,visibleFirst:u}=t,f=e/2,p={};return Object.keys(r).forEach(t=>{let m=Object.assign(Object.assign({},l&&i[t]||r[t]),{offset:[0,0],dynamicInset:!0});switch(p[t]=m,a.has(t)&&(m.autoArrow=!1),t){case"top":case"topLeft":case"topRight":m.offset[1]=-f-s;break;case"bottom":case"bottomLeft":case"bottomRight":m.offset[1]=f+s;break;case"left":case"leftTop":case"leftBottom":m.offset[0]=-f-s;break;case"right":case"rightTop":case"rightBottom":m.offset[0]=f+s}let d=(0,n.wZ)({contentRadius:c,limitVerticalRadius:!0});if(l)switch(t){case"topLeft":case"bottomLeft":m.offset[0]=-d.arrowOffsetHorizontal-f;break;case"topRight":case"bottomRight":m.offset[0]=d.arrowOffsetHorizontal+f;break;case"leftTop":case"rightTop":m.offset[1]=-d.arrowOffsetHorizontal-f;break;case"leftBottom":case"rightBottom":m.offset[1]=d.arrowOffsetHorizontal+f}m.overflow=function(t,e,o,n){if(!1===n)return{adjustX:!1,adjustY:!1};let r={};switch(t){case"top":case"bottom":r.shiftX=2*e.arrowOffsetHorizontal+o,r.shiftY=!0,r.adjustY=!0;break;case"left":case"right":r.shiftY=2*e.arrowOffsetVertical+o,r.shiftX=!0,r.adjustX=!0}let i=Object.assign(Object.assign({},r),n&&"object"==typeof n?n:{});return i.shiftX||(i.adjustX=!0),i.shiftY||(i.adjustY=!0),i}(t,d,e,o),u&&(m.htmlRegion="visibleFirst")}),p}},91910:function(t,e,o){o.d(e,{ZP:function(){return a},qN:function(){return r},wZ:function(){return i}});var n=o(7405);let r=8;function i(t){let{contentRadius:e,limitVerticalRadius:o}=t,n=e>12?e+2:12;return{arrowOffsetHorizontal:n,arrowOffsetVertical:o?r:n}}function a(t,e,o){var r,i,a,l,s,c,u,f;let{componentCls:p,boxShadowPopoverArrow:m,arrowOffsetVertical:d,arrowOffsetHorizontal:v}=t,{arrowDistance:h=0,arrowPlacement:g={left:!0,right:!0,top:!0,bottom:!0}}=o||{};return{[p]:Object.assign(Object.assign(Object.assign(Object.assign({[`${p}-arrow`]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},(0,n.W)(t,e,m)),{"&:before":{background:e}})]},(r=!!g.top,i={[`&-placement-top > ${p}-arrow,&-placement-topLeft > ${p}-arrow,&-placement-topRight > ${p}-arrow`]:{bottom:h,transform:"translateY(100%) rotate(180deg)"},[`&-placement-top > ${p}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},[`&-placement-topLeft > ${p}-arrow`]:{left:{_skip_check_:!0,value:v}},[`&-placement-topRight > ${p}-arrow`]:{right:{_skip_check_:!0,value:v}}},r?i:{})),(a=!!g.bottom,l={[`&-placement-bottom > ${p}-arrow,&-placement-bottomLeft > ${p}-arrow,&-placement-bottomRight > ${p}-arrow`]:{top:h,transform:"translateY(-100%)"},[`&-placement-bottom > ${p}-arrow`]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},[`&-placement-bottomLeft > ${p}-arrow`]:{left:{_skip_check_:!0,value:v}},[`&-placement-bottomRight > ${p}-arrow`]:{right:{_skip_check_:!0,value:v}}},a?l:{})),(s=!!g.left,c={[`&-placement-left > ${p}-arrow,&-placement-leftTop > ${p}-arrow,&-placement-leftBottom > ${p}-arrow`]:{right:{_skip_check_:!0,value:h},transform:"translateX(100%) rotate(90deg)"},[`&-placement-left > ${p}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},[`&-placement-leftTop > ${p}-arrow`]:{top:d},[`&-placement-leftBottom > ${p}-arrow`]:{bottom:d}},s?c:{})),(u=!!g.right,f={[`&-placement-right > ${p}-arrow,&-placement-rightTop > ${p}-arrow,&-placement-rightBottom > ${p}-arrow`]:{left:{_skip_check_:!0,value:h},transform:"translateX(-100%) rotate(-90deg)"},[`&-placement-right > ${p}-arrow`]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},[`&-placement-rightTop > ${p}-arrow`]:{top:d},[`&-placement-rightBottom > ${p}-arrow`]:{bottom:d}},u?f:{}))}}},7405:function(t,e,o){o.d(e,{W:function(){return i},w:function(){return r}});var n=o(89426);function r(t){let{sizePopupArrow:e,borderRadiusXS:o,borderRadiusOuter:n}=t,r=e/2,i=1*n/Math.sqrt(2),a=r-n*(1-1/Math.sqrt(2)),l=r-1/Math.sqrt(2)*o,s=n*(Math.sqrt(2)-1)+1/Math.sqrt(2)*o,c=n*(Math.sqrt(2)-1),u=`polygon(${c}px 100%, 50% ${c}px, ${2*r-c}px 100%, ${c}px 100%)`,f=`path('M 0 ${r} A ${n} ${n} 0 0 0 ${i} ${a} L ${l} ${s} A ${o} ${o} 0 0 1 ${2*r-l} ${s} L ${2*r-i} ${a} A ${n} ${n} 0 0 0 ${2*r-0} ${r} Z')`;return{arrowShadowWidth:r*Math.sqrt(2)+n*(Math.sqrt(2)-2),arrowPath:f,arrowPolygon:u}}let i=(t,e,o)=>{let{sizePopupArrow:r,arrowPolygon:i,arrowPath:a,arrowShadowWidth:l,borderRadiusXS:s,calc:c}=t;return{pointerEvents:"none",width:r,height:r,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:r,height:c(r).div(2).equal(),background:e,clipPath:{_multi_value_:!0,value:[i,a]},content:'""'},"&::after":{content:'""',position:"absolute",width:l,height:l,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:`0 0 ${(0,n.bf)(s)} 0`},transform:"translateY(50%) rotate(-135deg)",boxShadow:o,zIndex:0,background:"transparent"}}}},50843:function(t,e,o){o.d(e,{i:function(){return n}});let n=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},97964:function(t,e,o){o.d(e,{Z:function(){return r}});var n=o(50843);function r(t,e){return n.i.reduce((o,n)=>{let r=t[`${n}1`],i=t[`${n}3`],a=t[`${n}6`],l=t[`${n}7`];return Object.assign(Object.assign({},o),e(n,{lightColor:r,lightBorderColor:i,darkColor:a,textColor:l}))},{})}},60458:function(t,e,o){o.d(e,{Z:function(){return L}});var n=o(2265),r=o(42744),i=o.n(r),a=o(36680),l=o(73310),s=o(91867),c=o(33613),u=o(39972),f=o(66284),p=o(33779),m=o(68083),d=o(19056),v=o(2325),h=o(54215),g=o(27734),b=o(18037),y=o(91910),w=o(97964),x=o(43744),k=o(33563),C=o(89426),Z=o(7405);let E=t=>{let{componentCls:e,tooltipMaxWidth:o,tooltipColor:n,tooltipBg:r,tooltipBorderRadius:i,zIndexPopup:a,controlHeight:l,boxShadowSecondary:s,paddingSM:c,paddingXS:u}=t;return[{[e]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,g.Wf)(t)),{position:"absolute",zIndex:a,display:"block",width:"max-content",maxWidth:o,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":r,[`${e}-inner`]:{minWidth:l,minHeight:l,padding:`${(0,C.bf)(t.calc(c).div(2).equal())} ${(0,C.bf)(u)}`,color:n,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:r,borderRadius:i,boxShadow:s,boxSizing:"border-box"},"&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom":{[`${e}-inner`]:{borderRadius:t.min(i,y.qN)}},[`${e}-content`]:{position:"relative"}}),(0,w.Z)(t,(t,o)=>{let{darkColor:n}=o;return{[`&${e}-${t}`]:{[`${e}-inner`]:{backgroundColor:n},[`${e}-arrow`]:{"--antd-arrow-background-color":n}}}})),{"&-rtl":{direction:"rtl"}})},(0,y.ZP)(t,"var(--antd-arrow-background-color)"),{[`${e}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow}}]},O=t=>Object.assign(Object.assign({zIndexPopup:t.zIndexPopupBase+70},(0,y.wZ)({contentRadius:t.borderRadius,limitVerticalRadius:!0})),(0,Z.w)((0,x.TS)(t,{borderRadiusOuter:Math.min(t.borderRadiusOuter,4)})));var $=function(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return(0,k.I$)("Tooltip",t=>{let{borderRadius:e,colorTextLightSolid:o,colorBgSpotlight:n}=t;return[E((0,x.TS)(t,{tooltipMaxWidth:250,tooltipColor:o,tooltipBorderRadius:e,tooltipBg:n})),(0,b._y)(t,"zoom-big-fast")]},O,{resetStyle:!1,injectStyle:e})(t)},P=o(50006);function M(t,e){let o=(0,P.o2)(e),n=i()({[`${t}-${e}`]:e&&o}),r={},a={};return e&&!o&&(r.background=e,a["--antd-arrow-background-color"]=e),{className:n,overlayStyle:r,arrowStyle:a}}var R=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)0>e.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};let N=n.forwardRef((t,e)=>{var o,r;let{prefixCls:g,openClassName:b,getTooltipContainer:y,overlayClassName:w,color:x,overlayInnerStyle:k,children:C,afterOpenChange:Z,afterVisibleChange:E,destroyTooltipOnHide:O,arrow:P=!0,title:N,overlay:L,builtinPlacements:S,arrowPointAtCenter:j=!1,autoAdjustOverflow:A=!0}=t,T=!!P,[,_]=(0,h.ZP)(),{getPopupContainer:z,getPrefixCls:B,direction:D}=n.useContext(d.E_),I=(0,p.ln)("Tooltip"),V=n.useRef(null),Y=()=>{var t;null===(t=V.current)||void 0===t||t.forceAlign()};n.useImperativeHandle(e,()=>({forceAlign:Y,forcePopupAlign:()=>{I.deprecated(!1,"forcePopupAlign","forceAlign"),Y()}}));let[X,H]=(0,l.Z)(!1,{value:null!==(o=t.open)&&void 0!==o?o:t.visible,defaultValue:null!==(r=t.defaultOpen)&&void 0!==r?r:t.defaultVisible}),W=!N&&!L&&0!==N,q=n.useMemo(()=>{var t,e;let o=j;return"object"==typeof P&&(o=null!==(e=null!==(t=P.pointAtCenter)&&void 0!==t?t:P.arrowPointAtCenter)&&void 0!==e?e:j),S||(0,u.Z)({arrowPointAtCenter:o,autoAdjustOverflow:A,arrowWidth:T?_.sizePopupArrow:0,borderRadius:_.borderRadius,offset:_.marginXXS,visibleFirst:!0})},[j,P,S,_]),F=n.useMemo(()=>0===N?N:L||N||"",[L,N]),G=n.createElement(v.BR,null,"function"==typeof F?F():F),{getPopupContainer:J,placement:Q="top",mouseEnterDelay:U=.1,mouseLeaveDelay:K=.1,overlayStyle:tt,rootClassName:te}=t,to=R(t,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),tn=B("tooltip",g),tr=B(),ti=t["data-popover-inject"],ta=X;"open"in t||"visible"in t||!W||(ta=!1);let tl=(0,f.l$)(C)&&!(0,f.M2)(C)?C:n.createElement("span",null,C),ts=tl.props,tc=ts.className&&"string"!=typeof ts.className?ts.className:i()(ts.className,b||`${tn}-open`),[tu,tf,tp]=$(tn,!ti),tm=M(tn,x),td=tm.arrowStyle,tv=Object.assign(Object.assign({},k),tm.overlayStyle),th=i()(w,{[`${tn}-rtl`]:"rtl"===D},tm.className,te,tf,tp),[tg,tb]=(0,s.Cn)("Tooltip",to.zIndex),ty=n.createElement(a.Z,Object.assign({},to,{zIndex:tg,showArrow:T,placement:Q,mouseEnterDelay:U,mouseLeaveDelay:K,prefixCls:tn,overlayClassName:th,overlayStyle:Object.assign(Object.assign({},td),tt),getTooltipContainer:J||y||z,ref:V,builtinPlacements:q,overlay:G,visible:ta,onVisibleChange:e=>{var o,n;H(!W&&e),W||(null===(o=t.onOpenChange)||void 0===o||o.call(t,e),null===(n=t.onVisibleChange)||void 0===n||n.call(t,e))},afterVisibleChange:null!=Z?Z:E,overlayInnerStyle:tv,arrowContent:n.createElement("span",{className:`${tn}-arrow-content`}),motion:{motionName:(0,c.m)(tr,"zoom-big-fast",t.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!O}),ta?(0,f.Tm)(tl,{className:tc}):tl);return tu(n.createElement(m.Z.Provider,{value:tb},ty))});N._InternalPanelDoNotUseOrYouWillBeFired=t=>{let{prefixCls:e,className:o,placement:r="top",title:l,color:s,overlayInnerStyle:c}=t,{getPrefixCls:u}=n.useContext(d.E_),f=u("tooltip",e),[p,m,v]=$(f),h=M(f,s),g=h.arrowStyle,b=Object.assign(Object.assign({},c),h.overlayStyle),y=i()(m,v,f,`${f}-pure`,`${f}-placement-${r}`,o,h.className);return p(n.createElement("div",{className:y,style:g},n.createElement("div",{className:`${f}-arrow`}),n.createElement(a.G,Object.assign({},t,{className:m,prefixCls:f,overlayInnerStyle:b}),l)))};var L=N},36680:function(t,e,o){o.d(e,{G:function(){return a},Z:function(){return h}});var n=o(42744),r=o.n(n),i=o(2265);function a(t){var e=t.children,o=t.prefixCls,n=t.id,a=t.overlayInnerStyle,l=t.className,s=t.style;return i.createElement("div",{className:r()("".concat(o,"-content"),l),style:s},i.createElement("div",{className:"".concat(o,"-inner"),id:n,role:"tooltip",style:a},"function"==typeof e?e():e))}var l=o(13428),s=o(10870),c=o(82554),u=o(16758),f={shiftX:64,adjustY:1},p={adjustX:1,shiftY:!0},m=[0,0],d={left:{points:["cr","cl"],overflow:p,offset:[-4,0],targetOffset:m},right:{points:["cl","cr"],overflow:p,offset:[4,0],targetOffset:m},top:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:m},bottom:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:m},topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:m},leftTop:{points:["tr","tl"],overflow:p,offset:[-4,0],targetOffset:m},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:m},rightTop:{points:["tl","tr"],overflow:p,offset:[4,0],targetOffset:m},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:m},rightBottom:{points:["bl","br"],overflow:p,offset:[4,0],targetOffset:m},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:m},leftBottom:{points:["br","bl"],overflow:p,offset:[-4,0],targetOffset:m}},v=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],h=(0,i.forwardRef)(function(t,e){var o=t.overlayClassName,n=t.trigger,r=t.mouseEnterDelay,f=t.mouseLeaveDelay,p=t.overlayStyle,m=t.prefixCls,h=void 0===m?"rc-tooltip":m,g=t.children,b=t.onVisibleChange,y=t.afterVisibleChange,w=t.transitionName,x=t.animation,k=t.motion,C=t.placement,Z=t.align,E=t.destroyTooltipOnHide,O=t.defaultVisible,$=t.getTooltipContainer,P=t.overlayInnerStyle,M=(t.arrowContent,t.overlay),R=t.id,N=t.showArrow,L=(0,c.Z)(t,v),S=(0,i.useRef)(null);(0,i.useImperativeHandle)(e,function(){return S.current});var j=(0,s.Z)({},L);return"visible"in t&&(j.popupVisible=t.visible),i.createElement(u.Z,(0,l.Z)({popupClassName:o,prefixCls:h,popup:function(){return i.createElement(a,{key:"content",prefixCls:h,id:R,overlayInnerStyle:P},M)},action:void 0===n?["hover"]:n,builtinPlacements:d,popupPlacement:void 0===C?"right":C,ref:S,popupAlign:void 0===Z?{}:Z,getPopupContainer:$,onPopupVisibleChange:b,afterPopupVisibleChange:y,popupTransitionName:w,popupAnimation:x,popupMotion:k,defaultPopupVisible:O,autoDestroy:void 0!==E&&E,mouseLeaveDelay:void 0===f?.1:f,popupStyle:p,mouseEnterDelay:void 0===r?0:r,arrow:void 0===N||N},j),g)})},77971:function(t,e){e.Z=function(){if("undefined"==typeof navigator||"undefined"==typeof window)return!1;var t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null==t?void 0:t.substr(0,4))}}}]);