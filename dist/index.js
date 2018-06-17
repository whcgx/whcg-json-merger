'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var polymerElement_js = require('@polymer/polymer/polymer-element.js');

/**
 * `WhcgNumberFieldBox`
 * 
 * @customElement
 * @polymer
 */

class WhcgJsonMerger extends polymerElement_js.PolymerElement {
    

    

    static get properties() {

        return {
            arrayreciever: {
                type: String,
                notify: true,
                readOnly: false,
                observer: '_observArray'
            },
            mergedjson: {
                type: String,
                notify: true,
                readOnly: false,
            },
        }
    };

    _observArray() {
       let parsedJson = JSON.parse(this.arrayreciever);
       let concatParsedJson = parsedJson[0].result.concat(parsedJson[1].result[0]);

       let concatObj = {};
        concatObj.result = concatParsedJson;

       let concatJson = JSON.stringify(concatObj);
        this.mergedjson = concatJson;

        
        console.log(this.mergedjson);
    }

    
}

window.customElements.define('whcg-json-merger', WhcgJsonMerger);

exports.WhcgJsonMerger = WhcgJsonMerger;
