//






//     {
//         name: 'item 1',
//         desc: 'item 1',
//         start_date: 'item 1',
//         end_date: 'item 1',
//         status_: 'item 1'
//     },

//     {
//         name: 'item 2',
//         desc: 'item 2',
//         start_date: 'item 2',
//         end_date: 'item 2',
//         status_: 'item 2'
//     }
// ]


// let items = localStorage.getItem('listofItems') ? JSON.parse(localStorage.getItem('listofItems')) : [];
// let ul = document.getElementById('toDoList')


// function createAllItems() {
//     if (items.lengh > 0) {
//         items.forEach(objItem => {
//             createToDoItem(objItem.name)
//             createToDoItem(objItem.desc)
//         });
//     }
// }
// createAllItems()


// function addItem() {
//     console.log('add item');
//     let item = document.getElementById('item').Value;
//     let desc = document.getElementById('desc').Value;
//     items.push({ name: item, desc: item1 }) //desc:itemdesc
//     createToDoItem(item, desc);
//     // console.log(items);
//     // localStorage.setItem('listofItems', JSON.stringify(items));
// }


// //  desc: 'item 1',
// //      start_date: 'item 1',
// //      end_date: 'item 1',
// //      status_: 'item 1'

// function createToDoItem(value) {

//     let li = document.createElement('LI')
//     let lid = document.createElement('LI')
//         //  let li = document.createElement('LI')
//         //  let li = document.createElement('LI')
//         //  let li = document.createElement('LI')
//     li.innerHTML = value;
//     lid.innerHTML = value;
//     ul.appendChild(li);
//     ul.appendChild(lid);
// }
// createToDoItem(value)