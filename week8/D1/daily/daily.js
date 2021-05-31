  const form = document.querySelector("form")
  console.log(form)
  form.addEventListener("click", e => {
      e.preventDefault()

  })

  //   document.getElementById("Gif").addEventListener("click", event => {
  //       event.preventDefault()
  //   }); //function(event)

  //   let inputValue = search.value; //may need to add Gif.elements.
  //   console.log(inputValue)


  //         console.log(JSON.stringify(userchoose, null, 2));
  //         console.log(userchoose);




  //   function loadText() {
  //       let xhr = new XMLHttpRequest();
  //       xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&limit=5=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
  //       xhr.onload = function() {
  //               if (xhr.status != 200) {

  //                   console.log(xhr)
  //               }