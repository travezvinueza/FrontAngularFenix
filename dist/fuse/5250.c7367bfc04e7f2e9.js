"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[5250],{5250:(U,r,n)=>{n.r(r),n.d(r,{AuthSignOutModule:()=>e});var a=n(1390),d=n(4859),m=n(5804),h=n(4466),g=n(7579),f=n(5963),v=n(8746),x=n(2529),p=n(2722),A=n(8505),t=n(4650),y=n(8951),S=n(7915),l=n(6895);function Z(u,o){if(1&u&&(t.ynx(0),t._uU(1),t.ALo(2,"i18nPlural"),t.BQk()),2&u){const s=t.oxw();t.xp6(1),t.hij(" Redireccionando en ",t.xi3(2,1,s.countdown,s.countdownMapping)," ")}}function O(u,o){1&u&&(t.ynx(0),t._uU(1," \xa1Ahora est\xe1s siendo redirigido! "),t.BQk())}const T=function(){return["/sign-in"]};class i{constructor(o,s,c){this._authService=o,this._router=s,this._alertService=c,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new g.x}ngOnInit(){this._alertService.showAlert=!1,this._authService.signOut(),(0,f.H)(1e3,1e3).pipe((0,v.x)(()=>{this._router.navigate(["sign-in"])}),(0,x.o)(()=>this.countdown>0),(0,p.R)(this._unsubscribeAll),(0,A.b)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(y.e),t.Y36(a.F0),t.Y36(S.c))};static#n=this.\u0275cmp=t.Xpm({type:i,selectors:[["auth-sign-out"]],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(s,c){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Te has desconectado!"),t.qZA(),t.TgZ(7,"div",6),t.YNc(8,Z,3,4,"ng-container",7),t.YNc(9,O,2,0,"ng-container",7),t.qZA(),t.TgZ(10,"div",8)(11,"span"),t._uU(12,"Ir a"),t.qZA(),t.TgZ(13,"a",9),t._uU(14,"Log In "),t.qZA()()()()()),2&s&&(t.xp6(8),t.Q6J("ngIf",c.countdown>0),t.xp6(1),t.Q6J("ngIf",0===c.countdown),t.xp6(4),t.Q6J("routerLink",t.DdM(3,T)))},dependencies:[a.rH,l.O5,l.Gx],encapsulation:2})}const w=[{path:"",component:i}];class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#n=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(w),d.ot,m.J,h.m]})}}}]);