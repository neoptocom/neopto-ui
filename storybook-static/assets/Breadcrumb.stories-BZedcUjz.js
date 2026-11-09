import{j as r}from"./jsx-runtime-CDt2p4po.js";import{r as C}from"./index-GiUgBvb1.js";import{I as B}from"./Icon-DucDLcRo.js";import{T as b}from"./Typo-yLceAaNy.js";import{c as h}from"./createLucideIcon-0yUzSTD4.js";const c=({items:n,showHomeIcon:s=!1,className:u=""})=>!n||n.length===0?null:r.jsx("nav",{"aria-label":"Breadcrumb",className:u,children:r.jsx("ol",{className:"flex items-center flex-wrap",children:n.map((e,o)=>{const a=o===n.length-1;return r.jsxs("li",{className:"flex items-center",children:[e.href&&!a?r.jsxs("a",{href:e.href,onClick:t=>{e.onClick&&(t.preventDefault(),e.onClick())},className:"group flex items-center gap-1 cursor-pointer text-[var(--muted-fg)]",children:[e.icon&&e.icon,r.jsx(b,{variant:"label-md",bold:"semibold",className:"group-hover:underline",children:e.label})]}):r.jsxs("span",{className:`group flex items-center gap-1 ${a?"text-[var(--info)]":"text-[var(--muted-fg)]"} ${e.onClick&&!a?"cursor-pointer":""}`,onClick:e.onClick,role:e.onClick&&!a?"button":void 0,tabIndex:e.onClick&&!a?0:void 0,onKeyDown:e.onClick&&!a?t=>{var p;(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),(p=e.onClick)==null||p.call(e))}:void 0,"aria-current":a?"page":void 0,children:[e.icon&&e.icon,r.jsx(b,{variant:"label-md",bold:a?"bold":"semibold",className:e.onClick&&!a?"group-hover:underline":"",children:e.label})]}),!a&&r.jsx("span",{className:"text-[var(--muted-fg)]",children:r.jsx(B,{name:"chevron_right",size:"md"})})]},o)})})});c.__docgenInfo={description:`Breadcrumb navigation component\r
\r
@example\r
\`\`\`tsx\r
<Breadcrumb \r
  items={[\r
    { label: "Home", href: "/" },\r
    { label: "Products", href: "/products" },\r
    { label: "Category" }\r
  ]}\r
/>\r
\`\`\``,methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Array of breadcrumb items"},showHomeIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show home icon on first item",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};try{c.displayName="Breadcrumb",c.__docgenInfo={description:"Breadcrumb navigation component",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"Array of breadcrumb items",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}},showHomeIcon:{defaultValue:{value:!1},description:"Whether to show home icon on first item",name:"showHomeIcon",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],H=h("files",z);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],D=h("layout-dashboard",A);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],L=h("rocket",q),E={title:"Components/Breadcrumb",component:c,tags:["autodocs"],parameters:{layout:"centered"},args:{items:[{label:"Home",href:"/"},{label:"Library",href:"/library"},{label:"Data"}]}},i={},l={args:{items:[{label:"Dashboard",href:"/",icon:r.jsx(D,{size:12})},{label:"Projects",href:"/projects",icon:r.jsx(H,{size:12})},{label:"Neptune Launch",icon:r.jsx(L,{size:12})}]}},d={args:{showHomeIcon:!0}},m={render:n=>{const s=[{label:"Getting Started",href:"/docs/getting-started"},{label:"Guides",href:"/docs/guides"}],[u,e]=C.useState(s[s.length-1]);return r.jsxs("div",{className:"flex flex-col gap-6 w-full max-w-3xl",children:[r.jsx(c,{...n,items:[{label:"Docs",href:"/docs",icon:"menu_book"},...s.map((o,a)=>({...o,onClick:()=>e(o),href:a===s.length-1?void 0:o.href}))]}),r.jsxs("section",{className:"rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-2",children:[r.jsx("h2",{className:"text-xl font-semibold",children:u.label}),r.jsx("p",{className:"text-sm text-[var(--muted-fg)]",children:"Showcase how breadcrumbs can drive in-app navigation without reloading the page by combining click handlers with your own state management."})]})]})}};var f,g,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,y,k;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Dashboard",
      href: "/",
      icon: <LayoutDashboard size={12} />
    }, {
      label: "Projects",
      href: "/projects",
      icon: <Files size={12} />
    }, {
      label: "Neptune Launch",
      icon: <Rocket size={12} />
    }]
  }
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var w,N,j;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    showHomeIcon: true
  }
}`,...(j=(N=d.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var I,_,S;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const sections: BreadcrumbItem[] = [{
      label: "Getting Started",
      href: "/docs/getting-started"
    }, {
      label: "Guides",
      href: "/docs/guides"
    }];
    const [activeSection, setActiveSection] = useState(sections[sections.length - 1]);
    return <div className="flex flex-col gap-6 w-full max-w-3xl">\r
        <Breadcrumb {...args} items={[{
        label: "Docs",
        href: "/docs",
        icon: "menu_book"
      }, ...sections.map((section, index) => ({
        ...section,
        onClick: () => setActiveSection(section),
        href: index === sections.length - 1 ? undefined : section.href
      }))]} />\r
\r
        <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 space-y-2">\r
          <h2 className="text-xl font-semibold">{activeSection.label}</h2>\r
          <p className="text-sm text-[var(--muted-fg)]">\r
            Showcase how breadcrumbs can drive in-app navigation without reloading the page by\r
            combining click handlers with your own state management.\r
          </p>\r
        </section>\r
      </div>;
  }
}`,...(S=(_=m.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const G=["Playground","WithIcons","WithHomeIcon","InteractiveNavigation"];export{m as InteractiveNavigation,i as Playground,d as WithHomeIcon,l as WithIcons,G as __namedExportsOrder,E as default};
