const express = require("express")
const app = express();
const cors = require("cors")
require("./db/connection")
const CarRouter = require("./router/CarRouts")
const UserRouter = require("./router/UserRouts")
const AdminRouter = require("./router/AdminRouter")
const OrderRouter = require("./router/OrderRouter")

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.use('/cars', CarRouter)
app.use('/user', UserRouter)
app.use('/admin', AdminRouter)
app.use('/orders', OrderRouter)

const PORT = process.env.PORT || 5000;

// Function to find an available port
const findAvailablePort = (port) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(port)
      .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          server.close();
          resolve(findAvailablePort(port + 1));
        } else {
          reject(err);
        }
      })
      .on('listening', () => {
        server.close();
        resolve(port);
      });
  });
};

// Start server with dynamic port
findAvailablePort(PORT)
  .then(port => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to start server:', err);
  });
