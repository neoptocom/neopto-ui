import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as b}from"./index-GiUgBvb1.js";const r=b.forwardRef(({className:f,disabled:o,...h},y)=>e.jsx("input",{ref:y,disabled:o,className:["w-full h-12 px-4 rounded-full border bg-transparent outline-none transition-colors","text-sm placeholder:text-[var(--muted-fg)]",o?"border-[#3F424F] text-[#3F424F] cursor-not-allowed":["text-[var(--muted-fg)]","border-[var(--muted-fg)]","hover:border-[var(--border)]","focus:border-[var(--color-brand)] focus:text-[var(--fg)]"].join(" "),f].join(" "),...h}));r.displayName="Input";r.__docgenInfo={description:"",methods:[],displayName:"Input"};const v={title:"Components/Input",component:r},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(r,{placeholder:"Enter your email",type:"email"}),e.jsx(r,{placeholder:"Enter your password",type:"password"}),e.jsx(r,{placeholder:"Search..."})]})},s={render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-96",children:e.jsx(r,{placeholder:"Disabled input",disabled:!0})})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(r,{placeholder:"Text input",type:"text"}),e.jsx(r,{placeholder:"Email input",type:"email"}),e.jsx(r,{placeholder:"Password input",type:"password"}),e.jsx(r,{placeholder:"Number input",type:"number"})]})};var l,p,n;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Enter your email" type="email" />
      <Input placeholder="Enter your password" type="password" />
      <Input placeholder="Search..." />
    </div>
}`,...(n=(p=a.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var d,c,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Disabled input" disabled />
    </div>
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var i,m,x;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Text input" type="text" />
      <Input placeholder="Email input" type="email" />
      <Input placeholder="Password input" type="password" />
      <Input placeholder="Number input" type="number" />
    </div>
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const g=["Default","Disabled","Types"];export{a as Default,s as Disabled,t as Types,g as __namedExportsOrder,v as default};
