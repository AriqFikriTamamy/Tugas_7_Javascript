var tinggi = [150,155,160,165,170,175,180,185,190,195]
  for(var i = 0; i < tinggi.length; i++){
    console.log(tinggi[i])
  }

var tinggi = [150,155,160,165,170,175,180,185,190,195]
  for (var x of tinggi){
    console.log(x);
  }

// NOTE: perbedaan antara perulangan biasa dan perulangan for of terletak pada penulisan syntax-nya, untuk di perulangan for of penulisannya menambahkan of di dalamnya, ketika dijalankan hasilnya sama


// function tinggiBadan(){
//   var tinggi = [150,155,160,165,170,175,180,185,190,195]
//     for(var i = 0; i < tinggi.length; i++){
//       console.log(tinggi[i])
//     }
//     for (var x of tinggi){
//       var tinggi = [150,155,160,165,170,175,180,185,190,195]
//       console.log(x);
//     }
// }
//
// tinggiBadan()
