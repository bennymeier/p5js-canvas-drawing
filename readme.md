# [p5.js](https://p5js.org/) Zeichenbrett mit Canvas

## Installation

### Webseite

Im Internet gibt es eine Webseite auf der man kreativ programmieren kann. P5.js stellt den Code einfach und anschaulich für Menschen ohne Vorwissen von Programmierung dar. Dazu gehen wir auf die Webseite [p5.js](https://p5js.org/). Etwas weiter unten sehen wir dann einen Button mit dem Text "Start creating with the p5 Editor!".

![Start creating with the p5 Editor!](https://github.com/bennymeier/p5js-canvas-drawing/blob/main/editor_button.png?raw=true)

### p5js.org Dokumentation

[p5js.org Dokumenation](https://p5js.org/reference/#)

### Dateien

Auf der linken Seite findet man einen Reiter _Sketch Files_, in dem befinden sich drei Dateien:

- index.html
- sketch.js
- style.css

![Sketch Files](https://github.com/bennymeier/p5js-canvas-drawing/blob/main/files_menu.png?raw=true)

Alle drei Dateien werden automatisch angelegt. In der _index.html_ werden Bibliotheken von p5js.org eingebunden. In der _sketch.js_ fügen wir gleich unseren Code ein. In der _style.css_ kommen die Styles rein für unser Zeichenbrett.

## Code

- html

  Hier muss nichts beachtet werden. Die Datei `index.html` wird automatisch befüllt.

- css

Wir gehen in die Datei `style.css`.

```css
main {
  margin: 0.5em;
}
```

Um das _canvas_-Element haben wir ein _main_-Element. Drumherum setzen wir einen Abstand von 0.5em. _em_ ist eine Einheit die die Zeichenbreite in Abhängigkeit zur Schriftgröße definiert.

```css
canvas {
  border: 3px solid black;
}
```

Um unser _canvas_-Element, also das Element in dem wir zeichnen können, hat einen Rahmen von 3px (Pixeln) und ist solid (durchgehender Rahmen) mit der Farbe black (schwarz).

```css
.btn {
  width: 24px;
  height: 24px;
  border: 3px solid black;
  margin: 0.5em;
  cursor: pointer;
}
```

Wir haben verschiedene Buttons mit verschiedenen Farben, damit wir nur einmal einen Button "stylen" müssen, legen wir eine gemeinsame Styleklasse dafür an, die dann für die anderen Buttons auch gilt.

**Vorteil**:

- Buttons sehen identisch aus
- Code wird gespart

Der Button bekommt eine Breite und Höhe von `24px` und wieder einen Rahmen, sowie oben bereits um das _canvas_-Element, genauso wieder einen Abstand von `0.5em`. Da wir kein "echtes" _Button_-Element nehmen, sondern ein _div_-Element, müssen wir den Cursor noch zu einem Pointer ändern.

```css
.black {
  background-color: black;
}
.green {
  background-color: green;
}
.yellow {
  background-color: yellow;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
```

Unsere Buttons dienen dazu die Farbe der Linie zu ändern. Hierfür haben wir uns für die Farben schwarz, grün, gelb, rot und blau entschieden. Um diesen Buttons eine Farbe zu geben, erstellen wir die Farb-Styleklassen und setzen die Hintergrundfarbe auf die entsprechende Farbe.

- js

Wir gehen in die Datei `sketch.js`.

```js
function setup() {
  createCanvas(450, 450);
  strokeWeight(5);
  stroke('black');
  addButtons();
}
```

p5js.org hat eine Standard-Funktion `setup()` diese wird bei jedem mal Ausführen des Codes als erstes aufgerufen. Sie ist also unser Einstiegspunkt.

Mit `createCanvas(450, 450)` erstellen wir unser `450x450px` großes _canvas_-Element, d.h. es hat die Breite und Höhe von 450px.

Mit `strokeWeight(5)` setzen wir die Dicke der Linie auf `5px`.

`stroke('black')` bestimmt die Farbe der Linie, diese setzen wir mit `black` auf schwarz.

Zum Schluss rufen wir die Funktion `addButtons()` auf. Diese Funktion wird später noch genauer erklärt.

```js
function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}
```

Die Funktion `touchMoved()` ist eine Event-Funktion. Sie wird jedes mal aufgerufen, wenn man die Maus über die Vorschau bewegt. Dadurch bekommen wir auch unsere aktuelle Mauspositionen `mouseX` und `mouseY`. Die `mouseXY`-Koordinaten liefern die aktuelle horizontale bzw. vertikale Mausposition zurück. Oben links in unserem _canvas_-Element haben wir die Koordinaten 0, 0. D.h. je weiter wir nach rechts gehen, desto größer wird der numerische Wert. Genauso ist es auch beim Runterfahren mit der Maus, die Koordinate `mouseY` wird immer größer.
Das `return false;` unterbindet die Browser-Defaults (`event.preventDefault()`).

```js
function resetCanvas() {
  drawingContext.clearRect(0, 0, 450, 450);
}
```

`resetCanvas()` ist eine Funktion, die das Gemalte wieder entfernen soll, wenn man einen Button gedrückt hat. Um das Gemalte wieder zu entfernen, muss man in den sogenannten `drawingContext` des Canvas gehen und die Funktion `clearRect(0, 0, 450, 450)` aufrufen. Die ersten beiden Parameter beschreiben die Startposition `x` und `y`, diese sind bei uns `0`. Die anderen beiden Parameter `450` sind die Breite und Höhe, diese haben wir, wie bereits erwähnt, in der `setup()`-Funktion angegeben.

```js
function addButtons() {
  addResetButton();
  addColorBlackButton();
  addColorGreenButton();
  addColorYellowButton();
  addColorRedButton();
  addColorBlueButton();
}
```

In der Funktion `addButtons()` rufen wir eigentlich nur andere Funktionen auf, wie z.B. `addResetButton()`. Dies dient der Übersicht, die dadurch verbessert wird. Man hätte die ganzen Funktionen auch einfach in der `setup()`-Funktion aufrufen können.

```js
function addResetButton() {
  button = createButton('Löschen');
  button.position(15, 15);
  button.mousePressed(resetCanvas);
}
```

Wie der Name `addResetButton` vielleicht schon andeuten lässt, wird hier der Button zum Löschen des Gemalten angelegt. Mit `button = createButton('Löschen)` weisen wir der Variable `button` die Funktion `createButton('Löschen)` zu. Der Parameter `'Löschen'` ist der Text welcher in dem _button_-Element steht.

```js
function addColorGreenButton() {
  button = createButton('');
  button.class('btn green');
  button.position(85, 5);
  button.mousePressed(function () {
    stroke('green');
  });
}
```

Die Funktion `addColorGreenkButton()` erstellt ein _div_-Element mit einem leeren _String_-Parameter. Dem Button fügen wir nun die Styleklassen `btn green` hinzu. D.h. jetzt greifen unseren beiden, im Vorhinein angelegten, Styleklassen. Mit `button.position(85, 5)` sagen wir dem Button, dass er von links (x) `85px` entfernt und von oben (y) `5px` nach unten entfernt positioniert werden soll.
`button.mousePress()` wird aufgerufen, wenn der Button geklickt wurde. In der Funktion rufen wir dann `stroke('green)` auf, somit ändern wir die Farbe zu grün.

Für die anderen Buttons und ihren Farben, gibt es natürlich auch die entsprechenden Funktionen wie oben. Allerdings mit einer anderen Styleklasse, anderer Position und einer anderen `stroke(farbe)`.

```js
function addSmallSizeButton() {
  buttonSmall = createDiv('');
  buttonSmall.class('btn size black small');
  buttonSmall.position(245, 5);
  buttonSmall.mousePressed(function () {
    strokeWeight(5);
  });
}
```

Die Funktion `addSmallSizeButton` ändert die Liniendicke in `5px`. Zu erkennen mit dem Funktionsaufruf `strokeWeight(5);`. Es gibt noch die zwei anderen Funktionen `addMiddleSizeButton()` und `addBigSizeButton()`.

```css
.size {
  border-radius: 50%;
}
```

Die Buttons welche die Linienstärke beschreiben, sind rund. Dafür steht das `border-radius: 50%;`.

```css
.small {
  width: 5px;
  height: 5px;
}
```

Der Button der die dünne Linie beschreiben soll, hat eine Größe von `5x5px`.

Um weitere Buttons mit anderen Farben oder anderen Linienstärken aufzunehmen, muss der Code von oben kopiert werden. Wichtig hierbei ist, dass die Farbe oder Linienstärke angepasst werden muss und die Positionierung.
