/**
 * b-lib-boilerplate v 1.0.0
 * Author: Bornfight
 * Repo: https://github.com/bornfight/b-lib-boilerplate
 *
 * Year: 2020
 */

import LibComponent from "./components/LibComponent.js";

export default class LibName {
    /**
     *
     * @param {string} string
     */
    constructor(string) {
        this.init(string);

        const libComponent = new LibComponent();
    }

    /**
     *
     * @param {string} string
     */
    init(string) {
        console.log(`Hi I am lib and this is your "${string}"`);
    }
}
