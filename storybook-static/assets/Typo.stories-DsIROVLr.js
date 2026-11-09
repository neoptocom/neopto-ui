import{j as e}from"./jsx-runtime-CDt2p4po.js";import{T as c}from"./Typo-yLceAaNy.js";import"./index-GiUgBvb1.js";const x={title:"Components/Typo",component:c,args:{children:"The quick brown fox jumps over the lazy dog",variant:"body-md",bold:"normal",muted:!1},argTypes:{variant:{control:"select",options:["display-lg","display-md","display-sm","headline-lg","headline-md","headline-sm","title-lg","title-md","title-sm","label-lg","label-md","label-sm","body-lg","body-md","body-sm","button"]},bold:{control:"radio",options:["normal","medium","semibold","bold"]},muted:{control:"boolean"},as:{control:!1}}},l={},a={render:()=>{const p=["display-lg","display-md","display-sm","headline-lg","headline-md","headline-sm","title-lg","title-md","title-sm","label-lg","label-md","label-sm","body-lg","body-md","body-sm","button"],b=["normal","medium","semibold","bold"];return e.jsx("div",{className:"grid grid-cols-1 gap-4",children:p.map(s=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:"text-sm",children:s}),e.jsx("div",{className:"flex flex-wrap gap-6",children:b.map(d=>e.jsxs(c,{variant:s,bold:d,children:["The quick brown fox — ",d]},d))})]},s))})}};var o,r,i;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(i=(r=l.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var t,m,n;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const variants: TypoVariant[] = ["display-lg", "display-md", "display-sm", "headline-lg", "headline-md", "headline-sm", "title-lg", "title-md", "title-sm", "label-lg", "label-md", "label-sm", "body-lg", "body-md", "body-sm", "button"];
    const weights: TypoWeight[] = ["normal", "medium", "semibold", "bold"];
    return <div className="grid grid-cols-1 gap-4">\r
        {variants.map(v => <div key={v} className="flex flex-col gap-1">\r
            <div className="text-sm">{v}</div>\r
            <div className="flex flex-wrap gap-6">\r
              {weights.map(w => <Typo key={w} variant={v} bold={w}>\r
                  The quick brown fox — {w}\r
                </Typo>)}\r
            </div>\r
          </div>)}\r
      </div>;
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const h=["Playground","Matrix"];export{a as Matrix,l as Playground,h as __namedExportsOrder,x as default};
