/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./styles/Card.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./styles/Card.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Card_cardContainer__0OZNm {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 20px;\\n  border: 1px solid #ccc;\\n  border-radius: 8px;\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n  transition: transform 0.3s ease;\\n  min-width: 200px;\\n  max-width: 300px;\\n  height: 300px;\\n  overflow: hidden;\\n}\\n.Card_cardContainer__0OZNm:hover {\\n  transform: translateY(-5px);\\n}\\n.Card_cardContainer__0OZNm .Card_cardImage__FoQ5o {\\n  width: 230px;\\n  height: 230px;\\n  object-fit: contain;\\n  margin-bottom: 10px;\\n}\\n.Card_cardContainer__0OZNm .Card_cardDescription__bMqTc {\\n  text-align: center;\\n  height: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n}\\n.Card_cardContainer__0OZNm .Card_cardDescription__bMqTc p {\\n  margin: 0;\\n  font-size: 16px;\\n  color: #333;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: normal;\\n}\\n@media (min-width: 768px) {\\n  .Card_cardContainer__0OZNm {\\n    min-width: 250px;\\n    max-width: 350px;\\n    height: 350px;\\n  }\\n  .Card_cardContainer__0OZNm .Card_cardImage__FoQ5o {\\n    width: 250px;\\n    height: 250px;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/Card.module.scss\",\"webpack://styles/Variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;EACA,aCMc;EDLd,sBAAA;EACA,kBAAA;EACA,wCCHW;EDIX,+BAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,gBAAA;AADF;AAGE;EACE,2BAAA;AADJ;AAIE;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,mBCdY;ADYhB;AAKE;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AAHJ;AAKI;EACE,SAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AAHN;AAOE;EA3CF;IA4CI,gBAAA;IACA,gBAAA;IACA,aAAA;EAJF;EAME;IACE,YAAA;IACA,aAAA;EAJJ;AACF\",\"sourcesContent\":[\"@import './Variables.scss';\\r\\n\\r\\n.cardContainer {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: $padding-large;\\r\\n  border: 1px solid $border-color;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: $box-shadow;\\r\\n  transition: transform $transition-duration ease;\\r\\n  min-width: 200px;\\r\\n  max-width: 300px;\\r\\n  height: 300px;\\r\\n  overflow: hidden;\\r\\n\\r\\n  &:hover {\\r\\n    transform: translateY(-5px);\\r\\n  }\\r\\n\\r\\n  .cardImage {\\r\\n    width: 230px;\\r\\n    height: 230px;\\r\\n    object-fit: contain;\\r\\n    margin-bottom: $padding-small;\\r\\n  }\\r\\n\\r\\n  .cardDescription {\\r\\n    text-align: center;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-between;\\r\\n\\r\\n    p {\\r\\n      margin: 0;\\r\\n      font-size: 16px;\\r\\n      color: #333;\\r\\n      overflow: hidden;\\r\\n      text-overflow: ellipsis;\\r\\n      white-space: normal;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  @media (min-width: 768px) {\\r\\n    min-width: 250px;\\r\\n    max-width: 350px;\\r\\n    height: 350px;\\r\\n\\r\\n    .cardImage {\\r\\n      width: 250px;\\r\\n      height: 250px;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\",\"$background-color-primary: #63A022;\\r\\n$background-color-secondary: #87C241;\\r\\n$background-color-tertiary: #007bff;\\r\\n$background-color-hover: #0056b3;\\r\\n$modal-background-color: rgba(0, 0, 0, 0.4);\\r\\n$modal-content-background-color: #fefefe;\\r\\n$border-color: #ccc;\\r\\n$box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\r\\n$transition-duration: 0.3s;\\r\\n$border-radius-small: 4px;\\r\\n$border-radius-large: 10px;\\r\\n$padding-small: 10px;\\r\\n$padding-medium: 15px;\\r\\n$padding-large: 20px;\\r\\n$font-size-medium: 1rem;\\r\\n$font-size-large: 1.2em;\\r\\n$font-size-xl: 1.5em;\\r\\n$font-size-xxl: 2em;\\r\\n$width-100: 100%;\\r\\n$max-width-container: 100%;\\r\\n$max-width-modal: 500px;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"cardContainer\": \"Card_cardContainer__0OZNm\",\n\t\"cardImage\": \"Card_cardImage__FoQ5o\",\n\t\"cardDescription\": \"Card_cardDescription__bMqTc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxMF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbNF0hLi9zdHlsZXMvQ2FyZC5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG1LQUErRTtBQUN6SDtBQUNBO0FBQ0Esc0VBQXNFLGtCQUFrQiwyQkFBMkIsd0JBQXdCLG1DQUFtQyxrQkFBa0IsMkJBQTJCLHVCQUF1Qiw2Q0FBNkMsb0NBQW9DLHFCQUFxQixxQkFBcUIsa0JBQWtCLHFCQUFxQixHQUFHLG9DQUFvQyxnQ0FBZ0MsR0FBRyxxREFBcUQsaUJBQWlCLGtCQUFrQix3QkFBd0Isd0JBQXdCLEdBQUcsMkRBQTJELHVCQUF1QixpQkFBaUIsa0JBQWtCLDJCQUEyQixtQ0FBbUMsR0FBRyw2REFBNkQsY0FBYyxvQkFBb0IsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsd0JBQXdCLEdBQUcsNkJBQTZCLGdDQUFnQyx1QkFBdUIsdUJBQXVCLG9CQUFvQixLQUFLLHVEQUF1RCxtQkFBbUIsb0JBQW9CLEtBQUssR0FBRyxPQUFPLDBIQUEwSCxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxNQUFNLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxvREFBb0Qsd0JBQXdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLHFDQUFxQyw4QkFBOEIsc0NBQXNDLHlCQUF5Qiw4QkFBOEIsc0RBQXNELHVCQUF1Qix1QkFBdUIsb0JBQW9CLHVCQUF1QixtQkFBbUIsb0NBQW9DLE9BQU8sc0JBQXNCLHFCQUFxQixzQkFBc0IsNEJBQTRCLHNDQUFzQyxPQUFPLDRCQUE0QiwyQkFBMkIscUJBQXFCLHNCQUFzQiwrQkFBK0IsdUNBQXVDLGVBQWUsb0JBQW9CLDBCQUEwQixzQkFBc0IsMkJBQTJCLGtDQUFrQyw4QkFBOEIsU0FBUyxPQUFPLHFDQUFxQyx5QkFBeUIseUJBQXlCLHNCQUFzQix3QkFBd0IsdUJBQXVCLHdCQUF3QixTQUFTLE9BQU8sS0FBSywwQ0FBMEMseUNBQXlDLHdDQUF3QyxxQ0FBcUMsZ0RBQWdELDZDQUE2Qyx3QkFBd0IsOENBQThDLCtCQUErQiw4QkFBOEIsK0JBQStCLHlCQUF5QiwwQkFBMEIseUJBQXlCLDRCQUE0Qiw0QkFBNEIseUJBQXlCLHdCQUF3QixxQkFBcUIsK0JBQStCLDRCQUE0QixtQkFBbUI7QUFDM21IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9DYXJkLm1vZHVsZS5zY3NzP2QxNTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5DYXJkX2NhcmRDb250YWluZXJfXzBPWk5tIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uQ2FyZF9jYXJkQ29udGFpbmVyX18wT1pObTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcbi5DYXJkX2NhcmRDb250YWluZXJfXzBPWk5tIC5DYXJkX2NhcmRJbWFnZV9fRm9RNW8ge1xcbiAgd2lkdGg6IDIzMHB4O1xcbiAgaGVpZ2h0OiAyMzBweDtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uQ2FyZF9jYXJkQ29udGFpbmVyX18wT1pObSAuQ2FyZF9jYXJkRGVzY3JpcHRpb25fX2JNcVRjIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uQ2FyZF9jYXJkQ29udGFpbmVyX18wT1pObSAuQ2FyZF9jYXJkRGVzY3JpcHRpb25fX2JNcVRjIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5DYXJkX2NhcmRDb250YWluZXJfXzBPWk5tIHtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gIH1cXG4gIC5DYXJkX2NhcmRDb250YWluZXJfXzBPWk5tIC5DYXJkX2NhcmRJbWFnZV9fRm9RNW8ge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvQ2FyZC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9WYXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQ01jO0VETGQsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQ0hXO0VESVgsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBREY7QUFHRTtFQUNFLDJCQUFBO0FBREo7QUFJRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkNkWTtBRFloQjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFISjtBQUtJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSE47QUFPRTtFQTNDRjtJQTRDSSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQUpGO0VBTUU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUpKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi9WYXJpYWJsZXMuc2Nzcyc7XFxyXFxuXFxyXFxuLmNhcmRDb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogJHBhZGRpbmctbGFyZ2U7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHRyYW5zaXRpb24tZHVyYXRpb24gZWFzZTtcXHJcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNhcmRJbWFnZSB7XFxyXFxuICAgIHdpZHRoOiAyMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMzBweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogJHBhZGRpbmctc21hbGw7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2FyZERlc2NyaXB0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDM1MHB4O1xcclxcblxcclxcbiAgICAuY2FyZEltYWdlIHtcXHJcXG4gICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIiRiYWNrZ3JvdW5kLWNvbG9yLXByaW1hcnk6ICM2M0EwMjI7XFxyXFxuJGJhY2tncm91bmQtY29sb3Itc2Vjb25kYXJ5OiAjODdDMjQxO1xcclxcbiRiYWNrZ3JvdW5kLWNvbG9yLXRlcnRpYXJ5OiAjMDA3YmZmO1xcclxcbiRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAjMDA1NmIzO1xcclxcbiRtb2RhbC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuJG1vZGFsLWNvbnRlbnQtYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4kYm9yZGVyLWNvbG9yOiAjY2NjO1xcclxcbiRib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcclxcbiRib3JkZXItcmFkaXVzLXNtYWxsOiA0cHg7XFxyXFxuJGJvcmRlci1yYWRpdXMtbGFyZ2U6IDEwcHg7XFxyXFxuJHBhZGRpbmctc21hbGw6IDEwcHg7XFxyXFxuJHBhZGRpbmctbWVkaXVtOiAxNXB4O1xcclxcbiRwYWRkaW5nLWxhcmdlOiAyMHB4O1xcclxcbiRmb250LXNpemUtbWVkaXVtOiAxcmVtO1xcclxcbiRmb250LXNpemUtbGFyZ2U6IDEuMmVtO1xcclxcbiRmb250LXNpemUteGw6IDEuNWVtO1xcclxcbiRmb250LXNpemUteHhsOiAyZW07XFxyXFxuJHdpZHRoLTEwMDogMTAwJTtcXHJcXG4kbWF4LXdpZHRoLWNvbnRhaW5lcjogMTAwJTtcXHJcXG4kbWF4LXdpZHRoLW1vZGFsOiA1MDBweDtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjYXJkQ29udGFpbmVyXCI6IFwiQ2FyZF9jYXJkQ29udGFpbmVyX18wT1pObVwiLFxuXHRcImNhcmRJbWFnZVwiOiBcIkNhcmRfY2FyZEltYWdlX19Gb1E1b1wiLFxuXHRcImNhcmREZXNjcmlwdGlvblwiOiBcIkNhcmRfY2FyZERlc2NyaXB0aW9uX19iTXFUY1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./styles/Card.module.scss\n"));

/***/ }),

