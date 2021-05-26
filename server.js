const express = require('express')
const path = require('path')


const app = express()
const port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'build')));

// Catchall to send back to index.html
app.get("*", (req, res) => {
    res.sendFile(staticDir + "/index.html");
  });

app.listen(port, () => console.log(`App is live on port ${port}!`))