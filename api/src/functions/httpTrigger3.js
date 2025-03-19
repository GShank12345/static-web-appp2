
const { app } = require('@azure/functions');

const diycrafts = {
  '0' : [ "Create a photo frame using recycled wood or old cardboard box, paint, decorative stickers, and hooks.",".assets/cr-images/img1.png"],
  '1' : [ "Create a handmade greeting card using pressed flowers on a construction paper or old cardboard box, paint, and decorative stickers.",".assets/cr-images/img2.png"],
  '2' : [ "Decorate a glass jar or bottle with broken glass tiles or painted stones, for a colorful centerpiece.",".assets/cr-images/img3.png"],
  '3' : [ "Create a wall art with recycled wood or cardboard, pressed real flowers, and wooden or cardboard frames. ",".assets/cr-images/img4.png"],
  '4' : [ "Create a herb garden with recycled cans or glass bottles, paint, stickers, and herbal seeds.",".assets/cr-images/img5.png"],
  '5' : [ "Design a storage bin with shoe or cardboard boxes, using old fabrics, and designer ropes.",".assets/cr-images/img6.png"],
  '6' : [ "Design a hand-painted wooden sign using a cardboard or wood, paint it, and write your favorite quote decorated with mini drawings.",".assets/cr-images/img7.png"],
  '7' : [ "Create a memory jar using old glass bottles, paint, and decorate it to store special keepsakes.",".assets/cr-images/img8.png"],
  '8' : [ "Make a mosaic stepping stone with broken tiles and concrete. ",".assets/cr-images/img9.png"],
  '9':  ["Create a tote bag by cutting the sleeves and neckline of an old t-shirt. Cut small vertical slits at the bottom and tie them. Turn inside out to create a tote bag and decorate it with pom poms.",".assets/cr-images/img10.png"],
  '10':  ["Paint and decorate a rock with your favorite quote.",".assets/cr-images/img11.png"],
  '11':  ["Sew a pillow cover by cutting the sleeves and neckline of an old t-shirt. Cut small vertical slits at the bottom and top. Insert the pillow and tie the slits on both ends.",".assets/cr-images/img12.png"],
} 

app.http('httpTrigger3', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    route: `diycrafts/{id:int?}`,
    handler: async (request, context) => {
        const id4 = request.params.id || null;
       // const qt = request.body
    //    console.log("The parameter is", id4)
    //    context.log(`Http function processed request for url "${request.url}"`);
       if (id4) {
       // const name = request.query.get('name') || await request.text() || 'world';
        qname = diycrafts[id4][0]
        qname1 = diycrafts[id4][1]
   
          
       }
       else
       {
        qname = `The quote for the ${id4} could  not be found`;
        console.log("The quote is", qname)
       }
        return { body: JSON.stringify([`${qname}`,`${qname1}`]) };
    }
});
