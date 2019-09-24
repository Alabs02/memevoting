var memeArray = [
    {"creatorName": "Alabson", "memeUrl": "./assets/harv.jpeg", "votes": 18, "index": 1},
    {"creatorName": "Harvey", "memeUrl": "./assets/harv.jpeg", "votes": 27, "index": 2},
    {"creatorName": "Richard", "memeUrl": "./assets/harv.jpeg", "votes": 15, "index": 3}
];

function renderMemes() {
    memeArray = memeArray.sort(function(a, b){return b.votes-a.votes})
    var template = $('#template').html();
    Mustache.parse(template);
    var reandered = Mustache.render(template, {memeArray});
    $('#memeBody').html(reandered);
}

window.addEventListener('load', async () => {
    renderMemes();
})

//jQuery("#memeBody").on("click", '.vote-btn', async function(event){
   // var value = $(this).siblings('input').val();
    // console.log(value)
   // const num = Number(value);
   jQuery('#memeBody').on("click", ".vote-btn", async function(event){
    const dataIndex = event.target.id;
    const foundIndex = memeArray.findIndex(meme => meme.index == dataIndex);
    const value = $(".amount")[foundIndex].value;
    console.log("value: ", value);

    memeArray[foundIndex].votes += parseInt(value, 10);
    renderMemes();

   });
   
  
    renderMemes();
  
  
  $('#register-btn').click(async function(){
    var name = ($('#reg-name').val()),
        url = ($('#reg-url').val());
  
    memeArray.push({
      creatorName: name,
      memeUrl: url,
      index: memeArray.length+1,
      votes: 0
    })
    renderMemes();
  });