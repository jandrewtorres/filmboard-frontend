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
var SideNav = (function () {
    function SideNav() {
        this.sideNavClick = new core_1.EventEmitter();
    }
    SideNav.prototype.onSelect = function (list) {
        this.currentList = list;
        this.sideNavClick.emit(this.currentList);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SideNav.prototype, "Lists", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SideNav.prototype, "sideNavClick", void 0);
    SideNav = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'side-nav',
            template: "\n    <div class=\"side-nav-container grey-background\">\n    <h3 (click)=\"onSelect()\" class=\"text-center head-background\">Lists</h3>\n      <div [class.selected]=\"list === currentList\" class=\"side-nav-item\" *ngFor=\"let list of Lists\">\n        <h4 (click)=\"onSelect(list)\">{{list.name}}</h4>\n      </div>\n    </div>\n  ",
            styleUrls: ['./side-nav.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], SideNav);
    return SideNav;
}());
exports.SideNav = SideNav;
//# sourceMappingURL=side-nav.component.js.map