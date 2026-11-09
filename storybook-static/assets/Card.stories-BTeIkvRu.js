import{j as a}from"./jsx-runtime-CDt2p4po.js";import{B as i}from"./Button-CmAIs20C.js";import{T as r}from"./Typo-yLceAaNy.js";import{C as e}from"./Card-OLTowr5v.js";import"./index-GiUgBvb1.js";const E={title:"Components/Card",component:e,tags:["autodocs"],parameters:{layout:"padded"}},s={render:w=>a.jsx("div",{className:"max-w-md",children:a.jsxs(e,{...w,children:[a.jsx(r,{variant:"headline-sm",bold:"semibold",children:"Glassmorphic card"}),a.jsx(r,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Cards wrap related content with elevated styling and optional backgrounds."})]})}),args:{children:void 0}},t={render:()=>a.jsx("div",{className:"max-w-md",children:a.jsxs(e,{showDecorations:!0,children:[a.jsx(r,{variant:"headline-sm",bold:"semibold",children:"Decorative frame"}),a.jsx(r,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Enable gradient borders for hero cards or marketing content."})]})})},d={render:()=>a.jsx("div",{className:"max-w-lg",children:a.jsxs(e,{variant:"app-background",className:"p-8",children:[a.jsx(r,{variant:"headline-sm",bold:"semibold",children:"App background variant"}),a.jsx(r,{variant:"body-sm",className:"mt-3 text-[var(--muted-fg)]",children:"Uses the same artwork as the `AppBackground` component and adapts to theme changes."}),a.jsxs("div",{className:"mt-6 flex gap-3",children:[a.jsx(i,{variant:"primary",children:"Get started"}),a.jsx(i,{variant:"secondary",children:"Learn more"})]})]})})},n={render:()=>a.jsxs("div",{className:"grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2",children:[a.jsxs(e,{children:[a.jsx(r,{variant:"title-md",bold:"semibold",children:"Default"}),a.jsx(r,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Soft glassmorphism without drop shadow."})]}),a.jsxs(e,{elevated:!0,children:[a.jsx(r,{variant:"title-md",bold:"semibold",children:"Elevated"}),a.jsx(r,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Adds `var(--shadow-elevated)` for emphasis and layering."})]})]})},o={render:()=>a.jsxs("div",{className:"grid max-w-4xl gap-6 md:grid-cols-3",children:[a.jsxs(e,{children:[a.jsx(r,{variant:"title-md",bold:"semibold",children:"Daily active users"}),a.jsx(r,{variant:"display-sm",bold:"bold",className:"mt-4",children:"1,248"}),a.jsx(r,{variant:"body-sm",className:"mt-2 text-[var(--success)]",children:"+12% vs last week"})]}),a.jsxs(e,{elevated:!0,children:[a.jsx(r,{variant:"title-md",bold:"semibold",children:"New signups"}),a.jsx(r,{variant:"display-sm",bold:"bold",className:"mt-4",children:"327"}),a.jsx(r,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Compared to rolling average"})]}),a.jsxs(e,{showDecorations:!0,children:[a.jsx(r,{variant:"title-md",bold:"semibold",children:"Retention cohort"}),a.jsx(r,{variant:"body-sm",className:"mt-3 text-[var(--muted-fg)]",children:"Combine props to create data-heavy layouts with visual hierarchy."})]})]})};var m,l,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="max-w-md">\r
      <Card {...args}>\r
        <Typo variant="headline-sm" bold="semibold">\r
          Glassmorphic card\r
        </Typo>\r
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">\r
          Cards wrap related content with elevated styling and optional backgrounds.\r
        </Typo>\r
      </Card>\r
    </div>,
  args: {
    children: undefined
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,v,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">\r
      <Card showDecorations>\r
        <Typo variant="headline-sm" bold="semibold">\r
          Decorative frame\r
        </Typo>\r
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">\r
          Enable gradient borders for hero cards or marketing content.\r
        </Typo>\r
      </Card>\r
    </div>
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,g,u;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg">\r
      <Card variant="app-background" className="p-8">\r
        <Typo variant="headline-sm" bold="semibold">\r
          App background variant\r
        </Typo>\r
        <Typo variant="body-sm" className="mt-3 text-[var(--muted-fg)]">\r
          Uses the same artwork as the \`AppBackground\` component and adapts to theme changes.\r
        </Typo>\r
        <div className="mt-6 flex gap-3">\r
          <Button variant="primary">Get started</Button>\r
          <Button variant="secondary">Learn more</Button>\r
        </div>\r
      </Card>\r
    </div>
}`,...(u=(g=d.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,x,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">\r
      <Card>\r
        <Typo variant="title-md" bold="semibold">\r
          Default\r
        </Typo>\r
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">\r
          Soft glassmorphism without drop shadow.\r
        </Typo>\r
      </Card>\r
      <Card elevated>\r
        <Typo variant="title-md" bold="semibold">\r
          Elevated\r
        </Typo>\r
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">\r
          Adds \`var(--shadow-elevated)\` for emphasis and layering.\r
        </Typo>\r
      </Card>\r
    </div>
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var j,N,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-4xl gap-6 md:grid-cols-3">\r
      <Card>\r
        <Typo variant="title-md" bold="semibold">\r
          Daily active users\r
        </Typo>\r
        <Typo variant="display-sm" bold="bold" className="mt-4">\r
          1,248\r
        </Typo>\r
        <Typo variant="body-sm" className="mt-2 text-[var(--success)]">\r
          +12% vs last week\r
        </Typo>\r
      </Card>\r
      <Card elevated>\r
        <Typo variant="title-md" bold="semibold">\r
          New signups\r
        </Typo>\r
        <Typo variant="display-sm" bold="bold" className="mt-4">\r
          327\r
        </Typo>\r
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">\r
          Compared to rolling average\r
        </Typo>\r
      </Card>\r
      <Card showDecorations>\r
        <Typo variant="title-md" bold="semibold">\r
          Retention cohort\r
        </Typo>\r
        <Typo variant="body-sm" className="mt-3 text-[var(--muted-fg)]">\r
          Combine props to create data-heavy layouts with visual hierarchy.\r
        </Typo>\r
      </Card>\r
    </div>
}`,...(f=(N=o.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};const S=["Playground","WithDecorations","AppBackground","ElevatedComparison","DashboardLayout"];export{d as AppBackground,o as DashboardLayout,n as ElevatedComparison,s as Playground,t as WithDecorations,S as __namedExportsOrder,E as default};
