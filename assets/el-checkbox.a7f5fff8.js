import{bH as J,bI as _,bw as ke,bg as pe,at as ye,by as xe,bJ as Ce,u as ee,ab as Q,aG as W,az as P,m as w,o as g,V as O,w as le,p as ae,a5 as ne,r as U,a as $,bK as A,aI as Se,bL as Z,h as L,Z as te,l as R,s as C,t as ue,v as oe,F as X,y as x,x as s,R as N,D as S,bB as F,A as z,bM as G,G as K,O as Ve,Q as se,H as ie,C as M,B as re,_ as H,z as Le,d as Be,e as Ie,q as Ee,aA as $e,ac as we,aF as de}from"./index.a5d548f2.js";import{y as Ne,u as Fe,U as D,d as ve}from"./event.c35a4c7f.js";import{b as ze,u as q,a as Y,e as be,g as T}from"./use-form-item.1485315a.js";import{f as Ge,i as De}from"./isEqual.88549479.js";function Te(e){return e}function Pe(e,l,t){switch(t.length){case 0:return e.call(l);case 1:return e.call(l,t[0]);case 2:return e.call(l,t[0],t[1]);case 3:return e.call(l,t[0],t[1],t[2])}return e.apply(l,t)}var Oe=800,Ue=16,Ae=Date.now;function Me(e){var l=0,t=0;return function(){var a=Ae(),i=Ue-(a-t);if(t=a,i>0){if(++l>=Oe)return arguments[0]}else l=0;return e.apply(void 0,arguments)}}function Re(e){return function(){return e}}var Ke=J?function(e,l){return J(e,"toString",{configurable:!0,enumerable:!1,value:Re(l),writable:!0})}:Te;const He=Ke;var qe=Me(He);const Je=qe;var j=Math.max;function Qe(e,l,t){return l=j(l===void 0?e.length-1:l,0),function(){for(var a=arguments,i=-1,r=j(a.length-l,0),b=Array(r);++i<r;)b[i]=a[l+i];i=-1;for(var u=Array(l+1);++i<l;)u[i]=a[i];return u[l]=t(b),Pe(e,this,u)}}function We(e){return Je(Qe(e,void 0,Ge),e+"")}function Ze(e,l){return e!=null&&l in Object(e)}function Xe(e,l,t){l=_(l,e);for(var a=-1,i=l.length,r=!1;++a<i;){var b=ke(l[a]);if(!(r=e!=null&&t(e,b)))break;e=e[b]}return r||++a!=i?r:(i=e==null?0:e.length,!!i&&Ne(i)&&pe(b,i)&&(ye(e)||Fe(e)))}function Ye(e,l){return e!=null&&Xe(e,l,Ze)}function je(e,l,t){for(var a=-1,i=l.length,r={};++a<i;){var b=l[a],u=xe(e,b);t(u,b)&&Ce(r,_(b,e),u)}return r}function _e(e,l){return je(e,l,function(t,a){return Ye(e,a)})}var el=We(function(e,l){return e==null?{}:_e(e,l)});const ll=el,ce={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ee,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},me={[D]:e=>Q(e)||W(e)||P(e),change:e=>Q(e)||W(e)||P(e)},B=Symbol("checkboxGroupContextKey"),al=({model:e,isChecked:l})=>{const t=w(B,void 0),a=g(()=>{var r,b;const u=(r=t==null?void 0:t.max)==null?void 0:r.value,f=(b=t==null?void 0:t.min)==null?void 0:b.value;return!O(u)&&e.value.length>=u&&!l.value||!O(f)&&e.value.length<=f&&l.value});return{isDisabled:ze(g(()=>(t==null?void 0:t.disabled.value)||a.value)),isLimitDisabled:a}},nl=(e,{model:l,isLimitExceeded:t,hasOwnLabel:a,isDisabled:i,isLabeledByFormItem:r})=>{const b=w(B,void 0),{formItem:u}=q(),{emit:f}=ne();function m(n){var v,k,c,o;return[!0,e.trueValue,e.trueLabel].includes(n)?(k=(v=e.trueValue)!=null?v:e.trueLabel)!=null?k:!0:(o=(c=e.falseValue)!=null?c:e.falseLabel)!=null?o:!1}function d(n,v){f("change",m(n),v)}function h(n){if(t.value)return;const v=n.target;f("change",m(v.checked),n)}async function p(n){t.value||!a.value&&!i.value&&r.value&&(n.composedPath().some(c=>c.tagName==="LABEL")||(l.value=m([!1,e.falseValue,e.falseLabel].includes(l.value)),await ae(),d(l.value,n)))}const V=g(()=>(b==null?void 0:b.validateEvent)||e.validateEvent);return le(()=>e.modelValue,()=>{V.value&&(u==null||u.validate("change").catch(n=>ve()))}),{handleChange:h,onClickRoot:p}},tl=e=>{const l=U(!1),{emit:t}=ne(),a=w(B,void 0),i=g(()=>O(a)===!1),r=U(!1),b=g({get(){var u,f;return i.value?(u=a==null?void 0:a.modelValue)==null?void 0:u.value:(f=e.modelValue)!=null?f:l.value},set(u){var f,m;i.value&&$(u)?(r.value=((f=a==null?void 0:a.max)==null?void 0:f.value)!==void 0&&u.length>(a==null?void 0:a.max.value)&&u.length>b.value.length,r.value===!1&&((m=a==null?void 0:a.changeEvent)==null||m.call(a,u))):(t(D,u),l.value=u)}});return{model:b,isGroup:i,isLimitExceeded:r}},ul=(e,l,{model:t})=>{const a=w(B,void 0),i=U(!1),r=g(()=>A(e.value)?e.label:e.value),b=g(()=>{const d=t.value;return P(d)?d:$(d)?Se(r.value)?d.map(Z).some(h=>De(h,r.value)):d.map(Z).includes(r.value):d!=null?d===e.trueValue||d===e.trueLabel:!!d}),u=Y(g(()=>{var d;return(d=a==null?void 0:a.size)==null?void 0:d.value}),{prop:!0}),f=Y(g(()=>{var d;return(d=a==null?void 0:a.size)==null?void 0:d.value})),m=g(()=>!!l.default||!A(r.value));return{checkboxButtonSize:u,isChecked:b,isFocused:i,checkboxSize:f,hasOwnLabel:m,actualValue:r}},fe=(e,l)=>{const{formItem:t}=q(),{model:a,isGroup:i,isLimitExceeded:r}=tl(e),{isFocused:b,isChecked:u,checkboxButtonSize:f,checkboxSize:m,hasOwnLabel:d,actualValue:h}=ul(e,l,{model:a}),{isDisabled:p}=al({model:a,isChecked:u}),{inputId:V,isLabeledByFormItem:n}=be(e,{formItemContext:t,disableIdGeneration:d,disableIdManagement:i}),{handleChange:v,onClickRoot:k}=nl(e,{model:a,isLimitExceeded:r,hasOwnLabel:d,isDisabled:p,isLabeledByFormItem:n});return(()=>{function o(){var I,E;$(a.value)&&!a.value.includes(h.value)?a.value.push(h.value):a.value=(E=(I=e.trueValue)!=null?I:e.trueLabel)!=null?E:!0}e.checked&&o()})(),T({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>i.value&&A(e.value))),T({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>!!e.trueLabel)),T({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},g(()=>!!e.falseLabel)),{inputId:V,isLabeledByFormItem:n,isChecked:u,isDisabled:p,isFocused:b,checkboxButtonSize:f,checkboxSize:m,hasOwnLabel:d,model:a,actualValue:h,handleChange:v,onClickRoot:k}},ol=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],sl=["id","indeterminate","disabled","value","name","tabindex"],il=L({name:"ElCheckbox"}),rl=L({...il,props:ce,emits:me,setup(e){const l=e,t=te(),{inputId:a,isLabeledByFormItem:i,isChecked:r,isDisabled:b,isFocused:u,checkboxSize:f,hasOwnLabel:m,model:d,actualValue:h,handleChange:p,onClickRoot:V}=fe(l,t),n=R("checkbox"),v=g(()=>[n.b(),n.m(f.value),n.is("disabled",b.value),n.is("bordered",l.border),n.is("checked",r.value)]),k=g(()=>[n.e("input"),n.is("disabled",b.value),n.is("checked",r.value),n.is("indeterminate",l.indeterminate),n.is("focus",u.value)]);return(c,o)=>(C(),ue(re(!s(m)&&s(i)?"span":"label"),{class:x(s(v)),"aria-controls":c.indeterminate?c.controls:null,onClick:s(V)},{default:oe(()=>{var I,E;return[X("span",{class:x(s(k))},[c.trueValue||c.falseValue||c.trueLabel||c.falseLabel?N((C(),S("input",{key:0,id:s(a),"onUpdate:modelValue":o[0]||(o[0]=y=>F(d)?d.value=y:null),class:x(s(n).e("original")),type:"checkbox",indeterminate:c.indeterminate,name:c.name,tabindex:c.tabindex,disabled:s(b),"true-value":(I=c.trueValue)!=null?I:c.trueLabel,"false-value":(E=c.falseValue)!=null?E:c.falseLabel,onChange:o[1]||(o[1]=(...y)=>s(p)&&s(p)(...y)),onFocus:o[2]||(o[2]=y=>u.value=!0),onBlur:o[3]||(o[3]=y=>u.value=!1),onClick:o[4]||(o[4]=z(()=>{},["stop"]))},null,42,ol)),[[G,s(d)]]):N((C(),S("input",{key:1,id:s(a),"onUpdate:modelValue":o[5]||(o[5]=y=>F(d)?d.value=y:null),class:x(s(n).e("original")),type:"checkbox",indeterminate:c.indeterminate,disabled:s(b),value:s(h),name:c.name,tabindex:c.tabindex,onChange:o[6]||(o[6]=(...y)=>s(p)&&s(p)(...y)),onFocus:o[7]||(o[7]=y=>u.value=!0),onBlur:o[8]||(o[8]=y=>u.value=!1),onClick:o[9]||(o[9]=z(()=>{},["stop"]))},null,42,sl)),[[G,s(d)]]),X("span",{class:x(s(n).e("inner"))},null,2)],2),s(m)?(C(),S("span",{key:0,class:x(s(n).e("label"))},[K(c.$slots,"default"),c.$slots.default?M("v-if",!0):(C(),S(Ve,{key:0},[se(ie(c.label),1)],64))],2)):M("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var dl=H(rl,[["__file","checkbox.vue"]]);const vl=["name","tabindex","disabled","true-value","false-value"],bl=["name","tabindex","disabled","value"],cl=L({name:"ElCheckboxButton"}),ml=L({...cl,props:ce,emits:me,setup(e){const l=e,t=te(),{isFocused:a,isChecked:i,isDisabled:r,checkboxButtonSize:b,model:u,actualValue:f,handleChange:m}=fe(l,t),d=w(B,void 0),h=R("checkbox"),p=g(()=>{var n,v,k,c;const o=(v=(n=d==null?void 0:d.fill)==null?void 0:n.value)!=null?v:"";return{backgroundColor:o,borderColor:o,color:(c=(k=d==null?void 0:d.textColor)==null?void 0:k.value)!=null?c:"",boxShadow:o?`-1px 0 0 0 ${o}`:void 0}}),V=g(()=>[h.b("button"),h.bm("button",b.value),h.is("disabled",r.value),h.is("checked",i.value),h.is("focus",a.value)]);return(n,v)=>{var k,c;return C(),S("label",{class:x(s(V))},[n.trueValue||n.falseValue||n.trueLabel||n.falseLabel?N((C(),S("input",{key:0,"onUpdate:modelValue":v[0]||(v[0]=o=>F(u)?u.value=o:null),class:x(s(h).be("button","original")),type:"checkbox",name:n.name,tabindex:n.tabindex,disabled:s(r),"true-value":(k=n.trueValue)!=null?k:n.trueLabel,"false-value":(c=n.falseValue)!=null?c:n.falseLabel,onChange:v[1]||(v[1]=(...o)=>s(m)&&s(m)(...o)),onFocus:v[2]||(v[2]=o=>a.value=!0),onBlur:v[3]||(v[3]=o=>a.value=!1),onClick:v[4]||(v[4]=z(()=>{},["stop"]))},null,42,vl)),[[G,s(u)]]):N((C(),S("input",{key:1,"onUpdate:modelValue":v[5]||(v[5]=o=>F(u)?u.value=o:null),class:x(s(h).be("button","original")),type:"checkbox",name:n.name,tabindex:n.tabindex,disabled:s(r),value:s(f),onChange:v[6]||(v[6]=(...o)=>s(m)&&s(m)(...o)),onFocus:v[7]||(v[7]=o=>a.value=!0),onBlur:v[8]||(v[8]=o=>a.value=!1),onClick:v[9]||(v[9]=z(()=>{},["stop"]))},null,42,bl)),[[G,s(u)]]),n.$slots.default||n.label?(C(),S("span",{key:2,class:x(s(h).be("button","inner")),style:Le(s(i)?s(p):void 0)},[K(n.$slots,"default",{},()=>[se(ie(n.label),1)])],6)):M("v-if",!0)],2)}}});var he=H(ml,[["__file","checkbox-button.vue"]]);const fl=Be({modelValue:{type:Ie(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ee,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),hl={[D]:e=>$(e),change:e=>$(e)},gl=L({name:"ElCheckboxGroup"}),kl=L({...gl,props:fl,emits:hl,setup(e,{emit:l}){const t=e,a=R("checkbox"),{formItem:i}=q(),{inputId:r,isLabeledByFormItem:b}=be(t,{formItemContext:i}),u=async m=>{l(D,m),await ae(),l("change",m)},f=g({get(){return t.modelValue},set(m){u(m)}});return Ee(B,{...ll($e(t),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:f,changeEvent:u}),le(()=>t.modelValue,()=>{t.validateEvent&&(i==null||i.validate("change").catch(m=>ve()))}),(m,d)=>{var h;return C(),ue(re(m.tag),{id:s(r),class:x(s(a).b("group")),role:"group","aria-label":s(b)?void 0:m.label||"checkbox-group","aria-labelledby":s(b)?(h=s(i))==null?void 0:h.labelId:void 0},{default:oe(()=>[K(m.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ge=H(kl,[["__file","checkbox-group.vue"]]);const Sl=we(dl,{CheckboxButton:he,CheckboxGroup:ge});de(he);de(ge);export{Sl as E,Ye as h,Te as i,Qe as o,Je as s};
