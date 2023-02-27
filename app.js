const express = require('express');
const cors = require('cors');
const configs = require('./settings/configs');
const PORT = configs.puerto|| 8888;
const application = express();

application.use(express.json());
application.use(express.urlencoded({ extended: true}));
application.use(cors());
application.set('view engine', 'ejs')

const AuthRoutes = require('./routes/authRoutes.js');
application.use('/api', cors(), AuthRoutes);

application.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});