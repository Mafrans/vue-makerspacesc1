Vue.component('time-bar', {

    template: `
        <div class="template time-bar" :style="{'margin-top': marginTop + 'px', left: left + 'px', height: height + 'px'}" :hidden="hidden"> <!-- all templates have to begin with a div tag -->
            <div class="circle"></div>
        </div>
    `,

    props: [
        'magic'
    ],

    data: function () {
        return {
            minutes: 0,
            left: 0,
            height: 0,
            hidden: false,
            marginTop: 0
        }
    },

    methods: {
        updateMinutes() {
            var date = new Date();

            this.minutes = (date.getHours()-8)*60 + date.getMinutes();
            this.left = this.magic.leftMargin + this.magic.minuteWidth * this.minutes;

            this.hidden = this.minutes <= 0 || this.minutes > 8*60;
        }
    },

    mounted() {
        this.height = $("#schedule-container").height();
        this.marginTop = -$("#time-display").height();
        setInterval(this.updateMinutes, 1000);
    }
});


