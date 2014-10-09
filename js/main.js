window.onload = init;
var context;
var bufferLoader;

function init() {
  // Fix up prefixing
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

  bufferLoader = new BufferLoader(
    context,
    [
      'samples/Beat_1.ogg',
      'samples/Beat_2.ogg',
      'samples/Beat_3.ogg',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  // Create two sources and play them both together.
  var source1 = context.createBufferSource();
  var source2 = context.createBufferSource();
  var source3 = context.createBufferSource();
  source1.buffer = bufferList[0];
  source2.buffer = bufferList[1];
  source3.buffer = bufferList[2];

  source1.connect(context.destination);
  source2.connect(context.destination);
  source3.connect(context.destination);    
  source1.start(0);
  source2.start(0);
  source3.start(0);
}