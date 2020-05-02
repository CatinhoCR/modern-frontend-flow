"use strict";
import AboutModel from './AboutModel';
import AboutView from './AboutView';
import Utils from './../../helpers/Utils';

export default class AboutCtrl {
    constructor() {

    }

    async setupView() {
        return 'About';
    }

    async after_setup() {
        return 'What up?';
    }
}