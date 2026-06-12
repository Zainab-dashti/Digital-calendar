let monthEl = document.getElementById("month");
let yearEl = document.getElementById("year");
let daysEl = document.getElementById("days");

let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

let currentDate = new Date();

function renderCalendar() {

    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();

    let monthNames = [
        "January","February","March","April",
        "May","June","July","August",
        "September","October","November","December"
    ];

    monthEl.textContent = monthNames[month];
    yearEl.textContent = year;

    daysEl.innerHTML = "";

    for(let i=0; i<firstDay; i++){
        let empty = document.createElement("div");
        empty.classList.add("empty");
        daysEl.appendChild(empty);
    }

    for(let day=1; day<=lastDate; day++){

        let dayBox = document.createElement("div");
        dayBox.textContent = day;

        let today = new Date();

        if(
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ){
            dayBox.classList.add("today");
        }

        daysEl.appendChild(dayBox);
    }
}

prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

function updateClock(){

    let now = new Date();

    document.getElementById("time").textContent =
        now.toLocaleTimeString();

    document.getElementById("fullDate").textContent =
        now.toLocaleDateString("en-US",{
            weekday:"long",
            day:"numeric",
            month:"long",
            year:"numeric"
        });
}

setInterval(updateClock,1000);

updateClock();
renderCalendar();

let today = new Date();

if (
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
) {
    dayBox.classList.add("today");
}