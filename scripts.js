let squarer

function loadWebAssembly(fileName) {
  return fetch(fileName)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => { return new WebAssembly.Instance(module) })
}

loadWebAssembly('square.wasm')
  .then(Instance => {
    squarer = Instance.exports._Z6squarei
    console.log('Finished compiling! Ready when you are...', squarer(4))
  })