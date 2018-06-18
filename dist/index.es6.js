import { PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * `WhcgJsonMerger`
 * 
 * @customElement
 * @polymer
 */

class WhcgJsonMerger extends PolymerElement {
    
    static get properties() {

        return {
            whcgjsonarrayinput: {
                type: String,
                notify: true,
                readOnly: false,
                observer: '_whcgjsonarrayinputChanged'
            },
            whcgjsonoutput: {
                type: String,
                notify: true,
                readOnly: false,
            },
        }
    };

    _whcgjsonarrayinputChanged() {
       
       let parsedJson = JSON.parse(this.whcgjsonarrayinput);

       let resultsArr = parsedJson.map(item => item.result);

       let result = resultsArr.reduce((acc, results) => {
        return acc.concat(results);
       }, []);

       let whcgObj = {result: result};
       console.log('whcgObj');
       console.log(whcgObj);

       this.whcgjsonoutput = JSON.stringify(whcgObj);
    } 
}

window.customElements.define('whcg-json-merger', WhcgJsonMerger);

export { WhcgJsonMerger };
