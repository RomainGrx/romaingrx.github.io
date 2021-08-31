String.prototype.fuzzy = function(term, ratio) {
        var string = this.toLowerCase();
        var compare = term.toLowerCase();
        var matches = 0;
        if (string.indexOf(compare) > -1) return true; // covers basic partial matches
        for (var i = 0; i < compare.length; i++) {
                    string.indexOf(compare[i]) > -1 ? matches += 1 : matches -=1;
                }
        return (matches/this.length >= ratio || term == "")
};


fuzzy = function(object, term) {
    const keys = Array.isArray(object) ? object : Object.keys(object);
    var results = [];
    for (const key of keys) {
        if (key.startsWith(term)) {
            results.push(key);
        }
    }
    return results;
}

get_latest_input = function() {
    return $(".input")[$(".input").length - 1]
}
