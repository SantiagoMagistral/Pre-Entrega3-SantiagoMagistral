 const retornoCard = (producto)=> {
     return `<div class="card card1 col-xxl-4 col-sm-6 d-flex justify-content-center">
                 <div class="card-image "> <img src="${producto.imagen}" class="card-img"></div>
                 <div class="card-name">${producto.nombre}</div>
                 <div class="card-price">$ ${producto.precio}</div>
                 <div class="card-button">
                     <button class="button button-outline button-add" id="${producto.nombre}" title="Clic para agregar el '${producto.nombre}' al carrito">Agregar al carrito</button>
                 </div>
             </div>`
 }