const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card, Topic }) {
      Result.belongsTo(User, {
        foreignKey: 'userId',
      });
      Result.belongsTo(Card, {
        foreignKey: 'cardId',
      });
      Result.belongsTo(Topic, {
        foreignKey: 'topicId',
      });
    }
  }
  Result.init({
    userId: DataTypes.INTEGER,
    cardId: DataTypes.INTEGER,
    result: DataTypes.BOOLEAN,
    topicId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};
