Vue.component('main-header', {
    template: `
        <div class="template" id="header">
            <img id="logo" src="../img/NTI-Gymnasiet-Logotyp.svg">
            <span class="soleto-medium" id="clock">{{clock}}</span>
        </div>
    `,


    data: function () {
        return {
            clock: "xx:xx"
        }
    },

    mounted() {
        var other = this;

        setInterval(()=>{
            var time = new Date();
            var hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
            var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();

            other.clock = hours + ":" + minutes;
        }, 1000);
    }
});


