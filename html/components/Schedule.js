Vue.component('schedule', {

    template: `
        <div class="template" id="schedule"> <!-- all templates have to begin with a div tag -->
            
            <div class="title-container">
                <h2 class="soleto-medium title magenta">BOKNINGAR</h2>
                <h2 class="soleto-light date">{{date}}</h2>
            </div>
            <div class="container-fluid" id="schedule-container" style="padding: 0px 60px 60px 0px">
                <div class="row" id="time-display">
                    <div class="col-2"></div>
                    <div v-for="i in 9" class="col">
                        <p class="soleto-light">{{i+7}}</p>
                    </div>
                </div>
                <time-bar :magic="magic" />
                <div v-for="(equipment, index) in data.equipment" class="row">
                    <div class="col-3">
                        <p class="soleto-light equipment">{{equipment}}</p>
                    </div>
                    <div v-for="i in 8" :class="{'col':true, 'granitegray-fill':index%2==0, first:i==1}"></div>
                    
                    <booking :magic="magic" :name="booking.name" :start="booking.start" :end="booking.end" v-for="booking in data.bookings" v-if="booking.equipment == equipment"></booking>
                </div>
            </div>
            
        </div>
        
    `,

    props: [
        'data'
    ],

    data: function () {
        return {
            date: "1 JANUARI",

            // Magic numbers because I honestly cannot bother calculating these in code
            // TODO: Reminder to change these whenever the column width changes
            magic: {
                hourWidth: 95.625, // Width of one column in the table
                minuteWidth: 1.59375, // hourWidth/60
                leftMargin: 255, // Width of the initial, larger column holding all the equipment
            }
        }
    },

    methods: {
        updateDate() {
            var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "Oktober", "November", "December"]
            var date = new Date();

            this.date = date.getDate() + " " + months[date.getMonth()].toUpperCase();
        }
    },

    mounted() {
        setInterval(this.updateDate, 1000);
    }
});
