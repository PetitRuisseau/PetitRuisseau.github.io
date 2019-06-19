(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _module_pokemonList_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/pokemonList/pokemon-list.component */ "./src/app/module/pokemonList/pokemon-list.component.ts");




var routes = [
    { path: '', pathMatch: 'full', component: _module_pokemonList_pokemon_list_component__WEBPACK_IMPORTED_MODULE_3__["PokemonListComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\r\n<main>\r\n    <router-outlet></router-outlet>\r\n</main>\r\n<footer-component></footer-component>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module */ "./src/app/module/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/pipes */ "./src/app/shared/pipes/index.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_component_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/component/loading/loading.component */ "./src/app/shared/component/loading/loading.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [_module__WEBPACK_IMPORTED_MODULE_6__["PokemonDetailsDialog"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_pipes__WEBPACK_IMPORTED_MODULE_9__["FiltersPipe"],
                _shared_pipes__WEBPACK_IMPORTED_MODULE_9__["FilterArrayPipe"],
                _shared_pipes__WEBPACK_IMPORTED_MODULE_9__["OrderByPipe"],
                _module__WEBPACK_IMPORTED_MODULE_6__["PokemonListComponent"],
                _module__WEBPACK_IMPORTED_MODULE_6__["PokemonDetailsDialog"],
                _module__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _module__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _shared_component_loading_loading_component__WEBPACK_IMPORTED_MODULE_19__["LoadingComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            ],
            providers: [
                _core_services__WEBPACK_IMPORTED_MODULE_5__["PokeapiService"],
                _core_services__WEBPACK_IMPORTED_MODULE_5__["PokemonService"],
                _core_services__WEBPACK_IMPORTED_MODULE_5__["AbilitiesService"],
                _core_services__WEBPACK_IMPORTED_MODULE_5__["GenerationsService"],
                _core_services__WEBPACK_IMPORTED_MODULE_5__["TypesService"],
                _core_services__WEBPACK_IMPORTED_MODULE_5__["ColorsService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/config/pokeapi.config.ts":
/*!***********************************************!*\
  !*** ./src/app/core/config/pokeapi.config.ts ***!
  \***********************************************/
/*! exports provided: PokeapiConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeapiConfig", function() { return PokeapiConfig; });
var PokeapiConfig = {
    url: 'https://pokeapi.co/api/v2/',
    endpoints: {
        pokedex: 'pokedex/1/',
        pokemon: 'pokemon/',
        pokemonSpecies: 'pokemon-species/',
        ability: 'ability/',
        type: 'type/',
        generation: 'generation/',
        color: 'pokemon-color/'
    },
    spriteUrl: {
        back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/",
        back_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/female/",
        back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/",
        back_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/female/",
        front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
        front_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/",
        front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/",
        front_shiny_female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/",
    },
    spriteUrlEnd: ".png"
};


/***/ }),

/***/ "./src/app/core/services/abilities.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/abilities.service.ts ***!
  \****************************************************/
/*! exports provided: AbilitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbilitiesService", function() { return AbilitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeapi.service */ "./src/app/core/services/pokeapi.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AbilitiesService = /** @class */ (function () {
    function AbilitiesService(pokeapiService) {
        this.pokeapiService = pokeapiService;
        this.pokemonPerAbility = {};
    }
    AbilitiesService.prototype.getAllAbilities = function () {
        var _this = this;
        if (this.allAbilitiesList) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.allAbilitiesList);
        }
        return this.pokeapiService.getAllAbilities().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (abilities) {
            _this.allAbilitiesList = abilities;
            return abilities;
        }));
    };
    AbilitiesService.prototype.getPokemonListFromOneAbility = function (name) {
        var _this = this;
        if (this.pokemonPerAbility[name]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.pokemonPerAbility[name]);
        }
        return this.pokeapiService.getOneAbility(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var pokemonList = [];
            response.pokemon.forEach(function (pokemon) {
                pokemonList.push(pokemon.pokemon.name);
            });
            _this.pokemonPerAbility[name] = pokemonList;
            return pokemonList;
        }));
    };
    AbilitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pokeapi_service__WEBPACK_IMPORTED_MODULE_2__["PokeapiService"]])
    ], AbilitiesService);
    return AbilitiesService;
}());



/***/ }),

