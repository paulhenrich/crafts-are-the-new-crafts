var crafts = (function(){

    var first  = [], second = [];

    first =
      ['dragonfruit',
        'hooves',
        'menorahs',
        'traffic cones',
        'starburns',
        'apostrophes',
        'geoducks',
        'yachts',
        'unibrows',
        'rollerblades',
        'aquifers',
        'fleas',
        'corneas',
        'mothballs',
        'babushkas',
        'wrenches',
        'crawdads',
        'oubliettes',
        'planets',
        'goblins',
        'emus',
        'brainstems',
        'hexagons',
        'saxophones',
        'emoji'];

    second =
       ['owls',
        'bacon',
        'grumpycat',
        'sparrows',
        'vintage cameras',
        'brass knuckles',
        'steampunks',
        'squids',
        'mustaches',
        'beards',
        'bicycles',
        'silhouettes',
        'typewriter keys',
        'tree branches',
        'chandeliers',
        'macrons',
        'cupcakes',
        'birds',
        'pennants',
        'eggs',
        'camper vans',
        'state outlines',
        'foxes',
        'zombies',
        'deer', 
        'city maps',
        'chevrons',
        'triangles',
        'keep calm and carry on'];


    function random_element(from_array){
        return from_array[Math.floor(from_array.length * Math.random())];
    }
    
    function narwahls_are_so_passe(){
        var crafts_div, sentence;
        crafts_div = document.getElementById("crafts");
        sentence   = random_element(first) + " are the new " + random_element(second);

        crafts_div.innerHTML      = sentence;
    }
    
    return { refresh: narwahls_are_so_passe };
}());

window.onload = function(){
    crafts.refresh();
    document.getElementById("reload").addEventListener('click', crafts.refresh, false);
    document.body.addEventListener('click', crafts.refresh, false);
};
