(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852],{5798:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-product",function(){return a(9913)}])},9913:function(e,t,a){"use strict";a.r(t);var u=a(5893),r=a(7294),n=a(9473),s=a(5976),o=a(1163),l=a(1597),i=a.n(l);t.default=()=>{let[e,t]=(0,r.useState)(""),[a,l]=(0,r.useState)(""),[c,p]=(0,r.useState)(""),[d,_]=(0,r.useState)(""),[h,x]=(0,r.useState)(""),m=(0,n.I0)(),f=(0,o.useRouter)();return(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{className:i().button,onClick:()=>f.push("/products"),style:{marginBottom:"20px"},children:"← Назад к продуктам"}),(0,u.jsxs)("form",{className:i().form,onSubmit:t=>{if(t.preventDefault(),!e||!a||!c||!d||!h){alert("Пожалуйста, заполните все обязательные поля!");return}let u={id:Date.now().toString(),title:e,description:a,image:c,price:parseFloat(d),category:h,liked:!1};m((0,s.gK)(u)),alert("Продукт успешно создан!"),f.push("/products")},children:[(0,u.jsx)("input",{className:i().input,type:"text",placeholder:"Название",value:e,onChange:e=>t(e.target.value),required:!0}),(0,u.jsx)("textarea",{className:i().textarea,placeholder:"Описание",value:a,onChange:e=>l(e.target.value),required:!0}),(0,u.jsx)("input",{className:i().input,type:"text",placeholder:"URL картинки",value:c,onChange:e=>p(e.target.value),required:!0}),(0,u.jsx)("input",{className:i().input,type:"number",placeholder:"Цена",value:d,onChange:e=>_(e.target.value),required:!0}),(0,u.jsx)("input",{className:i().input,type:"text",placeholder:"Категория",value:h,onChange:e=>x(e.target.value),required:!0}),(0,u.jsx)("button",{className:i().button,type:"submit",children:"Создать продукт"})]})]})}},1597:function(e){e.exports={form:"CreateProduct_form__6sK4V",input:"CreateProduct_input__Itkzc",textarea:"CreateProduct_textarea__T2mtf",button:"CreateProduct_button__PAFed"}},1163:function(e,t,a){e.exports=a(9974)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5798)}),_N_E=e.O()}]);