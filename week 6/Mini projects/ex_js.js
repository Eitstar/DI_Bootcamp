 //chosing the data type

 // name 
 // desc
 //date 

 [

     {
         name: 'item 1',
         desc: 'item 1',
         start_date: 'item 1',
         end_date: 'item 1',
         status_: 'item 1'
     },

     {
         name: 'item 2',
         desc: 'item 2',
         start_date: 'item 2',
         end_date: 'item 2',
         status_: 'item 2'
     }
 ]


 //  it could be a class
 //  class Item {

 //      constructor(name, desc) {
 //          this.name = name;
 //          this.desc = desc;
 //      }
 //  }

 //  localStorage.getItem('listofItems')



 let items = localStorage.getItem('listofItems') ? JSON.parse(localStorage.getItem('listofItems')) : [];
 let ul = document.getElementById('toDoList')


 function createAllItems() {
     if (items.lengh > 0) {
         items.forEach(objItem => {
             createToDoItem(objItem.name)
         });
     }
 }
 createAllItems()





 function addItem() {
     //      console.log('add item');
     let item = document.getElementById('item').Value;
     items.push({ name: item }) //desc:itemdesc
     createToDoItem(item);
     //      console.log(items);
     localStorage.setItem('listofItems', JSON.stringify(items));
 }


 function createToDoItem(value) {

     let li = document.createElement('LI')
     li.innerHTML = value;
     ul.appendChild(li);
 }