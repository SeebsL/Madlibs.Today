var madlib = { "text": " The dog runs as fast as a(n) <input> and only <input> can run that fast", "libs": ["",""]           };

var sub = function(event) {
    event.preventDefault();
    var element_length = document.getElementById('form').elements.length;
    for (var i = 1; i < element_length; i++) {
        //assign input values to JSON object array
        madlib.libs[i] = document.getElementById('ad' + i).value;
        document.getElementById('span-ad' + i).innerHTML = document.getElementById('ad' + i).value;


        console.log(madlib.libs);
    }

    document.getElementById('alerter').textContent = "Your Madlib is complete my Good Person";
    var alerter = document.querySelector('#alerter');
    alerter.style['font-family'] = 'Times New Roman';
    document.getElementById('thumbs-up').innerHTML =
        "<image id=\" thumbs-up\" src=\"http://romantic.silviubacky.com/wp-content/uploads/2012/11/thumbs-up-150x150.png\"></image> ";
// there is no ad0, so dont start at zero
}

var libsubmit = document.getElementById('form');
libsubmit.addEventListener('submit', sub);