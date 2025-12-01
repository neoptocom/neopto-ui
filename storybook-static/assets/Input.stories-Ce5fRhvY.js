import{j as e}from"./jsx-runtime-CDt2p4po.js";import{I as r}from"./Input-CVElIIlf.js";import"./index-GiUgBvb1.js";import"./Icon-DucDLcRo.js";const R={title:"Components/Input",component:r},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(r,{placeholder:"Enter your email",type:"email"}),e.jsx(r,{placeholder:"Enter your password",type:"password"}),e.jsx(r,{placeholder:"Search..."})]})},l={render:()=>e.jsx("div",{className:"flex flex-col gap-4 w-96",children:e.jsx(r,{placeholder:"Disabled input",disabled:!0})})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(r,{placeholder:"Text input",type:"text"}),e.jsx(r,{placeholder:"Email input",type:"email"}),e.jsx(r,{placeholder:"Password input",type:"password"}),e.jsx(r,{placeholder:"Number input",type:"number"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(r,{variant:"inline",placeholder:"Inline input",type:"text"}),e.jsx(r,{variant:"inline",placeholder:"Inline email",type:"email"}),e.jsx(r,{variant:"inline",placeholder:"Inline search..."}),e.jsx(r,{variant:"inline",placeholder:"Disabled inline",disabled:!0})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(r,{label:"Project name",placeholder:"Neo PTO"}),e.jsx(r,{label:"Email",type:"email",placeholder:"you@example.com"}),e.jsx(r,{label:"Password",type:"password",placeholder:"••••••••"}),e.jsx(r,{label:"Disabled field",placeholder:"Not editable",disabled:!0})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(r,{error:!0,placeholder:"Unlabeled error"}),e.jsx(r,{label:"Email",type:"email",placeholder:"you@example.com",error:!0}),e.jsx(r,{label:"Password",type:"password",placeholder:"This is required",error:!0})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[e.jsx(r,{variant:"inline",icon:"search",placeholder:"Search..."}),e.jsx(r,{icon:"email",type:"email",placeholder:"Email"}),e.jsx(r,{label:"Username",icon:"person",placeholder:"johndoe"}),e.jsx(r,{label:"Password",icon:"lock",type:"password",placeholder:"Required field",error:!0})]})};var d,c,t;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Enter your email" type="email" />
      <Input placeholder="Enter your password" type="password" />
      <Input placeholder="Search..." />
    </div>
}`,...(t=(c=a.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};var m,u,x;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Disabled input" disabled />
    </div>
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,b,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input placeholder="Text input" type="text" />
      <Input placeholder="Email input" type="email" />
      <Input placeholder="Password input" type="password" />
      <Input placeholder="Number input" type="number" />
    </div>
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,j,I;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input variant="inline" placeholder="Inline input" type="text" />
      <Input variant="inline" placeholder="Inline email" type="email" />
      <Input variant="inline" placeholder="Inline search..." />
      <Input variant="inline" placeholder="Disabled inline" disabled />
    </div>
}`,...(I=(j=n.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var w,v,g;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input label="Project name" placeholder="Neo PTO" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="••••••••" />
      <Input label="Disabled field" placeholder="Not editable" disabled />
    </div>
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var N,E,P;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input error placeholder="Unlabeled error" />
      <Input label="Email" type="email" placeholder="you@example.com" error />
      <Input label="Password" type="password" placeholder="This is required" error />
    </div>
}`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var S,D,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-96">
      <Input variant="inline" icon="search" placeholder="Search..." />
      <Input icon="email" type="email" placeholder="Email" />
      <Input label="Username" icon="person" placeholder="johndoe" />
      <Input label="Password" icon="lock" type="password" placeholder="Required field" error />
    </div>
}`,...(T=(D=i.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const k=["Default","Disabled","Types","Inline","WithLabel","Error","WithIcon"];export{a as Default,l as Disabled,p as Error,n as Inline,s as Types,i as WithIcon,o as WithLabel,k as __namedExportsOrder,R as default};
