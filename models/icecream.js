const db = require('../db/config');

const Icecream = {};

Icecream.findAll = () => {
  return db.query(`SELECT * FROM icecream`);
};

Icecream.findById = id => {
  return db.oneOrNone(
    `
      SELECT * FROM icecream
      WHERE id = $1
    `,
      [id]
    );
};

Icecream.create = icecream => {
  return db.one(

      `
      INSERT INTO icecream (flavor, description,rating,url,brand)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [icecream.flavor, icecream.description, icecream.rating, icecream.url, icecream.brand]
    );
};

Icecream.update = (icecream, id) => {
  return db.one(
    `
    UPDATE icecream SET
      flavor = $1,
      description = $2,
      rating = $3,
      url = $4,
      brand = $5
    WHERE id = $6
    RETURNING *
  `,
    [icecream.flavor, icecream.description, icecream.rating, icecream.url, icecream.brand, id]
  );
};

Icecream.destroy = id => {
  return db.none(
    `
    DELETE FROM icecream
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Icecream;
