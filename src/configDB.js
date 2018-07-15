import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test').then(
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
