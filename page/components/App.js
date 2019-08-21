Vue.component('app', {

    template: `
        <div class="template"> <!-- all templates have to begin with a div tag -->
            <main-header/>
            <h1 class="soleto-xbold title coalgray">MAKERSPACE</h1>
            
            
            <schedule :data="data"/>
            <main-footer/>
        </div>
        
    `,


    data: function () {
        return {
            data: {
                equipment: [
                "Dator 1",
                "Dator 2",
                "Dator 3",
                "3D Apollo",
                "3D Artemis",
                "3D WAN 1",
                "3D WAN 2",
                "HTC Vive",
                "Knappress",
                "Ritplatta 1",
                "Lektion här"
                ],
                bookings: [{"name":"Allan Bäackman","equipment":"Lektion här","start":0,"end":480}]
            }
        }
    },

    methods: {
        updateData() {
            var restUrl = "http://makerspace.umea-ntig.se/api/booking";

            var other = this;
            httpGetAsync(restUrl, function (input) {
                other.data = JSON.parse(input);
            });
        }
    },

    mounted() {
        setInterval(this.updateData, 1000);
    }
});


// Async http GET request function
// Found on stackoverflow, thanks <3
function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}
