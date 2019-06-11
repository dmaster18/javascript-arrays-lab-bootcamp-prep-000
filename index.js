var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(kittens,name) {
  kittens.push(name);
}

function destructivelyPrependKitten(kittens,name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(kittens) {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(kittens) {
  kittens.shift();
  return kittens;
}

function appendKitten(kittens, name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(kittens, name) {
  var newKittens = [name, ...kittens];
  return newKittens;
}

functionm removeLastKitten
