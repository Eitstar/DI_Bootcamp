const wrapper = document.getElementById('chart-wrapper')
let week = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur']
let taskWeek = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur']


// let colors = [];



// console.log(wrapper)


const userData = (e) => {

    let data = document.getElementById('task').value
    console.log(data)
    e.preventDefault();




}

const eventTask = addEventListener('click', userData())








const days = () => {

    let myDays = document.createElement('UL')
    myDays.setAttribute('id', 'chart-values ')
    week.forEach(item => {
        let createdDays = document.createElement('LI')
        createdDays.innerHTML = `${[item]}day`
        myDays.appendChild(createdDays)
        return myDays
    })
    wrapper.appendChild(myDays)
    return myDays
        //     console.log(myDays);
}
days()

const myColors = () => {

    let bars = document.createElement('UL')
    bars.setAttribute('id', 'chart-bars')
    for (i = 0; i < 9; i++) {
        let colorList = document.createElement('li')
        colorList.setAttribute('class', 'random')
        colorList.setAttribute('data-duration', '')
        let randomColor = Math.floor(Math.random() * 16777215).toString(16)
        colorList.style.backgroundColor = "#" + randomColor;
        bars.appendChild(colorList)
    }
    wrapper.appendChild(bars)

}
myColors()




console.log(data)




// function createChart(e) {
//     // 1
//     const days = document.querySelectorAll("#chart-values li");
//     const tasks = document.querySelectorAll("#chart-bars li");
//     //     console.log(days)
//     //     console.log(tasks)
//     // 2
//     const daysArray = [...days]
//     console.log(daysArray);
//     // 3
//     tasks.forEach(el => {
//         const duration = el.dataset.duration.split("-");
//         const startDay = duration[0];
//         const endDay = duration[1];

//     });
//     //     let left = 0,
//     //       width = 0;
//     console.log(duration)

// }


// window.addEventListener("load", createChart);
// window.addEventListener("resize", createChart);