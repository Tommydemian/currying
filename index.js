function makeAdjectifier(adjective) {
    return function(noun) {
        return adjective + ' ' + noun
    }
}

const coolify = makeAdjectifier('cool')