import{j as a}from"./jsx-runtime-CDt2p4po.js";import{B as i}from"./Button-Bnf3fkrR.js";import{T as e}from"./Typo-B4y6jpMu.js";import{C as r}from"./Card-eYBJXArD.js";import"./index-GiUgBvb1.js";const E={title:"Components/Card",component:r,tags:["autodocs"],parameters:{layout:"padded"}},s={render:w=>a.jsx("div",{className:"max-w-md",children:a.jsxs(r,{...w,children:[a.jsx(e,{variant:"headline-sm",bold:"semibold",children:"Glassmorphic card"}),a.jsx(e,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Cards wrap related content with elevated styling and optional backgrounds."})]})}),args:{children:void 0}},t={render:()=>a.jsx("div",{className:"max-w-md",children:a.jsxs(r,{showDecorations:!0,children:[a.jsx(e,{variant:"headline-sm",bold:"semibold",children:"Decorative frame"}),a.jsx(e,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Enable gradient borders for hero cards or marketing content."})]})})},d={render:()=>a.jsx("div",{className:"max-w-lg",children:a.jsxs(r,{variant:"app-background",className:"p-8",children:[a.jsx(e,{variant:"headline-sm",bold:"semibold",children:"App background variant"}),a.jsx(e,{variant:"body-sm",className:"mt-3 text-[var(--muted-fg)]",children:"Uses the same artwork as the `AppBackground` component and adapts to theme changes."}),a.jsxs("div",{className:"mt-6 flex gap-3",children:[a.jsx(i,{variant:"primary",children:"Get started"}),a.jsx(i,{variant:"secondary",children:"Learn more"})]})]})})},n={render:()=>a.jsxs("div",{className:"grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2",children:[a.jsxs(r,{children:[a.jsx(e,{variant:"title-md",bold:"semibold",children:"Default"}),a.jsx(e,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Soft glassmorphism without drop shadow."})]}),a.jsxs(r,{elevated:!0,children:[a.jsx(e,{variant:"title-md",bold:"semibold",children:"Elevated"}),a.jsx(e,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Adds `var(--shadow-elevated)` for emphasis and layering."})]})]})},o={render:()=>a.jsxs("div",{className:"grid max-w-4xl gap-6 md:grid-cols-3",children:[a.jsxs(r,{children:[a.jsx(e,{variant:"title-md",bold:"semibold",children:"Daily active users"}),a.jsx(e,{variant:"display-sm",bold:"bold",className:"mt-4",children:"1,248"}),a.jsx(e,{variant:"body-sm",className:"mt-2 text-[var(--success)]",children:"+12% vs last week"})]}),a.jsxs(r,{elevated:!0,children:[a.jsx(e,{variant:"title-md",bold:"semibold",children:"New signups"}),a.jsx(e,{variant:"display-sm",bold:"bold",className:"mt-4",children:"327"}),a.jsx(e,{variant:"body-sm",className:"mt-2 text-[var(--muted-fg)]",children:"Compared to rolling average"})]}),a.jsxs(r,{showDecorations:!0,children:[a.jsx(e,{variant:"title-md",bold:"semibold",children:"Retention cohort"}),a.jsx(e,{variant:"body-sm",className:"mt-3 text-[var(--muted-fg)]",children:"Combine props to create data-heavy layouts with visual hierarchy."})]})]})};var m,l,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="max-w-md">
      <Card {...args}>
        <Typo variant="headline-sm" bold="semibold">
          Glassmorphic card
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Cards wrap related content with elevated styling and optional backgrounds.
        </Typo>
      </Card>
    </div>,
  args: {
    children: undefined
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,v,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
      <Card showDecorations>
        <Typo variant="headline-sm" bold="semibold">
          Decorative frame
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Enable gradient borders for hero cards or marketing content.
        </Typo>
      </Card>
    </div>
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,g,u;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg">
      <Card variant="app-background" className="p-8">
        <Typo variant="headline-sm" bold="semibold">
          App background variant
        </Typo>
        <Typo variant="body-sm" className="mt-3 text-[var(--muted-fg)]">
          Uses the same artwork as the \`AppBackground\` component and adapts to theme changes.
        </Typo>
        <div className="mt-6 flex gap-3">
          <Button variant="primary">Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </Card>
    </div>
}`,...(u=(g=d.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var b,x,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <Typo variant="title-md" bold="semibold">
          Default
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Soft glassmorphism without drop shadow.
        </Typo>
      </Card>
      <Card elevated>
        <Typo variant="title-md" bold="semibold">
          Elevated
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Adds \`var(--shadow-elevated)\` for emphasis and layering.
        </Typo>
      </Card>
    </div>
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var j,N,f;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="grid max-w-4xl gap-6 md:grid-cols-3">
      <Card>
        <Typo variant="title-md" bold="semibold">
          Daily active users
        </Typo>
        <Typo variant="display-sm" bold="bold" className="mt-4">
          1,248
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--success)]">
          +12% vs last week
        </Typo>
      </Card>
      <Card elevated>
        <Typo variant="title-md" bold="semibold">
          New signups
        </Typo>
        <Typo variant="display-sm" bold="bold" className="mt-4">
          327
        </Typo>
        <Typo variant="body-sm" className="mt-2 text-[var(--muted-fg)]">
          Compared to rolling average
        </Typo>
      </Card>
      <Card showDecorations>
        <Typo variant="title-md" bold="semibold">
          Retention cohort
        </Typo>
        <Typo variant="body-sm" className="mt-3 text-[var(--muted-fg)]">
          Combine props to create data-heavy layouts with visual hierarchy.
        </Typo>
      </Card>
    </div>
}`,...(f=(N=o.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};const S=["Playground","WithDecorations","AppBackground","ElevatedComparison","DashboardLayout"];export{d as AppBackground,o as DashboardLayout,n as ElevatedComparison,s as Playground,t as WithDecorations,S as __namedExportsOrder,E as default};
