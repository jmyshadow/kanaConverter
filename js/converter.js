/**
 * Writing this in vanilla JS and then converting into JQuery
 * for demonstration purposes
 */

/** to do:
 *
 *  - error box for invalid string of characters, greater than L(3) maybe 
 *
 *  X Katakana functionality
 *
 *  - refactor 
 *    - then comment out vanilla JS and convert to JQuery
 *
 *  X deal with spaces in english to kana conversion
 *       X not needed, no spaces in romaji duh
*/



let textBox = document.getElementById('textbox');
let hiraganaBox = document.getElementById('hiragana');
let katakanaBox = document.getElementById('katakana');

let hiraganaButton = document.getElementById('hiragana-button');
let katakanaButton = document.getElementById('katakana-button');


function convertText(){
    //keep output the same if already converted   
    let text = textBox.value.split('');
    let nonConv = '';
    let conv = '';
    let hiragana = '';
    let katakana = '';
    let n = false;
    
    text.forEach(kana => {
        nonConv = nonConv + kana;

        // check if need to convert to NX kana
        if(n){
            if(['na','ni','nu','no','nn','ne','nya','nyo','nyu'].includes(nonConv)){
                hiragana = hiragana.substring(0,hiragana.length-1);
                katakana = katakana.substring(0,katakana.length-1);
                n = false;
            }
        }

        // check nonConv == 'n' to maybe convert to NX kana
        if(nonConv == 'n'){
            n = true;
        }

        // check for double consonants
       if (nonConv[0]==[nonConv[1]]){
           if(nonConv !='nn'){
               hiragana += hLookup['xtsu'];
               katakana += kLookup['xtsu'];
            } 
            nonConv = nonConv[0];
        } 



        if(hLookup[nonConv]){
            hiragana += hLookup[nonConv];
            katakana += kLookup[nonConv];
            conv = conv + nonConv;

            //leave value as 'n' to check for NX kana
            if(nonConv != 'n')
                nonConv = '';
        } 
        
    })
    hiraganaBox.value = hiragana;
    katakanaBox.value = katakana;
    console.log(conv + ' has been converted.');
    console.log(nonConv + ' hasn\'t been converted');
}

function hToggle(){
    document.getElementById('hiragana-div').classList.toggle('hidden');
}

function kToggle(){
    document.getElementById('katakana-div').classList.toggle('hidden');
}

//add code to find double consonants
let kLookup = {
    "a":"ア",
    "i":"イ",
    "u":"ウ",
    "e":"エ",
    "o":"オ",
    "ka":"カ",
    "ki":"キ",
    "ku":"ク",
    "ke":"ケ",
    "ko":"コ",
    "sa":"サ",
    "shi":"シ",
    "su":"ス",
    "se":"セ",
    "so":"ソ",
    "ta":"タ",
    "chi":"チ",
    "tsu":"ツ",
    "te":"テ",
    "to":"ト",
    "na":"ナ",
    "ni":"ニ",
    "nu":"ヌ",
    "ne":"ネ",
    "no":"ノ",
    "ha":"ハ",
    "hi":"ヒ",
    "fu":"フ",
    "he":"ヘ",
    "ho":"ホ",
    "ma":"マ",
    "mi":"ミ",
    "mu":"ム",
    "me":"メ",
    "mo":"モ",
    "ya":"ヤ",
    "yu":"ユ",
    "yo":"ヨ",
    "ra":"ラ",
    "ri":"リ",
    "ru":"ル",
    "re":"レ",
    "ro":"ロ",
    "wa":"ワ",
    "wo":"ヲ",
    "n":"ン",
    "nn":"ン",
    //
    "ga":"ガ",
    "gi":"ギ",
    "gu":"グ",
    "ge":"ゲ",
    "go":"ゴ",
    "za":"ザ",
    "zi":"ジ",
    "zu":"ズ",
    "ze":"ゼ",
    "zo":"ゾ",
    "da":"ダ",
    "di":"ヂ",
    "du":"ヅ",
    "de":"デ",
    "do":"ド",
    "ba":"バ",
    "bi":"ビ",
    "bu":"ブ",
    "be":"ベ",
    "bo":"ボ",
    "pa":"パ",
    "pi":"ピ",
    "pu":"プ",
    "pe":"ペ",
    "po":"ポ",
    // Diagraphs
    "kya":"キャ",
    "kyu":"キュ",
    "kyo":"キョ",
    "sha":"シャ",
    "shu":"シュ",
    "sho":"ショ",
    "cha":"チャ",
    "chu":"チュ",
    "cho":"チョ",
    "nya":"ニャ",
    "nyu":"ニュ",
    "nyo":"ニョ",
    "hya":"ヒャ",
    "hyu":"ヒュ",
    "hyo":"ヒョ",
    "mya":"ミャ",
    "myu":"ミュ",
    "myo":"ミョ",
    "rya":"リャ",
    "ryu":"リュ",
    "ryo":"リョ",
    // Diagraphs with Diacritics
    "gya":"ギャ",
    "gyu":"ギュ",
    "gyo":"ギョ",
    "ja":"ジャ",
    "ju":"ジュ",
    "jo":"ジョ",
    "bya":"ビャ",
    "byu":"ビュ",
    "byo":"ビョ",
    "pya":"ピャ",
    "pyu":"ピュ",
    "pyo":"ピョ",
    // small kana
    "xya":"ャ",
    "xyu":"ュ",
    "xyo":"ョ",
    "xa":"ァ",
    "xe":"ェ",
    "xi":"ィ",
    "xo":"ォ",
    "xu":"ゥ",
    "xtsu":"ッ",
    "xka":"ヵ",
    "xke":"ヶ",
    //
    ".":"。",
    "?":"？",
    "!":"！",
    "-":"ー",
    ",":"、"
};

