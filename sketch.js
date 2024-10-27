let frown;
let smiley;
let recipe = 'recipe: ';
let dizzy;
let mad;
function setup() {
    let canvas = new Canvas("fullscreen");
    textFont("Courier", 24);
    rectMode(CENTER);
    frown = new Sprite();
    frown.x = 50;
    smiley = new Sprite();
    smiley.x = 125;
    dizzy = new Sprite();
    dizzy.x = 200;
    mad = new Sprite();
    mad.x = 275;
    if (frown.mouse.pressing){
        recipe = recipe + 'frown';
       }
}

function draw() {
   clear(); 
   text('frown', 20, height/2 - 100);
   text('smiley', 100, height/2 - 100);
   text('dizzy', 190, height/2 - 100);
   text('mad',270, height/2 - 100);
   text(recipe, 100, 100);

}

