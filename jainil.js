"use strict";

class jLib {

    static selectors = {
        class: ".",
        id: '#',
        data: '*',
        placeholder: '&'
    };

    constructor(selectors = {}) {

        if(typeof selectors == 'object' && JSON.stringify(selectors) !== "{}") {
            this.selectors = selectors;
        }

    }

    static elementSelectorParser(element) {
        if (typeof element == "string") {
            let selectorOfArgument = element[0];
            if (Object.values(this.selectors).indexOf(selectorOfArgument) > -1) {
                return Object.keys(this.selectors)[Object.values(this.selectors).indexOf(selectorOfArgument)]
            } else {
                this.error('Invalid selector passed');                
            }
        } else {
            this.error('Invalid argument passed');
        }
    }

    static onClick(element, callable) {
        let z = this.eventPaser(this.replaceTheseFromString(this.selectors,"",element), this.elementSelectorParser(element),callable, 'click');
    }

    static eventPaser(element, selector, callable, event) {
        if (selector == 'class') {
            document.querySelector(`.${element}`).addEventListener(event, callable);
        } else if (selector == "id") {
            return document.getElementById(element).addEventListener(event, callable);
        }
 
    }

    static replaceTheseFromString(oldstr, newstr, element)
    {
        if (Array.isArray(oldstr)) {
            oldstr = oldstr;
        } else if (typeof oldstr == 'object') {
            oldstr = Object.values(oldstr);
        }

        for (let i = 0; i < oldstr.length; i++) {
            element = element.replace(oldstr[i], newstr);
        }

        return element;
    }

    static log(...args) {
        console.log(...args);
    }

    static print(...args) {
        console.log(...args);
    }

    static error(...errors) {
        console.error(...errors);
    }

    static warning(...warnings) {
        console.warn(...warnings);
    }

}


