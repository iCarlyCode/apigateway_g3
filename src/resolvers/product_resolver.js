const productResolver = {
  Query: {
    productsByStoreId: (_, { storeId }, { dataSources }) => {
      return dataSources.productAPI.productsByStoreId(storeId);
    },
    products: (_, __, { dataSources }) => {
      return dataSources.productAPI.products(userId);
    },
  },
  Mutation: {},
};

module.exports = productResolver;
