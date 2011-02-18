var crafts = (function(){

    var first  = [], second = [], colors = [];

    first =
       ['arugula',
        'ibexes',
        'menorahs',
        'traffic cones',
        'absinthe spoons',
        'cardboard boxes',
        'geoducks',
        'nickelodeons',
        'unibrows',
        'rollerblades',
        'poison darts',
        'tapirs',
        'corneas',
        'mothballs',
        'cummerbunds',
        'chicken feet',
        'crawdads',
        'oubliettes',
        'freshwater lakes',
        'pie servers',
        'brogues',
        'cigar cutters',
        'ballots',
        'oompa loompas'
        ];

    second =
       ['narwhals',
        'owls',
        'sparrows',
        'sushi rolls',
        'vintage glasses',
        'brass knuckles',
        'steampunks',
        'squids',
        'mustaches',
        'beards',
        'bicycles',
        'silhouettes',
        'typewriter keys',
        'tree branches',
        'chandeliers ',
        'macrons',
        'cupcakes',
        'kittens',
        'wreaths',
        'pennants',
        'eggs',
        'camper vans',
        'anatomically correct hearts',
        'scrabble tiles',
        'bottle caps',
        'foxes',
        'zombies',
        'deer'
        ];

    colors = ["#383838", "#66B1C0", "#FF368D", "#B9D15A"];

    function random_element(from_array){
        return from_array[Math.floor(from_array.length * Math.random())];
    }
    
    function narwahls_are_so_passe(){
        var crafts_div, sentence;
        crafts_div = document.getElementById("crafts");
        sentence   = random_element(first) + " are the new " + random_element(second);

        crafts_div.style.color    = random_element(colors);
        crafts_div.innerHTML      = sentence;
    }
    
    return { refresh: narwahls_are_so_passe };
}());

window.onload = function(){
    crafts.refresh();
    document.getElementById("reload").addEventListener('click', crafts.refresh, false);
};
