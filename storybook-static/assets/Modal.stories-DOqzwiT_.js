import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r}from"./index-GiUgBvb1.js";import{r as X}from"./index-CROobee-.js";import{C as Z}from"./Card-eYBJXArD.js";import{B as h}from"./Button-Bnf3fkrR.js";import{T as o}from"./Typo-B4y6jpMu.js";function j({open:a,children:n,onClose:t,zIndex:i=40,className:s=""}){const[u,d]=r.useState(!1),[l,f]=r.useState(!1);if(r.useEffect(()=>{if(a)d(!0),requestAnimationFrame(()=>{f(!0)});else{f(!1);const p=setTimeout(()=>{d(!1)},500);return()=>clearTimeout(p)}},[a]),!u)return null;const k=p=>{p.target===p.currentTarget&&t&&t()};return e.jsx("div",{className:`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${s}`,style:{backgroundColor:"rgba(0, 0, 0, 0.10)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",zIndex:i,opacity:l?1:0},onClick:k,role:"presentation",children:n})}j.__docgenInfo={description:"",methods:[],displayName:"BackgroundBlur",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the blur overlay is visible"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to render on top of the blur (e.g., modal, drawer)"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the backdrop is clicked"},zIndex:{required:!1,tsType:{name:"number"},description:"z-index for the overlay (default: 40)",defaultValue:{value:"40",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};try{j.displayName="BackgroundBlur",j.__docgenInfo={description:"",displayName:"BackgroundBlur",props:{open:{defaultValue:null,description:"Whether the blur overlay is visible",name:"open",required:!0,type:{name:"boolean"}},children:{defaultValue:null,description:"Content to render on top of the blur (e.g., modal, drawer)",name:"children",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"Callback when the backdrop is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},zIndex:{defaultValue:{value:40},description:"z-index for the overlay (default: 40)",name:"zIndex",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}function ee(a,n){(typeof window<"u"?r.useLayoutEffect:r.useEffect)(a,n)}function m({open:a,onClose:n,closeOnBackdrop:t=!0,children:i,className:s="",zIndex:u=50,showDecorations:d=!0}){const[l,f]=r.useState(!1),[k,p]=r.useState(!1);if(r.useEffect(()=>{const c=()=>{const Q=document.documentElement.classList.contains("dark")||document.body.classList.contains("dark")||document.querySelector(".dark")!==null;p(Q)};c();const y=new MutationObserver(c);return y.observe(document.documentElement,{attributes:!0,attributeFilter:["class"],subtree:!0}),()=>y.disconnect()},[]),ee(()=>{if(f(!0),!a)return;const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}},[a]),r.useEffect(()=>{if(!a)return;const c=y=>{y.key==="Escape"&&(n==null||n())};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[a,n]),!l)return null;const U=s==null?void 0:s.includes("max-w-"),Y=s==null?void 0:s.includes("max-h-"),K=`w-full ${U?"":"max-w-lg"} ${Y?"":"max-h-[80vh]"} ${s||""}`.trim(),P=e.jsx("div",{className:k?"dark":"",children:e.jsx(j,{open:a,onClose:t?n:void 0,zIndex:u,children:e.jsx(Z,{className:K,role:"dialog","aria-modal":"true",showDecorations:d,children:i})})}),J=document.body;return X.createPortal(P,J)}try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"Whether the modal is open",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when modal should close",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Modal content",name:"children",required:!1,type:{name:"ReactNode"}},closeOnBackdrop:{defaultValue:{value:!0},description:"When true, closes when the backdrop is clicked (default: true)",name:"closeOnBackdrop",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className for the Card",name:"className",required:!1,type:{name:"string"}},zIndex:{defaultValue:{value:50},description:"z-index for the modal (default: 50)",name:"zIndex",required:!1,type:{name:"number"}},showDecorations:{defaultValue:{value:!0},description:"Show decorative elements on the Card (default: true)",name:"showDecorations",required:!1,type:{name:"boolean"}}}}}catch{}const le={title:"Components/Modal",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"]};function w(a){const[n,t]=r.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(h,{onClick:()=>t(!0),children:"Open Modal"}),e.jsx(m,{open:n,onClose:()=>t(!1),...a,children:a.children})]})}const v={args:{open:!1},render:()=>e.jsxs(w,{children:[e.jsx(o,{variant:"headline-md",children:"Welcome!"}),e.jsx(o,{variant:"body-md",className:"mt-4",children:"This is a simple modal with custom content. Click outside or press ESC to close."})]})},g={args:{open:!1},render:()=>e.jsxs(w,{closeOnBackdrop:!1,children:[e.jsx(o,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Important Notice"}),e.jsx(o,{variant:"body-md",children:"This modal cannot be closed by clicking the backdrop."}),e.jsx(o,{variant:"body-md",className:"mt-4",children:"You must use the button below or press ESC to close."}),e.jsx("div",{className:"mt-6",children:e.jsx(h,{onClick:()=>{},children:"Acknowledge"})})]})},x={args:{open:!1},render:()=>e.jsxs(w,{className:"max-w-2xl p-12",children:[e.jsx(o,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Large Modal"}),e.jsx(o,{variant:"body-md",children:"This modal has custom styling with a larger max-width and more padding."}),e.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-[var(--muted)] [border-radius:1.875rem]",children:[e.jsx(o,{variant:"label-lg",bold:"semibold",children:"Feature 1"}),e.jsx(o,{variant:"body-sm",className:"mt-2",children:"Description here"})]}),e.jsxs("div",{className:"p-4 bg-[var(--muted)] [border-radius:1.875rem]",children:[e.jsx(o,{variant:"label-lg",bold:"semibold",children:"Feature 2"}),e.jsx(o,{variant:"body-sm",className:"mt-2",children:"Description here"})]})]})]})},C={args:{open:!1},render:()=>{const[a,n]=r.useState(!1),[t,i]=r.useState(""),[s,u]=r.useState(""),d=l=>{l.preventDefault(),alert(`Submitted: ${t}, ${s}`),n(!1)};return e.jsxs("div",{className:"p-8",children:[e.jsx(h,{onClick:()=>n(!0),children:"Open Form Modal"}),e.jsx(m,{open:a,onClose:()=>n(!1),children:e.jsxs("form",{onSubmit:d,children:[e.jsx(o,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Contact Form"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium",children:"Name"}),e.jsx("input",{type:"text",value:t,onChange:l=>i(l.target.value),className:"w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent",placeholder:"Enter your name",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",value:s,onChange:l=>u(l.target.value),className:"w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent",placeholder:"Enter your email",required:!0})]}),e.jsxs("div",{className:"flex gap-3 justify-end pt-4",children:[e.jsx("button",{type:"button",onClick:()=>n(!1),className:"px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors",children:"Cancel"}),e.jsx(h,{type:"submit",children:"Submit"})]})]})]})})]})}},N={args:{open:!1},render:()=>{const[a,n]=r.useState(!1),t=()=>{alert("Action confirmed!"),n(!1)};return e.jsxs("div",{className:"p-8",children:[e.jsx(h,{variant:"primary",onClick:()=>n(!0),children:"Delete Item"}),e.jsxs(m,{open:a,onClose:()=>n(!1),closeOnBackdrop:!1,children:[e.jsx(o,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Confirm Deletion"}),e.jsx(o,{variant:"body-md",children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"flex gap-3 justify-end mt-6",children:[e.jsx("button",{onClick:()=>n(!1),className:"px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors",children:"Cancel"}),e.jsx(h,{variant:"primary",onClick:t,children:"Delete"})]})]})]})}},b={args:{open:!1},render:()=>{const[a,n]=r.useState(!1),[t,i]=r.useState(!0),s=({children:u,...d})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>n(!0),className:"px-6 py-3 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition-opacity",type:"button",children:"Open Modal with Card Decorations"}),e.jsxs("label",{className:"flex items-center gap-2 mt-4",children:[e.jsx("input",{type:"checkbox",checked:t,onChange:l=>i(l.target.checked)}),e.jsx("span",{children:"Show Card Decorations"})]}),e.jsx(m,{open:a,onClose:()=>n(!1),showDecorations:t,...d})]});return e.jsxs(s,{children:[e.jsx(o,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Card with Decorative Elements"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{variant:"body-md",children:"The Card component now includes decorative SVG elements from your Figma design:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:e.jsxs(o,{variant:"body-sm",children:[e.jsx("strong",{children:"Ellipse gradients"})," - Subtle blue and white ellipses that add depth"]})}),e.jsx("li",{children:e.jsxs(o,{variant:"body-sm",children:[e.jsx("strong",{children:"Gradient borders"})," - Green gradient lines on all four sides"]})}),e.jsx("li",{children:e.jsxs(o,{variant:"body-sm",children:[e.jsx("strong",{children:"Toggle option"})," - Use the checkbox above to toggle decorations on/off"]})})]}),e.jsxs(o,{variant:"body-sm",className:"text-gray-500",children:["Note: The current Modal is using showDecorations=",t.toString()]})]})]})}};var T,S,D;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => <ModalDemo>
      <Typo variant="headline-md">Welcome!</Typo>
      <Typo variant="body-md" className="mt-4">
        This is a simple modal with custom content. Click outside or press ESC to close.
      </Typo>
    </ModalDemo>
}`,...(D=(S=v.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var M,E,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => <ModalDemo closeOnBackdrop={false}>
      <Typo variant="headline-md" bold="semibold" className="mb-4">Important Notice</Typo>
      <Typo variant="body-md">
        This modal cannot be closed by clicking the backdrop.
      </Typo>
      <Typo variant="body-md" className="mt-4">
        You must use the button below or press ESC to close.
      </Typo>
      <div className="mt-6">
        <Button onClick={() => {}}>Acknowledge</Button>
      </div>
    </ModalDemo>
}`,...(B=(E=g.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var O,q,_;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => <ModalDemo className="max-w-2xl p-12">
      <Typo variant="headline-md" bold="semibold" className="mb-4">Large Modal</Typo>
      <Typo variant="body-md">
        This modal has custom styling with a larger max-width and more padding.
      </Typo>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="p-4 bg-[var(--muted)] [border-radius:1.875rem]">
          <Typo variant="label-lg" bold="semibold">Feature 1</Typo>
          <Typo variant="body-sm" className="mt-2">Description here</Typo>
        </div>
        <div className="p-4 bg-[var(--muted)] [border-radius:1.875rem]">
          <Typo variant="label-lg" bold="semibold">Feature 2</Typo>
          <Typo variant="body-sm" className="mt-2">Description here</Typo>
        </div>
      </div>
    </ModalDemo>
}`,...(_=(q=x.parameters)==null?void 0:q.docs)==null?void 0:_.source}}};var F,V,I;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(\`Submitted: \${name}, \${email}\`);
      setOpen(false);
    };
    return <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmit}>
            <Typo variant="headline-md" bold="semibold" className="mb-4">Contact Form</Typo>
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent" placeholder="Enter your name" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent" placeholder="Enter your email" required />
              </div>
              <div className="flex gap-3 justify-end pt-4">
                <button type="button" onClick={() => setOpen(false)} className="px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors">
                  Cancel
                </button>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </form>
        </Modal>
      </div>;
  }
}`,...(I=(V=C.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var R,W,A;N.parameters={...N.parameters,docs:{...(R=N.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const handleConfirm = () => {
      alert("Action confirmed!");
      setOpen(false);
    };
    return <div className="p-8">
        <Button variant="primary" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Modal open={open} onClose={() => setOpen(false)} closeOnBackdrop={false}>
          <Typo variant="headline-md" bold="semibold" className="mb-4">Confirm Deletion</Typo>
          <Typo variant="body-md">
            Are you sure you want to delete this item? This action cannot be undone.
          </Typo>
          <div className="flex gap-3 justify-end mt-6">
            <button onClick={() => setOpen(false)} className="px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors">
              Cancel
            </button>
            <Button variant="primary" onClick={handleConfirm}>
              Delete
            </Button>
          </div>
        </Modal>
      </div>;
  }
}`,...(A=(W=N.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var z,L,$,G,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [showDecorations, setShowDecorations] = useState(true);
    const ModalDemo = ({
      children,
      ...props
    }: any) => <>
        <button onClick={() => setOpen(true)} className="px-6 py-3 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition-opacity" type="button">
          Open Modal with Card Decorations
        </button>
        <label className="flex items-center gap-2 mt-4">
          <input type="checkbox" checked={showDecorations} onChange={e => setShowDecorations(e.target.checked)} />
          <span>Show Card Decorations</span>
        </label>
        <Modal open={open} onClose={() => setOpen(false)} showDecorations={showDecorations} {...props} />
      </>;
    return <ModalDemo>
        <Typo variant="headline-md" bold="semibold" className="mb-4">Card with Decorative Elements</Typo>
        <div className="space-y-4">
          <Typo variant="body-md">
            The Card component now includes decorative SVG elements from your Figma design:
          </Typo>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Typo variant="body-sm">
                <strong>Ellipse gradients</strong> - Subtle blue and white ellipses that add depth
              </Typo>
            </li>
            <li>
              <Typo variant="body-sm">
                <strong>Gradient borders</strong> - Green gradient lines on all four sides
              </Typo>
            </li>
            <li>
              <Typo variant="body-sm">
                <strong>Toggle option</strong> - Use the checkbox above to toggle decorations on/off
              </Typo>
            </li>
          </ul>
          <Typo variant="body-sm" className="text-gray-500">
            Note: The current Modal is using showDecorations={showDecorations.toString()}
          </Typo>
        </div>
      </ModalDemo>;
  }
}`,...($=(L=b.parameters)==null?void 0:L.docs)==null?void 0:$.source},description:{story:"This story demonstrates the Card component's decorative elements.\nThe Card inside the Modal includes subtle ellipse gradients and border accents\nthat can be toggled on/off via the `showDecorations` prop.",...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};const de=["Default","NoBackdropClose","CustomStyling","FormModal","ConfirmationDialog","WithCardDecorations"];export{N as ConfirmationDialog,x as CustomStyling,v as Default,C as FormModal,g as NoBackdropClose,b as WithCardDecorations,de as __namedExportsOrder,le as default};
