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
                bookings: [
                    {
                        "name": "Tor Eriksson",
                        "equipment": "Dator 2",
                        "start": 50,
                        "end": 100
                    },
                    {
                        "name": "Emil Edberg",
                        "equipment": "Dator 2",
                        "start": 120,
                        "end": 200
                    },
                    {
                        "name": "Elias Renman",
                        "equipment": "Dator 3",
                        "start": 120,
                        "end": 200
                    },
                    {
                        "name": "Emil Edberg",
                        "equipment": "Dator 2",
                        "start": 260,
                        "end": 440
                    },
                    {
                        "name": "Elias Renman",
                        "equipment": "Dator 3",
                        "start": 270,
                        "end": 440
                    },
                    {
                        "name": "Rasmus Mattas",
                        "equipment": "Dator 1",
                        "start": 260,
                        "end": 440
                    }
                ]
            }
        }
    }
});