/***/ "./src/app/core/services/colors.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/colors.service.ts ***!
  \*************************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeapi.service */ "./src/app/core/services/pokeapi.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ColorsService = /** @class */ (function () {
    function ColorsService(pokeapiService) {
        this.pokeapiService = pokeapiService;
        this.pokemonPerColor = {};
    }
    ColorsService.prototype.getAllColors = function () {
        var _this = this;
        if (this.allColorsList) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.allColorsList);
        }
        return this.pokeapiService.getAllColors().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (colors) {
            _this.allColorsList = colors;
            return colors;
        }));
    };
    ColorsService.prototype.getPokemonListFromOneColor = function (name) {
        var _this = this;
        if (this.pokemonPerColor[name]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.pokemonPerColor[name]);
        }
        return this.pokeapiService.getOnecolor(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var pokemonList = [];
            response.pokemon_species.forEach(function (pokemon) {
                pokemonList.push(pokemon.name);
            });
            _this.pokemonPerColor[name] = pokemonList;
            return pokemonList;
        }));
    };
    ColorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pokeapi_service__WEBPACK_IMPORTED_MODULE_2__["PokeapiService"]])
    ], ColorsService);
    return ColorsService;
}());



/***/ }),

/***/ "./src/app/core/services/generations.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/generations.service.ts ***!
  \******************************************************/
/*! exports provided: GenerationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerationsService", function() { return GenerationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeapi.service */ "./src/app/core/services/pokeapi.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var GenerationsService = /** @class */ (function () {
    function GenerationsService(pokeapiService) {
        this.pokeapiService = pokeapiService;
        this.pokemonPerGeneration = {};
    }
    GenerationsService.prototype.getAllGenerations = function () {
        var _this = this;
        if (this.allGenerationsList) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.allGenerationsList);
        }
        return this.pokeapiService.getAllGenerations().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (generations) {
            _this.allGenerationsList = generations;
            return generations;
        }));
    };
    GenerationsService.prototype.getPokemonListFromOneGeneration = function (name) {
        var _this = this;
        if (this.pokemonPerGeneration[name]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.pokemonPerGeneration[name]);
        }
        return this.pokeapiService.getOneGeneration(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var pokemonList = [];
            response.pokemon_species.forEach(function (pokemon) {
                pokemonList.push(pokemon.name);
            });
            _this.pokemonPerGeneration[name] = pokemonList;
            return pokemonList;
        }));
    };
    GenerationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pokeapi_service__WEBPACK_IMPORTED_MODULE_2__["PokeapiService"]])
    ], GenerationsService);
    return GenerationsService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: PokeapiService, PokemonService, AbilitiesService, GenerationsService, TypesService, ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pokeapi_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokeapi.service */ "./src/app/core/services/pokeapi.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokeapiService", function() { return _pokeapi_service__WEBPACK_IMPORTED_MODULE_0__["PokeapiService"]; });

/* harmony import */ var _pokemon_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemon.service */ "./src/app/core/services/pokemon.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return _pokemon_service__WEBPACK_IMPORTED_MODULE_1__["PokemonService"]; });

/* harmony import */ var _abilities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abilities.service */ "./src/app/core/services/abilities.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbilitiesService", function() { return _abilities_service__WEBPACK_IMPORTED_MODULE_2__["AbilitiesService"]; });

/* harmony import */ var _generations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generations.service */ "./src/app/core/services/generations.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenerationsService", function() { return _generations_service__WEBPACK_IMPORTED_MODULE_3__["GenerationsService"]; });

/* harmony import */ var _types_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.service */ "./src/app/core/services/types.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypesService", function() { return _types_service__WEBPACK_IMPORTED_MODULE_4__["TypesService"]; });

/* harmony import */ var _colors_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colors.service */ "./src/app/core/services/colors.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return _colors_service__WEBPACK_IMPORTED_MODULE_5__["ColorsService"]; });









/***/ }),

/***/ "./src/app/core/services/pokeapi.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/pokeapi.service.ts ***!
  \**************************************************/
/*! exports provided: PokeapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeapiService", function() { return PokeapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/pokeapi.config */ "./src/app/core/config/pokeapi.config.ts");




