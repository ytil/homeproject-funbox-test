(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),s=a.n(r);a(17);var c=function(e){var t=e.children;return l.a.createElement("h1",{className:"promo-title"},t)},i=a(2),d=a(5),o=a(6),u=a(9),p=a(7),m=a(1),h=a(10),f=a(8),b=a.n(f),v=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(m.a)(a)),a.handleMouseEnter=a.handleMouseEnter.bind(Object(m.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(m.a)(a)),a.state={stateName:a.props.initial,cardData:a.generateState(a.props.initial)},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"generateState",value:function(e){switch(e){case"default":return Object(i.a)({},this.props.data,{description:this.defaultCardDescription,classNamePostfix:"default"});case"defaultHover":return Object(i.a)({},this.props.data,{description:this.defaultCardDescription,classNamePostfix:"default-hover"});case"selected":return Object(i.a)({},this.props.data,{description:this.selectedCardDescription,classNamePostfix:"selected"});case"selectedHover":return Object(i.a)({},this.props.data,{title:"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?",description:this.selectedCardDescription,classNamePostfix:"selected-hover"});case"disabled":return Object(i.a)({},this.props.data,{description:this.disabledCardDescription,classNamePostfix:"disabled"});default:return}}},{key:"goToState",value:function(e){this.setState({stateName:e,cardData:this.generateState(e)})}},{key:"handleMouseEnter",value:function(){var e=this.state.stateName;return"selected"===e?this.goToState("selectedHover"):"default"===e?this.goToState("defaultHover"):void 0}},{key:"handleMouseLeave",value:function(){var e=this.state.stateName;return"selectedHover"===e?this.goToState("selected"):"defaultHover"===e?this.goToState("default"):void 0}},{key:"handleClick",value:function(){var e=this.state.stateName;return"default"===e||"defaultHover"===e?this.goToState("selected"):"selected"===e||"selectedHover"===e?this.goToState("default"):void 0}},{key:"render",value:function(){var e=this.state.cardData,t=e.title,a=e.brand,n=e.taste,r=e.quantityOfFeed,s=e.feedText,c=e.quantityOfBonus,i=e.bonusText,d=e.additionalInfo,o=e.totalWeight,u=e.description,p=e.classNamePostfix;return l.a.createElement("li",{className:"product-list__item product"},l.a.createElement("div",{onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,className:"product__inner card card--".concat(p)},l.a.createElement("span",{className:"product__title product__title--".concat(p)},t),l.a.createElement("br",null),l.a.createElement("b",{className:"product__brand"},a),l.a.createElement("br",null),l.a.createElement("b",{className:"product__taste"},n),l.a.createElement("br",null),l.a.createElement("span",{className:"product__amount"},l.a.createElement("b",null,r)," ",l.a.createElement("span",null,s)),l.a.createElement("br",null),l.a.createElement("span",{className:"product__bonus"},l.a.createElement("b",null,c)," ",l.a.createElement("span",null,i)),l.a.createElement("br",null),l.a.createElement("span",{className:"product__additional"},d),l.a.createElement("br",null),l.a.createElement("div",{className:"product__weight product__weight"},l.a.createElement("span",{className:"product__weight--total"},o),l.a.createElement("span",{className:"product__weight--kg"},"\u043a\u0433")),l.a.createElement("img",{className:"product__image",src:b.a,alt:"\u0421\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439 \u043a\u043e\u0442",title:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u0442\u0430"})),l.a.createElement("div",{className:"product__description product__description--".concat(p)},u))}},{key:"defaultCardDescription",get:function(){return l.a.createElement(l.a.Fragment,null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d,"," ",l.a.createElement("span",{onClick:this.handleClick,className:"product__buy"},"\u043a\u0443\u043f\u0438."))}},{key:"selectedCardDescription",get:function(){return l.a.createElement(l.a.Fragment,null,this.props.data.description)}},{key:"disabledCardDescription",get:function(){return l.a.createElement(l.a.Fragment,null,"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ",this.props.data.taste," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f.")}}]),t}(n.Component),E=[{cardId:1,title:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",brand:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",quantityOfFeed:10,feedText:"\u043f\u043e\u0440\u0446\u0438\u0439",quantityOfBonus:null,bonusText:"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",additionalInfo:null,totalWeight:"0,5",available:!0,description:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438."},{cardId:2,title:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",brand:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u0440\u044b\u0431\u043e\u0439",quantityOfFeed:40,feedText:"\u043f\u043e\u0440\u0446\u0438\u0439",quantityOfBonus:2,bonusText:"\u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",additionalInfo:null,totalWeight:"2",available:!0,description:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430."},{cardId:3,title:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",brand:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",taste:"\u0441 \u043a\u0443\u0440\u043e\u0439",quantityOfFeed:100,feedText:"\u043f\u043e\u0440\u0446\u0438\u0439",quantityOfBonus:5,bonusText:"\u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",additionalInfo:"\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d",totalWeight:"5",available:!1,description:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435."}];var _=function(){return l.a.createElement("ul",{className:"product-list"},E.map(function(e){var t=e.available?"default":"disabled";return l.a.createElement(v,{key:e.cardId,data:e,initial:t})}))};var g=function(){return l.a.createElement("div",{className:"app-container"},l.a.createElement(c,null,"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),l.a.createElement(_,null))};s.a.render(l.a.createElement(g,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/cat.dce0de7e.png"}},[[11,1,2]]]);
//# sourceMappingURL=main.56f9249a.chunk.js.map