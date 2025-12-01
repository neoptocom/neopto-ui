import{j as n}from"./jsx-runtime-CDt2p4po.js";import{I as l}from"./Icon-DucDLcRo.js";import{T as r}from"./Typo-B4y6jpMu.js";import{B as e}from"./Button-Bnf3fkrR.js";import"./index-GiUgBvb1.js";const N={title:"Components/Button",component:e,tags:["autodocs"],args:{children:"Primary action",variant:"primary",size:"md",disabled:!1},argTypes:{variant:{control:"inline-radio",options:["primary","secondary","ghost"]},size:{control:"inline-radio",options:["sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},a={},s={render:()=>n.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[n.jsx(e,{variant:"primary",children:n.jsx(r,{variant:"title-sm",bold:"semibold",children:"Primary"})}),n.jsx(e,{variant:"secondary",children:n.jsx(r,{variant:"title-sm",bold:"semibold",children:"Secondary"})}),n.jsx(e,{variant:"ghost",children:n.jsx(r,{variant:"title-sm",bold:"semibold",children:"Ghost"})})]})},t={render:()=>n.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[n.jsx(e,{size:"sm",children:n.jsx(r,{variant:"title-sm",bold:"semibold",children:"Small"})}),n.jsx(e,{size:"md",children:n.jsx(r,{variant:"title-sm",bold:"semibold",children:"Medium"})}),n.jsx(e,{size:"lg",children:n.jsx(r,{variant:"title-sm",bold:"semibold",children:"Large"})})]})},o={render:()=>n.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[n.jsxs(e,{children:[n.jsx(l,{name:"add"}),n.jsx("span",{children:"Add Item"})]}),n.jsxs(e,{variant:"secondary",children:[n.jsx(l,{name:"download"}),n.jsx("span",{children:"Download"})]}),n.jsxs(e,{variant:"ghost",children:[n.jsx(l,{name:"settings"}),n.jsx("span",{children:"Settings"})]})]})},i={args:{fullWidth:!0,size:"lg",children:"Start free trial"}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,u,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">
        <Typo variant="title-sm" bold="semibold">
          Primary
        </Typo>
      </Button>
      <Button variant="secondary">
        <Typo variant="title-sm" bold="semibold">
          Secondary
        </Typo>
      </Button>
      <Button variant="ghost">
        <Typo variant="title-sm" bold="semibold">
          Ghost
        </Typo>
      </Button>
    </div>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,g,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">
        <Typo variant="title-sm" bold="semibold">
          Small
        </Typo>
      </Button>
      <Button size="md">
        <Typo variant="title-sm" bold="semibold">
          Medium
        </Typo>
      </Button>
      <Button size="lg">
        <Typo variant="title-sm" bold="semibold">
          Large
        </Typo>
      </Button>
    </div>
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,b,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button>
        <Icon name="add" />
        <span>Add Item</span>
      </Button>
      <Button variant="secondary">
        <Icon name="download" />
        <span>Download</span>
      </Button>
      <Button variant="ghost">
        <Icon name="settings" />
        <span>Settings</span>
      </Button>
    </div>
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var f,B,T;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    size: "lg",
    children: "Start free trial"
  }
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const P=["Playground","Variants","Sizes","WithIcons","FullWidthCallToAction"];export{i as FullWidthCallToAction,a as Playground,t as Sizes,s as Variants,o as WithIcons,P as __namedExportsOrder,N as default};