let hLookup = {
    "a":"あ",
    "i":"い",
    "u":"う",
    "e":"え",
    "o":"お",
    "ka":"か",
    "ki":"き",
    "ku":"く",
    "ke":"け",
    "ko":"こ",
    "sa":"さ",
    "shi":"し",
    "su":"す",
    "se":"せ",
    "so":"そ",
    "ta":"た",
    "chi":"ち",
    "tsu":"つ",
    "te":"て",
    "to":"と",
    "na":"な",
    "ni":"に",
    "nu":"ぬ",
    "ne":"ね",
    "no":"の",
    "ha":"は",
    "hi":"ひ",
    "fu":"ふ",
    "he":"へ",
    "ho":"ほ",
    "ma":"ま",
    "mi":"み",
    "mu":"む",
    "me":"め",
    "mo":"も",
    "ya":"や",
    "yu":"ゆ",
    "yo":"よ",
    "ra":"ら",
    "ri":"り",
    "ru":"る",
    "re":"れ",
    "ro":"ろ",
    "wa":"わ",
    "wo":"を",
    "n":"ん",
    "nn":"ん",
    //
    "ga":"が",
    "gi":"ぎ",
    "gu":"ぐ",
    "ge":"げ",
    "go":"ご",
    "za":"ざ",
    "zi":"じ",
    "zu":"ず",
    "ze":"ぜ",
    "zo":"ぞ",
    "da":"だ",
    "di":"ぢ",
    "du":"づ",
    "de":"で",
    "do":"ど",
    "ba":"ば",
    "bi":"び",
    "bu":"ぶ",
    "be":"べ",
    "bo":"ぼ",
    "pa":"ぱ",
    "pi":"ぴ",
    "pu":"ぷ",
    "pe":"ぺ",
    "po":"ぽ",
    // Diagraphs
    "kya":"きゃ",
    "kyu":"きゅ",
    "kyo":"きょ",
    "sha":"しゃ",
    "shu":"しゅ",
    "sho":"しょ",
    "cha":"ちゃ",
    "chu":"ちゅ",
    "cho":"ちょ",
    "nya":"にゃ",
    "nyu":"にゅ",
    "nyo":"にょ",
    "hya":"ひゃ",
    "hyu":"ひゅ",
    "hyo":"ひょ",
    "mya":"みゃ",
    "myu":"みゅ",
    "myo":"みょ",
    "rya":"りゃ",
    "ryu":"りゅ",
    "ryo":"りょ",
    // Diagraphs with Diacritics
    "gya":"ぎゃ",
    "gyu":"ぎゅ",
    "gyo":"ぎょ",
    "ja":"じゃ",
    "ju":"じゅ",
    "jo":"じょ",
    "bya":"びゃ",
    "byu":"びゅ",
    "byo":"びょ",
    "pya":"ぴゃ",
    "pyu":"ぴゅ",
    "pyo":"ぴょ",
    // small kana
    "xya":"ゃ",
    "xyu":"ゅ",
    "xyo":"ょ",
    "xa":"ぁ",
    "xe":"ぇ",
    "xi":"ぃ",
    "xo":"ぉ",
    "xu":"ぅ",
    "xtsu":"っ",
    "xka":"ゕ",
    "xke":"ゖ",
    //
    ".":"。",
    "?":"？",
    "!":"！",
    "-":"ー",
    ",":"、"
};


textBox.addEventListener('input',convertText);
hiraganaButton.addEventListener('click',hToggle);
katakanaButton.addEventListener('click',kToggle);