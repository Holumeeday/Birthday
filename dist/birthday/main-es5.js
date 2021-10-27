function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 69,
      vars: 0,
      consts: [[1, "container"], ["routerLink", "/home", 1, "back"], [1, "scrollmenu"], ["src", "assets/f11.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/f6.png", "alt", "", 1, "img-fluid"], ["src", "assets/f12.PNG", "alt", "", 1, "img-fluid"], ["src", "assets/f14.PNG", "alt", "", 1, "img-fluid"], [2, "margin-top", "5px", "text-align", "center", "color", "#00c08e"], [1, "text-center"], ["id", "pic", 1, "row", "row-cols-1", "row-cols-md-3", "mt-3"], [1, "col", "mb-4"], [1, "card"], ["src", "assets/des/2.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-text"], ["src", "assets/des/3.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/des/4.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/des/w1.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/des/w3.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/des/w4.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/des/w5.jpg", "alt", "...", 1, "card-img-top"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " <<< return ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " <<<<< >>>>>");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Persons with the name Folake are caring, responsible, family-orientated, non-romantic, artistic and disciplined.\xA0They are natural lovers of children and animals, and strive for peace and harmony.\xA0They are \u2018trouble-shooters\u2019 who have a tendency to give help and comfort to those who need it most.\xA0They have a great depth of compassion and understanding and have a sense of wanting to keep the balance and harmony in situations. This produces the need to protect or take care of others.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "UI/UX Designer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Designed and implemented web-based and mobile application for user interface using Figma directed front end projects from concept to completion ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Responsible for creating sketch, wireframe, prototype and visual mockups ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Worked with customers to create an intuitive user interface that are cutting edge and easy to use ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Managed Web and interactive communication projects from initial consultation through successfully launch with ability to handle various projects at the same time and complete them by given deadline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Folakemi Redesigned whatsapp ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Her wallet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Vethub ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Her wallet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Onigbo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Shes intrested in selling weed online");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " She will soon start selling weed ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-footer");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
      styles: [".back[_ngcontent-%COMP%] {\n    text-decoration: none ;\n    font-size: 19px;\n    font-family: 'Pacifico', cursive;\n    color: #00c08e;\n  position: relative;\n  top: 5%;\n}\n\n#slider[_ngcontent-%COMP%] {\n    overflow: hidden;\n   position: absolute;\n   top:10%;\n}\n\n#slider[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    position: relative;\n    width: 500%;\n    margin:0;\n    left:0;\n    -webkit-animation: 20s slider infinite;\n            animation: 20s slider infinite;\n}\n\n#slider[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 20%;\n    float: left;\n}\n\ndiv.scrollmenu[_ngcontent-%COMP%]{\n    overflow: auto;\n    white-space: nowrap;\n    margin-top: 30px;\n}\n\ndiv.scrollmenu[_ngcontent-%COMP%]{\n    overflow: auto;\n    white-space: nowrap;\n}\n\n@-webkit-keyframes slider {\n    0%{\n        left: 0;\n    }\n    20%{\n        left:0;\n    }\n    25%{\n        left: -100%;\n    }\n    45%{\n        left: -100%;\n    }\n    50%{\n        left: -200%;\n    }\n    70%{\n        left: -200%;\n    }\n    75%{\n        left: -300%;\n    }\n    95%{\n        left: -300%;\n    }\n    100%{\n        left: -400%;\n    }\n\n}\n\n@keyframes slider {\n    0%{\n        left: 0;\n    }\n    20%{\n        left:0;\n    }\n    25%{\n        left: -100%;\n    }\n    45%{\n        left: -100%;\n    }\n    50%{\n        left: -200%;\n    }\n    70%{\n        left: -200%;\n    }\n    75%{\n        left: -300%;\n    }\n    95%{\n        left: -300%;\n    }\n    100%{\n        left: -400%;\n    }\n\n}\n\np[_ngcontent-%COMP%]{\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGNBQWM7RUFDaEIsa0JBQWtCO0VBQ2xCLE9BQU87QUFDVDs7QUFFQTtJQUNJLGdCQUFnQjtHQUNqQixrQkFBa0I7R0FDbEIsT0FBTztBQUNWOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsTUFBTTtJQUNOLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUdBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxPQUFPO0lBQ1g7SUFDQTtRQUNJLE1BQU07SUFDVjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmOztBQUVKOztBQTdCQTtJQUNJO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxNQUFNO0lBQ1Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjs7QUFFSjs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjayB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lIDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG4gICAgY29sb3I6ICMwMGMwOGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1JTtcbn1cblxuI3NsaWRlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIHRvcDoxMCU7XG59XG4jc2xpZGVyIGZpZ3VyZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MDAlO1xuICAgIG1hcmdpbjowO1xuICAgIGxlZnQ6MDtcbiAgICBhbmltYXRpb246IDIwcyBzbGlkZXIgaW5maW5pdGU7XG59XG4jc2xpZGVyIGZpZ3VyZSBpbWd7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuXG5kaXYuc2Nyb2xsbWVudXtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbmRpdi5zY3JvbGxtZW51e1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVyIHtcbiAgICAwJXtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgMjAle1xuICAgICAgICBsZWZ0OjA7XG4gICAgfVxuICAgIDI1JXtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgfVxuICAgIDQ1JXtcbiAgICAgICAgbGVmdDogLTEwMCU7XG4gICAgfVxuICAgIDUwJXtcbiAgICAgICAgbGVmdDogLTIwMCU7XG4gICAgfVxuICAgIDcwJXtcbiAgICAgICAgbGVmdDogLTIwMCU7XG4gICAgfVxuICAgIDc1JXtcbiAgICAgICAgbGVmdDogLTMwMCU7XG4gICAgfVxuICAgIDk1JXtcbiAgICAgICAgbGVmdDogLTMwMCU7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIGxlZnQ6IC00MDAlO1xuICAgIH1cblxufVxuXG5we1xuICAgXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var routes = [{
      path: '',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'birthday';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [[1, "foot"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xA9 Folakemi 2021 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".foot[_ngcontent-%COMP%]{\n    background-color:  #00c08e;;\n    height: 50px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwYzA4ZTs7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.isShowDiv = true;
      }

      _createClass(HeaderComponent, [{
        key: "toggleDisplayDiv",
        value: function toggleDisplayDiv() {
          this.isShowDiv = !this.isShowDiv;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 26,
      vars: 1,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", 2, "width", "100%"], ["routerLink", "/home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "side", 3, "hidden"], ["routerLink", "/home", 1, "nav-link"], [1, "sr-only"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["routerLink", "/about", 1, "nav-link"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], [1, "nav-item"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Folakemi A.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() {
            return ctx.toggleDisplayDiv();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isShowDiv);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".side[_ngcontent-%COMP%]{\n    height: 40%;\n    width: 45%;\n    position: fixed;\n    z-index: 1;\n    top: 23%;\n    left: 10px;\n    background-color: #00c08e;;\n    opacity: 0.9;\n    overflow-x: hidden;\n    padding-top: 60px;\n    \n    transition: width 2s;\n    transition-timing-function: ease-in;\n    border-radius: 10px;\n    \n    \n}\n\n.side[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\n    color: #ffffff;\n    \n    list-style: none;\n}\n\n.side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #ffffff;\n    font-weight: 700;\n    font-size: 18px;\n    padding: 10px;\n    text-transform: uppercase;\n\n}\n\n.side[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    background-color: rgb(252, 198, 238);\n    color: hotpink;\n}\n\n\n\n.navbar-toggler[_ngcontent-%COMP%]{\n    background-color: #00c08e;\n    border-radius: 10px;\n}\n\n.navbar-toggler-icon[_ngcontent-%COMP%]{\n    color: white;\n}\n\n.navbar-brand[_ngcontent-%COMP%]{\n    font-family: 'Pacifico', cursive;\n    font-style: normal;\n    font-weight: normal; \n    color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLG1CQUFtQjs7O0FBR3ZCOztBQUVBO0lBQ0ksY0FBYzs7SUFFZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxjQUFjO0FBQ2xCOztBQUNBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVIO0lBQ0kseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZXtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICB3aWR0aDogNDUlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRvcDogMjMlO1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwYzA4ZTs7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICAvKiB0cmFuc2l0aW9uOiAwLjhzOyAqL1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgXG59XG5cbi5zaWRlIHVse1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaWRlIGF7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG59XG5cbi5zaWRlIGE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMTk4LCAyMzgpO1xuICAgIGNvbG9yOiBob3RwaW5rO1xufVxuLyogXG4uc2lkZSB1bCBsaSBhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBhZGRpbmc6IDFlbSAxZW0gMWVtIDEuMmVtO1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgwLDAsMCwwLjIpO1xuXHRjb2xvcjogI2YzZWZlMDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0dGV4dC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcywgYm94LXNoYWRvdyAwLjNzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcywgYm94LXNoYWRvdyAwLjNzO1xuICAgIG92ZXJmbG93LXg6IHNob3c7XG59ICovXG5cbi5uYXZiYXItdG9nZ2xlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjMDhlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5uYXZiYXItdG9nZ2xlci1pY29ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdmJhci1icmFuZHtcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgXG4gICAgY29sb3I6IGdyZXk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 72,
      vars: 0,
      consts: [[1, "wrapper"], [2, "color", "black"], [2, "color", "rgb(22, 123, 206)"], [2, "color", "rgb(145, 255, 0)"], [2, "color", "pink", "margin-left", "10px"], [2, "margin-left", "10px"], [2, "color", "#00c08e", "margin-left", "10px"], ["id", "date", 2, "font-family", "'Pacifico', cursive"], ["id", "pic", 1, "row", "row-cols-1", "row-cols-md-3", "mt-3"], [1, "col", "mb-4"], [1, "card"], ["src", "assets/f7.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title", "lol"], [1, "card-text", "lolo"], ["src", "assets/f9.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/f10.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/f3.jpg", "alt", "...", 1, "card-img-top"], ["src", "assets/fo1.jpg", "alt", "...", 1, "card-img-top", 2, "height", "30%"], ["src", "assets/f12.PNG", "alt", "...", 1, "card-img-top", 2, "height", "30%"], ["href", "#", "routerLink", "/about", 1, "about"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Am");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Folakemi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ".....");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "6th September 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Folakemi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Real beauty isn't about symmetry or weight or makeup: it's about looking life right in the face and seeing all its magnificence reflected in your own. - Valerie Monroe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " It's a pity that it's impossible to hold a beauty contest among the angels. It would be the only competition that you could compete fairly. You are beautiful in every single way. if you know you know!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Drake");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Have you met Folakemi ? That babe is hilarious!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Adeola");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \"Looking adorable, as always.\" \"OK, sis!\" \"Always and forever obsessed with you.\" \"You're legit glowing.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Fowokemi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "I love you sisters! #Ihaveababysisters #babysistersareawesome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Mummy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " The day you came into this world was the day that my life was forever changed. I never thought it was possible to feel so many different emotions all at the same time. One look at your beautiful face and I felt overjoyed, incredulous, blessed, relieved, exhausted, and utterly terrified. Being your mother is such a gift. You, my daughter, are such a marvelous gift. I love you forever. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " About Folakemi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["h2[_ngcontent-%COMP%]{\n    font-size: 24px;\n    margin-top: 7px;\n    margin-left: 10px;\n}\n\n.lolo[_ngcontent-%COMP%]{\n    font-family: 'Pangolin', cursive;\n}\n\n#date[_ngcontent-%COMP%]{\n    color: hotpink;\n    margin-left: 10px;\n    margin-top: 20px;\n}\n\n.wrapper[_ngcontent-%COMP%]{\n    margin-top: -10px;\n  margin-left: 60%;\n  width: 100%;\n    transform: translate(-50%, 50%);\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n    font-weight: 800;\n    text-transform: uppercase;\n    font-size: 24px;\n    font-family: monospace;\n    display: inline-block;\n    color:greenyellow;\n    opacity: 0;\n    transform: translate(-155px, 0) scale(0.4);\n    -webkit-animation: animate .5s forwards;\n            animation: animate .5s forwards;\n}\n\n.about[_ngcontent-%COMP%]{\n    color: blue;\n    border: 1px solid salmon;\n    padding: 10px;\n    margin-bottom: 30px;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){\n    -webkit-animation-delay: 0.05s;\n            animation-delay: 0.05s;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3){\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(4){\n    -webkit-animation-delay: 0.15s;\n            animation-delay: 0.15s;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(5){\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(6){\n    -webkit-animation-delay: 0.25s;\n            animation-delay: 0.25s;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(7){\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(8){\n    -webkit-animation-delay: 0.35s;\n            animation-delay: 0.35s;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(9){\n    -webkit-animation-delay: 0.4s;\n            animation-delay: 0.4s;\n}\n\n.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(10){\n    -webkit-animation-delay: 0.45s;\n            animation-delay: 0.45s;\n}\n\n@-webkit-keyframes animate{\n    40%{\n        transform: translate(50px, 0) scale(.7);\n        opacity: 1;\n        color: indianred;\n    }\n    60%{\n        color: blue;\n    }\n    80%{\n        transform: translate(0) scale(2);\n        opacity: 0;\n    }\n    100%{\n        transform: translate(0) scale(1 );\n        opacity: 1;\n    }\n}\n\n@keyframes animate{\n    40%{\n        transform: translate(50px, 0) scale(.7);\n        opacity: 1;\n        color: indianred;\n    }\n    60%{\n        color: blue;\n    }\n    80%{\n        transform: translate(0) scale(2);\n        opacity: 0;\n    }\n    100%{\n        transform: translate(0) scale(1 );\n        opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0lBQ1QsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyx1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0ksNkJBQXFCO1lBQXJCLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFDSSx1Q0FBdUM7UUFDdkMsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQ0FBZ0M7UUFDaEMsVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0o7O0FBakJBO0lBQ0k7UUFDSSx1Q0FBdUM7UUFDdkMsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQ0FBZ0M7UUFDaEMsVUFBVTtJQUNkO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5sb2xve1xuICAgIGZvbnQtZmFtaWx5OiAnUGFuZ29saW4nLCBjdXJzaXZlO1xufVxuXG4jZGF0ZXtcbiAgICBjb2xvcjogaG90cGluaztcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ud3JhcHBlcntcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbn1cblxuLndyYXBwZXIgc3BhbntcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOmdyZWVueWVsbG93O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1NXB4LCAwKSBzY2FsZSgwLjQpO1xuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAuNXMgZm9yd2FyZHM7XG59XG5cbi5hYm91dHtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzYWxtb247XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ud3JhcHBlciBzcGFuOm50aC1vZi10eXBlKDIpe1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4wNXM7XG59XG4ud3JhcHBlciBzcGFuOm50aC1vZi10eXBlKDMpe1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cbi53cmFwcGVyIHNwYW46bnRoLW9mLXR5cGUoNCl7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjE1cztcbn1cbi53cmFwcGVyIHNwYW46bnRoLW9mLXR5cGUoNSl7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuLndyYXBwZXIgc3BhbjpudGgtb2YtdHlwZSg2KXtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMjVzO1xufVxuLndyYXBwZXIgc3BhbjpudGgtb2YtdHlwZSg3KXtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG4ud3JhcHBlciBzcGFuOm50aC1vZi10eXBlKDgpe1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zNXM7XG59XG4ud3JhcHBlciBzcGFuOm50aC1vZi10eXBlKDkpe1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cbi53cmFwcGVyIHNwYW46bnRoLW9mLXR5cGUoMTApe1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40NXM7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZXtcbiAgICA0MCV7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsIDApIHNjYWxlKC43KTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6IGluZGlhbnJlZDtcbiAgICB9XG4gICAgNjAle1xuICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gICAgODAle1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKSBzY2FsZSgyKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCkgc2NhbGUoMSApO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var WelcomeComponent =
    /*#__PURE__*/
    function () {
      function WelcomeComponent(routes) {
        _classCallCheck(this, WelcomeComponent);

        this.routes = routes;
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.routes.navigateByUrl('home');
          }, 5000);
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 1,
      vars: 0,
      consts: [["src", "assets/f2.jpg", "alt", "", 2, "height", "70%", "width", "100%"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["h3[_ngcontent-%COMP%]{\n    text-align: center;\n   \n    \n}\n\n.kem[_ngcontent-%COMP%]{\n    color: pink;\n\n    color: #d4af37;\n}\n\n.deconstructed[_ngcontent-%COMP%] {\n    position: relative;\n    margin: auto;\n    height: 0.71em;\n    color: transparent;\n    font-family: 'Cambay', sans-serif;\n    font-size: 10vw;\n    font-weight: 700;\n    letter-spacing: -0.02em;\n    line-height: 1.03em;\n    background-color: #000000;\n  }\n\n.deconstructed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    color: #ffff64;\n    pointer-events: none;\n    \n  }\n\n.deconstructed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(1) {\n    -webkit-mask-image: linear-gradient(black 25%, transparent 25%);\n    mask-image: linear-gradient(black 25%, transparent 25%);\n    -webkit-animation: deconstructed1 5s infinite;\n            animation: deconstructed1 5s infinite;\n  }\n\n.deconstructed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n    -webkit-mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);\n    mask-image: linear-gradient(transparent 25%, black 25%, black 50%, transparent 50%);\n    -webkit-animation: deconstructed2 5s infinite;\n            animation: deconstructed2 5s infinite;\n  }\n\n.deconstructed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n     -webkit-mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);\n    mask-image: linear-gradient(transparent 50%, black 50%, black 75%, transparent 75%);\n    -webkit-animation: deconstructed3 5s infinite;\n            animation: deconstructed3 5s infinite;\n  }\n\n.deconstructed[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n     -webkit-mask-image: linear-gradient(transparent 75%, black 75%);\n    mask-image: linear-gradient(transparent 75%, black 75%);\n    -webkit-animation: deconstructed4 5s infinite;\n            animation: deconstructed4 5s infinite;\n  }\n\n@-webkit-keyframes deconstructed1 {\n    0% {\n      transform: translateX(100%);\n    }\n    26% {\n      transform: translateX(0%);\n    }\n    83% {\n      transform: translateX(-0.1%);\n    }\n    100% {\n      transform: translateX(-120%);\n    }\n  }\n\n@keyframes deconstructed1 {\n    0% {\n      transform: translateX(100%);\n    }\n    26% {\n      transform: translateX(0%);\n    }\n    83% {\n      transform: translateX(-0.1%);\n    }\n    100% {\n      transform: translateX(-120%);\n    }\n  }\n\n@-webkit-keyframes deconstructed2 {\n    0% {\n      transform: translateX(100%);\n    }\n    24% {\n      transform: translateX(0.5%);\n    }\n    82% {\n      transform: translateX(-0.2%);\n    }\n    100% {\n      transform: translateX(-125%);\n    }\n  }\n\n@keyframes deconstructed2 {\n    0% {\n      transform: translateX(100%);\n    }\n    24% {\n      transform: translateX(0.5%);\n    }\n    82% {\n      transform: translateX(-0.2%);\n    }\n    100% {\n      transform: translateX(-125%);\n    }\n  }\n\n@-webkit-keyframes deconstructed3 {\n    0% {\n      transform: translateX(100%);\n    }\n    22% {\n      transform: translateX(0%);\n    }\n    81% {\n      transform: translateX(0%);\n    }\n    100% {\n      transform: translateX(-130%);\n    }\n  }\n\n@keyframes deconstructed3 {\n    0% {\n      transform: translateX(100%);\n    }\n    22% {\n      transform: translateX(0%);\n    }\n    81% {\n      transform: translateX(0%);\n    }\n    100% {\n      transform: translateX(-130%);\n    }\n  }\n\n@-webkit-keyframes deconstructed4 {\n    0% {\n      transform: translateX(100%);\n    }\n    20% {\n      transform: translateX(0%);\n    }\n    80% {\n      transform: translateX(0%);\n    }\n    100% {\n      transform: translateX(-135%);\n    }\n  }\n\n@keyframes deconstructed4 {\n    0% {\n      transform: translateX(100%);\n    }\n    20% {\n      transform: translateX(0%);\n    }\n    80% {\n      transform: translateX(0%);\n    }\n    100% {\n      transform: translateX(-135%);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0lBRWxCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7O0lBRVgsY0FBYztBQUNsQjs7QUFLQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYztJQUNkLG9CQUFvQjs7RUFFdEI7O0FBRUE7SUFDRSwrREFBK0Q7SUFDL0QsdURBQXVEO0lBQ3ZELDZDQUFxQztZQUFyQyxxQ0FBcUM7RUFDdkM7O0FBRUE7SUFDRSwyRkFBMkY7SUFDM0YsbUZBQW1GO0lBQ25GLDZDQUFxQztZQUFyQyxxQ0FBcUM7RUFDdkM7O0FBRUE7S0FDRywyRkFBMkY7SUFDNUYsbUZBQW1GO0lBQ25GLDZDQUFxQztZQUFyQyxxQ0FBcUM7RUFDdkM7O0FBRUE7S0FDRywrREFBK0Q7SUFDaEUsdURBQXVEO0lBQ3ZELDZDQUFxQztZQUFyQyxxQ0FBcUM7RUFDdkM7O0FBRUE7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7SUFDQTtNQUNFLDRCQUE0QjtJQUM5QjtFQUNGOztBQWJBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UsNEJBQTRCO0lBQzlCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLDRCQUE0QjtJQUM5QjtJQUNBO01BQ0UsNEJBQTRCO0lBQzlCO0VBQ0Y7O0FBYkE7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7SUFDQTtNQUNFLDRCQUE0QjtJQUM5QjtFQUNGOztBQUVBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7RUFDRjs7QUFiQTtJQUNFO01BQ0UsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UsNEJBQTRCO0lBQzlCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLDRCQUE0QjtJQUM5QjtFQUNGOztBQWJBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgXG4gICAgLyogY29sb3I6ICNkNGFmMzc7ICovXG59XG5cbi5rZW17XG4gICAgY29sb3I6IHBpbms7XG5cbiAgICBjb2xvcjogI2Q0YWYzNztcbn1cblxuXG5cblxuLmRlY29uc3RydWN0ZWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgaGVpZ2h0OiAwLjcxZW07XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtZmFtaWx5OiAnQ2FtYmF5Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEwdnc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4wM2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgXG4gIC5kZWNvbnN0cnVjdGVkID4gZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiAjZmZmZjY0O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIFxuICB9XG4gIFxuICAuZGVjb25zdHJ1Y3RlZCA+IGRpdjpudGgtY2hpbGQoMSkge1xuICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KGJsYWNrIDI1JSwgdHJhbnNwYXJlbnQgMjUlKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoYmxhY2sgMjUlLCB0cmFuc3BhcmVudCAyNSUpO1xuICAgIGFuaW1hdGlvbjogZGVjb25zdHJ1Y3RlZDEgNXMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5kZWNvbnN0cnVjdGVkID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMjUlLCBibGFjayAyNSUsIGJsYWNrIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMjUlLCBibGFjayAyNSUsIGJsYWNrIDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgICBhbmltYXRpb246IGRlY29uc3RydWN0ZWQyIDVzIGluZmluaXRlO1xuICB9XG4gIFxuICAuZGVjb25zdHJ1Y3RlZCA+IGRpdjpudGgtY2hpbGQoMykge1xuICAgICAtd2Via2l0LW1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsIGJsYWNrIDUwJSwgYmxhY2sgNzUlLCB0cmFuc3BhcmVudCA3NSUpO1xuICAgIG1hc2staW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsIGJsYWNrIDUwJSwgYmxhY2sgNzUlLCB0cmFuc3BhcmVudCA3NSUpO1xuICAgIGFuaW1hdGlvbjogZGVjb25zdHJ1Y3RlZDMgNXMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5kZWNvbnN0cnVjdGVkID4gZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgIC13ZWJraXQtbWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDc1JSwgYmxhY2sgNzUlKTtcbiAgICBtYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNzUlLCBibGFjayA3NSUpO1xuICAgIGFuaW1hdGlvbjogZGVjb25zdHJ1Y3RlZDQgNXMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZGVjb25zdHJ1Y3RlZDEge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICB9XG4gICAgMjYlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxuICAgIDgzJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMSUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTIwJSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGRlY29uc3RydWN0ZWQyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDI0JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC41JSk7XG4gICAgfVxuICAgIDgyJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMiUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTI1JSk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGRlY29uc3RydWN0ZWQzIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG4gICAgfVxuICAgIDIyJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIH1cbiAgICA4MSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEzMCUpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBkZWNvbnN0cnVjdGVkNCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMzUlKTtcbiAgICB9XG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/mac/Documents/GitHub/Birthday/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map