var PokeapiService = /** @class */ (function () {
    function PokeapiService(httpClient) {
        this.httpClient = httpClient;
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
        };
    }
    PokeapiService.prototype.getPokeapi = function (endpoint, name) {
        if (name)
            return this.httpClient.get("" + _config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].url + endpoint + name, this.header);
        return this.httpClient.get("" + _config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].url + endpoint + "?offset=0&limit=1000", this.header);
    };
    PokeapiService.prototype.getPokemonSpriteUrl = function (id) {
        return "" + _config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].spriteUrl.front_default + id + _config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].spriteUrlEnd;
    };
    PokeapiService.prototype.getPokedex = function () {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.pokedex);
    };
    PokeapiService.prototype.getAllPokemon = function () {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.pokemon);
    };
    PokeapiService.prototype.getOnePokemon = function (name) {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.pokemon, name);
    };
    PokeapiService.prototype.getOnePokemonSpecie = function (name) {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.pokemonSpecies, name);
    };
    PokeapiService.prototype.getAllAbilities = function () {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.ability);
    };
    PokeapiService.prototype.getOneAbility = function (name) {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.ability, name);
    };
    PokeapiService.prototype.getAllTypes = function () {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.type);
    };
    PokeapiService.prototype.getOneType = function (name) {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.type, name);
    };
    PokeapiService.prototype.getAllGenerations = function () {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.generation);
    };
    PokeapiService.prototype.getOneGeneration = function (name) {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.generation, name);
    };
    PokeapiService.prototype.getAllColors = function () {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.color);
    };
    PokeapiService.prototype.getOnecolor = function (name) {
        return this.getPokeapi(_config_pokeapi_config__WEBPACK_IMPORTED_MODULE_3__["PokeapiConfig"].endpoints.color, name);
    };
    PokeapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PokeapiService);
    return PokeapiService;
}());



/***/ }),

/***/ "./src/app/core/services/pokemon.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/pokemon.service.ts ***!
  \**************************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeapi.service */ "./src/app/core/services/pokeapi.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PokemonService = /** @class */ (function () {
    function PokemonService(pokeapiService) {
        this.pokeapiService = pokeapiService;
        this.pokemonDetailsList = {};
    }
    PokemonService.prototype.parsePokemon = function (name, pokemonResponse, pokemonSpeciesResponse) {
        return {
            name: name,
            pokemon: pokemonResponse,
            species: pokemonSpeciesResponse,
        };
    };
    PokemonService.prototype.getAllPokemon = function () {
        var _this = this;
        if (this.allPokemonList) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.allPokemonList);
        }
        return this.pokeapiService.getPokedex().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (pokedex) {
            _this.allPokemonList = pokedex.pokemon_entries;
            return pokedex.pokemon_entries;
        }));
    };
    PokemonService.prototype.getPokemonDetails = function (name) {
        var _this = this;
        if (this.pokemonDetailsList[name]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.pokemonDetailsList[name]);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.pokeapiService.getOnePokemon(name), this.pokeapiService.getOnePokemonSpecie(name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (_a) {
            var pokemonResponse = _a[0], pokemonSpeciesResponse = _a[1];
            _this.pokemonDetailsList[name] = _this.parsePokemon(name, pokemonResponse, pokemonSpeciesResponse);
            return _this.parsePokemon(name, pokemonResponse, pokemonSpeciesResponse);
        }));
    };
    PokemonService.prototype.getPokemonSpriteUrl = function (id) {
        return this.pokeapiService.getPokemonSpriteUrl(id);
    };
    PokemonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pokeapi_service__WEBPACK_IMPORTED_MODULE_2__["PokeapiService"]])
    ], PokemonService);
    return PokemonService;
}());



/***/ }),

/***/ "./src/app/core/services/types.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/types.service.ts ***!
  \************************************************/
/*! exports provided: TypesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypesService", function() { return TypesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pokeapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pokeapi.service */ "./src/app/core/services/pokeapi.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TypesService = /** @class */ (function () {
    function TypesService(pokeapiService) {
        this.pokeapiService = pokeapiService;
        this.pokemonPerType = {};
    }
    TypesService.prototype.getAllTypes = function () {
        var _this = this;
        if (this.allTypesList) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.allTypesList);
        }
        return this.pokeapiService.getAllTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (types) {
            _this.allTypesList = types;
            return types;
        }));
    };
    TypesService.prototype.getPokemonListFromOneType = function (name) {
        var _this = this;
        if (this.pokemonPerType[name]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.pokemonPerType[name]);
        }
        return this.pokeapiService.getOneType(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var pokemonList = [];
            response.pokemon.forEach(function (pokemon) {
                pokemonList.push(pokemon.pokemon.name);
            });
            _this.pokemonPerType[name] = pokemonList;
            return pokemonList;
        }));
    };
    TypesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pokeapi_service__WEBPACK_IMPORTED_MODULE_2__["PokeapiService"]])
    ], TypesService);
    return TypesService;
}());



/***/ }),

/***/ "./src/app/module/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/module/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer></footer>"

/***/ }),

/***/ "./src/app/module/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/module/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/module/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/module/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'footer-component',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/module/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/module/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/module/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/module/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header></header>"

/***/ }),

/***/ "./src/app/module/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/module/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/module/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/module/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-component',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/module/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/module/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/module/index.ts":
/*!*********************************!*\
  !*** ./src/app/module/index.ts ***!
  \*********************************/
