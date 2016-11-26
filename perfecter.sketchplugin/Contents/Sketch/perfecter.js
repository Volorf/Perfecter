function perfectLineHeightFunc(context) {
	superMainFunc("perfectLineHeight")
}

function perfectFontSizeFunc(context) {
	superMainFunc("perfectFontSize")
}

function superMainFunc (whatWeDo) {

	var doc = context.document,
		selection = context.selection,
		layer = selection.firstObject(),
		fontSizeSelectedTextLayer = 0,
	  sketch = context.api(),
		whatWeAreDoing = whatWeDo,

		// Main array. Here you can add a new ratio.
		arrayRatio = [
			["Golden ratio — 1.618", 1.618],
			["Silver ratio - 2.214", 2.214],
			["√2 — 1.414", 1.414],
			["√3 — 1.732", 1.732],
			["√5 — 2.236", 2.236],
			["π — 3.142", 3.142]
		],

		// Array for .getSelectionFromUser
		arrayRatioWords = [],

		// Array for calculation
		arrayRatioNumbers = [],

		// Fill arrays for .gerSelectionFromUser and calculation
		countArrayRatio = arrayRatio.length;

	for (i = 0; i < countArrayRatio; i++) {
		arrayRatioWords.push(arrayRatio[i][0])
		arrayRatioNumbers.push(arrayRatio[i][1])
	}

	// Launch a main function
	perfectSelectedLayer("perfectLineHeight")

	function perfectSelectedLayer () {
		if (selection.length == 0) {
			doc.showMessage("You should select at least one text layer");
		} else if (selection.length == 1){
			if (layer.className() == "MSTextLayer") {
				fontSizeSelectedTextLayer = layer.fontSize();
				lineHeightSelectedTextLayer = layer.lineHeight();
				if (whatWeDo == "perfectFontSize") {
					setPerfectRatioFontSizeForSelectedTextLayer();
				} else if (whatWeDo == "perfectLineHeight") {
					setPerfectRatioLineHeightForSelectedTextLayer();
				}
			} else {
				doc.showMessage("You should select a text layer only");
			}
		} else {
			doc.showMessage("You should select an one layer only");
		}
	}

	// Set perfect ratio for lineHeight
	function setPerfectRatioLineHeightForSelectedTextLayer () {
	  var getChoosedRatioFromUser = sketch.getSelectionFromUser("Choose ratio for Line Height", arrayRatioWords),
		indexForArrayRatioNumbers = getChoosedRatioFromUser[1];
	  layer.setLineHeight(fontSizeSelectedTextLayer * arrayRatioNumbers[indexForArrayRatioNumbers]);
	}

	// Set perfect ratio for fontSize
	function setPerfectRatioFontSizeForSelectedTextLayer () {
		var getChoosedRatioFromUser = sketch.getSelectionFromUser("Choose ratio for Font Size", arrayRatioWords),
		indexForArrayRatioNumbers = getChoosedRatioFromUser[1];
		layer.setFontSize(lineHeightSelectedTextLayer / arrayRatioNumbers[indexForArrayRatioNumbers])
	}
}
