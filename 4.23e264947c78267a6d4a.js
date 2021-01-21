(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{zrcO:function(e,t,i){"use strict";i.r(t),i.d(t,"UsersModule",function(){return q});var r=i("3Pt+"),s=i("ofXK"),n=i("tyNb"),b=i("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Bb({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,t){1&e&&(b.Kb(0,"div",0),b.Kb(1,"div",1),b.Ib(2,"router-outlet"),b.Jb(),b.Jb())},directives:[n.f],encapsulation:2}),e})();var c=i("SxV6"),d=i("J9tS");function a(e,t){1&e&&(b.Kb(0,"h1"),b.dc(1,"Add New Flash Card"),b.Jb())}function u(e,t){1&e&&(b.Kb(0,"h1"),b.dc(1,"Edit User"),b.Jb())}function l(e,t){1&e&&(b.Kb(0,"div"),b.dc(1,"Question is required"),b.Jb())}function f(e,t){if(1&e&&(b.Kb(0,"div",13),b.cc(1,l,2,0,"div",0),b.Jb()),2&e){const e=b.Tb();b.wb(1),b.Ub("ngIf",e.f.firstName.errors.required)}}function h(e,t){1&e&&(b.Kb(0,"div"),b.dc(1,"Answer is required"),b.Jb())}function p(e,t){if(1&e&&(b.Kb(0,"div",13),b.cc(1,h,2,0,"div",0),b.Jb()),2&e){const e=b.Tb();b.wb(1),b.Ub("ngIf",e.f.lastName.errors.required)}}function m(e,t){1&e&&b.Ib(0,"span",14)}function g(e,t){1&e&&b.Ib(0,"span",33)}function v(e,t){1&e&&b.Ib(0,"span")}function w(e,t){if(1&e){const e=b.Lb();b.Kb(0,"span"),b.Kb(1,"p",23),b.dc(2),b.Jb(),b.Ib(3,"hr"),b.Kb(4,"td",24),b.Kb(5,"div",11),b.Kb(6,"div",25),b.Rb("click",function(){b.Yb(e);const t=b.Tb().$implicit;return b.Tb().changeColor(t.id)}),b.Ib(7,"i",26),b.Jb(),b.Kb(8,"div",25),b.Rb("click",function(){b.Yb(e);const t=b.Tb().$implicit;return b.Tb().CrossColors(t.id)}),b.Ib(9,"i",27),b.Jb(),b.Kb(10,"div",21),b.Kb(11,"a",28),b.Ib(12,"i",29),b.Jb(),b.Jb(),b.Kb(13,"div",21),b.Kb(14,"button",30),b.Rb("click",function(){b.Yb(e);const t=b.Tb().$implicit;return b.Tb().deleteUser(t.id)}),b.cc(15,g,1,0,"span",31),b.cc(16,v,1,0,"span",0),b.Ib(17,"i",32),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&e){const e=b.Tb().$implicit;b.wb(2),b.ec(e.lastName),b.wb(9),b.Vb("routerLink","edit/",e.id,""),b.wb(3),b.Ub("disabled",e.isDeleting),b.wb(1),b.Ub("ngIf",e.isDeleting),b.wb(1),b.Ub("ngIf",!e.isDeleting)}}const J=function(e){return{"background-color":e}};function K(e,t){if(1&e){const e=b.Lb();b.Kb(0,"div",15),b.Kb(1,"div",16),b.Kb(2,"div",17),b.Kb(3,"div",18),b.Rb("click",function(){return b.Yb(e),b.Tb().toggle()}),b.Kb(4,"div",19),b.Kb(5,"h5",20),b.dc(6),b.Jb(),b.Jb(),b.Kb(7,"div",21),b.Kb(8,"i",22),b.dc(9),b.Jb(),b.Jb(),b.Jb(),b.cc(10,w,18,5,"span",0),b.Jb(),b.Jb(),b.Jb()}if(2&e){const e=t.$implicit,i=b.Tb();b.wb(3),b.Ub("ngStyle",b.Wb(4,J,i.bgColor)),b.wb(3),b.ec(e.firstName),b.wb(3),b.ec(i.buttonName),b.wb(1),b.Ub("ngIf",i.show)}}const I=function(e){return{"is-invalid":e}};let U=(()=>{class e{constructor(e,t,i,r,s){this.userService=e,this.formBuilder=t,this.route=i,this.router=r,this.alertService=s,this.loading=!1,this.submitted=!1,this.show=!1,this.buttonName="",this.bgColor="#e6e6e6",this.color=""}ngOnInit(){this.userService.getAll().pipe(Object(c.a)()).subscribe(e=>this.users=e),this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({firstName:["",r.h.required],lastName:["",r.h.required]},{}),this.isAddMode||this.userService.getById(this.id).pipe(Object(c.a)()).subscribe(e=>this.form.patchValue(e))}deleteUser(e){const t=this.users.find(t=>t.id===e);t&&(t.isDeleting=!0,this.userService.delete(e).pipe(Object(c.a)()).subscribe(()=>this.users=this.users.filter(t=>t.id!==e)))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.userService.create(this.form.value).pipe(Object(c.a)()).subscribe(()=>{this.alertService.success("User added",{keepAfterRouteChange:!0}),this.router.navigate(["/user"],{relativeTo:this.route})}).add(()=>this.loading=!1)}updateUser(){this.userService.update(this.id,this.form.value).pipe(Object(c.a)()).subscribe(()=>{this.alertService.success("updated",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})}).add(()=>this.loading=!1)}toggle(){this.show=!this.show,this.buttonName=""}changeColor(e){this.userService.getById(e).pipe(Object(c.a)()).subscribe(e=>this.users=this.users.filter(e=>this.bgColor="#00e600"))}CrossColors(e){this.userService.getById(e).pipe(Object(c.a)()).subscribe(e=>this.users=this.users.filter(e=>this.bgColor="#e62e00"))}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(d.b),b.Hb(r.b),b.Hb(n.a),b.Hb(n.c),b.Hb(d.a))},e.\u0275cmp=b.Bb({type:e,selectors:[["ng-component"]],decls:24,vars:14,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/",1,"btn","btn-light",2,"position","relative","left","10px"],[1,"row"],["class","col-sm-3 ",4,"ngFor","ngForOf"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"],[1,"col-sm-3"],[1,"card",2,"padding","15px","background-color","white"],[1,"card","text-center"],["id","bt",1,"row","card-header",2,"text-align","left","cursor","pointer",3,"ngStyle","click"],[1,"col-9"],[2,"text-align","left"],[1,"col-3"],[1,"fas","fa-angle-down",2,"text-align","left","cursor","pointer","font-size","18px","position","absolute","top","8px","right","26px"],[1,"card-text"],[2,"white-space","nowrap"],[1,"col-3",2,"text-align","left","cursor","pointer",3,"click"],[1,"fa","fa-check",2,"font-size","24px","color","#007bff"],[1,"fa","fa-remove",2,"font-size","24px","color","#007bff"],[3,"routerLink"],[1,"fas","fa-edit",2,"font-size","24px"],[1,"btn","btn-sm","btn-primary",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"fas","fa-trash"],[1,"spinner-border","spinner-border-sm"]],template:function(e,t){1&e&&(b.cc(0,a,2,0,"h1",0),b.cc(1,u,2,0,"h1",0),b.Kb(2,"form",1),b.Rb("ngSubmit",function(){return t.onSubmit()}),b.Kb(3,"div",2),b.Kb(4,"div",3),b.Kb(5,"label"),b.dc(6,"Question"),b.Jb(),b.Ib(7,"input",4),b.cc(8,f,2,1,"div",5),b.Jb(),b.Jb(),b.Kb(9,"div",2),b.Kb(10,"div",3),b.Kb(11,"label"),b.dc(12,"Answer"),b.Jb(),b.Ib(13,"input",6),b.cc(14,p,2,1,"div",5),b.Jb(),b.Jb(),b.Kb(15,"div",7),b.Kb(16,"button",8),b.cc(17,m,1,0,"span",9),b.dc(18," Submit "),b.Jb(),b.Kb(19,"a",10),b.dc(20,"Clear"),b.Jb(),b.Jb(),b.Jb(),b.Kb(21,"div",11),b.cc(22,K,11,6,"div",12),b.Jb(),b.Ib(23,"br")),2&e&&(b.Ub("ngIf",t.isAddMode),b.wb(1),b.Ub("ngIf",!t.isAddMode),b.wb(1),b.Ub("formGroup",t.form),b.wb(5),b.Ub("ngClass",b.Wb(10,I,t.submitted&&t.f.firstName.errors)),b.wb(1),b.Ub("ngIf",t.submitted&&t.f.firstName.errors),b.wb(5),b.Ub("ngClass",b.Wb(12,I,t.submitted&&t.f.lastName.errors)),b.wb(1),b.Ub("ngIf",t.submitted&&t.f.lastName.errors),b.wb(2),b.Ub("disabled",t.loading),b.wb(1),b.Ub("ngIf",t.loading),b.wb(5),b.Ub("ngForOf",t.users))},directives:[s.j,r.i,r.f,r.d,r.a,r.e,r.c,s.h,n.d,s.i,s.k],styles:[".card[_ngcontent-%COMP%]{\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.1);\n  transition: 0.3s;\n  \n  border-radius: 15px;\n   background-color: white;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}"]}),e})();function C(e,t){1&e&&(b.Kb(0,"h1"),b.dc(1,"Add New Flash Card"),b.Jb())}function S(e,t){1&e&&(b.Kb(0,"h1"),b.dc(1,"Update Flash Card"),b.Jb())}function N(e,t){1&e&&(b.Kb(0,"div"),b.dc(1,"Question is required"),b.Jb())}function x(e,t){if(1&e&&(b.Kb(0,"div",11),b.cc(1,N,2,0,"div",0),b.Jb()),2&e){const e=b.Tb();b.wb(1),b.Ub("ngIf",e.f.firstName.errors.required)}}function k(e,t){1&e&&(b.Kb(0,"div"),b.dc(1,"Answer is required"),b.Jb())}function y(e,t){if(1&e&&(b.Kb(0,"div",11),b.cc(1,k,2,0,"div",0),b.Jb()),2&e){const e=b.Tb();b.wb(1),b.Ub("ngIf",e.f.lastName.errors.required)}}function A(e,t){1&e&&b.Ib(0,"span",12)}const O=function(e){return{"is-invalid":e}};let T=(()=>{class e{constructor(e,t,i,r,s){this.formBuilder=e,this.route=t,this.router=i,this.userService=r,this.alertService=s,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const e=[r.h.minLength(6)];this.isAddMode&&e.push(r.h.required),this.form=this.formBuilder.group({title:[""],firstName:["",r.h.required],lastName:["",r.h.required],email:[""],role:[""],password:[""],confirmPassword:[""]},{}),this.isAddMode||this.userService.getById(this.id).pipe(Object(c.a)()).subscribe(e=>this.form.patchValue(e))}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.userService.create(this.form.value).pipe(Object(c.a)()).subscribe(()=>{this.alertService.success("added",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})}).add(()=>this.loading=!1)}updateUser(){this.userService.update(this.id,this.form.value).pipe(Object(c.a)()).subscribe(()=>{this.alertService.success("updated",{keepAfterRouteChange:!0}),this.router.navigate(["../../"],{relativeTo:this.route})}).add(()=>this.loading=!1)}}return e.\u0275fac=function(t){return new(t||e)(b.Hb(r.b),b.Hb(n.a),b.Hb(n.c),b.Hb(d.b),b.Hb(d.a))},e.\u0275cmp=b.Bb({type:e,selectors:[["ng-component"]],decls:21,vars:13,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/",1,"btn","btn-light",2,"position","relative","left","10px"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(b.cc(0,C,2,0,"h1",0),b.cc(1,S,2,0,"h1",0),b.Kb(2,"form",1),b.Rb("ngSubmit",function(){return t.onSubmit()}),b.Kb(3,"div",2),b.Kb(4,"div",3),b.Kb(5,"label"),b.dc(6,"Question"),b.Jb(),b.Ib(7,"input",4),b.cc(8,x,2,1,"div",5),b.Jb(),b.Jb(),b.Kb(9,"div",2),b.Kb(10,"div",3),b.Kb(11,"label"),b.dc(12,"Answer"),b.Jb(),b.Ib(13,"input",6),b.cc(14,y,2,1,"div",5),b.Jb(),b.Jb(),b.Kb(15,"div",7),b.Kb(16,"button",8),b.cc(17,A,1,0,"span",9),b.dc(18," Submit "),b.Jb(),b.Kb(19,"a",10),b.dc(20,"Cancel"),b.Jb(),b.Jb(),b.Jb()),2&e&&(b.Ub("ngIf",t.isAddMode),b.wb(1),b.Ub("ngIf",!t.isAddMode),b.wb(1),b.Ub("formGroup",t.form),b.wb(5),b.Ub("ngClass",b.Wb(9,O,t.submitted&&t.f.firstName.errors)),b.wb(1),b.Ub("ngIf",t.submitted&&t.f.firstName.errors),b.wb(5),b.Ub("ngClass",b.Wb(11,O,t.submitted&&t.f.lastName.errors)),b.wb(1),b.Ub("ngIf",t.submitted&&t.f.lastName.errors),b.wb(2),b.Ub("disabled",t.loading),b.wb(1),b.Ub("ngIf",t.loading))},directives:[s.j,r.i,r.f,r.d,r.a,r.e,r.c,s.h,n.d],encapsulation:2}),e})();const M=[{path:"",component:o,children:[{path:"",component:U},{path:"add",component:T},{path:"edit/:id",component:T},{path:"/:id",component:U}]}];let j=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[n.e.forChild(M)],n.e]}),e})(),q=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(t){return new(t||e)},imports:[[s.b,r.g,j]]}),e})()}}]);