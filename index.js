let htmlProducts = '';

fetch('https://api.myjson.online/v1/records/798731ce-97fe-47fe-880a-3d704c25b8a9')
.then((res) => res.json())
.then((response) => {
    for(let i = 0; i < response.data.length; i++) {
        htmlProducts += `
        <div class="card" style="width: 18rem;">
        <img src="${response.data[i].img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response.data[i].name}</h5>
          <p class="card-text">${response.data[i].desc}</p>
          <p class="card-text">Price: ${response.data[i].price}</p>
          <a href="#" class="btn btn-primary">ADD TO CART</a>
        </div>
      </div>
      `
    }
    document.getElementById('card-group').innerHTML = htmlProducts
})

