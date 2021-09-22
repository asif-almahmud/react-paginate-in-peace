"use strict";var e=require("@babel/runtime/helpers/slicedToArray"),o=require("react"),n=require("prop-types");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e),a=t(o),l=t(n),i=[],c=[];!function(e,o){if(e&&"undefined"!=typeof document){var n,t=!0===o.prepend?"prepend":"append",r=!0===o.singleTag,a="string"==typeof o.container?document.querySelector(o.container):document.getElementsByTagName("head")[0];if(r){var l=i.indexOf(a);-1===l&&(l=i.push(a)-1,c[l]={}),n=c[l]&&c[l][t]?c[l][t]:c[l][t]=d()}else n=d();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function d(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),o.attributes)for(var n=Object.keys(o.attributes),r=0;r<n.length;r++)e.setAttribute(n[r],o.attributes[n[r]]);var l="prepend"===t?"afterbegin":"beforeend";return a.insertAdjacentElement(l,e),e}}('/* Arrow Style */\n.arrow {\n  border: solid #000000;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 4px;\n}\n\n.arrowDouble {\n  border: solid rgb(0, 0, 0);\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 4px;\n  position: relative;\n}\n\n.arrowDouble::after {\n  content: "";\n  border: solid;\n  border-color: inherit;\n  border-width: 0 2px 2px 0;\n  display: inline-block;\n  padding: 4px;\n  position: absolute;\n  inset: 0px;\n  left: 6px;\n  top: 6px;\n}\n\n.right {\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n}\n\n.left {\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n}\n\n/* Main Styles */\n.paginationContainer {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.firstPageActive,\n.lastPageActive {\n  margin: 8px;\n  text-align: center;\n  color: #464646;\n  font-weight: 400;\n  transition: all 0.2s linear;\n}\n.firstPageInactive,\n.lastPageInactive {\n  margin: 8px;\n  text-align: center;\n  font-weight: bolder;\n  cursor: pointer;\n  transition: all 0.2s linear;\n}\n\n.firstPageInactive:hover,\n.lastPageInactive:hover {\n  font-weight: 700;\n}\n\n.pageNoActive {\n  margin: 4px;\n  padding: 0px 6px;\n  text-align: center;\n  color: #ffffff;\n  background-color: #161616;\n  font-weight: 600;\n  border: 1px solid #161616;\n  border-radius: 4px;\n  transition: all 0.2s ease-in;\n}\n\n.pageNoInactive {\n  margin: 4px;\n  padding: 0px 6px;\n  text-align: center;\n  font-weight: 700;\n  cursor: pointer;\n  border: 1px solid rgb(0, 0, 0);\n  border-radius: 4px;\n  transition: all 0.2s ease-in;\n}\n\n.pageNoInactive:hover {\n  color: white;\n  background-color: #000000;\n}\n\n/* ---------- For Small Devices ----------- */\n\n/* ---------------- max-width: 500px ------------------ */\n\n@media only screen and (max-width: 500px) {\n  .arrow {\n    display: none;\n  }\n\n  .firstPageActive,\n  .lastPageActive {\n    margin: 6px;\n  }\n  .firstPageInactive,\n  .lastPageInactive {\n    margin: 6px;\n  }\n}\n\n/* ---------------- max-width: 420px ------------------ */\n\n@media only screen and (max-width: 420px) {\n  .arrow {\n    display: none;\n  }\n\n  .arrowDouble {\n    border: solid rgb(0, 0, 0);\n    border-width: 0 1px 1px 0;\n    display: inline-block;\n    padding: 4px;\n  }\n\n  .arrowDouble::after {\n    content: "";\n    border: solid;\n    border-color: inherit;\n    border-width: 0 1px 1px 0;\n    display: inline-block;\n    padding: 4px;\n    position: absolute;\n    inset: 0px;\n    left: 3px;\n    top: 3px;\n  }\n\n  .firstPageActive,\n  .lastPageActive {\n    margin: 4px;\n  }\n  .firstPageInactive,\n  .lastPageInactive {\n    margin: 4px;\n  }\n\n  .pageNoActive {\n    margin: 2px;\n    padding: 0px 5px;\n    border: 0px;\n    font-size: 16px;\n  }\n\n  .pageNoInactive {\n    margin: 2px;\n    padding: 0px 5px;\n    border: 0px;\n    font-size: 16px;\n  }\n}\n\n/* ---------------- max-width: 324px ------------------ */\n\n@media only screen and (max-width: 324px) {\n  .arrow {\n    display: none;\n  }\n\n  .arrowDouble {\n    border: solid rgb(0, 0, 0);\n    border-width: 0 1px 1px 0;\n    display: inline-block;\n    padding: 4px;\n  }\n\n  .arrowDouble::after {\n    content: "";\n    border: solid;\n    border-color: inherit;\n    border-width: 0 1px 1px 0;\n    display: inline-block;\n    padding: 4px;\n    position: absolute;\n    inset: 0px;\n    left: 3px;\n    top: 3px;\n  }\n\n  .firstPageActive,\n  .lastPageActive {\n    margin: 3px;\n  }\n  .firstPageInactive,\n  .lastPageInactive {\n    margin: 3px;\n  }\n\n  .pageNoActive {\n    margin: 1px;\n    padding: 0px 4px;\n    border: 0px;\n    font-size: 15px;\n  }\n\n  .pageNoInactive {\n    margin: 1px;\n    padding: 0px 4px;\n    border: 0px;\n    font-size: 15px;\n  }\n}\n',{});var d=function(e){var n=e.totalPageCount,t=e.setPage,l=e.activeDigitColor,i=e.activeBackgroundColor,c=e.buttonBorderColor,d=e.arrowColor,s=e.dotColor,p=o.useState(Math.ceil(n)),u=r.default(p,2),g=u[0],f=u[1],b=o.useState(1),v=r.default(b,2),m=v[0],C=v[1];return o.useEffect((function(){f(Math.ceil(n)),C(1)}),[n]),a.default.createElement("div",{className:"paginationContainer"},g<11&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{onClick:function(){t(1),C(1)},className:1===m?"firstPageActive":"firstPageInactive"},a.default.createElement("i",{style:{opacity:1===m?"0.5":null,borderColor:d},className:"arrowDouble".concat(" ","left"," ",1===m?"activeStyle":"inactiveStyle")})),a.default.createElement("div",{onClick:function(){m>1&&(t(m-1),C(m-1))},className:1===m?"firstPageActive":"firstPageInactive"},a.default.createElement("i",{style:{opacity:1===m?"0.5":null,borderColor:d},className:"arrow".concat(" ","left")})),g>0&&a.default.createElement("div",{onClick:function(){t(1),C(1)},style:{borderColor:props.borderColor?c:i,backgroundColor:1===m?i:l,color:1===m?l:i},className:1===m?"pageNoActive":"pageNoInactive"},"1"),g>1&&a.default.createElement("div",{onClick:function(){t(2),C(2)},style:{borderColor:props.borderColor?c:i,backgroundColor:2===m?i:l,color:2===m?l:i},className:2===m?"pageNoActive":"pageNoInactive"},"2"),g>2&&a.default.createElement("div",{onClick:function(){t(3),C(3)},style:{borderColor:props.borderColor?c:i,backgroundColor:3===m?i:l,color:3===m?l:i},className:3===m?"pageNoActive":"pageNoInactive"},"3"),g>3&&a.default.createElement("div",{onClick:function(){t(4),C(4)},style:{borderColor:props.borderColor?c:i,backgroundColor:4===m?i:l,color:4===m?l:i},className:4===m?"pageNoActive":"pageNoInactive"},"4"),g>4&&a.default.createElement("div",{onClick:function(){t(5),C(5)},style:{borderColor:props.borderColor?c:i,backgroundColor:5===m?i:l,color:5===m?l:i},className:5===m?"pageNoActive":"pageNoInactive"},"5"),g>5&&a.default.createElement("div",{onClick:function(){t(6),C(6)},style:{borderColor:props.borderColor?c:i,backgroundColor:6===m?i:l,color:6===m?l:i},className:6===m?"pageNoActive":"pageNoInactive"},"6"),g>6&&a.default.createElement("div",{onClick:function(){t(7),C(7)},style:{borderColor:props.borderColor?c:i,backgroundColor:7===m?i:l,color:7===m?l:i},className:7===m?"pageNoActive":"pageNoInactive"},"7"),g>7&&a.default.createElement("div",{onClick:function(){t(8),C(8)},style:{borderColor:props.borderColor?c:i,backgroundColor:8===m?i:l,color:8===m?l:i},className:8===m?"pageNoActive":"pageNoInactive"},"8"),g>8&&a.default.createElement("div",{onClick:function(){t(9),C(9)},style:{borderColor:props.borderColor?c:i,backgroundColor:9===m?i:l,color:9===m?l:i},className:9===m?"pageNoActive":"pageNoInactive"},"9"),g>9&&a.default.createElement("div",{onClick:function(){t(10),C(10)},style:{borderColor:props.borderColor?c:i,backgroundColor:10===m?i:l,color:10===m?l:i},className:10===m?"pageNoActive":"pageNoInactive"},"10"),a.default.createElement("div",{onClick:function(){m<Math.ceil(g)&&(t(m+1),C(m+1))},className:m===Math.ceil(g)?"lastPageActive":"lastPageInactive"},a.default.createElement("i",{style:{opacity:m===Math.ceil(g)?"0.5":null,borderColor:d},className:"arrow".concat(" ","right")})),a.default.createElement("div",{onClick:function(){t(Math.ceil(g)),C(Math.ceil(g))},className:m===Math.ceil(g)?"lastPageActive":"lastPageInactive"},a.default.createElement("i",{style:{opacity:m===Math.ceil(g)?"0.5":null,borderColor:d},className:"arrowDouble".concat(" ","right")}))),g>10&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{onClick:function(){t(1),C(1)},className:1===m?"firstPageActive":"firstPageInactive"},a.default.createElement("i",{style:{opacity:1===m?"0.5":null,borderColor:d},className:"arrowDouble".concat(" ","left"," ",1===m?"activeStyle":"inactiveStyle")})),a.default.createElement("div",{onClick:function(){m>1&&(t(m-1),C(m-1))},className:1===m?"firstPageActive":"firstPageInactive"},a.default.createElement("i",{style:{opacity:1===m?"0.5":null,borderColor:d},className:"arrow".concat(" ","left")})),a.default.createElement("div",{onClick:function(){t(1),C(1)},style:{borderColor:props.borderColor?c:i,backgroundColor:1===m?i:l,color:1===m?l:i},className:1===m?"pageNoActive":"pageNoInactive"},"1"),a.default.createElement("div",{onClick:function(){t(2),C(2)},style:{borderColor:props.borderColor?c:i,backgroundColor:2===m?i:l,color:2===m?l:i},className:2===m?"pageNoActive":"pageNoInactive"},"2"),m<6&&a.default.createElement("div",{onClick:function(){t(3),C(3)},style:{borderColor:props.borderColor?c:i,backgroundColor:3===m?i:l,color:3===m?l:i},className:3===m?"pageNoActive":"pageNoInactive"},"3"),m<6&&a.default.createElement("div",{onClick:function(){t(4),C(4)},style:{borderColor:props.borderColor?c:i,backgroundColor:4===m?i:l,color:4===m?l:i},className:4===m?"pageNoActive":"pageNoInactive"},"4"),m<6&&a.default.createElement("div",{onClick:function(){t(5),C(5)},style:{borderColor:props.borderColor?c:i,backgroundColor:5===m?i:l,color:5===m?l:i},className:5===m?"pageNoActive":"pageNoInactive"},"5"),m<6&&a.default.createElement("div",{onClick:function(){t(6),C(6)},style:{borderColor:props.borderColor?c:i,backgroundColor:6===m?i:l,color:6===m?l:i},className:6===m?"pageNoActive":"pageNoInactive"},"6"),a.default.createElement("div",{style:{color:s||"black"}}," ...",m>5&&m<g-4?a.default.createElement("span",null," "):null),m>5&&m<g-4?a.default.createElement("div",{onClick:function(){t(m-1),C(m-1)},style:{borderColor:props.borderColor?c:i,backgroundColor:m===m-1?i:l,color:m===m-1?l:i},className:m===m-1?"pageNoActive":"pageNoInactive"},m-1):a.default.createElement("div",{style:{color:"transparent"}},"."),m>5&&m<g-4&&a.default.createElement("div",{onClick:function(){t(m),C(m)},style:{borderColor:props.borderColor?c:i,backgroundColor:m==m?i:l,color:m==m?l:i},className:m==m?"pageNoActive":"pageNoInactive"},m),m>5&&m<g-4&&a.default.createElement("div",{onClick:function(){t(m+1),C(m+1)},style:{borderColor:props.borderColor?c:i,backgroundColor:m===m+1?i:l,color:m===m+1?l:i},className:m===m+1?"pageNoActive":"pageNoInactive"},m+1),a.default.createElement("div",{style:{color:s||"black"}},m>5&&m<g-4?a.default.createElement("span",null," "):null,"... "),m>g-5&&a.default.createElement("div",{onClick:function(){t(g-5),C(g-5)},style:{borderColor:props.borderColor?c:i,backgroundColor:m===g-5?i:l,color:m===g-5?l:i},className:m===g-5?"pageNoActive":"pageNoInactive"},g-5),m>g-5&&a.default.createElement("div",{onClick:function(){t(g-4),C(g-4)},style:{borderColor:props.borderColor?c:i,backgroundColor:m===g-4?i:l,color:m===g-4?l:i},className:m===g-4?"pageNoActive":"pageNoInactive"},g-4),m>g-5&&a.default.createElement("div",{onClick:function(){t(g-3),C(g-3)},style:{borderColor:props.borderColor?c:i,backgroundColor:m===g-3?i:l,color:m===g-3?l:i},className:m===g-3?"pageNoActive":"pageNoInactive"},g-3),m>g-5&&a.default.createElement("div",{onClick:function(){t(g-2),C(g-2)},style:{borderColor:props.borderColor?c:i,backgroundColor:m===g-2?i:l,color:m===g-2?l:i},className:m===g-2?"pageNoActive":"pageNoInactive"},g-2),a.default.createElement("div",{onClick:function(){t(g-1),C(g-1)},style:{borderColor:props.borderColor?c:i,backgroundColor:m===g-1?i:l,color:m===g-1?l:i},className:m===g-1?"pageNoActive":"pageNoInactive"},g-1),a.default.createElement("div",{onClick:function(){t(g),C(g)},style:{borderColor:props.borderColor?c:i,backgroundColor:m===g?i:l,color:m===g?l:i},className:m===g?"pageNoActive":"pageNoInactive"},g),a.default.createElement("div",{onClick:function(){m<g&&(t(m+1),C(m+1))},className:m===g?"lastPageActive":"lastPageInactive"},a.default.createElement("i",{style:{opacity:m===g?"0.5":null,borderColor:d},className:"arrow".concat(" ","right")})),a.default.createElement("div",{onClick:function(){t(g),C(g)},className:m===g?"lastPageActive":"lastPageInactive"},a.default.createElement("i",{style:{opacity:m===g?"0.5":null,borderColor:d},className:"arrowDouble".concat(" ","right"," ",1===m?"activeStyle":"inactiveStyle")}))))};d.propTypes={totalPageCount:l.default.number.isRequired,setPage:l.default.func.isRequired,activeDigitColor:l.default.string,activeBackgroundColor:l.default.string,buttonBorderColor:l.default.string,arrowColor:l.default.string,dotColor:l.default.string},module.exports=d;
