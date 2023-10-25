/*
Vamos a hacer UN CRUD
  - C => create
  - R => Read
  - U => Update
  - D => Delete

  metodos de mongoose => create, find, findById, findByIdAndUpdate, findByUdAndRemove
  
  ?asincronismo
   -> por ahora estabamos trabajando de forma sincronicoa -> tareas que se ejecutan una atras de la otra
   -> codigo asincrono: vamos a tener que realizar tareas que tienen que esperar a que ocurra un determinado suceso y luego de acuerdo a la respuesta continuar realizando distantas tareas.
   -> async/await - then/catch -> manera de gestionar la asincronía -> devolver callback o promesas

   * async/await
    -> que es una promesa? es un objeto que representa la eventual finalización de manera correcta o de fracos de una operacion asincrona y la obtencion de su resulatado.
    -> estados
      -> pendiente (pending)
      -> cumplica (fullfilled)
      -> rechazada (rejected)

    -> es una forma de escribir codigo asincrono y nos sirve para hacer mas legible nuestro codigo -> porque nos permiete escribirlo como si fuese sincrono

    -> puntos claves:
      - para poder utilizarlo necesitamos una funciones con la palabta clave async y dentro el await
      - async function (){
        try{
          await
          codigo si sale todo bien
        } catch(error){
          codigo si sale todo mal
        }
      }
     
*/

const dividir = (dividiendo, divisor) => {

  return new Promise((resolve, reject)=>{
    if(divisor === 0){
      reject("no se puede dividir entre cero")
    } else{
      resolve(dividiendo/divisor)
    }
  })

}
  
// dividir(4,2)
//   .then(resultado => console.log(resultado))
//   .catch(error => console.log(error))

async function division(n1,n2){
  try{

    const resultado = await dividir(n1,n2)
    console.log(resultado);

  }catch(error){
    console.log(error)
  }
}

division(10,2)
division(10,0)


function soyMessi(nombre){
  return new Promise((res, rej)=>{
    if(nombre == "messi"){
      res("Soy messi")
    } else {
      rej("no soy messi")
    }
  })
}

async function esMessi(nombre){
  try{

    const respuesta = await soyMessi(nombre)
    console.log(respuesta);

  }catch(err){
    console.log(err);
  }
}

esMessi("messi")
esMessi("ronaldo")


/*
? metodos en mongoose -> CRUD -> cuatro operaciones que podemos realizar con nuestra bd
  * Create -> agregar nuevos datos
    - metodo create
    - acepta uno o varios objetos
    - el formato debe coincidir con el modelo
    - ej: producto.create({objeto})

  *Read -> consultar los datos
    - find -> acepta como argumento un objeto con el que definimos que queremos buscar y me lo devuelve

  *Update -> modificar los datos existentes
    - .findByIdAndUpdate -> se busca por id el documento que se quiere modificar, se define un objeto con lso cambios
    findyByIdAndUpdate(
      "6539277bf0e144f121035eea", 
      {
      nombre: "Lapicera",
      stock: 7
      },
      {new:true}
    })

  *Delete -> eliminar los datos existentes
    - findByIdAndDelete("6539277bf0e144f121035eea")
*/