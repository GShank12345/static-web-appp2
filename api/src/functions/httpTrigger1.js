const { app } = require('@azure/functions');

// Dictionary of Avenger code names and real names
const quotesd = {
    '0': "Your heart is the size of an ocean. Go find yourself in its hidden depths. By Rumi",
    '1': 'Thinking is the capital, Enterprise is the way, Hard Work is the solution. By Abdul Kalaam',
    '2': 'If You Can\'t Make It Good, At Least Make It Look Good. By Bill Gates',
    '3': 'If You Are Out To Describe The Truth, Leave Elegance To The Tailor. By Albert Einstein',
    '4': 'These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People. By Abraham Lincoln',
    '5': 'One Of The Greatest Diseases Is To Be Nobody To Anybody. By Mother Teresa',
    '6': 'Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don\'t let yourself believe it will happen to you. Muhammad Ali',
    '7': 'No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World. By Aristotle',
    '8': 'Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal. By Albert Einstein',
    '9': 'Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed. By Ali ibn Abi Talib.',
    '10': 'Happiness comes towards those which believe in him. By Ali ibn Abi Talib.',
    '11': 'Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love. By Rumi',
    '12': 'God Doesn\'t Require Us To Succeed, He Only Requires That You Try. By Mother Teressa',
    '13': 'The Way To Get Started Is To Quit Talking And Begin Doing. By Walt Disney',
    '14': 'Respond to every call that excites your spirit. By Rumi',
    '15':  'People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love. By Nelson Mandela'

};
var qname = "hello";
// const url1 = 'https://dummyjson.com/quotes'

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
     route: `quotesd/{id:int?}`,

    handler: async (request, context) => {
       
        const id2 = request.params.id || null;
       // const qt = request.body
      //  console.log("The parameter is", id2)
      //  context.log(`Http function processed request for url "${request.url}"`);
       if (id2) {
       // const name = request.query.get('name') || await request.text() || 'world';
        qname = quotesd[id2]
          
       }
       else
       {
        qname = `The quote for the ${id2} could  not be found`;
        console.log("The quote is", qname)
       }
        return { body: JSON.stringify(`${qname}`) };
    }
});
