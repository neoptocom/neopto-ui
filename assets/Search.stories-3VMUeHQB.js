import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{I as D}from"./IconButton-DcFbHVuT.js";import{C as M}from"./Counter-DmZvQwoD.js";import{I as V}from"./Icon-BGfffQ3t.js";import{T as z}from"./Typo-BNAdv5Gi.js";import"./index-B8ehKEGt.js";function y({className:m="",options:s,onSearch:p,selectedOption:n,onSelect:i,searchDelay:u=300,disabled:r=!1,maxHeight:v=152,id:c,children:l,...f}){const R=c??t.useId(),T=`${R}-listbox`,[E,x]=t.useState(""),[d,g]=t.useState(!1),[I,h]=t.useState(-1),[k,$]=t.useState(!1),X=t.useRef(null),Y=t.useRef(null),S=t.useRef(null),b=t.useMemo(()=>Array.isArray(s)&&typeof s[0]=="string"?s.map(a=>({label:a,value:a})):s,[s]);t.useMemo(()=>b.some(a=>!!a.image),[b]);const ee=n!=null?typeof n=="string"?n:n.label:E,ae=t.useCallback(a=>{S.current&&clearTimeout(S.current),S.current=window.setTimeout(()=>{p(a)},u)},[p,u]);function te(){r||g(!0)}function N(){g(!1),h(-1)}function se(a){i(a),x(""),N()}function re(){i(null),x(""),N()}function ne(a){if(!d&&(a.key==="ArrowDown"||a.key==="ArrowUp")){g(!0),h(0),a.preventDefault();return}if(d)if(a.key==="ArrowDown")a.preventDefault(),h(o=>Math.min(o+1,b.length-1)),C();else if(a.key==="ArrowUp")a.preventDefault(),h(o=>Math.max(o-1,0)),C();else if(a.key==="Enter"){a.preventDefault();const o=b[I];o&&se(o)}else a.key==="Escape"?(a.preventDefault(),N()):a.key==="Home"?(a.preventDefault(),h(0),C()):a.key==="End"&&(a.preventDefault(),h(b.length-1),C())}function C(){const a=Y.current,o=I;if(!a||o<0)return;const O=a.children[o];O==null||O.scrollIntoView({block:"nearest"})}return t.useEffect(()=>()=>{S.current&&clearTimeout(S.current)},[]),e.jsx("div",{ref:X,className:["relative w-full",m].join(" "),...f,children:e.jsx("div",{className:["w-full min-w-0 border rounded-[24px] bg-[var(--surface)] transition-all","border-[var(--border)] focus-within:border-[var(--color-brand)]",r?"opacity-60 cursor-not-allowed":"",!k&&"h-12"].join(" "),children:e.jsx("div",{className:"relative flex h-full",children:e.jsxs("div",{className:["flex flex-col w-full overflow-hidden transition-all",k&&l?"h-auto pb-3":"h-full"].join(" "),children:[e.jsxs("div",{className:"flex w-full items-center h-12 px-2",children:[l&&e.jsx(D,{icon:"filter_list",onClick:()=>$(a=>!a),disabled:r,"aria-label":k?"Hide filters":"Show filters","aria-expanded":k,className:"mr-2"}),e.jsx("input",{id:R,role:"combobox","aria-expanded":d,"aria-controls":T,"aria-autocomplete":"list","aria-disabled":r||void 0,type:"text",value:ee,onChange:a=>{const o=a.target.value;x(o),ae(o),d||g(!0),h(0)},onFocus:te,onKeyDown:ne,onBlur:()=>setTimeout(N,150),disabled:r,style:{fontFamily:"var(--font-display)",fontSize:"16px"},className:["w-full rounded-full border-0 outline-none bg-transparent h-12","leading-tight text-[var(--fg)] placeholder:text-[var(--muted-fg)]","px-2"].join(" "),placeholder:"Pesquisar",onClick:()=>!r&&g(!0)}),e.jsx(D,{icon:"search",onClick:n&&!d?re:()=>g(a=>!a),disabled:r,"aria-label":n&&!d?"Clear":d?"Collapse":"Expand"})]}),l&&e.jsx("div",{className:"w-full px-4.5 pb-3 pt-2",children:l})]})})})})}y.__docgenInfo={description:"",methods:[],displayName:"Search",props:{options:{required:!0,tsType:{name:"union",raw:"SearchOption[] | string[]",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: any;
  image?: string;
  group?: Array<{ name: string; image?: string }>;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}}],raw:"SearchOption[]"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Array of options to display"},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:"Callback when search is performed (debounced)"},selectedOption:{required:!0,tsType:{name:"union",raw:"SearchOption | string | null",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: any;
  image?: string;
  group?: Array<{ name: string; image?: string }>;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}},{name:"string"},{name:"null"}]},description:"Currently selected option"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: SearchOption | string | null) => void",signature:{arguments:[{type:{name:"union",raw:"SearchOption | string | null",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: any;
  image?: string;
  group?: Array<{ name: string; image?: string }>;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"any",required:!0}},{key:"image",value:{name:"string",required:!1}},{key:"group",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; image?: string }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"image",value:{name:"string",required:!1}}]}}],raw:"Array<{ name: string; image?: string }>",required:!1}}]}},{name:"string"},{name:"null"}]},name:"option"}],return:{name:"void"}}},description:"Callback when an option is selected"},searchDelay:{required:!1,tsType:{name:"number"},description:"Search delay in milliseconds (default: 300ms)",defaultValue:{value:"300",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the component is disabled",defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"number"},description:"Maximum height of the options dropdown",defaultValue:{value:"152",computed:!1}},id:{required:!1,tsType:{name:"string"},description:"Optional id base (for accessibility hooks)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional filter children to render when filters are expanded"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const w=[{label:"Ada Lovelace",value:"ada",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Alan Turing",value:"turing"},{label:"Grace Hopper",value:"hopper",image:"https://images.unsplash.com/photo-1545184180-25d471fe75d8?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Edsger Dijkstra",value:"dijkstra"},{label:"Barbara Liskov",value:"liskov"},{label:"Donald Knuth",value:"knuth"},{label:"Margaret Hamilton",value:"hamilton",image:"https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"John von Neumann",value:"neumann"},{label:"Gordon Moore",value:"moore"},{label:"Andy Grove",value:"grove"},{label:"Steve Jobs",value:"jobs",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Steve Wozniak",value:"wozniak"},{label:"Bill Gates",value:"gates",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Paul Allen",value:"allen"},{label:"Larry Page",value:"page"},{label:"Sergey Brin",value:"brin"},{label:"Jeff Bezos",value:"bezos"},{label:"Elon Musk",value:"musk",image:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=128&auto=format&fit=facearea&facepad=2"},{label:"Mark Zuckerberg",value:"zuckerberg"},{label:"Satya Nadella",value:"nadella"},{label:"Sundar Pichai",value:"pichai"},{label:"Jensen Huang",value:"huang"},{label:"Lisa Su",value:"su"}],pe={title:"Components/Search",component:y,args:{options:w,selectedOption:null,disabled:!1,maxHeight:180,searchDelay:300}},j={render:m=>{const[s,p]=t.useState(m.selectedOption),[n,i]=t.useState([]),[u,r]=t.useState(!1),v=t.useCallback(c=>{c.trim()?(r(!0),setTimeout(()=>{const l=w.filter(f=>f.label.toLowerCase().includes(c.toLowerCase()));i(l),r(!1)},500)):(i([]),r(!1))},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(y,{...m,options:u?[]:n,selectedOption:s,onSelect:p,onSearch:v}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Selected: ",typeof s=="string"?s:(s==null?void 0:s.label)??"none"]}),u&&e.jsx("div",{className:"mt-2 text-xs text-[var(--muted-fg)]",children:"🔍 Searching..."})]})}},q={args:{searchDelay:1e3},render:m=>{const[s,p]=t.useState(null),[n,i]=t.useState([]),[u,r]=t.useState(0),v=t.useCallback(c=>{if(r(l=>l+1),c.trim()){const l=w.filter(f=>f.label.toLowerCase().includes(c.toLowerCase()));i(l)}else i([])},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(y,{...m,options:n,selectedOption:s,onSelect:p,onSearch:v}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Search calls made: ",u," (1 second delay)"]})]})}},A={args:{disabled:!0,options:w}},L={render:m=>{const[s,p]=t.useState(null),[n,i]=t.useState([]),[u,r]=t.useState(20),[v,c]=t.useState(20),[l,f]=t.useState(!1),[R,T]=t.useState(!1),E=t.useCallback(x=>{if(x.trim()){const d=w.filter(g=>g.label.toLowerCase().includes(x.toLowerCase()));i(d)}else i([])},[]);return e.jsxs("div",{className:"max-w-md",children:[e.jsx(y,{...m,options:n,selectedOption:s,onSelect:p,onSearch:E,children:e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(M,{value:u,onChange:r,min:1,max:100}),e.jsx(z,{variant:"label-lg",className:"mr-1",children:"Semantic Search – Top K"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:e.jsx(V,{name:"help",size:"sm",className:"text-[var(--muted-fg)] cursor-help"})}),l&&e.jsx("div",{className:"absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap",children:"lorem ipsum dolor sit amet"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(M,{value:v,onChange:c,min:1,max:100}),e.jsx(z,{variant:"label-lg",className:"mr-1",children:"Total Results"}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{onMouseEnter:()=>T(!0),onMouseLeave:()=>T(!1),children:e.jsx(V,{name:"help",size:"sm",className:"text-[var(--muted-fg)] cursor-help"})}),R&&e.jsx("div",{className:"absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap",children:"lorem ipsum dolor sit amet"})]})]})]})}),e.jsxs("div",{className:"mt-3 text-xs text-[var(--muted-fg)]",children:["Selected: ",typeof s=="string"?s:(s==null?void 0:s.label)??"none"]}),e.jsxs("div",{className:"mt-1 text-xs text-[var(--muted-fg)]",children:["Top K: ",u,", Total Results: ",v]})]})}};var K,H,_;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<SearchOption | string | null>(args.selectedOption);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [isSearching, setIsSearching] = React.useState(false);
    const handleSearch = React.useCallback((query: string) => {
      if (query.trim()) {
        setIsSearching(true);
        // Simulate API call delay
        setTimeout(() => {
          const filtered = SEARCH_RESULTS.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
          setResults(filtered);
          setIsSearching(false);
        }, 500);
      } else {
        setResults([]);
        setIsSearching(false);
      }
    }, []);
    return <div className="max-w-md">
        <Search {...args} options={isSearching ? [] : results} selectedOption={value} onSelect={setValue} onSearch={handleSearch} />
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}
        </div>
        {isSearching && <div className="mt-2 text-xs text-[var(--muted-fg)]">
            🔍 Searching...
          </div>}
      </div>;
  }
}`,...(_=(H=j.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var P,U,B;q.parameters={...q.parameters,docs:{...(P=q.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    searchDelay: 1000
  },
  render: args => {
    const [value, setValue] = React.useState<SearchOption | string | null>(null);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [searchCount, setSearchCount] = React.useState(0);
    const handleSearch = React.useCallback((query: string) => {
      setSearchCount(prev => prev + 1);
      if (query.trim()) {
        const filtered = SEARCH_RESULTS.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, []);
    return <div className="max-w-md">
        <Search {...args} options={results} selectedOption={value} onSelect={setValue} onSearch={handleSearch} />
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Search calls made: {searchCount} (1 second delay)
        </div>
      </div>;
  }
}`,...(B=(U=q.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var F,W,G;A.parameters={...A.parameters,docs:{...(F=A.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options: SEARCH_RESULTS
  }
}`,...(G=(W=A.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,Q,Z;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState<SearchOption | string | null>(null);
    const [results, setResults] = React.useState<SearchOption[]>([]);
    const [topK, setTopK] = React.useState<number>(20);
    const [totalResults, setTotalResults] = React.useState<number>(20);
    const [showTooltip1, setShowTooltip1] = React.useState(false);
    const [showTooltip2, setShowTooltip2] = React.useState(false);
    const handleSearch = React.useCallback((query: string) => {
      if (query.trim()) {
        const filtered = SEARCH_RESULTS.filter(item => item.label.toLowerCase().includes(query.toLowerCase()));
        setResults(filtered);
      } else {
        setResults([]);
      }
    }, []);
    return <div className="max-w-md">
        <Search {...args} options={results} selectedOption={value} onSelect={setValue} onSearch={handleSearch}>
          {/* Filter content */}
          <div className="flex flex-col gap-3">
            {/* Semantic Search - Top K */}
            <div className="flex items-center gap-3">
              <Counter value={topK} onChange={setTopK} min={1} max={100} />
              <Typo variant="label-lg" className="mr-1">Semantic Search – Top K</Typo>
              <div className="relative">
                <div onMouseEnter={() => setShowTooltip1(true)} onMouseLeave={() => setShowTooltip1(false)}>
                  <Icon name="help" size="sm" className="text-[var(--muted-fg)] cursor-help" />
                </div>
                {showTooltip1 && <div className="absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap">
                    lorem ipsum dolor sit amet
                  </div>}
              </div>
            </div>

            {/* Total Results */}
            <div className="flex items-center gap-3">
              <Counter value={totalResults} onChange={setTotalResults} min={1} max={100} />
              <Typo variant="label-lg" className="mr-1">Total Results</Typo>
              <div className="relative">
                <div onMouseEnter={() => setShowTooltip2(true)} onMouseLeave={() => setShowTooltip2(false)}>
                  <Icon name="help" size="sm" className="text-[var(--muted-fg)] cursor-help" />
                </div>
                {showTooltip2 && <div className="absolute left-0 top-6 z-50 px-2 py-1 bg-[var(--surface)] border border-[var(--border)] rounded shadow-lg text-xs text-[var(--fg)] whitespace-nowrap">
                    lorem ipsum dolor sit amet
                  </div>}
              </div>
            </div>
          </div>
        </Search>
        <div className="mt-3 text-xs text-[var(--muted-fg)]">
          Selected: {typeof value === "string" ? value : value?.label ?? "none"}
        </div>
        <div className="mt-1 text-xs text-[var(--muted-fg)]">
          Top K: {topK}, Total Results: {totalResults}
        </div>
      </div>;
  }
}`,...(Z=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};const fe=["Playground","WithCustomDelay","Disabled","WithFilters"];export{A as Disabled,j as Playground,q as WithCustomDelay,L as WithFilters,fe as __namedExportsOrder,pe as default};