/*! exports provided: PokemonListComponent, PokemonDetailsDialog, HeaderComponent, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pokemonList_pokemon_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemonList/pokemon-list.component */ "./src/app/module/pokemonList/pokemon-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return _pokemonList_pokemon_list_component__WEBPACK_IMPORTED_MODULE_0__["PokemonListComponent"]; });

/* harmony import */ var _pokemonList_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemonList/pokemon-details/pokemon-details.component */ "./src/app/module/pokemonList/pokemon-details/pokemon-details.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailsDialog", function() { return _pokemonList_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_1__["PokemonDetailsDialog"]; });

/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/module/header/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]; });

/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/module/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]; });







/***/ }),

/***/ "./src/app/module/pokemonList/pokemon-details/pokemon-details.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/module/pokemonList/pokemon-details/pokemon-details.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"pokemonDetails\" class=\"pokedex\">\r\n  <button mat-mini-fab (click)=\"close()\">\r\n    <mat-icon aria-hidden=\"false\" aria-label=\"close\">close</mat-icon>\r\n  </button>\r\n  <h1>{{pokemonDetails.name}}</h1>\r\n  <div class=\"stat-img-table\">\r\n    <section class=\"img-table\">\r\n      <table>\r\n        <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>Male</th>\r\n            <th>Female</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>Normal</td>\r\n            <td class=\"img-case\"><img [src]=\"pokemonDetails.pokemon.sprites.front_default\" alt=\"male normal\"></td>\r\n            <td class=\"img-case\"><img [src]=\"pokemonDetails.pokemon.sprites.front_female\" *ngIf=\"pokemonDetails.pokemon.sprites.front_female\" alt=\"female normal\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Shiny</td>\r\n            <td class=\"img-case\"><img [src]=\"pokemonDetails.pokemon.sprites.front_shiny\" *ngIf=\"pokemonDetails.pokemon.sprites.front_shiny\" alt=\"male shiny\"></td>\r\n            <td class=\"img-case\"><img [src]=\"pokemonDetails.pokemon.sprites.front_shiny_female\" *ngIf=\"pokemonDetails.pokemon.sprites.front_shiny_female\" alt=\"female shiny\"></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </section>\r\n    <section class=\"stat-table\">\r\n      <table>\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"2\">Stats</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let stat of pokemonDetails.pokemon.stats\">\r\n            <td>{{ stat.stat.name }}</td>\r\n            <td>{{ stat.base_stat }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </section>\r\n  </div>\r\n  <section class=\"description\">\r\n    <h2>description</h2>\r\n    <p>{{ getDescription(pokemonDetails.species.flavor_text_entries) }}</p>\r\n  </section>\r\n</div>\r\n<loading-component *ngIf=\"!pokemonDetails\"></loading-component>"

/***/ }),

