(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5267],{22868:function(){},14777:function(){},99830:function(){},70209:function(){},79171:function(e,s,l){"use strict";var r=l(2265);s.Z=()=>{let e=JSON.parse(localStorage.getItem("project"))||[],[s,l]=(0,r.useState)(e);return(0,r.useEffect)(()=>{localStorage.setItem("project",JSON.stringify(s))},[s]),[s,l]}},97454:function(e,s,l){"use strict";let r=l(92173).Z.create({baseURL:"https://spj7xgf470.execute-api.us-east-1.amazonaws.com/dev"});s.Z=r},62199:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return g}});var r=l(57437),t=l(35932),a=l(91209),n=l(2265),i=l(97454),c=l(79171);let d=e=>{let[s,l]=(0,n.useState)([]),[t,a]=(0,n.useState)([]),[d,o]=(0,c.Z)({resourcePool:[{projectManager:[]}]}),x=e=>{t.includes(e)?a(s=>s.filter(s=>s!==e)):a(s=>[...s,e])};return console.log(t),(0,n.useEffect)(()=>{(async()=>{try{let e=await i.Z.get("/get_resource_by_role",{params:{role:"Project Manager"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,r.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-5 w-[100%]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-slate-700 text-xl non-italic font-semibold leading-none",children:"List Of Project Managers"}),(0,r.jsx)("button",{onClick:()=>{o(e=>({...e,resourcePool:[{projectManager:t}]})),e.onSubmit()},className:"flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer",children:"Add"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"border border-gray-500 bg-white rounded w-64 h-9 pl-3",placeholder:"Search"})}),(0,r.jsx)("div",{className:"w-[100%] border border-gray-400 p-5 flex justify-center rounded",children:(0,r.jsxs)("div",{className:"rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0",children:[(0,r.jsxs)("div",{className:" flex flex-col gap-5 mt-3 ",children:[(0,r.jsxs)("div",{className:"text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ",children:[(0,r.jsx)("h1",{children:"Name"}),(0,r.jsxs)("div",{className:"flex w-[80%] justify-around pr-4 gap-24",children:[(0,r.jsx)("h1",{className:"",children:"Last Active"}),(0,r.jsx)("h1",{className:" ",children:"Role"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-around",children:(0,r.jsx)("div",{className:"border border-gray-200 w-[95%] "})})]}),(0,r.jsx)("div",{children:s.map((e,s)=>(0,r.jsxs)("div",{className:"flex items-center justify-start py-6 pr-20 pl-4 gap-40",children:[(0,r.jsxs)("div",{className:"flex items-center gap-6 pl-3",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:t.includes(e.resource_id),onChange:()=>x(e.resource_id),className:"cursor-pointer"})}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{className:"rounded-full w-16 h-16",src:e.image_url}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:e.resource_name}),(0,r.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal",children:e.email})]})]})]}),(0,r.jsxs)("div",{className:"flex justify-between w-[52%] ",children:[(0,r.jsx)("div",{className:"text-sm non-italic font-normal leading-none text-blue-500 align-",children:e.lastActive}),(0,r.jsx)("div",{className:"text-neutral-400 font-segoe-ui text-base font-normal mr-1",children:"Product Manager"})]})]},s))})]})})]})},o=e=>{let[s,l]=(0,n.useState)([]),[t,a]=(0,n.useState)([]),[d,o]=(0,c.Z)({resourcePool:[{apiDeveloper:[]}]});(0,n.useEffect)(()=>{(async()=>{try{let e=await i.Z.get("/get_resource_by_role",{params:{role:"API Developer"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);let x=e=>{t.includes(e)?a(s=>s.filter(s=>s!==e)):a(s=>[...s,e])};return(0,r.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-5 w-[100%]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-slate-700 text-xl non-italic font-semibold leading-none",children:"List Of Api Developers"}),(0,r.jsx)("button",{onClick:()=>{o(e=>{let s=[...e.resourcePool,{apiDeveloper:t}];return{...e,resourcePool:s}}),e.onSubmit()},className:"flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer",children:"Add"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"border border-gray-500 bg-white rounded w-64 h-9 pl-3",placeholder:"Search"})}),(0,r.jsx)("div",{className:"w-[100%] border border-gray-400 p-5 flex justify-center rounded",children:(0,r.jsxs)("div",{className:"rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0",children:[(0,r.jsxs)("div",{className:" flex flex-col gap-5 mt-3 ",children:[(0,r.jsxs)("div",{className:"text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ",children:[(0,r.jsx)("h1",{children:"Name"}),(0,r.jsxs)("div",{className:"flex w-[80%] justify-around pr-4 gap-24",children:[(0,r.jsx)("h1",{className:"",children:"Last Active"}),(0,r.jsx)("h1",{className:" ",children:"Role"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-around",children:(0,r.jsx)("div",{className:"border border-gray-200 w-[95%] "})})]}),(0,r.jsx)("div",{children:s.map((e,s)=>(0,r.jsxs)("div",{className:"flex items-center justify-start py-6 pr-20 pl-4 gap-40",children:[(0,r.jsxs)("div",{className:"flex items-center gap-6 pl-3",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:t.includes(e.resource_id),onChange:()=>x(e.resource_id),className:"cursor-pointer"})}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{className:"rounded-full w-16 h-16",src:e.image_url}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:e.resource_name}),(0,r.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal",children:e.email})]})]})]}),(0,r.jsxs)("div",{className:"flex justify-between w-[52%] ",children:[(0,r.jsx)("div",{className:"text-sm non-italic font-normal leading-none text-blue-500 align-",children:e.lastActive}),(0,r.jsx)("div",{className:"text-neutral-400 font-segoe-ui text-base font-normal mr-1",children:"API Developer"})]})]},s))})]})})]})},x=e=>{let[s,l]=(0,n.useState)([]),[t,a]=(0,n.useState)([]),[d,o]=(0,c.Z)({resourcePool:[{cicd:[]}]}),x=e=>{t.includes(e)?a(s=>s.filter(s=>s!==e)):a(s=>[...s,e])};return(0,n.useEffect)(()=>{(async()=>{try{let e=await i.Z.get("/get_resource_by_role",{params:{role:"CI/CD"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,r.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-5 w-[100%]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-slate-700 text-xl non-italic font-semibold leading-none",children:"List Of CI/CD"}),(0,r.jsx)("button",{onClick:()=>{o(e=>({...e,resourcePool:[{cicid:t}]})),e.onSubmit()},className:"flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer",children:"Add"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"border border-gray-500 bg-white rounded w-64 h-9 pl-3",placeholder:"Search"})}),(0,r.jsx)("div",{className:"w-[100%] border border-gray-400 p-5 flex justify-center rounded",children:(0,r.jsxs)("div",{className:"rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0",children:[(0,r.jsxs)("div",{className:" flex flex-col gap-5 mt-3 ",children:[(0,r.jsxs)("div",{className:"text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ",children:[(0,r.jsx)("h1",{children:"Name"}),(0,r.jsxs)("div",{className:"flex w-[80%] justify-around pr-4 gap-24",children:[(0,r.jsx)("h1",{className:"",children:"Last Active"}),(0,r.jsx)("h1",{className:" ",children:"Role"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-around",children:(0,r.jsx)("div",{className:"border border-gray-200 w-[95%] "})})]}),(0,r.jsx)("div",{children:s.map((e,s)=>(0,r.jsxs)("div",{className:"flex items-center justify-start py-6 pr-20 pl-4 gap-40",children:[(0,r.jsxs)("div",{className:"flex items-center gap-6 pl-3",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:t.includes(e.resource_id),onChange:()=>x(e.resource_id)})}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{className:"rounded-full w-16 h-16",src:e.image_url}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:e.resource_name}),(0,r.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal",children:e.email})]})]})]}),(0,r.jsxs)("div",{className:"flex justify-between w-[52%] ",children:[(0,r.jsx)("div",{className:"text-sm non-italic font-normal leading-none text-blue-500 align-",children:e.lastActive}),(0,r.jsx)("div",{className:"text-neutral-400 font-segoe-ui text-base font-normal mr-1",children:"CI/CD"})]})]},s))})]})})]})},m=e=>{let[s,l]=(0,n.useState)([]),[t,a]=(0,n.useState)([]),[d,o]=(0,c.Z)({resourcePool:[{tester:[]}]}),x=e=>{t.includes(e)?a(s=>s.filter(s=>s!==e)):a(s=>[...s,e])};return console.log(t),(0,n.useEffect)(()=>{(async()=>{try{let e=await i.Z.get("/get_resource_by_role",{params:{role:"Tester"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,r.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-5 w-[100%]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-slate-700 text-xl non-italic font-semibold leading-none",children:"List Of Tester"}),(0,r.jsx)("button",{onClick:()=>{o(e=>({...e,resourcePool:[{tester:t}]})),e.onSubmit()},className:"flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer",children:"Add"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"border border-gray-500 bg-white rounded w-64 h-9 pl-3",placeholder:"Search"})}),(0,r.jsx)("div",{className:"w-[100%] border border-gray-400 p-5 flex justify-center rounded",children:(0,r.jsxs)("div",{className:"rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0",children:[(0,r.jsxs)("div",{className:" flex flex-col gap-5 mt-3 ",children:[(0,r.jsxs)("div",{className:"text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ",children:[(0,r.jsx)("h1",{children:"Name"}),(0,r.jsxs)("div",{className:"flex w-[80%] justify-around pr-4 gap-24",children:[(0,r.jsx)("h1",{className:"",children:"Last Active"}),(0,r.jsx)("h1",{className:" ",children:"Role"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-around",children:(0,r.jsx)("div",{className:"border border-gray-200 w-[95%] "})})]}),(0,r.jsx)("div",{children:s.map((e,s)=>(0,r.jsxs)("div",{className:"flex items-center justify-start py-6 pr-20 pl-4 gap-40",children:[(0,r.jsxs)("div",{className:"flex items-center gap-6 pl-3",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:t.includes(e.resource_id),onChange:()=>x(e.resource_id),className:"cursor-pointer"})}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{className:"rounded-full w-16 h-16",src:e.image_url}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:e.resource_name}),(0,r.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal",children:e.email})]})]})]}),(0,r.jsxs)("div",{className:"flex justify-between w-[52%] ",children:[(0,r.jsx)("div",{className:"text-sm non-italic font-normal leading-none text-blue-500 align-",children:e.lastActive}),(0,r.jsx)("div",{className:"text-neutral-400 font-segoe-ui text-base font-normal mr-1",children:"Tester"})]})]},s))})]})})]})},u=e=>{let[s,l]=(0,n.useState)([]),[t,a]=(0,n.useState)([]),[d,o]=(0,c.Z)({resourcePool:[{uiDesigner:[]}]}),x=e=>{t.includes(e)?a(s=>s.filter(s=>s!==e)):a(s=>[...s,e])};return console.log(t),(0,n.useEffect)(()=>{(async()=>{try{let e=await i.Z.get("/get_resource_by_role",{params:{role:"UI Designer"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,r.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-5 w-[100%]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-slate-700 text-xl non-italic font-semibold leading-none",children:"List Of UI Designers"}),(0,r.jsx)("button",{onClick:()=>{o(e=>({...e,resourcePool:[{uiDesigner:t}]})),e.onSubmit()},className:"flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer",children:"Add"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"border border-gray-500 bg-white rounded w-64 h-9 pl-3",placeholder:"Search"})}),(0,r.jsx)("div",{className:"w-[100%] border border-gray-400 p-5 flex justify-center rounded",children:(0,r.jsxs)("div",{className:"rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0",children:[(0,r.jsxs)("div",{className:" flex flex-col gap-5 mt-3 ",children:[(0,r.jsxs)("div",{className:"text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ",children:[(0,r.jsx)("h1",{children:"Name"}),(0,r.jsxs)("div",{className:"flex w-[80%] justify-around pr-4 gap-24",children:[(0,r.jsx)("h1",{className:"",children:"Last Active"}),(0,r.jsx)("h1",{className:" ",children:"Role"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-around",children:(0,r.jsx)("div",{className:"border border-gray-200 w-[95%] "})})]}),(0,r.jsx)("div",{children:s.map((e,s)=>(0,r.jsxs)("div",{className:"flex items-center justify-start py-6 pr-20 pl-4 gap-40",children:[(0,r.jsxs)("div",{className:"flex items-center gap-6 pl-3",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:t.includes(e.resource_id),onChange:()=>x(e.resource_id),className:"cursor-pointer"})}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{className:"rounded-full w-16 h-16",src:e.image_url}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:e.resource_name}),(0,r.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal",children:e.email})]})]})]}),(0,r.jsxs)("div",{className:"flex justify-between w-[52%] ",children:[(0,r.jsx)("div",{className:"text-sm non-italic font-normal leading-none text-blue-500 align-",children:e.lastActive}),(0,r.jsx)("div",{className:"text-neutral-400 font-segoe-ui text-base font-normal mr-1",children:"UI Designer"})]})]},s))})]})})]})},h=e=>{let[s,l]=(0,n.useState)([]),[t,a]=(0,n.useState)([]),[d,o]=(0,c.Z)({resourcePool:[{uiDeveloper:[]}]}),x=e=>{t.includes(e)?a(s=>s.filter(s=>s!==e)):a(s=>[...s,e])};return console.log(t),(0,n.useEffect)(()=>{(async()=>{try{let e=await i.Z.get("/get_resource_by_role",{params:{role:"UI Developer"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,r.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-5 w-[100%]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-slate-700 text-xl non-italic font-semibold leading-none",children:"List Of Ui Developers"}),(0,r.jsx)("button",{onClick:()=>{o(e=>({...e,resourcePool:[{uiDeveloper:t}]})),e.onSubmit()},className:"flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer",children:"Add"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"border border-gray-500 bg-white rounded w-64 h-9 pl-3",placeholder:"Search"})}),(0,r.jsx)("div",{className:"w-[100%] border border-gray-400 p-5 flex justify-center rounded",children:(0,r.jsxs)("div",{className:"rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0",children:[(0,r.jsxs)("div",{className:" flex flex-col gap-5 mt-3 ",children:[(0,r.jsxs)("div",{className:"text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ",children:[(0,r.jsx)("h1",{children:"Name"}),(0,r.jsxs)("div",{className:"flex w-[80%] justify-around pr-4 gap-24",children:[(0,r.jsx)("h1",{className:"",children:"Last Active"}),(0,r.jsx)("h1",{className:" ",children:"Role"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-around",children:(0,r.jsx)("div",{className:"border border-gray-200 w-[95%] "})})]}),(0,r.jsx)("div",{children:s.map((e,s)=>(0,r.jsxs)("div",{className:"flex items-center justify-start py-6 pr-20 pl-4 gap-40",children:[(0,r.jsxs)("div",{className:"flex items-center gap-6 pl-3",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:t.includes(e.resource_id),onChange:()=>x(e.resource_id),className:"cursor-pointer"})}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{className:"rounded-full w-16 h-16",src:e.image_url}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:e.resource_name}),(0,r.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal",children:e.email})]})]})]}),(0,r.jsxs)("div",{className:"flex justify-between w-[52%] ",children:[(0,r.jsx)("div",{className:"text-sm non-italic font-normal leading-none text-blue-500 align-",children:e.lastActive}),(0,r.jsx)("div",{className:"text-neutral-400 font-segoe-ui text-base font-normal mr-1",children:"UI Developer"})]})]},s))})]})})]})},f=e=>{let[s,l]=(0,n.useState)([]),[t,a]=(0,n.useState)([]),[d,o]=(0,c.Z)({resourcePool:[{uxResearcher:[]}]}),x=e=>{t.includes(e)?a(s=>s.filter(s=>s!==e)):a(s=>[...s,e])};return console.log(t),(0,n.useEffect)(()=>{(async()=>{try{let e=await i.Z.get("/get_resource_by_role",{params:{role:"UX Researcher"}});console.log(e.data);let s=e.data;l(s)}catch(e){console.error("Error fetching data:",e)}})()},[]),(0,r.jsxs)("div",{className:"flex flex-col gap-4 bg-white p-5 w-[100%]",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("h1",{className:"text-slate-700 text-xl non-italic font-semibold leading-none",children:"List Of Ux Research"}),(0,r.jsx)("button",{onClick:()=>{o(e=>({...e,resourcePool:[{uxResearcher:t}]})),e.onSubmit()},className:"flex items-center justify-center py-1 px-[0.94rem] border border-blue-500 bg-blue-500 rounded-sm text-white cursor-pointer",children:"Add"})]}),(0,r.jsx)("div",{children:(0,r.jsx)("input",{className:"border border-gray-500 bg-white rounded w-64 h-9 pl-3",placeholder:"Search"})}),(0,r.jsx)("div",{className:"w-[100%] border border-gray-400 p-5 flex justify-center rounded",children:(0,r.jsxs)("div",{className:"rounded-lg bg-white shadow-md w-[100%] border border-gray-200 border-t-0",children:[(0,r.jsxs)("div",{className:" flex flex-col gap-5 mt-3 ",children:[(0,r.jsxs)("div",{className:"text-black font-segoe-ui text-base font-semibold leading-normal flex items-center justify-start  px-16 pl-24 gap-60  ",children:[(0,r.jsx)("h1",{children:"Name"}),(0,r.jsxs)("div",{className:"flex w-[80%] justify-around pr-4 gap-24",children:[(0,r.jsx)("h1",{className:"",children:"Last Active"}),(0,r.jsx)("h1",{className:" ",children:"Role"})]})]}),(0,r.jsx)("div",{className:"flex items-center justify-around",children:(0,r.jsx)("div",{className:"border border-gray-200 w-[95%] "})})]}),(0,r.jsx)("div",{children:s.map((e,s)=>(0,r.jsxs)("div",{className:"flex items-center justify-start py-6 pr-20 pl-4 gap-40",children:[(0,r.jsxs)("div",{className:"flex items-center gap-6 pl-3",children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{type:"checkbox",checked:t.includes(e.resource_id),onChange:()=>x(e.resource_id),className:"cursor-pointer"})}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("img",{className:"rounded-full w-16 h-16",src:e.image_url}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-gray-800 font-segoe-ui text-base font-bold leading-normal",children:e.resource_name}),(0,r.jsx)("h3",{className:"text-neutral-300 font-segoe-ui text-base font-normal leading-normal",children:e.email})]})]})]}),(0,r.jsxs)("div",{className:"flex justify-between w-[52%] ",children:[(0,r.jsx)("div",{className:"text-sm non-italic font-normal leading-none text-blue-500 align-",children:e.lastActive}),(0,r.jsx)("div",{className:"text-neutral-400 font-segoe-ui text-base font-normal mr-1",children:"UX Researcher"})]})]},s))})]})})]})};var j=l(24033);function g(){let[e,s]=(0,n.useState)(!1),[l,i]=(0,n.useState)(!1),[g,b]=(0,n.useState)(!1),[p,N]=(0,n.useState)(!1),[v,y]=(0,n.useState)(!1),[w,_]=(0,n.useState)(!1),[S,k]=(0,n.useState)(!1),[C,A]=(0,c.Z)({}),P=e=>{e(!0)},D=()=>{s(!1),i(!1),b(!1),N(!1),y(!1),_(!1),k(!1)},E=(0,j.useRouter)(),Z={project_id:C.projectId,team_name:C.projectName,created_by_id:"550e8400-e29b-41d4-a716-446655440001",roles:C.resourcePool};return console.log("project"),console.log(C.resourcePool),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"main flex flex-col bg-white w-full rounded-lg  ",children:[(0,r.jsx)("h2",{className:"ml-4 mt-5 text-black font-segoe-ui text-2xl font-semibold leading-24",children:"Resource Pool"}),(0,r.jsx)("div",{className:"flex mt-8",children:(0,r.jsxs)("div",{className:"div flex flex-col gap-4  justify-center ml-8",children:[(0,r.jsxs)("div",{className:" flex flex-row items-center",children:[(0,r.jsx)("h3",{className:"text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32 ",children:"Project Manager"}),(0,r.jsxs)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:[(0,r.jsxs)("a",{href:"#",className:"flex justify-between items-center",onClick:()=>P(s),children:[(0,r.jsx)("span",{className:" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300",children:"Add Project Manager"}),(0,r.jsx)(t.faE,{className:" text-gray-300 text-sm"})]}),(0,r.jsx)(a.Z,{open:e,onCancel:D,footer:null,closable:!1,width:1e3,children:(0,r.jsx)(d,{onSubmit:D})})]}),(0,r.jsx)("div",{className:" text-gray-300 rounded-md bg-neutral-1 shadow-md px-6 py-5",children:(0,r.jsx)("span",{children:"00"})})]}),(0,r.jsxs)("div",{className:" flex flex-row items-center",children:[(0,r.jsx)("h3",{className:"text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32",children:"UI Designer"}),(0,r.jsxs)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:[(0,r.jsxs)("a",{href:"#",className:"flex justify-between items-center",onClick:()=>P(i),children:[(0,r.jsx)("span",{className:" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300",children:"Add UI Designer"}),(0,r.jsx)(t.faE,{className:" text-gray-300 text-sm"})]}),(0,r.jsx)(a.Z,{open:l,onCancel:D,footer:null,closable:!1,width:1e3,children:(0,r.jsx)(u,{onSubmit:D})})]}),(0,r.jsx)("div",{className:" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5",children:(0,r.jsx)("span",{children:"00"})})]}),(0,r.jsxs)("div",{className:" flex flex-row items-center",children:[(0,r.jsx)("h3",{className:"text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32",children:"UI Developer"}),(0,r.jsxs)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:[(0,r.jsxs)("a",{href:"#",className:"flex justify-between items-center",onClick:()=>P(b),children:[(0,r.jsx)("span",{className:" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300",children:"Add UI Developer"}),(0,r.jsx)(t.faE,{className:" text-gray-300 text-sm"})]}),(0,r.jsx)(a.Z,{open:g,onCancel:D,footer:null,closable:!1,width:1e3,children:(0,r.jsx)(h,{onSubmit:D})})]}),(0,r.jsx)("div",{className:" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5",children:(0,r.jsx)("span",{children:"00"})})]}),(0,r.jsxs)("div",{className:" flex flex-row items-center",children:[(0,r.jsx)("h3",{className:"text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32",children:"API Developer"}),(0,r.jsxs)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:[(0,r.jsxs)("a",{href:"#",className:"flex justify-between items-center",onClick:()=>P(N),children:[(0,r.jsx)("span",{className:" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300",children:"Add API Developer"}),(0,r.jsx)(t.faE,{className:" text-gray-300 text-sm"})]}),(0,r.jsx)(a.Z,{open:p,onCancel:D,footer:null,closable:!1,width:1e3,children:(0,r.jsx)(o,{onSubmit:D})})]}),(0,r.jsx)("div",{className:" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5",children:(0,r.jsx)("span",{children:"00"})})]}),(0,r.jsxs)("div",{className:" flex flex-row items-center",children:[(0,r.jsx)("h3",{className:"text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32",children:"Tester"}),(0,r.jsxs)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:[(0,r.jsxs)("a",{href:"#",className:"flex justify-between items-center",onClick:()=>P(y),children:[(0,r.jsx)("span",{className:" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300",children:"Add Tester"}),(0,r.jsx)(t.faE,{className:" text-gray-300 text-sm"})]}),(0,r.jsx)(a.Z,{open:v,onCancel:D,footer:null,closable:!1,width:1e3,children:(0,r.jsx)(m,{onSubmit:D})})]}),(0,r.jsx)("div",{className:" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5",children:(0,r.jsx)("span",{children:"00"})})]}),(0,r.jsxs)("div",{className:" flex flex-row items-center",children:[(0,r.jsx)("h3",{className:"text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32",children:"UX Researcher"}),(0,r.jsxs)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:[(0,r.jsxs)("a",{href:"#",className:"flex justify-between items-center",onClick:()=>P(_),children:[" ",(0,r.jsx)("span",{className:" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300",children:"Add UX Researcher"}),(0,r.jsx)(t.faE,{className:" text-gray-300 text-sm"})]}),(0,r.jsx)(a.Z,{open:w,onCancel:D,footer:null,closable:!1,width:1e3,children:(0,r.jsx)(f,{onSubmit:D})})]}),(0,r.jsx)("div",{className:" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5",children:(0,r.jsx)("span",{children:"00"})})]}),(0,r.jsxs)("div",{className:" flex flex-row mb-5 items-center",children:[(0,r.jsx)("h3",{className:"text-black font-segoe-ui text-base font-normal leading-6 mr-5 w-32",children:"CI/CD"}),(0,r.jsxs)("div",{className:"input px-6 py-5 mr-4 bg-neutral-1 shadow-md w-[402px] ",children:[(0,r.jsxs)("a",{href:"#",className:"flex justify-between items-center",onClick:()=>P(k),children:[(0,r.jsx)("span",{className:" text-neutral-5 font-segoe-ui text-base italic font-semibold leading-6 text-gray-300",children:"Add CI/CD"}),(0,r.jsx)(t.faE,{className:" text-gray-300 text-sm"})]}),(0,r.jsx)(a.Z,{open:S,onCancel:D,footer:null,closable:!1,width:1e3,children:(0,r.jsx)(x,{onSubmit:D})})]}),(0,r.jsx)("div",{className:" text-gray-300 rounded-5 border border-solid border-neutral-5 bg-neutral-1 shadow-md px-6 py-5",children:(0,r.jsx)("span",{children:"00"})})]})]})}),(0,r.jsx)("div",{className:"btn relative bg-white mb-10",children:(0,r.jsx)("button",{className:" absolute right-0 top-0   py-1  px-4 bg-blue-500 text-white bg-primary-6",onClick:()=>{console.log(C.resourcePool),console.log("post Data"),console.log(Z),console.log(JSON.stringify(Z)),fetch("https://jp2malu3r8.execute-api.us-east-1.amazonaws.com/dev/project/".concat(C.projectId,"/team"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Z)}).then(e=>{if(!e.ok)throw Error("HTTP error! Status: ".concat(e.status));return e.json()}).then(e=>{console.log(e)}).catch(e=>{console.error("Error sending schema to API:",e)}),E.push("/main/projects/addResource")},children:"Next"})})]})})}l(35043)}}]);