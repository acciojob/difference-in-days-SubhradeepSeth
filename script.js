var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let day=24*3600*1000;
	let first=new Date(date1);
	let second=new Date(date2);
	let diff=Math.round(second-first)/day;
	// let diff=second-first;
	return diff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
