import mongoose from 'mongoose';

const server = 'leyzi:leyzi1@ds147181.mlab.com:47181'; // '127.0.0.1:27017'; // localhost
const database = 'hod-db'; // 'test';

mongoose.connect(`mongodb://${server}/${database}`).then(
  () => {
    // eslint-disable-next-line no-console
    console.log(
      'Database successfully connected.\n---------------------------------------'
    );
  },
  err => {
    // eslint-disable-next-line no-console
    console.error('Database not connected.\n' + err.message);
    process.exit();
  }
);
