const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const currentDate = new Date();
let currentDateNumber = currentDate.getDate();
let currentDay = currentDate.getDay();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
  'Saturday']

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December']

date.innerHTML = (currentDateNumber < 10 ? '0' : '') + currentDateNumber;
day.innerHTML = weekDays[currentDay];
month.innerHTML = months[currentMonth]
year.innerHTML = currentYear

// currentDay == 0 ? currentDay = 'Sunday'
//   : currentDay == 1 ? currentDay = 'Monday'
//     : currentDay == 2 ? currentDay = 'Tuesday'
//       : currentDay == 3 ? currentDay = 'Wednesday'
//         : currentDay == 4 ? currentDay = 'Thursday'
//           : currentDay == 5 ? currentDay = 'Friday'
//             : currentDay = 'Saturday'

// currentMonth == 0 ? currentMonth = 'January'
//   : currentMonth == 1 ? currentMonth = 'February'
//     : currentMonth == 2 ? currentMonth = 'March'
//       : currentMonth == 3 ? currentMonth = 'April'
//         : currentMonth == 4 ? currentMonth = 'May'
//           : currentMonth == 5 ? currentMonth = 'June'
//             : currentMonth == 6 ? currentMonth = 'July'
//               : currentMonth == 7 ? currentMonth = 'August'
//                 : currentMonth == 8 ? currentMonth = 'September'
//                   : currentMonth == 9 ? currentMonth = 'October'
//                     : currentMonth == 10 ? currentMonth = 'November'
//                       : currentMonth = 'December'