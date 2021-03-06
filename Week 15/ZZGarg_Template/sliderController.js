/**
 * WM Harris, 12/5/2018
 * GCell : one cell of text *that moves in circle*
 * to display on canvas
 */
class sliderController {
    /**
     * constructor: make cell with x-coord & name. Name animates in circle
     * @param x - number, x-coord value
     * @param y - number, y-coord value
     * @param name - string, cell label
     */
    constructor(x, y, name,hueVal) {
        this.control = createSlider(-100, 100);
        this.control.style("z-index", "2");
        this.control.size(70);
        this.control.position(this.x+620,this.y+120);
        this.control.value(50);
    }

    controlVal() {
        return this.control.value();
    }
}