/***/ "./src/app/module/pokemonList/pokemon-details/pokemon-details.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/module/pokemonList/pokemon-details/pokemon-details.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pokedex {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 600px;\n  max-height: 95vh;\n  overflow: auto; }\n  .pokedex table {\n    border-collapse: collapse; }\n  .pokedex .stat-img-table {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    width: 100%;\n    justify-content: space-around; }\n  .pokedex .stat-img-table section {\n      margin: 20px; }\n  .pokedex .stat-table th, .pokedex .stat-table td {\n    padding: 8px 20px;\n    text-align: left;\n    border-bottom: 1px solid #ddd; }\n  .pokedex .stat-table tr:nth-child(even) {\n    background-color: #f2f2f2; }\n  .pokedex .stat-table th {\n    background-color: #b8b8b8;\n    color: white; }\n  .pokedex .img-table th, .pokedex .img-table td {\n    padding: 5px;\n    text-align: center;\n    border-bottom: 1px solid #ddd;\n    border-right: 1px solid #ddd; }\n  .pokedex .img-table .img-case {\n    width: 100px;\n    height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlL3Bva2Vtb25MaXN0L3Bva2Vtb24tZGV0YWlscy9DOlxcVXNlcnNcXGNsYWZmb250XFxEb3dubG9hZHNcXFBlcnNvXFxwb2tlZGl4ZWVkL3NyY1xcYXBwXFxtb2R1bGVcXHBva2Vtb25MaXN0XFxwb2tlbW9uLWRldGFpbHNcXHBva2Vtb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0VBTmxCO0lBU1EseUJBQXlCLEVBQUE7RUFUakM7SUFhUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsNkJBQTZCLEVBQUE7RUFqQnJDO01Bb0JZLFlBQVksRUFBQTtFQXBCeEI7SUEyQlksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2QkFBNkIsRUFBQTtFQTdCekM7SUFnQzRCLHlCQUF5QixFQUFBO0VBaENyRDtJQW1DWSx5QkFBeUI7SUFDekIsWUFBWSxFQUFBO0VBcEN4QjtJQTJDWSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qiw0QkFBNEIsRUFBQTtFQTlDeEM7SUFrRFksWUFBWTtJQUNaLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9wb2tlbW9uTGlzdC9wb2tlbW9uLWRldGFpbHMvcG9rZW1vbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBva2VkZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDk1dmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhdC1pbWctdGFibGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgIHNlY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGF0LXRhYmxlIHtcclxuXHJcbiAgICAgICAgdGgsIHRkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHI6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhiOGI4O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbWctdGFibGUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoLCB0ZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmltZy1jYXNlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/module/pokemonList/pokemon-details/pokemon-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/module/pokemonList/pokemon-details/pokemon-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PokemonDetailsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonDetailsDialog", function() { return PokemonDetailsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");




var PokemonDetailsDialog = /** @class */ (function () {
    function PokemonDetailsDialog(dialogRef, data, pokemonService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.pokemonService = pokemonService;
        this.loadPokemonDetails(data.pokemon);
    }
    PokemonDetailsDialog.prototype.close = function () {
        this.dialogRef.close();
    };
    PokemonDetailsDialog.prototype.loadPokemonDetails = function (name) {
        var _this = this;
        this.pokemonService.getPokemonDetails(name).subscribe(function (response) {
            _this.pokemonDetails = response;
            console.log(response);
        });
    };
    PokemonDetailsDialog.prototype.getDescription = function (flavor_text_entries) {
        for (var index = 0; index < flavor_text_entries.length; index++) {
            var flavor_text_entri = flavor_text_entries[index];
            if (flavor_text_entri.language.name == 'en') {
                return flavor_text_entri.flavor_text;
            }
        }
    };
    PokemonDetailsDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pokemon-details',
            template: __webpack_require__(/*! ./pokemon-details.component.html */ "./src/app/module/pokemonList/pokemon-details/pokemon-details.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-details.component.scss */ "./src/app/module/pokemonList/pokemon-details/pokemon-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["PokemonService"]])
    ], PokemonDetailsDialog);
    return PokemonDetailsDialog;
}());



/***/ }),

