var words = ['I am doubleZ', 'I major in Software Engineering', 'in Tongji University'];
var part;
var i = 0;
var offset = 0;
var forwards = true;
var skip_count = 0;
var skip_delay = 5;
var speed = 100;

var wordflick = function(){
    setInterval(function(){
        if(forwards){
            if(offset >= words[i].length){
                ++skip_count;
                if(skip_count == skip_delay){
                    forwards = false;
                    skip_count = 0;
                }
            } 
        } else {
            if(offset == 0){
                forwards = true;
                i++;
                offset = 0;
                if(i >= words.length){
                    i = 0;
                }
            }
        }

        part = words[i].substr(0, offset);
        if(skip_count == 0){
            if(forwards){
                offset++;
            } else {
                offset--;
            }
        }

        $('.word').text(part);
    }, speed);
}

$(document).ready(function(){
    wordflick();
});