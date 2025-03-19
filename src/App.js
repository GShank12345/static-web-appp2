
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';
import img5 from './assets/images/img5.jpg';
import img6 from './assets/images/img6.jpg';
import img7 from './assets/images/img11.jpg';
import img8 from './assets/images/img12.jpg';
import img9 from './assets/images/img13.jpg';
import img10 from './assets/images/img14.jpg';

import imgc1 from './assets/cr-images/img1.png';
import imgc2 from './assets/cr-images/img2.png';
import imgc3 from './assets/cr-images/img3.png';
import imgc4 from './assets/cr-images/img4.png';
import imgc5 from './assets/cr-images/img5.png';
import imgc6 from './assets/cr-images/img6.png';
import imgc7 from './assets/cr-images/img7.png';
import imgc8 from './assets/cr-images/img8.png';
import imgc9 from './assets/cr-images/img9.png';
import imgc10 from './assets/cr-images/img10.png';
import imgc11 from './assets/cr-images/img11.png';
import imgc12 from './assets/cr-images/img12.png';

import { Text, View, StyleSheet} from "react-native";
import React, { useState, useEffect } from 'react';
 import { maibdn } from "./testaiky.js";


var { text1 } = {};
var {text2 } = {};
var { text3 } = {};
var { text4 } = {};
var  text5   = "";

 var b = Math.floor(Math.random() * 30);
var b1 = Math.floor(Math.random() * 15);
var b2 = Math.floor(Math.random() * 20);
var b3 = Math.floor(Math.random() * 11);
var imgk = Math.floor(Math.random() * 13);
var imgd = img1;
var imgcd = img1;

export default function Index() {
if (b3 === 0)
{
  imgcd = imgc1
}
if (b3 === 1)
  {
    imgcd = imgc2
  }
  if (b3 === 2)
    {
      imgcd = imgc3
    }
    if (b3 === 3)
      {
        imgcd = imgc4
      }
      if (b3 === 4)
        {
          imgcd = imgc5
        }
        if (b3 === 5)
          {
            imgcd = imgc6
          }
          if (b3 === 6)
            {
              imgcd = imgc7
            }
            if (b3 === 7)
              {
                imgcd = imgc8
              }
              if (b3 === 8)
                {
                  imgcd = imgc9
                }
                if (b3 === 9)
                  {
                    imgcd = imgc10
                  }
                  if (b3 === 10)
                    {
                      imgcd = imgc11
                    }
                    if (b3 === 11)
                      {
                        imgcd = imgc12
                      }
if (imgk === 0)
{
  imgd = img1;
}
if (imgk === 1)
  {
    imgd = img2;
  }
  if (imgk === 2)
    {
      imgd = img3;
    }
    if (imgk === 3)
      {
        imgd = img4;
      }
      if (imgk === 4)
        {
          imgd = img5;
        }
        if (imgk === 5)
          {
            imgd = img6;
          }
          if (imgk === 6)
            {
              imgd = img7;
            }
            if (imgk === 6)
              {
                imgd = img8;
              }
              if (imgk === 7)
                {
                  imgd = img9;
                }
                if (imgk === 8)
                  {
                    imgd = img10;
                  }
  const [data, setData] = useState('todo');
  const [data1, setData1] = useState('quote');
  const [data2, setData2] = useState('recipe');
  const [data3, setData3] = useState('DIY Crafts');
  const [data4, setData4] = useState('AI Suggest');
  function newb() {
     b1 =  Math.floor(Math.random() * 14)
    b = Math.floor(Math.random() * 29);
  }
  async function maibdnky1() {

    text5 = await(await maibdn())
    //  text5 = await(await fetch(`/api/testaiky/mainbdn()`))
        console.log("The data is", text5)
        setData4(text5);
 }
  useEffect(() => {
    (async function () {
      text1  =  await(await fetch(`https://dummyjson.com/todos`)).json()
      text2 = await(await fetch(`/api/quotesd/${b1}`)).json()
    text3 = await(await fetch(`api/recipes/${b2}`)).json()
    text4 = await(await fetch(`api/diycrafts/${b3}`)).json() 
    //  text5 = await(await maibdn())
     //   console.log("The data is", text5)
       setData(text2);
         setData1(text1.todos[b])
         setData2(text3);
         setData3(text4);
       //  setData4(text5);
    }
    
   )
 ()
  // console.log("The data is =======", `${data.todo}` )
})


 function newtodo() {
  newb();
 // console.log("Inside.......<><><><><><><>...........",b)
  var newtodo = document.getElementById('prompt')
     newtodo.innerHTML = `<h4>${data1.todo}</h4>`
 }

  return (
   
    <View>
      <div style={styles.container}><table><tr>
     <td>
     <img style={styles.imgt} src={imgd} width='250' height='300' alt={imgd}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     </td> <td>
      <Text style={styles.textt}><h2>Day Planner! </h2></Text> 
      <Text style={styles.textt} onFocus={newtodo}><h4>Got any ideas for Today?</h4></Text>
      </td>
      <td>
      <Text style={styles1.text2}><h2>Random Quotes</h2></Text>
      <Text style={styles1.text2}><h3>{data}</h3></Text></td>
      </tr>
           
       <tr><td></td> <td>
       <textarea style={styles.textc}
          id="prompt"
          value={data1.todo}
          rows={4}
          cols={40}
        />
        <td></td>
       <button style={styles.buttonb} type="button" id='button1' align='center' onClick={newtodo}>New Todo</button>
       </td></tr>
       <tr><td></td><td>
       <textarea style={styles.textc}
          id="prompt2"
          value={data4}
          rows={4}
          cols={40}
        />
       
        <br></br>
        <td></td>
        <div id="aiclick">
        
       <button style={styles.buttonb} type="button" id='button2' align='center' onClick={maibdnky1}>Book Suggest</button>
       </div>
       </td>
       </tr>
       </table>
      </div>

       <br></br><br></br><br></br>
    <div style={styles1.container1}> <table><tr>
    <td>
      <Text style={styles1.text1}><h2>Random recepies</h2></Text>
      <Text style={styles1.text1}><h3>{data2[0]}</h3></Text>
      <Text style={styles1.text1}><h3>{data2[1]}</h3></Text>
      <img style={styles.imgt} src={data2[2]}  width='250' height='250' alt={data2[2]}/>
      </td>
      </tr>
      <tr>
      <Text style={styles1.text1}><h2>DIY Crafts</h2></Text>
      <Text style={styles1.text1}><h3>{data3[0]}</h3></Text>
      <img style={styles.imgt} src={imgcd} alt={data3[0]}/>
      </tr>
      </table>
    </div>

  </View>
   
       
 );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#B3D9F0",
    flex: 1,
    padding: 25,
    font: "Verdana",
    justifyContent: "center",
    alignItems: "center"
  },
  imgt: {
    padding:25,
    alignContent:'left',
  },
  textt:
  {color: "blue",
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    paddingVertical: 8
  },
  textc:
  {color: "#0433FF",
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    alignContent:'center',
    justifyContent:'center',
    paddingVertical: 8
  },
  buttonb: {
    fontSize: 24,
    textDecorationLine: "solid",
    color: "#000000",
    justifyContent:'center',
    alignContent:'center',
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: "#D6D6D6"
  },
  
})

const styles1 = StyleSheet.create({
  container1: {
    backgroundColor: "#F1BA55",
    flex: 1,
    justifyContent: "center",
    font: "Verdana",
    alignItems: "center"
  },
  text1:
  {color: "#C12192",
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    justifyContent:'center',
    paddingVertical: 8
  },
  text2:
  {color: "red",
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    justifyContent:'center',
    paddingVertical: 8
  },
  
})

