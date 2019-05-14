Vue.component('booking', {

    template: `
        <div class="template booking" :style="{background: color, width:magic.minuteWidth*length + 'px', left:magic.leftMargin + magic.minuteWidth*start + 'px'}"> <!-- all templates have to begin with a div tag -->
            <p class="author soleto-regular">{{truncateName()}}</p>
        </div>
    `,

    props: [
        'name',
        'start',
        'end',
        'magic'
    ],

    data: function () {
        return {
            color: "rgb(" + (221 - Math.round(random(this.name) * 100)) + "," + 8 + "," + (144 + Math.round(random(this.name) * 100)) + ")",
            length: this.end-this.start
        }
    },

    methods: {
        truncateName() {
            return this.name.split(" ")[0] + " " + this.name.split(" ")[1].substring(0, 1);
        }
    }
});


// Generates a random number between 0 and 1
// Takes a seed argument, use Math.random() to get a random number without a seed
// Relatively performance heavy, use with care
function random(seed) {
    var iseed = 1;
    for(var i = 0; i < seed.length; i++) {
        iseed += seed.charCodeAt(i);
    }

    var x = Math.sin(iseed++);
    return x - Math.floor(x);
}
