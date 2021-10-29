
//components
let last = "1"
$("#" + last).show("fast", "swing")
function state() {
    let value = window.location.href.split("?")[1].split("=")[1]


    if (!value) {
        value = "1"
    }
    if (last == value) return

    $("#" + last).hide("fast", "swing")
    last = value

    $("#" + value).show("fast", "swing")
}
setInterval(state, 300)

function timeNow() {
    data = new Date()
    $("#time").text(data.getHours() + ":" + data.getMinutes())
}
timeNow()

setInterval(timeNow, 1000)

function getIdade() {
    data = new Date()
    $("#idade").text(data.getFullYear() - 1999)

}
getIdade()


function chart() {



    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
    const CHART_COLORS = {
        red: 'rgba(255, 99, 132,.5)',
        orange: 'rgba(255, 159, 64,.5)',
        yellow: 'rgba(255, 205, 86,.5)',
        green: 'rgba(75, 192, 192,.5)',
        blue: 'rgba(54, 162, 235,.5)',
        purple: 'rgba(153, 102, 255,.5)',
        grey: 'rgba(201, 203, 207,.5)'
    };
    
    const labels = ['Python', 'Jenkins', 'Linux', 'NoSQL', 'Docker',"Java", "NodeJs/React"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'My Stacks',
                data: [89, 70, 75, 80, 90,20,70],
                backgroundColor: [
                    CHART_COLORS.red,
                    CHART_COLORS.orange,
                    CHART_COLORS.yellow,
                    CHART_COLORS.green,
                    CHART_COLORS.blue,
                    CHART_COLORS.purple,
                    CHART_COLORS.grey,
                ]
            }
        ]
    };

    const config = {
        type: 'polarArea',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels:{
                        size:20
                    }
                },
                title: {
                    display: true,
                    text: 'Mys Stacks'
                }
            }
        },
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );
}
chart()