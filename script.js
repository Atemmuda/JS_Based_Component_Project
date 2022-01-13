$.ajax({
  type: "get",
  url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian",
  success: function (response) {
    console.log(response)
    // for (let i = 0; i < response.meals.lenght; i++) {
    //   let newItem = `<div class = 'col-md-3 m-2'>
    //                 <p>${response.meals[i].strMeal}</p>
    //                 <img src = ${response.meals[i].strMealThumb}/>
    //                 <p>${response.meals[i].idMeal}</p>
    //                 </div>`
    //                 // console.log(newItem)
    //                 $('#meal-items').append(newItem)
    // }
  },
  error: function (error) {
    console.log(error);
  },
});
