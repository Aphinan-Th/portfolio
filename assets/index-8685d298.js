import{j as e,r as c,R as h}from"./react-d344b9d5.js";import{a as m}from"./react-dom-223a3bfd.js";import{u as x,H as f,C as d,O as g,P as u,a as j,b as y,c as v,d as w}from"./@react-three-41dcfb27.js";import{m as b}from"./maath-60ef9892.js";import{s as i}from"./styled-components-167895ea.js";import{m as P}from"./framer-motion-754dbf72.js";import"./@chevrotain-3c9a3002.js";import"./scheduler-765c72db.js";import"./@babel-98964cd2.js";import"./three-2c3a3013.js";import"./react-use-measure-f6074b16.js";import"./debounce-a451ab00.js";import"./its-fine-db4dbd27.js";import"./react-reconciler-de1ac884.js";import"./zustand-cabf8f19.js";import"./three-stdlib-4ecd233a.js";import"./react-merge-refs-239dbb3c.js";import"./suspend-react-4f9dedb1.js";import"./react-is-e8e5dbb3.js";import"./@emotion-3c1bd611.js";import"./hoist-non-react-statics-855863f9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const C=()=>{const{progress:r}=x();return e.jsxs(f,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[e.jsx("span",{className:"canvas-loader"}),e.jsxs("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40},children:[r.toFixed(2),"%"]})]})},A=()=>{const r=j("./planet/scene.gltf");return e.jsx("primitive",{object:r.scene,scale:2.5,"position-y":0,"rotation-y":0})},S=()=>e.jsx(d,{shadows:!0,frameloop:"demand",dpr:[1,2],gl:{preserveDrawingBuffer:!0},camera:{fov:45,near:.1,far:200,position:[-4,3,6]},children:e.jsxs(c.Suspense,{fallback:e.jsx(C,{}),children:[e.jsx(g,{autoRotate:!0,enableZoom:!1,maxPolarAngle:Math.PI/2,minPolarAngle:Math.PI/2}),e.jsx(A,{}),e.jsx(u,{all:!0})]})}),F=(r,o,n,a)=>({hidden:{x:r==="left"?"-100%":r==="right"?"100%":0,y:r==="up"||r==="down"?"100%":0},show:{x:0,y:0,transition:{type:o,delay:n,duration:a,ease:"easeOut"}}}),I=r=>{const o=c.useRef(),[n]=c.useState(()=>b.inSphere(new Float32Array(5e3),{radius:1.2}));return y((a,t)=>{o.current&&(o.current.rotation.x-=t/10,o.current.rotation.y-=t/15)}),e.jsx("group",{rotation:[0,0,Math.PI/4],children:e.jsx(v,{ref:o,positions:n,stride:3,frustumCulled:!0,...r,children:e.jsx(w,{transparent:!0,color:"#efb283",size:.002,sizeAttenuation:!0,depthWrite:!1})})})},O=()=>e.jsxs(d,{camera:{position:[0,0,1]},style:{position:"absolute",width:"100%",height:"auto",inset:"0"},children:[e.jsx(c.Suspense,{fallback:null,children:e.jsx(I,{})}),e.jsx(u,{all:!0})]}),L=i.div`
  display: flex;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background-color: #3b3b4d;
  margin: 5vw;
`,E=i.img`
  width: auto;
  height: auto;
`,M=i.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 20px;
`,R=i.h2`
  color: white;
`,z=i.p`
  color: white;
`,p=i.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  p {
    color: white;
  }
`,N=()=>e.jsxs(L,{children:[e.jsx(E,{src:"https://avatars.githubusercontent.com/u/76274024?v=4"}),e.jsxs(M,{children:[e.jsx(R,{children:"My name is Aphinan."}),e.jsx(z,{children:"You can call me Andrew."}),e.jsxs(p,{children:[e.jsx("img",{src:"https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png"}),e.jsx("p",{children:" : Anduhhh_a"})]}),e.jsxs(p,{children:[e.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/124/124010.png"}),e.jsx("p",{children:" : Apinan Thongpoo"})]})]})]});function T(){return e.jsx(e.Fragment,{children:e.jsx("div",{style:{backgroundColor:"black",width:"100vw",height:"100vh"},children:e.jsxs("div",{style:{position:"relative",width:"100vw",height:"90vh"},children:[e.jsx(O,{}),e.jsxs(P.div,{variants:F("right","tween",.2,1),style:{display:"flex",width:"100vw",height:"100%",zIndex:0},children:[e.jsx(N,{}),e.jsx(S,{})]})]})})})}m.createRoot(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(T,{})}));
