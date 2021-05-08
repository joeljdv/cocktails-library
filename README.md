# Phase-2-Final-Project
## Cocktail Library

Hello, my name is Joel Diaz and this is my cocktail library application. In order to use this application visit the repository at: https://github.com/joeljdv/cocktails-library. Once in teh repository, fork the repo and clone it to your computer. You will a README file, a app.css file, a src foulder with all the code I wrote to make this application work. This is how this appliccation works:

1. You will be start at the home page where you will see three links in the top left: Home, Cocktails, and My Recipes.
2. In the cocktails page I use a fecth request to GET a list of cocktails from the external API.
3. Each item on the cocktails list is a link thatwhen clicked shows the information of that specific cocktail and a button to add it to the recipes.
4. By clicking the add to recipes button, it does a fetch request to POST the cocktail information to thew local API.
5. When you visit recipes you will see a picture and the name of the cocktails that you added to recipes.
6. On My recipes I use a fecth request to GET the cocktails from the local API and render them under My recipes.
7. lastly I added a delete button to each item On my recipes that when you click sends a fetch request to DELETE the item from the API and disappears from my recipes.