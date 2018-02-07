
// create helper function to use _$ to select element
 const _$ = (element) => {
 	return(document.querySelector(element));
 }

 const _bytagName = (tag) => {
 	return (document.getElementsByTagName(tag));
 }

var student ;
var canditate = null ;

// At the start of the app display the
//list of record in list_of_student.js

const display_record = () => 
{
	content = `<table id="student-table" cellpadding="0" cellspacing="0">
			<caption>STUDENT RECORD REPORT</caption>
			<thead>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Track</th>
					<th>Achievements</th>
					<th>Point</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<br >
			`
	for (counter = 0; counter < students.length ; counter++) 
	{
		
		student = students[counter];
		content +=`
					<tr>
						<td>${student.id}</td>
						<td>${student.name}</td>
						<td>${student.track}</td>
						<td>${student.achievemments}</td>
						<td>${student.point}</td>
						<td><button class="delete" id="${counter}">Delete</button></td>
					</tr>
		`;

	}

	content +="</tbody></table>";
	return content ;
}

_$("#list").innerHTML= display_record(students);

// When add button is click re-render the table
//to display newly added record and clear the input fieldes

_$("#addCandidate").onclick = (e) => {
	e.preventDefault();
	 let name = _$("#addrecord-form").elements[1].value.trim();
	 let track = _$("#addrecord-form").elements[2].value.trim();
	 let achievemments = _$("#addrecord-form").elements[3].value.trim();
	 let point = _$("#addrecord-form").elements[4].value.trim();
	 let id = _$("#addrecord-form").elements[0].value.trim();
	 let new_canditate = { name , track , achievemments , point ,id }
	 
	  if (name !== "" && track !== "" && achievemments !== "" && point !== "" && id !== "") {
	  		canditate = students.concat(new_canditate);
	  		students = canditate;
	  		_$("#list").innerHTML= display_record();
	  } else{

	  	_$("#list").innerHTML= display_record();
	  }

	_$("#addrecord-form").elements[1].value = "";
	_$("#addrecord-form").elements[2].value = "";
	_$("#addrecord-form").elements[3].value = "" ;
	_$("#addrecord-form").elements[4].value ="";
	_$("#addrecord-form").elements[0].value = "";
}


// When search button is click re-render the table
//to display match record

_$("#searchCandidate").onclick = (e) => {
	e.preventDefault();
	_$("#list").innerHTML = display_record();

	let nameSearch = _$("#nameSearch").value.trim().toLowerCase();
	let tableRow = _$("#student-table").rows;

	if (nameSearch !== "") {
			for (var row = 1; row < tableRow.length ; row++) 
		{
			if (tableRow[row].cells[1].textContent.toLowerCase().indexOf(nameSearch) !== -1 ) {
					tableRow[row].style.backgroundColor ="#555";
			}
		}

	}

}


// When delete button is click re-render the table
//to update the list.

_$("#list").onclick = (e) => {
	if (e.target.tagName === "BUTTON") {
			let alertMsg = `Delete Record with Student-ID : ${e.target.id} ?`;
		if (confirm(alertMsg)) {
				students.splice(e.target.id , 1);
		} 
	}

	_$("#list").innerHTML = display_record();
}

// change bgcolor of label add or search record when clicked

function bgcolor(e) {
		if (e.target === _$("[for=addRecord]")) {

				_$("[for=addRecord]").style.backgroundColor = "#3355af";
				_$("[for=searchRecord]").style.backgroundColor = "#313a52";

		} 

		if(e.target === _$("[for=searchRecord]")){

				_$("[for=searchRecord]").style.backgroundColor = "#3355af";
				_$("[for=addRecord]").style.backgroundColor = "#313a52";		

		}
}

_$("[for=addRecord]").onclick =(e) => bgcolor(e);

_$("[for=searchRecord]").onclick =(e) => bgcolor(e);
