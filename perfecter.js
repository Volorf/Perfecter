var doc = context.document,
	selection = context.selection,
	layer = selection.firstObject(),
    fontSizeSelectedTextLayer = 0,
    goldenRatio = 1.618,
    sketch = context.api();

// Detect MSTextLayer

if (layer.className() == "MSTextLayer") {
    setGoldenRationLineHieghtForSelectedTextLayer()
} else {
	doc.showMessage("You should select one text layer only")
}

// Set GR lineHeight for selected testLayer
function setGoldenRationLineHieghtForSelectedTextLayer () {
		fontSizeSelectedTextLayer = layer.fontSize()
        var fontSizeSelectedTextLayerFromAlert = sketch.getStringFromUser("Test", fontSizeSelectedTextLayer);
        layer.setLineHeight(fontSizeSelectedTextLayerFromAlert * goldenRatio)

}

log(layer.className())
log(layer.name())

log(layer.fontSize())
log(layer.lineHeight())

// layer.setFontSize(10)
// layer.setLineHeight(100)
