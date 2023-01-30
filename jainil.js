"use strict";

class jLib {

    static selectors = {
        class: ".",
        id: '#',
        data: '*',
        placeholder: '&',
        tag: '>',
    };

    static htmlElements = {
        div: 'div',
        span: 'span',
        p: 'p',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        a: 'a',
        img: 'img',
        button: 'button',
        input: 'input',
        textarea: 'textarea',
        select: 'select',
        option: 'option',
        form: 'form',
        label: 'label',
        table: 'table',
        tr: 'tr',
        td: 'td',
        th: 'th',
        thead: 'thead',
        tbody: 'tbody',
        tfoot: 'tfoot',
        ul: 'ul',
        ol: 'ol',
        li: 'li',
        script: 'script',
        link: 'link',
        meta: 'meta',
        style: 'style',
        header: 'header',
        footer: 'footer',
        main: 'main',
        section: 'section',
        article: 'article',
        aside: 'aside',
        nav: 'nav',
        video: 'video',
        audio: 'audio',
        source: 'source',
        canvas: 'canvas',
        svg: 'svg',
        iframe: 'iframe',
        embed: 'embed',
        object: 'object',
    }

    static selectedElement = null;

    constructor(selectors = {}) {

        if(typeof selectors == 'object' && JSON.stringify(selectors) !== "{}") {
            this.selectors = selectors;
        }

    }

    static elementSelectorParser(element) {
        if (typeof element == "string") {
            let selectorOfArgument = element[0];
            if (Object.values(this.selectors).indexOf(selectorOfArgument) > -1) {
                return Object.keys(this.selectors)[Object.values(this.selectors).indexOf(selectorOfArgument)];
            } else {
                this.error('jLib : Invalid selector');
            }
        } else {
            this.error('jLib : Invalid argument passed');
        }
    }

    static on(eventName, element, callable) {
        this.eventPaser(this.replaceTheseFromString(this.selectors,"",element), this.elementSelectorParser(element),callable, eventName);
    }

    static eventPaser(element, selector, callable, event) {
        if (selector == 'class') {
            const allClasses = document.querySelectorAll(`.${element}`);
            for (let i = 0; i < allClasses.length; i++) {
                allClasses[i].addEventListener(event, callable);
            }
        } else if (selector == "id") {
            return document.getElementById(element).addEventListener(event, callable);
        } else if (selector == "tag") {
            const thisTag = document.querySelectorAll(`${element}`);
            for (let i = 0; i < thisTag.length; i++) {
                thisTag[i].addEventListener(event, callable);
            }
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

    static select(element) {
        this.selectedElement = this.replaceTheseFromString(this.selectors, "", element);
        return this;
    }

    static show() {
        this.eventPaser(this.selectedElement, this.elementSelectorParser(this.selectedElement), (e) => {
            e.target.style.display = "block";
        }, "click");        
    }

    static hide() {
        this.eventPaser(this.selectedElement, this.elementSelectorParser(this.selectedElement), (e) => {
            e.target.style.display = "none";
        }, "click");
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


