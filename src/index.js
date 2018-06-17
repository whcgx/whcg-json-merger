import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `WhcgNumberFieldBox`
 * 
 * @customElement
 * @polymer
 */

export class WhcgJsonMerger extends PolymerElement {
    

    

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
