import{a as H}from"./chunk-XX5H66C2.js";import{a as G}from"./chunk-TCNXGT47.js";import{h as F,i as L,j as I,l as q,o as W,r as A,t as U,w as Q,z as $}from"./chunk-MHUBTLV4.js";import{Ab as E,Bb as x,Cb as O,Db as N,Ea as D,Eb as P,Gb as v,Ha as c,Hb as b,Ia as h,Ib as z,Sa as T,Ta as f,V as u,Xa as w,dc as R,ea as m,ec as k,fa as p,fc as j,gb as C,gc as B,kb as i,lb as r,mb as g,nb as S,pb as _,rb as s,yb as V,zb as a}from"./chunk-GIEWQE6O.js";function X(e,o){if(e&1){let t=S();i(0,"li"),g(1,"img",6),i(2,"p"),a(3),r(),i(4,"p"),a(5),v(6,"currency"),r(),i(7,"label"),a(8," Quantidade: "),i(9,"input",7),P("ngModelChange",function(n){let d=m(t).$implicit;return N(d.quantidadeCarrinho,n)||(d.quantidadeCarrinho=n),p(n)}),_("change",function(){m(t);let n=s(2);return p(n.atualizaTotal())}),r()(),i(10,"p"),a(11),v(12,"currency"),r(),i(13,"button",8),_("click",function(){let n=m(t).$implicit,d=s(2);return p(d.removerDoCarrinho(n.id))}),g(14,"i",9),r()()}if(e&2){let t=o.$implicit;c(),C("src",t.imagem,D),c(2),x(" ",t.descricao,""),c(2),E(b(6,5,t.preco,"BRL")),c(4),O("ngModel",t.quantidadeCarrinho),c(2),x("Total deste item: ",b(12,8,t.preco*t.quantidadeCarrinho,"BRL"),"")}}function Y(e,o){if(e&1){let t=S();i(0,"div")(1,"ul"),w(2,X,15,11,"li",3),r(),i(3,"h2",4),a(4),v(5,"currency"),r(),i(6,"button",5),_("click",function(){m(t);let n=s();return p(n.comprar())}),a(7,"Comprar"),r()()}if(e&2){let t=s();c(2),C("ngForOf",t.carrinhoDeCompras),c(2),x(" Total: ",b(5,2,t.total,"BRL")," ")}}function Z(e,o){e&1&&(i(0,"p"),a(1,"Seu carrinho est\xE1 vazio! Vamos colocar algo aqui?"),r(),g(2,"br"),i(3,"button",10),a(4,"Continuar Comprando"),r())}var y=class e{constructor(o,t,l){this.carrinho=o;this.notificacao=t;this.router=l}carrinhoDeCompras=[];total=0;ngOnInit(){this.carrinhoDeCompras=this.carrinho.obtemCarrinho(),this.total=this.carrinho.calculaTotal()}removerDoCarrinho(o){this.carrinhoDeCompras=this.carrinhoDeCompras.filter(t=>t.id!=o),this.carrinho.removerDoCarrinho(o),this.atualizaTotal()}atualizaTotal(){this.carrinho.carrinhoDeCompras=this.carrinhoDeCompras,this.carrinho.atualizaCarrinho(),this.total=this.carrinho.calculaTotal()}comprar(){this.notificacao.notificar("Compra efetuada com sucesso","Continuar comprando"),this.limparCarrinho(),this.router.navigateByUrl("produtos")}limparCarrinho(){this.carrinhoDeCompras=[],this.atualizaTotal()}static \u0275fac=function(t){return new(t||e)(h(H),h(G),h(F))};static \u0275cmp=T({type:e,selectors:[["app-carrinho"]],standalone:!1,decls:5,vars:2,consts:[["carrinhoVazio",""],[1,"cart-title"],[4,"ngIf","ngIfElse"],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],["alt","",3,"src"],["type","number","min","1",3,"ngModelChange","change","ngModel"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-x"],["routerLink","../produtos",1,"buy-button"]],template:function(t,l){if(t&1&&(i(0,"h2",1),a(1,"Carrinho"),r(),w(2,Y,8,5,"div",2)(3,Z,5,0,"ng-template",null,0,z)),t&2){let n=V(4);c(2),C("ngIf",l.carrinhoDeCompras.length>0)("ngIfElse",n)}},dependencies:[R,k,L,q,U,W,Q,A,j],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]})};var tt=[{path:"",component:y}],M=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=f({type:e});static \u0275inj=u({imports:[I.forChild(tt),I]})};var K=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=f({type:e});static \u0275inj=u({imports:[B,M,$]})};export{K as CarrinhoModule};
