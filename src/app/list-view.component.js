"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MovieList_1 = require('./MovieList');
var ListView = (function () {
    function ListView() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', MovieList_1.MovieList)
    ], ListView.prototype, "List", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ListView.prototype, "Lists", void 0);
    ListView = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-view',
            template: "\n    <div *ngIf=\"List\">\n      <div class=\"header\"> \n        <h3>{{List.name}}</h3>\n      </div>\n      <div class=\"table\">\n        <div class=\"row\" *ngFor=\"let movie of List.movies\">\n          <h4>{{movie.name}}</h4>\n        </div>\n      </div>\n    </div>\n  ",
            styleUrls: ['./list-view.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], ListView);
    return ListView;
}());
exports.ListView = ListView;
//# sourceMappingURL=list-view.component.js.map