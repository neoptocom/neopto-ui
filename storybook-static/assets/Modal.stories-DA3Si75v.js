import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{r as X}from"./index-CROobee-.js";import{C as Z}from"./Card-OLTowr5v.js";import{B as h}from"./Button-CmAIs20C.js";import{T as a}from"./Typo-yLceAaNy.js";function j({open:n,children:r,onClose:o,zIndex:i=40,className:s=""}){const[u,d]=t.useState(!1),[l,f]=t.useState(!1);if(t.useEffect(()=>{if(n)d(!0),requestAnimationFrame(()=>{f(!0)});else{f(!1);const p=setTimeout(()=>{d(!1)},500);return()=>clearTimeout(p)}},[n]),!u)return null;const k=p=>{p.target===p.currentTarget&&o&&o()};return e.jsx("div",{className:`fixed inset-0 flex items-center justify-center transition-opacity duration-500 ${s}`,style:{backgroundColor:"rgba(0, 0, 0, 0.10)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",zIndex:i,opacity:l?1:0},onClick:k,role:"presentation",children:r})}j.__docgenInfo={description:"",methods:[],displayName:"BackgroundBlur",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the blur overlay is visible"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to render on top of the blur (e.g., modal, drawer)"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the backdrop is clicked"},zIndex:{required:!1,tsType:{name:"number"},description:"z-index for the overlay (default: 40)",defaultValue:{value:"40",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};try{j.displayName="BackgroundBlur",j.__docgenInfo={description:"",displayName:"BackgroundBlur",props:{open:{defaultValue:null,description:"Whether the blur overlay is visible",name:"open",required:!0,type:{name:"boolean"}},children:{defaultValue:null,description:"Content to render on top of the blur (e.g., modal, drawer)",name:"children",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"Callback when the backdrop is clicked",name:"onClose",required:!1,type:{name:"(() => void)"}},zIndex:{defaultValue:{value:40},description:"z-index for the overlay (default: 40)",name:"zIndex",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}}}catch{}function ee(n,r){(typeof window<"u"?t.useLayoutEffect:t.useEffect)(n,r)}function m({open:n,onClose:r,closeOnBackdrop:o=!0,children:i,className:s="",zIndex:u=50,showDecorations:d=!0}){const[l,f]=t.useState(!1),[k,p]=t.useState(!1);if(t.useEffect(()=>{const c=()=>{const Q=document.documentElement.classList.contains("dark")||document.body.classList.contains("dark")||document.querySelector(".dark")!==null;p(Q)};c();const y=new MutationObserver(c);return y.observe(document.documentElement,{attributes:!0,attributeFilter:["class"],subtree:!0}),()=>y.disconnect()},[]),ee(()=>{if(f(!0),!n)return;const c=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=c}},[n]),t.useEffect(()=>{if(!n)return;const c=y=>{y.key==="Escape"&&(r==null||r())};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[n,r]),!l)return null;const U=s==null?void 0:s.includes("max-w-"),Y=s==null?void 0:s.includes("max-h-"),K=`w-full ${U?"":"max-w-lg"} ${Y?"":"max-h-[80vh]"} ${s||""}`.trim(),P=e.jsx("div",{className:k?"dark":"",children:e.jsx(j,{open:n,onClose:o?r:void 0,zIndex:u,children:e.jsx(Z,{className:K,role:"dialog","aria-modal":"true",showDecorations:d,children:i})})}),J=document.body;return X.createPortal(P,J)}try{m.displayName="Modal",m.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"Whether the modal is open",name:"open",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback when modal should close",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Modal content",name:"children",required:!1,type:{name:"ReactNode"}},closeOnBackdrop:{defaultValue:{value:!0},description:"When true, closes when the backdrop is clicked (default: true)",name:"closeOnBackdrop",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Custom className for the Card",name:"className",required:!1,type:{name:"string"}},zIndex:{defaultValue:{value:50},description:"z-index for the modal (default: 50)",name:"zIndex",required:!1,type:{name:"number"}},showDecorations:{defaultValue:{value:!0},description:"Show decorative elements on the Card (default: true)",name:"showDecorations",required:!1,type:{name:"boolean"}}}}}catch{}const le={title:"Components/Modal",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"]};function w(n){const[r,o]=t.useState(!1);return e.jsxs("div",{className:"p-8",children:[e.jsx(h,{onClick:()=>o(!0),children:"Open Modal"}),e.jsx(m,{open:r,onClose:()=>o(!1),...n,children:n.children})]})}const v={args:{open:!1},render:()=>e.jsxs(w,{children:[e.jsx(a,{variant:"headline-md",children:"Welcome!"}),e.jsx(a,{variant:"body-md",className:"mt-4",children:"This is a simple modal with custom content. Click outside or press ESC to close."})]})},g={args:{open:!1},render:()=>e.jsxs(w,{closeOnBackdrop:!1,children:[e.jsx(a,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Important Notice"}),e.jsx(a,{variant:"body-md",children:"This modal cannot be closed by clicking the backdrop."}),e.jsx(a,{variant:"body-md",className:"mt-4",children:"You must use the button below or press ESC to close."}),e.jsx("div",{className:"mt-6",children:e.jsx(h,{onClick:()=>{},children:"Acknowledge"})})]})},x={args:{open:!1},render:()=>e.jsxs(w,{className:"max-w-2xl p-12",children:[e.jsx(a,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Large Modal"}),e.jsx(a,{variant:"body-md",children:"This modal has custom styling with a larger max-width and more padding."}),e.jsxs("div",{className:"mt-6 grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-[var(--muted)] [border-radius:1.875rem]",children:[e.jsx(a,{variant:"label-lg",bold:"semibold",children:"Feature 1"}),e.jsx(a,{variant:"body-sm",className:"mt-2",children:"Description here"})]}),e.jsxs("div",{className:"p-4 bg-[var(--muted)] [border-radius:1.875rem]",children:[e.jsx(a,{variant:"label-lg",bold:"semibold",children:"Feature 2"}),e.jsx(a,{variant:"body-sm",className:"mt-2",children:"Description here"})]})]})]})},C={args:{open:!1},render:()=>{const[n,r]=t.useState(!1),[o,i]=t.useState(""),[s,u]=t.useState(""),d=l=>{l.preventDefault(),alert(`Submitted: ${o}, ${s}`),r(!1)};return e.jsxs("div",{className:"p-8",children:[e.jsx(h,{onClick:()=>r(!0),children:"Open Form Modal"}),e.jsx(m,{open:n,onClose:()=>r(!1),children:e.jsxs("form",{onSubmit:d,children:[e.jsx(a,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Contact Form"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium",children:"Name"}),e.jsx("input",{type:"text",value:o,onChange:l=>i(l.target.value),className:"w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent",placeholder:"Enter your name",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block mb-2 text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",value:s,onChange:l=>u(l.target.value),className:"w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent",placeholder:"Enter your email",required:!0})]}),e.jsxs("div",{className:"flex gap-3 justify-end pt-4",children:[e.jsx("button",{type:"button",onClick:()=>r(!1),className:"px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors",children:"Cancel"}),e.jsx(h,{type:"submit",children:"Submit"})]})]})]})})]})}},N={args:{open:!1},render:()=>{const[n,r]=t.useState(!1),o=()=>{alert("Action confirmed!"),r(!1)};return e.jsxs("div",{className:"p-8",children:[e.jsx(h,{variant:"primary",onClick:()=>r(!0),children:"Delete Item"}),e.jsxs(m,{open:n,onClose:()=>r(!1),closeOnBackdrop:!1,children:[e.jsx(a,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Confirm Deletion"}),e.jsx(a,{variant:"body-md",children:"Are you sure you want to delete this item? This action cannot be undone."}),e.jsxs("div",{className:"flex gap-3 justify-end mt-6",children:[e.jsx("button",{onClick:()=>r(!1),className:"px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors",children:"Cancel"}),e.jsx(h,{variant:"primary",onClick:o,children:"Delete"})]})]})]})}},b={args:{open:!1},render:()=>{const[n,r]=t.useState(!1),[o,i]=t.useState(!0),s=({children:u,...d})=>e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>r(!0),className:"px-6 py-3 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition-opacity",type:"button",children:"Open Modal with Card Decorations"}),e.jsxs("label",{className:"flex items-center gap-2 mt-4",children:[e.jsx("input",{type:"checkbox",checked:o,onChange:l=>i(l.target.checked)}),e.jsx("span",{children:"Show Card Decorations"})]}),e.jsx(m,{open:n,onClose:()=>r(!1),showDecorations:o,...d})]});return e.jsxs(s,{children:[e.jsx(a,{variant:"headline-md",bold:"semibold",className:"mb-4",children:"Card with Decorative Elements"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"body-md",children:"The Card component now includes decorative SVG elements from your Figma design:"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:e.jsxs(a,{variant:"body-sm",children:[e.jsx("strong",{children:"Ellipse gradients"})," - Subtle blue and white ellipses that add depth"]})}),e.jsx("li",{children:e.jsxs(a,{variant:"body-sm",children:[e.jsx("strong",{children:"Gradient borders"})," - Green gradient lines on all four sides"]})}),e.jsx("li",{children:e.jsxs(a,{variant:"body-sm",children:[e.jsx("strong",{children:"Toggle option"})," - Use the checkbox above to toggle decorations on/off"]})})]}),e.jsxs(a,{variant:"body-sm",className:"text-gray-500",children:["Note: The current Modal is using showDecorations=",o.toString()]})]})]})}};var T,S,D;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => <ModalDemo>\r
      <Typo variant="headline-md">Welcome!</Typo>\r
      <Typo variant="body-md" className="mt-4">\r
        This is a simple modal with custom content. Click outside or press ESC to close.\r
      </Typo>\r
    </ModalDemo>
}`,...(D=(S=v.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var M,E,B;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => <ModalDemo closeOnBackdrop={false}>\r
      <Typo variant="headline-md" bold="semibold" className="mb-4">Important Notice</Typo>\r
      <Typo variant="body-md">\r
        This modal cannot be closed by clicking the backdrop.\r
      </Typo>\r
      <Typo variant="body-md" className="mt-4">\r
        You must use the button below or press ESC to close.\r
      </Typo>\r
      <div className="mt-6">\r
        <Button onClick={() => {}}>Acknowledge</Button>\r
      </div>\r
    </ModalDemo>
}`,...(B=(E=g.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var O,q,_;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    open: false
  },
  render: () => <ModalDemo className="max-w-2xl p-12">\r
      <Typo variant="headline-md" bold="semibold" className="mb-4">Large Modal</Typo>\r
      <Typo variant="body-md">\r
        This modal has custom styling with a larger max-width and more padding.\r
      </Typo>\r
      <div className="mt-6 grid grid-cols-2 gap-4">\r
        <div className="p-4 bg-[var(--muted)] [border-radius:1.875rem]">\r
          <Typo variant="label-lg" bold="semibold">Feature 1</Typo>\r
          <Typo variant="body-sm" className="mt-2">Description here</Typo>\r
        </div>\r
        <div className="p-4 bg-[var(--muted)] [border-radius:1.875rem]">\r
          <Typo variant="label-lg" bold="semibold">Feature 2</Typo>\r
          <Typo variant="body-sm" className="mt-2">Description here</Typo>\r
        </div>\r
      </div>\r
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
    return <div className="p-8">\r
        <Button onClick={() => setOpen(true)}>Open Form Modal</Button>\r
        <Modal open={open} onClose={() => setOpen(false)}>\r
          <form onSubmit={handleSubmit}>\r
            <Typo variant="headline-md" bold="semibold" className="mb-4">Contact Form</Typo>\r
            <div className="space-y-4">\r
              <div>\r
                <label className="block mb-2 text-sm font-medium">Name</label>\r
                <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent" placeholder="Enter your name" required />\r
              </div>\r
              <div>\r
                <label className="block mb-2 text-sm font-medium">Email</label>\r
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-full border border-[var(--border)] bg-transparent" placeholder="Enter your email" required />\r
              </div>\r
              <div className="flex gap-3 justify-end pt-4">\r
                <button type="button" onClick={() => setOpen(false)} className="px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors">\r
                  Cancel\r
                </button>\r
                <Button type="submit">Submit</Button>\r
              </div>\r
            </div>\r
          </form>\r
        </Modal>\r
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
    return <div className="p-8">\r
        <Button variant="primary" onClick={() => setOpen(true)}>\r
          Delete Item\r
        </Button>\r
        <Modal open={open} onClose={() => setOpen(false)} closeOnBackdrop={false}>\r
          <Typo variant="headline-md" bold="semibold" className="mb-4">Confirm Deletion</Typo>\r
          <Typo variant="body-md">\r
            Are you sure you want to delete this item? This action cannot be undone.\r
          </Typo>\r
          <div className="flex gap-3 justify-end mt-6">\r
            <button onClick={() => setOpen(false)} className="px-6 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--muted)] transition-colors">\r
              Cancel\r
            </button>\r
            <Button variant="primary" onClick={handleConfirm}>\r
              Delete\r
            </Button>\r
          </div>\r
        </Modal>\r
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
    }: any) => <>\r
        <button onClick={() => setOpen(true)} className="px-6 py-3 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition-opacity" type="button">\r
          Open Modal with Card Decorations\r
        </button>\r
        <label className="flex items-center gap-2 mt-4">\r
          <input type="checkbox" checked={showDecorations} onChange={e => setShowDecorations(e.target.checked)} />\r
          <span>Show Card Decorations</span>\r
        </label>\r
        <Modal open={open} onClose={() => setOpen(false)} showDecorations={showDecorations} {...props} />\r
      </>;
    return <ModalDemo>\r
        <Typo variant="headline-md" bold="semibold" className="mb-4">Card with Decorative Elements</Typo>\r
        <div className="space-y-4">\r
          <Typo variant="body-md">\r
            The Card component now includes decorative SVG elements from your Figma design:\r
          </Typo>\r
          <ul className="list-disc pl-6 space-y-2">\r
            <li>\r
              <Typo variant="body-sm">\r
                <strong>Ellipse gradients</strong> - Subtle blue and white ellipses that add depth\r
              </Typo>\r
            </li>\r
            <li>\r
              <Typo variant="body-sm">\r
                <strong>Gradient borders</strong> - Green gradient lines on all four sides\r
              </Typo>\r
            </li>\r
            <li>\r
              <Typo variant="body-sm">\r
                <strong>Toggle option</strong> - Use the checkbox above to toggle decorations on/off\r
              </Typo>\r
            </li>\r
          </ul>\r
          <Typo variant="body-sm" className="text-gray-500">\r
            Note: The current Modal is using showDecorations={showDecorations.toString()}\r
          </Typo>\r
        </div>\r
      </ModalDemo>;
  }
}`,...($=(L=b.parameters)==null?void 0:L.docs)==null?void 0:$.source},description:{story:"This story demonstrates the Card component's decorative elements.\r\nThe Card inside the Modal includes subtle ellipse gradients and border accents\r\nthat can be toggled on/off via the `showDecorations` prop.",...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};const de=["Default","NoBackdropClose","CustomStyling","FormModal","ConfirmationDialog","WithCardDecorations"];export{N as ConfirmationDialog,x as CustomStyling,v as Default,C as FormModal,g as NoBackdropClose,b as WithCardDecorations,de as __namedExportsOrder,le as default};
