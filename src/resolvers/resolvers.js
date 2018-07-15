export default {
  Query: {
    // hi: (parent, args, context, info) => 'Hello World!'
    allCats: async (parent, args, { Cat }) => {
      // { _id: 123456, name: 'some name'}
      const cats = await Cat.find();
      return cats.map(x => {
        x._id = x._id.toString();
        return x;
      });
    },
  },
  Mutation: {
    // args = { name }
    createCat: async (parent, args, { Cat }) => {
      const kitty = await new Cat(args).save();
      kitty._id = kitty._id.toString();
      return kitty;
    },
  },
};