/***/ "./src/app/module/pokemonList/pokemon-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/module/pokemonList/pokemon-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav #sidenav [fixedInViewport]=\"mobileQuery.matches\" [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [(opened)]=\"sideNavOpened\">\r\n    <section id=\"filters-menu\">\r\n      \r\n      <button mat-mini-fab class=\"open-close-side-nav\" (click)=\"sideNavOpened=!sideNavOpened\" [ngClass]=\"{'close': sideNavOpened}\">\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"close\">close</mat-icon>\r\n      </button>\r\n\r\n      <mat-button-toggle-group name=\"order-by\" aria-label=\"Order by\">\r\n        <mat-button-toggle (click)=\"sort('entry_number')\" value=\"id\">\r\n          Pokemon ID\r\n          <mat-icon *ngIf=\"key=='entry_number'&&!reverse\" aria-hidden=\"false\" aria-label=\"croissant\">expand_less</mat-icon>\r\n          <mat-icon *ngIf=\"key=='entry_number'&&reverse\" aria-hidden=\"false\" aria-label=\"decroissant\">expand_more</mat-icon>\r\n        </mat-button-toggle>\r\n        <mat-button-toggle (click)=\"sort('pokemon_species')\" value=\"name\">\r\n          <mat-icon *ngIf=\"key=='pokemon_species'&&!reverse\" aria-hidden=\"false\" aria-label=\"croissant\">expand_less</mat-icon>\r\n          <mat-icon *ngIf=\"key=='pokemon_species'&&reverse\" aria-hidden=\"false\" aria-label=\"decroissant\">expand_more</mat-icon>\r\n          Pokemon name\r\n        </mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n\r\n      <mat-form-field>\r\n        <input [(ngModel)]=\"filter.pokemonName\" matInput placeholder=\"Pokemon name or id\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Type</mat-label>\r\n        <mat-select (selectionChange)=\"abilityChange('type')\" [(ngModel)]=\"filter.type\">\r\n          <mat-option value=\"\"></mat-option>\r\n          <mat-option *ngFor=\"let type of selectList.types | orderBy : 'name' : true\" [value]=\"type.name\">\r\n            {{ type.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Ability</mat-label>\r\n        <mat-select (selectionChange)=\"abilityChange('ability')\" [(ngModel)]=\"filter.ability\">\r\n          <mat-option value=\"\"></mat-option>\r\n          <mat-option *ngFor=\"let ability of selectList.abilities | orderBy : 'name' : true\" [value]=\"ability.name\">\r\n            {{ ability.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Color</mat-label>\r\n        <mat-select (selectionChange)=\"abilityChange('color')\" [(ngModel)]=\"filter.color\">\r\n          <mat-option value=\"\"></mat-option>\r\n          <mat-option *ngFor=\"let color of selectList.colors | orderBy : 'name' : true\" [value]=\"color.name\">\r\n            {{ color.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-label>Generation</mat-label>\r\n        <mat-select (selectionChange)=\"abilityChange('generation')\" [(ngModel)]=\"filter.generation\">\r\n          <mat-option value=\"\"></mat-option>\r\n          <mat-option *ngFor=\"let generation of selectList.generations | orderBy : 'name' : true\" [value]=\"generation.name\">\r\n            {{ generation.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </section>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <button mat-mini-fab class=\"open-close-side-nav\" (click)=\"sideNavOpened=!sideNavOpened\" [ngClass]=\"{'close': sideNavOpened}\">\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"more\">more_horiz</mat-icon>\r\n    </button>\r\n    \r\n    <section id=\"pokemon-list\">\r\n      <loading-component *ngIf=\"isLoading\" style=\"height: 100vh\"></loading-component>\r\n      <ul *ngIf=\"!isLoading\">\r\n        <li *ngFor=\"\r\n          let pokemon of pokemonList\r\n          | filters: {\r\n            pokemon_species: filter.pokemonName,\r\n            entry_number: filter.pokemonName}\r\n          | filterArray: {\r\n            pokemon_species: filteredPokemonListForFilter.ability}\r\n          | filterArray: {\r\n            pokemon_species: filteredPokemonListForFilter.type}\r\n          | filterArray: {\r\n            pokemon_species: filteredPokemonListForFilter.generation}\r\n          | filterArray: {\r\n            pokemon_species: filteredPokemonListForFilter.color}\r\n          | orderBy : key : reverse\r\n          | paginate: { itemsPerPage: mobileQuery.matches ? 10 : 50, currentPage: p }\">\r\n          <button mat-raised-button (click)=\"openPokemonDetailsDialog(pokemon.pokemon_species.name)\">\r\n            <span class=\"pokemon-id\">{{ pokemon.entry_number }}</span>\r\n            <img [src]=\"getPokemonSpriteUrl(pokemon.entry_number)\" [alt]=\"pokemon.pokemon_species.name\" aria-hidden=\"true\">\r\n            <p>{{ pokemon.pokemon_species.name }}</p>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n\r\n      <pagination-controls (pageChange)=\"p = $event\" autoHide=\"true\" responsive=\"true\"></pagination-controls>\r\n\r\n    </section>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/module/pokemonList/pokemon-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/module/pokemonList/pokemon-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#filters-menu {\n  display: flex;\n  flex-direction: column;\n  padding: 20px; }\n\n#pokemon-list {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh; }\n\n#pokemon-list ul {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    flex-grow: 1;\n    margin: 0;\n    padding: 20px; }\n\n#pokemon-list li {\n    margin: 5px;\n    padding: 0;\n    list-style: none; }\n\n#pokemon-list li button {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n      height: 120px;\n      width: 120px;\n      background: white; }\n\n#pokemon-list li p {\n      margin: 0;\n      line-height: 1; }\n\n#pokemon-list li .pokemon-id {\n      position: absolute;\n      top: 9px;\n      left: 9px;\n      line-height: 1; }\n\nmat-sidenav-content .open-close-side-nav {\n  height: 40px;\n  width: 35px;\n  border-radius: 0 20px 20px 0;\n  background: white;\n  position: fixed;\n  left: 0;\n  top: 10px;\n  z-index: 1;\n  color: black;\n  transition: 1s ease; }\n\nmat-sidenav-content .open-close-side-nav.close {\n    left: -40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlL3Bva2Vtb25MaXN0L0M6XFxVc2Vyc1xcY2xhZmZvbnRcXERvd25sb2Fkc1xcUGVyc29cXHBva2VkaXhlZWQvc3JjXFxhcHBcXG1vZHVsZVxccG9rZW1vbkxpc3RcXHBva2Vtb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdqQjtFQUNJLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUpyQjtJQU9RLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixTQUFTO0lBQ1QsYUFBYSxFQUFBOztBQVpyQjtJQWdCUSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQixFQUFBOztBQWxCeEI7TUFxQlksYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsWUFBWTtNQUNaLGlCQUFpQixFQUFBOztBQTVCN0I7TUFnQ1ksU0FBUztNQUNULGNBQWMsRUFBQTs7QUFqQzFCO01BcUNZLGtCQUFrQjtNQUNsQixRQUFRO01BQ1IsU0FBUztNQUNULGNBQWMsRUFBQTs7QUFJMUI7RUFFUSxZQUFZO0VBQ1osV0FBVztFQUNYLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUIsRUFBQTs7QUFYM0I7SUFjWSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGUvcG9rZW1vbkxpc3QvcG9rZW1vbi1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZpbHRlcnMtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNwb2tlbW9uLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcblxyXG4gICAgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucG9rZW1vbi1pZCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA5cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IDlweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgLm9wZW4tY2xvc2Utc2lkZS1uYXYge1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xyXG5cclxuICAgICAgICAmLmNsb3NlIHtcclxuICAgICAgICAgICAgbGVmdDogLTQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/module/pokemonList/pokemon-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/module/pokemonList/pokemon-list.component.ts ***!
  \**************************************************************/
