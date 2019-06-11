var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens,name) {
  kittens.push(name);
}

function destructivelyPrependKitten(kittens,name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten