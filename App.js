// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { useState } from 'react';

// function Pqr(event){
//   console.log(event.key)
// }
// window.addEventListener('keypress',Pqr)

// const comStr=(s1,s2)=>
//   s1.toLowerCase()===s2.toLowerCase();

let count = 0;

let mn = ['lagaan', 'swades', 'shershaah', 'dangal', 'udaan', 'andhadhun', 'pk', 'queen', 'drishyam', 'barfi']

let k = ''
let l = []  // -- adding characters
let g = '' // ---String(adding array elements(of movie))
let u = '' // -- converting to lowerCase

function App() {

  const [ab, setAb] = useState(true)
  const [cd, setCd] = useState(false)
  const [ef, setEf] = useState(false)
  const [gh, setGh] = useState(false)
  const [ij, setIj] = useState(false)
  const [kl, setKl] = useState(false)

  const [xy,setXy] = useState('')
  
  const [pq, setPq] = useState(true) // ----- game finished

  const [value0, setValue0] = useState('')
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')
  const [value5, setValue5] = useState('')
  const [value6, setValue6] = useState('')
  const [value7, setValue7] = useState('')
  const [value8, setValue8] = useState('')

  const [op, setOp] = useState([]) // ------- hint

  let hint = ['Its a movie of cricket', 'an Indian scientist working at NASA in the United States.',
    'The movie is based on the life of Captain Vikram Batra.', 'It is based on the true story of Mahavir Singh Phogat, a former wrestler',
    'is a deeply emotional, coming-of-age story that explores the struggles of a young boy seeking freedom from an oppressive and abusive environment.',
    'The film is known for its clever narrative, dark humor, unexpected twists, and suspenseful atmosphere.',
    'is a thought-provoking and humorous exploration of religion, superstition.',
    'It stars Kangana Ranaut in a transformative role, with Lisa Haydon, Rajkummar Rao, and Kishore Kadam ',
    'The film is a gripping tale of a common man who uses his wit, intelligence, and deep understanding of human behavior to protect his family ',
    ' is a beautiful blend of humor, romance, and emotion, set against a nostalgic backdrop, with a special focus on love, innocence, and acceptance.'
  ]

  function Previous() {

    count--;
    if (count === -1) {
      count = 0;
    }

    if (count === 0) { // lagaan
      setAb(true)
      setCd(false)
      setEf(false)
      setGh(false)
      setIj(false)
      g = ''
      setOp([])
    }
    if (count === 1) { // swades
      setAb(true)
      setCd(false)
      setEf(false)
      setGh(false)
      setIj(false)
      g = ''
      setOp([])
    }
    else if (count === 2) { // shershaah
      setAb(false)  /////////////////
      setCd(false)
      setEf(false)
      setGh(false)
      setIj(false)
      g = ''
      setOp([])
    }
    else if (count === 3) {  // dangal
      setAb(true)
      setCd(false)
      setEf(false)
      setGh(false)
      setIj(false)
      g = ''
      setOp([])
    }

    else if (count === 4) { // udaan
      setAb(true)
      setCd(true)
      g = ''
      setOp([])
    }

    else if (count === 5) { // andhadhun
      setAb(false)
      setCd(false) //
      setEf(false)
      setGh(false)
      setIj(false)
      g = ''
      setOp([])
    }
    else if (count === 6) { // pk
      setAb(true)
      setCd(true)
      setEf(true)
      setGh(true)
      setIj(true)
      setOp([])
    }
    else if (count === 7) {  // queen
      setIj(false)
      setAb(true)
      setCd(true)
      g = ''
      setOp([])
    }
    else if (count === 8) { // drishyam
      setAb(false)
      setCd(true)
      setIj(false)
      g = ''
      setOp([])
    }
    else if (count === 9) { // barfi
      setAb(true)
      setCd(true)
      setIj(false)
      g = ''
      setOp([])
    }

  }

  function Next() {

    count++;
    if (count === 1) { // -- check for lagaan
      setOp([])
      console.log(0)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[0]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
    }
    else if (count === 2) { // -- check for swades 
      setAb(false)
      setOp([])
      console.log(1)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[1]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
    }
    else if (count === 3) { // --check for shershaah 
      setAb(true)
      setOp([])
      console.log(2)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[2]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
    }
    else if (count === 4) { // --check for dangal 
      setCd(true)
      setOp([])
      console.log(3)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[3]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
    }
    else if (count === 5) {  // -- check for udaan  
      setAb(false)
      setCd(false)
      setOp([])
      console.log(4)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[4]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []

    }
    else if (count === 6) { // check for andhadhun 
      setAb(true)
      setCd(true)
      setEf(true)
      setGh(true)
      setIj(true)
      setOp([])
      console.log(5)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[5]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
    }
    else if (count === 7) { // check for pk 
      setEf(false)
      setGh(false)
      setIj(false)
      setOp([])
      console.log(6)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[6]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
    }
    else if (count === 8) { // check for queen 
      setIj(true)
      setAb(false)
      setCd(false)
      setOp([])
      console.log(7)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[7]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
    }
    else if (count === 9) {  // check for drishyam
      setAb(true)
      setCd(true)
      setIj(false)
      setOp([])
      console.log(8)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        if (l[q] == null) {
          continue
        }
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[8]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
    }
    else if (count === 10) { // barfi
      setPq(false)
      setOp([])
      console.log(9)
      setValue0('')
      setValue1('')
      setValue2('')
      setValue3('')
      setValue4('')
      setValue5('')
      setValue6('')
      setValue7('')
      setValue8('')
      for (let q = 0; q < l.length; q++) {
        g = g + l[q]
      }
      u = g.toLowerCase()
      if (u === mn[9]) {
        console.log('true')
        g = ''
      }
      else {
        console.log('false')
        g = ''
      }
      l = []
      setAb(true)
      setCd(true)
      setEf(true)
      setGh(true)
      setIj(true)
      setKl(true)
    }
  }

  function Restart() {
    count = 0;
    setAb(true)
    setCd(false)
    setEf(false)
    setGh(false)
    setIj(false)
    setKl(false)
    setOp([])
    setPq(true)
  }

  function Hint() {

    if (count === 0) {
      setOp(hint[0])
    }
    if (count === 1) {
      setOp(hint[1])
    }
    if (count === 2) {
      setOp(hint[2])
    }
    if (count === 3) {
      setOp(hint[3])
    }
    if (count === 4) {
      setOp(hint[4])
    }
    if (count === 5) {
      setOp(hint[5])
    }
    if (count === 6) {
      setOp(hint[6])
    }
    if (count === 7) {
      setOp(hint[7])
    }
    if (count === 8) {
      setOp(hint[8])
    }
    if (count === 9) {
      setOp(hint[9])
    }

  }

  function Input1(event) {

    k = event.target.value;
    if (k==='') {
      setValue0(k)
    }
    else {
      l[0] = k;
      setValue0(k)
    }

    // ------------------------------------------- from gfg

   const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) /// ------------- 1

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)

      // It should not be last input field
      if (fieldIntIndex < 10) {

        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );
        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  }

  function Input2(event) {

    k = event.target.value;
    if (k === '') {
      // l[1]='';
      setValue1(k)
    }
    else {
      l[1] = k;
      setValue1(k)
    }
   const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) // ---------------  2

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)
      // It should not be last input field
      if (fieldIntIndex < 10) {

        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        if (nextfield !== null) {
          nextfield.focus();
        }
      } 
        // If found, focus the next field
      }
    }
  function Input3(event) {

    k = event.target.value;
    if (k === '') {
      // l[2]='';
      setValue2(k)
    }
    else {
      l[2] = k;
      setValue2(k)
    }
    const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) // ----------------  3

    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)

      // It should not be last input field
      if (fieldIntIndex < 10) {

        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  }
  
  function Input4(event) {

    k = event.target.value;
    if (k === '') {
      // l[3]='';
      setValue3(k)
    }
    else {
      l[3] = k;
      setValue3(k)
    }
   const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) // ---------------- 4
    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)
      // It should not be last input field
      if (fieldIntIndex < 10) {

        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  }
  function Input5(event) {

    k = event.target.value;
    if (k === '') {
      // l[4]='';
      setValue4(k)
    }
    else {
      l[4] = k;
      setValue4(k)
    }
    const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) // ------------  5
    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)
      // It should not be last input field
      if (fieldIntIndex < 10) {

        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      } 
    }
  }
  function Input6(event) {

    k = event.target.value;
    if (k === '') {
      // l[5]='';
      setValue5(k)
    }
    else {
      l[5] = k;
      setValue5(k)
    }
 const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) // ----------- 6
    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)
      // It should not be last input field
      if (fieldIntIndex < 10) {

        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      } 
    }
  }
  function Input7(event) {

    k = event.target.value;
    if (k === '') {
      // l[6]='';
      setValue6(k)
    }
    else {
      l[6] = k;
      setValue6(k)
    }
   const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) // -------------   7
    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)
      // It should not be last input field
      if (fieldIntIndex < 10) {

        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }  
    }
  }
  function Input8(event) {

    k = event.target.value;
    if (k === '') {
      // l[7]='';
      setValue7(k)
    }
    else {
      l[7] = k;
      setValue7(k)
    }
    const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) // ----------- 8
    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)
      // It should not be last input field
      if (fieldIntIndex < 10) {
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      } 
    }
  }
  function Input9(event) {

    k = event.target.value;
    if (k === '') {
      // l[8]='';
      setValue8(k)
    }
    else {
      l[8] = k;
      setValue8(k)
    }

    const { maxLength, value, name } = event.target;

    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);
    console.log(fieldIntIndex) // ------------  9
    // Check if no of char in field == maxlength
    if (value.length >= maxLength) {
      console.log(value.length)
      // It should not be last input field
      if (fieldIntIndex < 10) {

        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
  }
  return (
    <>

      <h1 style={{ color: 'white', fontFamily: 'cursive', textAlign: 'center' }}>Guess the movie name(Bollywood)</h1>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <input size='1' name='field-1' onKeyDown={Input1} maxLength={1} hidden={kl} onChange={Input1} value={value0} ></input>
        <input size='1' name='field-2' onKeyDown={Input2} maxLength={1} hidden={kl} onChange={Input2} value={value1} ></input>
        <input size='1' name='field-3' onKeyDown={Input3} maxLength={1} hidden={ij} onChange={Input3} value={value2} ></input>
        <input size='1' name='field-4' onKeyDown={Input4} maxLength={1} hidden={gh} onChange={Input4} value={value3} ></input>
        <input size='1' name='field-5' onKeyDown={Input5} maxLength={1} hidden={ef} onChange={Input5} value={value4} ></input>
        <input size='1' name='field-6' onKeyDown={Input6} maxLength={1} hidden={cd} onChange={Input6} value={value5} ></input>
        <input size='1' name='field-7' onKeyDown={Input7} maxLength={1} hidden={ab} onChange={Input7} value={value6} ></input>
        <input size='1' name='field-8' onKeyDown={Input8} maxLength={1} hidden={ab} onChange={Input8} value={value7} ></input>
        <input size='1' name='field-9' onKeyDown={Input9} maxLength={1} hidden={ab} onChange={Input9} value={value8} ></input>

      </div>

      <br></br>

      <h4 style={{textAlign:'center',color:'white'}}>{xy}</h4>

      <h2 hidden={pq} style={{ color: 'white', textAlign: 'center', fontFamily: 'cursive' }}>Game Finished</h2>

      <br></br>

      <h4 style={{ color: 'white', textAlign: 'center', fontFamily: 'cursive' }}>Hint: {op}</h4>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='restart' onClick={Restart} style={{ backgroundColor: 'white', color: 'black' }}>Restart</button>
        {/* <button style={{backgroundColor:'white',color:'black'}}>Remove Letter</button> */}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='previous' onClick={Previous}
          style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', width: '110px' }} >Previous</button>
        <button className='next' onClick={Next}
          style={{ backgroundColor: 'white', color: 'black', borderRadius: '10px', width: '110px' }}>next</button>
      </div>

      <br></br>
      <br></br>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <button onClick={Hint} style={{ backgroundColor: 'white', color: 'black' }}>Get Hint</button>

      </div>

    </>
  );
}

export default App;
