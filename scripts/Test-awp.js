class Test_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.IPlug;
    super(options);
  }
}

registerProcessor("Test", Test_AWP);