/*! exports provided: PokemonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonListComponent", function() { return PokemonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pokemon-details/pokemon-details.component */ "./src/app/module/pokemonList/pokemon-details/pokemon-details.component.ts");







var PokemonListComponent = /** @class */ (function () {
    function PokemonListComponent(dialog, pokemonService, abilitiesService, generationsService, typesService, colorsService, changeDetectorRef, media) {
        var _this = this;
        this.dialog = dialog;
        this.pokemonService = pokemonService;
        this.abilitiesService = abilitiesService;
        this.generationsService = generationsService;
        this.typesService = typesService;
        this.colorsService = colorsService;
        this.changeDetectorRef = changeDetectorRef;
        this.media = media;
        this.isLoading = true;
        this.sideNavOpened = false;
        this.key = 'entry_number';
        this.reverse = true;
        this.p = 1;
        this.selectList = {
            types: [],
            abilities: [],
            colors: [],
            generations: [],
        };
        this.filter = {
            pokemonName: '',
            type: '',
            ability: '',
            color: '',
            generation: '',
        };
        this.filteredPokemonListForFilter = {
            types: [],
            abilities: [],
            colors: [],
            generations: [],
        };
        this.loadPokemonList();
        this.loadSelectList();
        this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return _this.changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    PokemonListComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    PokemonListComponent.prototype.loadPokemonList = function () {
        var _this = this;
        this.pokemonService.getAllPokemon().subscribe(function (response) {
            _this.pokemonList = response;
            _this.isLoading = false;
        });
    };
    PokemonListComponent.prototype.loadSelectList = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.abilitiesService.getAllAbilities(), this.generationsService.getAllGenerations(), this.typesService.getAllTypes(), this.colorsService.getAllColors()).subscribe(function (_a) {
            var abilitiesResponse = _a[0], generationsResponse = _a[1], typesResponse = _a[2], colorsResponse = _a[3];
            _this.selectList.abilities = abilitiesResponse.results;
            _this.selectList.generations = generationsResponse.results;
            _this.selectList.types = typesResponse.results;
            _this.selectList.colors = colorsResponse.results;
        });
    };
    PokemonListComponent.prototype.abilityChange = function (filter) {
        var _this = this;
        if (!this.filter[filter]) {
            this.filteredPokemonListForFilter[filter] = [];
            return;
        }
        var request;
        switch (filter) {
            case 'ability':
                request = this.abilitiesService.getPokemonListFromOneAbility(this.filter.ability);
                break;
            case 'type':
                request = this.typesService.getPokemonListFromOneType(this.filter.type);
                break;
            case 'generation':
                request = this.generationsService.getPokemonListFromOneGeneration(this.filter.generation);
                break;
            case 'color':
                request = this.colorsService.getPokemonListFromOneColor(this.filter.color);
                break;
            default:
                request = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
                break;
        }
        request.subscribe(function (response) {
            _this.filteredPokemonListForFilter[filter] = response;
        });
    };
    PokemonListComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    PokemonListComponent.prototype.getPokemonSpriteUrl = function (id) {
        return this.pokemonService.getPokemonSpriteUrl(id);
    };
    PokemonListComponent.prototype.openPokemonDetailsDialog = function (name) {
        this.dialog.open(_pokemon_details_pokemon_details_component__WEBPACK_IMPORTED_MODULE_6__["PokemonDetailsDialog"], {
            maxWidth: '100vw',
            data: {
                pokemon: name
            }
        });
    };
    PokemonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pokemon-list',
            template: __webpack_require__(/*! ./pokemon-list.component.html */ "./src/app/module/pokemonList/pokemon-list.component.html"),
            styles: [__webpack_require__(/*! ./pokemon-list.component.scss */ "./src/app/module/pokemonList/pokemon-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["PokemonService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["AbilitiesService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["GenerationsService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["TypesService"],
            src_app_core_services__WEBPACK_IMPORTED_MODULE_3__["ColorsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]])
    ], PokemonListComponent);
    return PokemonListComponent;
}());



/***/ }),

