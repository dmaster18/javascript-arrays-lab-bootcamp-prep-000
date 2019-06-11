var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens,name) {
  kittens.push(name);
}

function destructivelyPrependKitten(kittens,name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(kittens) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten(kittens) {
  kittens.shift();
}

function appendKitten(kittens, name) {
  var newKittens = [...kittens, name]
}