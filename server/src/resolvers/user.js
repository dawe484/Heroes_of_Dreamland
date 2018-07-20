export default {
  Query: {
    getUserByUsername: async (parent, { username }, { User }) =>
      await User.findOne({ username }),
    getAllUsers: async (parent, args, { User }) => {
      // { _id: 123456, name: 'some name'}
      const users = await User.find();
      return users.map(user => {
        user._id = user._id.toString();
        return user;
      });
    },
  },
  Mutation: {
    createUser: async (parent, args, { User }) => {
      const user = await new User(args).save();
      user._id = user._id.toString();
      return user;
    },
  },
};
