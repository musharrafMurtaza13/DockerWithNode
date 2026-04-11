const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', position: 'Developer' },
        { id: 2, name: 'Jane Smith', position: 'Designer' },
        { id: 3, name: 'Bob Johnson', position: 'Manager' },
        { id: 4, name: 'Alice Brown', position: 'Analystssssss' }
    ]);
});

app.listen(4000, () => {
    console.log('Server running on port 4000');
});


//"D:/Learning/nodewithdocker/DockerWithNode"
//HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:4000/ || exit 1