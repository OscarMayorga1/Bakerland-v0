var titles = ["Chocolate Cake","Vainilla Cake","Strawberry Cake"];
var descriptions = ["Delicious cake covered with chocolate and chocolate cream you can add any topping you want",
"Delicious cake covered with vainilla chantilly cream you can add any topping you want",
"Delicious cake covered with strawberry chantilly cream and jelly you can add any topping you want"]
var i = 0;
var images = ["./images/Cake1.jpg","./images/Cake3.jpg","./images/Cake2.jpg"]
function examplesChange(dato){
    
    if(dato===1)
    {
        if(i===0)
        {
            i=2;
        }
        else{
            i--;
        }
    }
    else{
        if(i===2)
        {
            i=0;
        }
        else{
            i++;
        }
    }

    document.getElementById("description-title").textContent = titles[i];
    document.getElementById("description-description").textContent = descriptions[i];
    document.getElementById("description-img").src = images[i]; 
}