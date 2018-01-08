// create function to use _$ to select element
 const _$ = (element) => {
 	return(document.getElementById(element));
 }

 const _bytagName = (tag) => {
 	return document.getElementsByTagName('tag')
 }

var message = " " ;
var student ;

// At the start of the app display the
//list of record in list_of_student.js

for (counter = 0; counter < students.length ; counter++) 
{
	student = students[counter];
	message +=`
				<tr>
					<td>${student.id}</td>
					<td>${student.name}</td>
					<td>${student.track}</td>
					<td>${student.achievemments}</td>
					<td>${student.point}</td>
					<td class="delete"><button>Delete</button></td>
				</tr>
	`;

}

_$("list").innerHTML= message;
_$("student-table").click = (event) => {
	console.log(event.target.parentNode );
}

