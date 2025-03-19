const { app } = require('@azure/functions');

const recipes = {
    '0' : ["Classic Margherita Pizza","Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves. Drizzle with olive oil and season with salt and pepper. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown. Slice and serve hot.","https://cdn.dummyjson.com/recipe-images/1.webp"],
    '1' : ["Vegetarian Stir-Fry","In a wok, heat sesame oil over medium-high heat. Add minced ginger and garlic, sauté until fragrant. Add cubed tofu and stir-fry until golden brown. Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp. Pour soy sauce over the stir-fry and toss to combine. Serve over cooked rice.","https://cdn.dummyjson.com/recipe-images/2.webp"],
    '2' : ["Chocolate Chip Cookies","Preheat the oven to 350°F (175°C). In a bowl, cream together softened butter, brown sugar, and white sugar. Beat in eggs one at a time, then stir in vanilla extract. Combine flour, baking soda, and salt. Gradually add to the wet ingredients. Fold in chocolate chips. Drop rounded tablespoons of dough onto ungreased baking sheets. Bake for 10-12 minutes or until edges are golden brown. Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack.","https://cdn.dummyjson.com/recipe-images/3.webp"],
    '3' : ["Chicken Alfredo Pasta","Cook fettuccine pasta according to package instructions. In a pan, sauté sliced chicken in butter until fully cooked. Add minced garlic and cook until fragrant. Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted. Season with salt and pepper to taste. Combine the Alfredo sauce with cooked pasta. Garnish with fresh parsley before serving.","https://cdn.dummyjson.com/recipe-images/4.webp"],
    '4' : ["Mango Salsa Chicken","Season chicken thighs with salt and pepper. Grill or bake chicken until fully cooked. In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice. Dice the cooked chicken and mix it with the mango salsa. Serve over cooked rice.","https://cdn.dummyjson.com/recipe-images/5.webp"],
    '5' : ["Quinoa Salad with Avocado","In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese. Drizzle with lemon vinaigrette dressing and toss to combine. Season with salt and pepper to taste. Chill in the refrigerator before serving.","https://cdn.dummyjson.com/recipe-images/6.webp"],
    
    '6' : ["Tomato Basil Bruschetta","Preheat the oven to 375°F (190°C). Place baguette slices on a baking sheet and toast in the oven until golden brown. In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil. Season with salt and pepper to taste. Top each toasted baguette slice with the tomato-basil mixture. Drizzle with balsamic glaze before serving.","https://cdn.dummyjson.com/recipe-images/7.webp"],
    '7' : ["Beef and Broccoli Stir-Fry","In a bowl, mix soy sauce, oyster sauce, sesame oil, and cornstarch to create the sauce. In a wok, stir-fry thinly sliced beef until browned. Remove from the wok. Stir-fry broccoli florets, minced garlic, and minced ginger in the same wok. Add the cooked beef back to the wok and pour the sauce over the mixture. Stir until everything is coated and heated through. Serve over cooked white rice.","https://cdn.dummyjson.com/recipe-images/8.webp"],
    '8' : ["Caprese Salad","Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter. Tuck fresh basil leaves between the slices. Drizzle with balsamic glaze and extra virgin olive oil. Season with salt and pepper to taste. Serve immediately as a refreshing salad.","https://cdn.dummyjson.com/recipe-images/9.webp"],
    '9' : ["Shrimp Scampi Pasta","Cook linguine pasta according to package instructions. In a skillet, sauté minced garlic in olive oil until fragrant. Add shrimp and cook until pink and opaque. Pour in white wine and lemon juice. Simmer until the sauce slightly thickens. Season with red pepper flakes, salt, and pepper. Toss cooked linguine in the shrimp scampi sauce. Garnish with chopped fresh parsley before serving.","https://cdn.dummyjson.com/recipe-images/10.webp"],
    '10' : ["Chicken Biryani","Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt. In a pot, sauté sliced onions until golden brown. Remove half for later use. Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot. Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions. Cover and cook on low heat until the rice is fully cooked and aromatic. Serve hot, garnished with additional coriander and mint leaves.","https://cdn.dummyjson.com/recipe-images/11.webp"],
    '11' : ["Chicken Karahi","In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown. Add chicken pieces and cook until browned on all sides. Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft. Cover and simmer until the chicken is tender and the oil separates from the masala. Garnish with fresh coriander leaves and serve hot with naan or rice.","https://cdn.dummyjson.com/recipe-images/12.webp"],
    '12' : ["Aloo Keema","In a pan, heat cooking oil and sauté chopped onions until golden brown. Add ginger-garlic paste and sauté until fragrant. Add ground beef and cook until browned. Drain excess oil if needed. Add diced potatoes, chopped tomatoes, and spices. Mix well. Cover and simmer until the potatoes are tender and the masala is well-cooked. Garnish with fresh coriander leaves and serve hot with naan or rice.", "https://cdn.dummyjson.com/recipe-images/13.webp"],
    '13' : ["Chapli Kebabs","In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds. Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well. Add an egg to bind the mixture and form into round flat kebabs. Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides. Serve hot with naan or mint chutney.", "https://cdn.dummyjson.com/recipe-images/14.webp"],
    '14' : ["Saag (Spinach) with Makki di Roti","Boil mustard greens and spinach until tender. Drain and blend into a coarse paste. In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown. Add the greens paste and cook until it thickens. Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads). Cook the rotis on a griddle until golden brown. Serve hot saag with makki di roti and a dollop of ghee.","https://cdn.dummyjson.com/recipe-images/15.webp"],
    '15' : ["Japanese Ramen Soup","Cook ramen noodles according to package instructions and set aside. In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer. Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender. Divide the cooked noodles into serving bowls and ladle the hot broth over them. Top with green onions, soft-boiled eggs, grilled chicken slices, and nori. Serve hot and enjoy the authentic Japanese ramen!","https://cdn.dummyjson.com/recipe-images/16.webp"],
    '16' : ["Moroccan Chickpea Tagine","In a tagine or large pot, sauté chopped onions and minced garlic until softened. Add diced carrots, chopped tomatoes, and cooked chickpeas. Season with cumin, coriander, cinnamon, and paprika. Stir to coat. Pour in vegetable broth and bring to a simmer. Cook until carrots are tender. Stir in olives and garnish with fresh cilantro before serving. Serve this flavorful Moroccan dish with couscous or crusty bread.","https://cdn.dummyjson.com/recipe-images/17.webp"],
    '17' : ["Korean Bibimbap","Arrange cooked white rice in a bowl. Top with beef bulgogi, sautéed carrots, seasoned spinach, grilled zucchini, and blanched bean sprouts. Place a fried egg on top and drizzle with gochujang and sesame oil. Sprinkle with toasted sesame seeds before serving. Mix everything together before enjoying this delicious Korean bibimbap! Feel free to customize with additional vegetables or protein.","https://cdn.dummyjson.com/recipe-images/18.webp"],
    '18' : ["Greek Moussaka","Preheat oven to 375°F (190°C). Sauté sliced eggplants in olive oil until browned. Set aside. In the same pan, cook chopped onions and minced garlic until softened. Add ground lamb or beef and brown. Stir in crushed tomatoes, red wine, and spices. In a separate saucepan, make béchamel sauce: melt butter, whisk in flour, add milk, and cook until thickened. Remove from heat and stir in Parmesan cheese and egg yolks. In a baking dish, layer eggplants and meat mixture. Top with béchamel sauce. Bake for 40-45 minutes until golden brown. Let it cool before slicing. Serve slices of moussaka warm and enjoy this Greek classic!","https://cdn.dummyjson.com/recipe-images/19.webp"],
    '19' : ["Thai Green Curry","In a pot, simmer green curry paste in coconut milk. Add chicken, fish sauce, and sugar. Cook until chicken is tender. Stir in sliced eggplant and bell peppers. Simmer until vegetables are cooked. Garnish with fresh basil leaves. Serve hot over jasmine rice and enjoy this Thai classic!","https://cdn.dummyjson.com/recipe-images/21.webp"],
    '20' : ["Russian Borscht","In a pot, sauté chopped onions and garlic until softened. Add shredded beets, cabbage, diced potatoes, grated carrots, and tomato paste. Pour in broth and add bay leaves. Simmer until vegetables are tender. Serve hot with a dollop of sour cream on top. Enjoy the hearty and comforting flavors of Russian Borscht!","https://cdn.dummyjson.com/recipe-images/27.webp"]
    
    
}
app.http('httpTrigger2', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
   // route: `recepies/{id:int?}`,
   route: `recipes/{id:int?}`,
    handler: async (request, context) => {
        const id3 = request.params.id || null;
      //  context.log(`Http function processed request for url "${request.url}"`);
      //  console.log(`Http function processed request for url ${id3}`);
       // const name = request.query.get('name') || await request.text() || 'world';

       // return { body: `Hello, ${name}!` };
       if (id3) {
        // const name = request.query.get('name') || await request.text() || 'world';
         qname2 = recipes[id3][0];
         qname3 = recipes[id3][1];
         qname4 = recipes[id3][2];
           
        }
        else
        {
         qname2 = `The quote for the ${id3} could  not be found`;
         console.log("The quote is", qname2)
        }
         return { body: JSON.stringify([`${qname2}`,`${qname3}`,`${qname4}`]) };
    }
});
