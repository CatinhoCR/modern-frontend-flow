"use strict";
import DashboardModel from './DashboardModel';
import DashboardView from './DashboardView';
import Utils from './../../helpers/Utils';

export default class DashboardCtrl {
    constructor() {
        this.model = new DashboardModel();
        this.view = new DashboardView();
    }

    async setupView() {
        return 'Hola';
    }

    async after_setup() {
        return 'What';
    }
}