/***/ "./styles/Card.module.scss":
/*!*********************************!*\
  !*** ./styles/Card.module.scss ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!../node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./Card.module.scss */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./styles/Card.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element) {\n                    // By default, style-loader injects CSS into the bottom\n                    // of <head>. This causes ordering problems between dev\n                    // and prod. To fix this, we render a <noscript> tag as\n                    // an anchor for the styles to be placed before. These\n                    // styles will be applied _before_ <style jsx global>.\n                    // These elements should always exist. If they do not,\n                    // this code should fail.\n                    var anchorElement = document.querySelector(\"#__next_css__DO_NOT_USE__\");\n                    var parentNode = anchorElement.parentNode// Normally <head>\n                    ;\n                    // Each style tag should be placed right before our\n                    // anchor. By inserting before and not after, we do not\n                    // need to track the last inserted element.\n                    parentNode.insertBefore(element, anchorElement);\n                };\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n    if (!a && b || a && !b) {\n        return false;\n    }\n    let p;\n    for(p in a){\n        if (isNamedExport && p === \"default\") {\n            continue;\n        }\n        if (a[p] !== b[p]) {\n            return false;\n        }\n    }\n    for(p in b){\n        if (isNamedExport && p === \"default\") {\n            continue;\n        }\n        if (!a[p]) {\n            return false;\n        }\n    }\n    return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!../node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./Card.module.scss */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./styles/Card.module.scss\",\n      function () {\n        content = __webpack_require__(/*! !!../node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!../node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!../node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./Card.module.scss */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./styles/Card.module.scss\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.id, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQ2FyZC5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQSxVQUFVLG1CQUFPLENBQUMsb05BQXdHO0FBQzFILDBCQUEwQixtQkFBTyxDQUFDLCs0QkFBb2M7O0FBRXRlOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZCx5QkFBeUIsVUFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpQkFBaUI7QUFDckIsTUFBTSwrNEJBQW9jO0FBQzFjO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsKzRCQUFvYzs7QUFFOWQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLFVBQVU7O0FBRTFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0NhcmQubW9kdWxlLnNjc3M/Y2FmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxMF0udXNlWzRdIS4vQ2FyZC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQnkgZGVmYXVsdCwgc3R5bGUtbG9hZGVyIGluamVjdHMgQ1NTIGludG8gdGhlIGJvdHRvbVxuICAgICAgICAgICAgICAgICAgICAvLyBvZiA8aGVhZD4uIFRoaXMgY2F1c2VzIG9yZGVyaW5nIHByb2JsZW1zIGJldHdlZW4gZGV2XG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBwcm9kLiBUbyBmaXggdGhpcywgd2UgcmVuZGVyIGEgPG5vc2NyaXB0PiB0YWcgYXNcbiAgICAgICAgICAgICAgICAgICAgLy8gYW4gYW5jaG9yIGZvciB0aGUgc3R5bGVzIHRvIGJlIHBsYWNlZCBiZWZvcmUuIFRoZXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlcyB3aWxsIGJlIGFwcGxpZWQgX2JlZm9yZV8gPHN0eWxlIGpzeCBnbG9iYWw+LlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYW5jaG9yRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50Tm9kZSA9IGFuY2hvckVsZW1lbnQucGFyZW50Tm9kZS8vIE5vcm1hbGx5IDxoZWFkPlxuICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuICAgICAgICAgICAgICAgICAgICAvLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4gICAgICAgICAgICAgICAgICAgIC8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgYW5jaG9yRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICAgIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDtcbiAgICBmb3IocCBpbiBhKXtcbiAgICAgICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKHAgaW4gYil7XG4gICAgICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFbcF0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxMF0udXNlWzRdIS4vQ2FyZC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVsyXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxMF0udXNlWzRdIS4vQ2FyZC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Card.module.scss\n"));

/***/ }),

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Card.module.scss */ \"./styles/Card.module.scss\");\n/* harmony import */ var _styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Card = (param)=>{\n    let { cardImage, text, alt } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: cardImage,\n                alt: alt,\n                width: 80,\n                height: 80,\n                className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardImage)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sefaa\\\\Desktop\\\\exchangeRateApp\\\\components\\\\Card.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Card_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardDescription),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: text\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\sefaa\\\\Desktop\\\\exchangeRateApp\\\\components\\\\Card.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sefaa\\\\Desktop\\\\exchangeRateApp\\\\components\\\\Card.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sefaa\\\\Desktop\\\\exchangeRateApp\\\\components\\\\Card.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNLO0FBQ2lCO0FBRWhELE1BQU1HLE9BQU87UUFBQyxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBR0MsR0FBRyxFQUFDO0lBQ3BDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTiwrRUFBb0I7OzBCQUNsQyw4REFBQ0QsbURBQUtBO2dCQUFDUyxLQUFLTjtnQkFBV0UsS0FBS0E7Z0JBQUtLLE9BQU87Z0JBQUlDLFFBQVE7Z0JBQUlKLFdBQVdOLDJFQUFnQjs7Ozs7OzBCQUNuRiw4REFBQ0s7Z0JBQUlDLFdBQVdOLGlGQUFzQjswQkFDcEMsNEVBQUNZOzhCQUFHVDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWjtLQVRNRjtBQVdOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FyZC5qcz9kNjIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2FyZC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgY2FyZEltYWdlLCB0ZXh0ICwgYWx0fSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250YWluZXJ9PlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtjYXJkSW1hZ2V9IGFsdD17YWx0fSB3aWR0aD17ODB9IGhlaWdodD17ODB9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRJbWFnZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkRGVzY3JpcHRpb259PlxyXG4gICAgICAgIDxwPnt0ZXh0fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJzdHlsZXMiLCJDYXJkIiwiY2FyZEltYWdlIiwidGV4dCIsImFsdCIsImRpdiIsImNsYXNzTmFtZSIsImNhcmRDb250YWluZXIiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImNhcmREZXNjcmlwdGlvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n"));

/***/ })

});