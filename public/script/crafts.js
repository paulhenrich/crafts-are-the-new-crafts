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
        'bottle caps'
        ];

    colors = ["#383838", "#66B1C0", "#FF368D", "#B9D15A"];

    function _rand_index(target_array_ref){
        return Math.floor(target_array_ref.length * Math.random());
    }

    function narwahls_are_so_passe(){
        var crafts_div, sentence;
        sentence   = first[_rand_index(first)] + " are the new " + second[_rand_index(second)];
        crafts_div = document.getElementById("crafts");

        crafts_div.style.color    = colors[_rand_index(colors)];
        crafts_div.innerHTML      = sentence;
    }
    
    return narwahls_are_so_passe;
}());

window.onload = function(){
    crafts();
    document.getElementById("reload").addEventListener('click',crafts,false);
};
