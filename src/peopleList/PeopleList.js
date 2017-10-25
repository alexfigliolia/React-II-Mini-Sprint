import React from 'react';

const PeopleList = (props) => {
	return (
		<div>
			{
				props.people.map((homie, i) => {
					console.log(homie);
					return (
						<div key={i}>
					 		<h2>{(i+1)+") " + homie.first_name + ' ' + homie.last_name}</h2>
					 		<p>{homie.email}</p>
					 	</div>
					);
				})
			}
		</div>
	);
}

export default PeopleList;