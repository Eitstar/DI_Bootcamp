function mergeWords(string) {
    return function(nextString) {
        if (nextString === undefined) {
            return string;
        } else {
            return mergeWords(string + ' ' + nextString);
        }
    }
}




function mergeWords => (nextString === undefined;
    return ?console.log(string + ' ' + nextString)();

    // if there's no "count" parameter, show "unknown"
    // function showCount(count) {
    //   console.log(count ?? "unknown");