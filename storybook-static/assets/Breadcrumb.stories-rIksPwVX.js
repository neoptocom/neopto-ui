import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as B}from"./index-GiUgBvb1.js";import{I as c}from"./Icon-DucDLcRo.js";import{T as f}from"./Typo-B4y6jpMu.js";const l=({items:s,showHomeIcon:n=!1,className:p=""})=>!s||s.length===0?null:a.jsx("nav",{"aria-label":"Breadcrumb",className:p,children:a.jsx("ol",{className:"flex items-center flex-wrap",children:s.map((e,o)=>{const r=o===s.length-1,h=o===0;return a.jsxs("li",{className:"flex items-center",children:[e.href&&!r?a.jsxs("a",{href:e.href,onClick:t=>{e.onClick&&(t.preventDefault(),e.onClick())},className:"group flex items-center gap-1 cursor-pointer text-[var(--muted-fg)]",children:[h&&n&&a.jsx(c,{name:"home",size:"sm"}),e.icon&&!n&&a.jsx(c,{name:e.icon,size:"sm"}),a.jsx(f,{variant:"label-md",bold:"semibold",className:"group-hover:underline",children:e.label})]}):a.jsxs("span",{className:`group flex items-center gap-1 ${r?"text-[var(--info)]":"text-[var(--muted-fg)]"} ${e.onClick&&!r?"cursor-pointer":""}`,onClick:e.onClick,role:e.onClick&&!r?"button":void 0,tabIndex:e.onClick&&!r?0:void 0,onKeyDown:e.onClick&&!r?t=>{var b;(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),(b=e.onClick)==null||b.call(e))}:void 0,"aria-current":r?"page":void 0,children:[h&&n&&a.jsx(c,{name:"home",size:"sm"}),e.icon&&!n&&a.jsx(c,{name:e.icon,size:"sm"}),a.jsx(f,{variant:"label-md",bold:r?"bold":"semibold",className:e.onClick&&!r?"group-hover:underline":"",children:e.label})]}),!r&&a.jsx("span",{className:"text-[var(--muted-fg)]",children:a.jsx(c,{name:"chevron_right",size:"md"})})]},o)})})});l.__docgenInfo={description:`Breadcrumb navigation component

@example
\`\`\`tsx
<Breadcrumb 
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Category" }
  ]}
/>
\`\`\``,methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Array of breadcrumb items"},showHomeIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show home icon on first item",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};try{l.displayName="Breadcrumb",l.__docgenInfo={description:"Breadcrumb navigation component",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"Array of breadcrumb items",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},showHomeIcon:{defaultValue:{value:!1},description:"Whether to show home icon on first item",name:"showHomeIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}const W={title:"Components/Breadcrumb",component:l,tags:["autodocs"],parameters:{layout:"centered"},args:{items:[{label:"Home",href:"/"},{label:"Library",href:"/library"},{label:"Data"}]}},i={},d={args:{items:[{label:"Dashboard",href:"/",icon:"dashboard"},{label:"Projects",href:"/projects",icon:"folder"},{label:"Neptune Launch",icon:"rocket_launch"}]}},m={args:{showHomeIcon:!0}},u={render:s=>{const n=[{label:"Getting Started",href:"/docs/getting-started"},{label:"Guides",href:"/docs/guides"},{label:"Auth",icon:"lock"}],[p,e]=B.useState(n[n.length-1]);return a.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-3xl",children:[a.jsx(l,{...s,items:[{label:"Docs",href:"/docs",icon:"menu_book"},...n.map((o,r)=>({...o,onClick:()=>e(o),href:r===n.length-1?void 0:o.href}))]}),a.jsxs("section",{className:"rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-2",children:[a.jsx("h2",{className:"text-xl font-semibold",children:p.label}),a.jsx("p",{className:"text-sm text-[var(--muted-fg)]",children:"Showcase how breadcrumbs can drive in-app navigation without reloading the page by combining click handlers with your own state management."})]})]})}};var g,x,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,N,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "/",
      icon: "dashboard"
    }, {
      label: "Projects",
      href: "/projects",
      icon: "folder"
    }, {
      label: "Neptune Launch",
      icon: "rocket_launch"
    }]
  }
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var k,w,S;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    showHomeIcon: true
  }
}`,...(S=(w=m.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var C,I,_;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const sections: BreadcrumbItem[] = [{
      label: "Getting Started",
      href: "/docs/getting-started"
    }, {
      label: "Guides",
      href: "/docs/guides"
    }, {
      label: "Auth",
      icon: "lock"
    }];
    const [activeSection, setActiveSection] = useState(sections[sections.length - 1]);
    return <div className="flex flex-col gap-6 w-full max-w-3xl">
        <Breadcrumb {...args} items={[{
        label: "Docs",
        href: "/docs",
        icon: "menu_book"
      }, ...sections.map((section, index) => ({
        ...section,
        onClick: () => setActiveSection(section),
        href: index === sections.length - 1 ? undefined : section.href
      }))]} />

        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-2">
          <h2 className="text-xl font-semibold">{activeSection.label}</h2>
          <p className="text-sm text-[var(--muted-fg)]">
            Showcase how breadcrumbs can drive in-app navigation without reloading the page by
            combining click handlers with your own state management.
          </p>
        </section>
      </div>;
  }
}`,...(_=(I=u.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const z=["Playground","WithIcons","WithHomeIcon","InteractiveNavigation"];export{u as InteractiveNavigation,i as Playground,m as WithHomeIcon,d as WithIcons,z as __namedExportsOrder,W as default};
