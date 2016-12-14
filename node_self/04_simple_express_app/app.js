const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!\n');
});


let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
]

app.get('/users/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);
	if (!id) {
		return res.status(400).json({error: 'Incorrect id'});
	}
	let user = users.filter(user => user.id === id)[0]
	if (!user) {
		return res.status(404).json({error: 'Unknown user'});
	}
	console.log(id);
	return res.json(user);
});
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
