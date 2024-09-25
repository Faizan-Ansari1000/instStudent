// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// import { collection, addDoc, getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyADdEh-IuWSwgZvnarWYCy6Q13GUrM5G1c",
//   authDomain: "student-portal-c81d8.firebaseapp.com",
//   projectId: "student-portal-c81d8",
//   storageBucket: "student-portal-c81d8.appspot.com",
//   messagingSenderId: "268848924458",
//   appId: "1:268848924458:web:9bb78e1a5a08f0424f8053",
//   measurementId: "G-560Y50KZR3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getDatabase();

//#region 



let studentData = [
  {
    id: 20,
    rollNo: 'Faizan-2925',
    userName: 'Faizan',
    age: 21,
    isPass: true
  },
  {
    id: 30,
    rollNo: 'Athar-2210',
    userName: 'Athar',
    age: 21,
    isPass: true
  },
  {
    id: 40,
    rollNo: 'Hassan-2866',
    userName: 'Hassan',
    age: 19,
    isPass: true
  },
  {
    id: 50,
    rollNo: 'Shoaib-2430',
    userName: 'Shoaib',
    age: 21,
    isPass: true
  },
  {
    id: 60,
    rollNo: 'Ahfaz-2520',
    userName: 'Ahfaz',
    age: 20,
    isPass: true
  },
  {
    id: 70,
    rollNo: 'Kareem-2659',
    userName: 'Kareem',
    age: 20,
    isPass: true
  },
  {
    id: 80,
    rollNo: 'Ali-2690',
    userName: 'Ali',
    age: 24,
    isPass: true
  },
]

let inp = document.getElementById('inp')

window.search = () => {
  document.getElementById('dataForm')

  for(let i = 0; i < studentData.length; i++){
    let std = studentData[i]
    if(std.rollNo == inp.value){
     console.log(std);
     
      document.getElementById('cartContainer')
      cartContainer.innerHTML += `
       <table class='min-w-full bg-white border border-gray-300 rounded-lg shadow-lg'>
          <tr class="bg-cyan-950 text-white">
            <th class="py-3 px-4 text-left font-semibold">Student</th>
            <th class="py-3 px-4 text-left font-semibold">Roll No</th>
            <th class="py-3 px-4 text-left font-semibold">Id</th>
            <th class="py-3 px-4 text-left font-semibold">Age</th>
            <th class="py-3 px-4 text-left font-semibold">Pass</th>
          </tr>
          <tr class="hover:bg-gray-100">
            <td class="py-3 px-4 border-b">${std.userName}</td>
            <td class="py-3 px-4 border-b">${std.rollNo}</td>
            <td class="py-3 px-4 border-b">${std.id}</td>
            <td class="py-3 px-4 border-b">${std.age}</td>
            <td class="py-3 px-4 border-b">${std.isPass}</td>
          </tr>
        </table>
        <br>
      `;
      break; // Exit loop once found`
    }
  }

}






//#endregion

//#region 
// let inp = document.getElementById('inp')

// window.check = () => {

//   let obj = {
//     inp: inp.value
//   }
//   console.log(obj)
//   signInWithEmailAndPassword(auth,obj.email)
//     .then((res) => {
//       const id = res.user.uid;

//       const reference = doc(db, 'student', id)
//       getDoc(reference, obj)
//     })
//     .then(() => {
//       console.log('send');
//     })
//     .catch((err) => {
//       console.log(err.message);
//     })

// }

//#endregion


// #region 
// Function to load stored data
// function loadStoredData() {
//   const storedData = JSON.parse(localStorage.getItem('studentData')) || [];
//   storedData.forEach(data => displayEntry(data));
// }

// // Function to display entry in the table
// function displayEntry(data) {
//   const cartTableBody = document.getElementById('cartTableBody');
//   const cartItem = document.createElement('tr');

//   cartItem.innerHTML = `
//       <td class="py-3 px-4 border-b">${data.course}</td>
//       <td class="py-3 px-4 border-b">${data.studentId}</td>
//       <td class="py-3 px-4 border-b">${data.marks}</td>
//       <td class="py-3 px-4 border-b">${data.totalMarks}</td>
//       <td class="py-3 px-4 border-b">${data.grade}</td>
//   `;
//   cartTableBody.appendChild(cartItem);
// }

// // Event listener for adding entry
// document.getElementById('addEntry').addEventListener('click', () => {
//   const course = document.getElementById('course').value;
//   const studentId = document.getElementById('studentId').value;
//   const totalMarks = document.getElementById('totalMarks').value;
//   const marks = document.getElementById('marks').value;
//   const grade = document.getElementById('grade').value;

//   const obj = {
//       course: course,
//       studentId: studentId,
//       totalMarks: totalMarks,
//       marks: marks,
//       grade: grade,
//   };

//   // Save to localStorage
//   const storedData = JSON.parse(localStorage.getItem('studentData')) || [];
//   storedData.push(obj);
//   localStorage.setItem('studentData', JSON.stringify(storedData));

//   displayEntry(obj);

//   // Clear the form
//   document.getElementById('dataForm').reset();
// });

// // Load data on page load
// window.onload = loadStoredData;

//#endregion

// //#region 
// // Function to load stored data
// function loadStoredData() {
//   const storedData = JSON.parse(localStorage.getItem('studentData')) || [];
//   storedData.forEach(data => displayEntry(data));
// }

// // Function to display entry in the table
// function displayEntry(data) {
//   const cartTableBody = document.getElementById('cartTableBody');
//   const cartItem = document.createElement('tr');

//   cartItem.innerHTML = `
//       <td class="py-3 px-4 border-b">${data.course}</td>
//       <td class="py-3 px-4 border-b">${data.studentId}</td>
//       <td class="py-3 px-4 border-b">${data.marks}</td>
//       <td class="py-3 px-4 border-b">${data.totalMarks}</td>
//       <td class="py-3 px-4 border-b">${data.grade}</td>
//   `;
//   cartTableBody.appendChild(cartItem);
// }

// // Event listener for adding entry
// document.getElementById('addEntry').addEventListener('click', () => {
//   const course = document.getElementById('course').value;
//   const studentId = document.getElementById('studentId').value;
//   const totalMarks = document.getElementById('totalMarks').value;
//   const marks = document.getElementById('marks').value;
//   const grade = document.getElementById('grade').value;

//   const obj = {
//       course: course,
//       studentId: studentId,
//       totalMarks: totalMarks,
//       marks: marks,
//       grade: grade,
//   };

//   // Save to localStorage
//   const storedData = JSON.parse(localStorage.getItem('studentData')) || [];
//   storedData.push(obj);
//   localStorage.setItem('studentData', JSON.stringify(storedData));

//   displayEntry(obj);

//   // Clear the form
//   document.getElementById('dataform').reset();
// });

// // Load data on page load
// window.onload = loadStoredData;

// //#endregion