/***/ "./src/app/shared/component/loading/loading.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/shared/component/loading/loading.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\r\n  <img src=\"assets/img/pokeball.png\" aria-hidden=\"true\" class=\"spin\">\r\n</div>"

/***/ }),

/***/ "./src/app/shared/component/loading/loading.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/component/loading/loading.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.spin {\n  width: 50px;\n  height: 50px;\n  margin: 30px;\n  -webkit-animation: spin 1.5s linear infinite;\n          animation: spin 1.5s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0turn);\n            transform: rotate(0turn); }\n  100% {\n    -webkit-transform: rotate(2turn);\n            transform: rotate(2turn); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0turn);\n            transform: rotate(0turn); }\n  100% {\n    -webkit-transform: rotate(2turn);\n            transform: rotate(2turn); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudC9sb2FkaW5nL0M6XFxVc2Vyc1xcY2xhZmZvbnRcXERvd25sb2Fkc1xcUGVyc29cXHBva2VkaXhlZWQvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50XFxsb2FkaW5nXFxsb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLDRDQUFvQztVQUFwQyxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSTtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQTtFQUU1QjtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBOztBQUxoQztFQUNJO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBO0VBRTVCO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50L2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNwaW4ge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMHR1cm4pO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMnR1cm4pO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/component/loading/loading.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/component/loading/loading.component.ts ***!
  \***************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'loading-component',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/shared/component/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/component/loading/loading.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filterArray.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/filterArray.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterArrayPipe", function() { return FilterArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterArrayPipe = /** @class */ (function () {
    function FilterArrayPipe() {
    }
    FilterArrayPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            return items.filter(function (item) {
                return filterKeys_1.some(function (keyName) {
                    if (!Array.isArray(filter[keyName])) {
                        return true;
                    }
                    return filter[keyName].indexOf(item[keyName].name) >= 0 || filter[keyName].length == 0;
                });
            });
        }
    };
    FilterArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterArray'
        })
    ], FilterArrayPipe);
    return FilterArrayPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filters.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/pipes/filters.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltersPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersPipe", function() { return FiltersPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltersPipe = /** @class */ (function () {
    function FiltersPipe() {
    }
    FiltersPipe.prototype.transform = function (items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(function (item) {
                    return filterKeys_1.reduce(function (x, keyName) {
                        return (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] == "";
                    }, true);
                });
            }
            else {
                return items.filter(function (item) {
                    return filterKeys_1.some(function (keyName) {
                        if (item[keyName].name) {
                            return new RegExp(filter[keyName], 'gi').test(item[keyName].name) || filter[keyName] == "";
                        }
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] == "";
                    });
                });
            }
        }
    };
    FiltersPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filters'
        })
    ], FiltersPipe);
    return FiltersPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/pipes/index.ts ***!
  \***************************************/
/*! exports provided: FiltersPipe, OrderByPipe, FilterArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filters_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filters.pipe */ "./src/app/shared/pipes/filters.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FiltersPipe", function() { return _filters_pipe__WEBPACK_IMPORTED_MODULE_0__["FiltersPipe"]; });

/* harmony import */ var _order_by_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-by.pipe */ "./src/app/shared/pipes/order-by.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return _order_by_pipe__WEBPACK_IMPORTED_MODULE_1__["OrderByPipe"]; });

/* harmony import */ var _filterArray_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterArray.pipe */ "./src/app/shared/pipes/filterArray.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterArrayPipe", function() { return _filterArray_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterArrayPipe"]; });






/***/ }),

/***/ "./src/app/shared/pipes/order-by.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/order-by.pipe.ts ***!
  \***********************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy) {
            return array;
        }
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                if (item1[orderBy].name && item2[orderBy].name) {
                    return _this.orderByComparator(item1[orderBy].name, item2[orderBy].name);
                }
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            return Array.from(array).sort(function (item1, item2) {
                if (item1[orderBy].name && item2[orderBy].name) {
                    return _this.orderByComparator(item2[orderBy].name, item1[orderBy].name);
                }
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    OrderByPipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
        }
        else {
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\claffont\Downloads\Perso\pokedixeed\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map