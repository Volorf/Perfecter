var doc = context.document,
	selection = context.selection,
	layer = selection.firstObject(),
	fontSizeSelectedTextLayer = 0,
  sketch = context.api(),

	// Proportions
	goldenRatio = 1.618,
	silverRatio = 2.214,
	squareOf2 = 1.414,
	squareOf3 = 1.732,
	squareOf5 = 2.236,
	pi = 3.142;

// Detect MSTextLayer
if (layer.className() == "MSTextLayer") {
	setGoldenRationLineHeightForSelectedTextLayer();
} else {
	doc.showMessage("You should select one text layer only");
}

// Set GR lineHeight for selected testLayer
function setGoldenRationLineHeightForSelectedTextLayer () {
		fontSizeSelectedTextLayer = layer.fontSize()
    var getChoosedRationFromUSer = sketch.getSelectionFromUser("Choose ration for lineHeight", [20, 40], 1);
		log(parseInt(getChoosedRationFromUSer))
    layer.setLineHeight(fontSizeSelectedTextLayer * getChoosedRationFromUSer)
}

// log(layer.className())
// log(layer.name())

// log(layer.fontSize())
// log(layer.lineHeight())

// layer.setFontSize(10)
// layer.setLineHeight(100)
