const pool = require("../db");

//Get Place
exports.getPlaces = async (req, res) => {
  pool.query('SELECT * FROM places', (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};
//Get place by id
exports.getPlaceById = async (req, res) => {

  console.log(req.params.id);
  try {

    const place = await pool.query(
      "select * from places where id = $1",
      [req.params.id]
    );
    console.log(place);

    res.status(200).json({
      status: "succes",
      data: {
        place: place.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// Create a Place

exports.createPlace = async (req, res) => {
  console.log(req.body);
  try {
    const results = await pool.query(
      "INSERT INTO places ( title, where_to_stay, description, image_url1, image_url2, image_url3) values ($1, $2, $3, $4, $5, $6) returning *",
      [req.body.title, req.body.where_to_stay, req.body.description, req.body.image_url1, req.body.image_url2, req.body.image_url3]
    );
    console.log(results);
    res.status(201).json({
      status: "succes",
      data: {
        place: results.rows[0],
      },
    });
  }
  catch (err) {
    console.log(err);
  }
};


exports.updatePlace = async (req, res) => {
  try {
    const results = await pool.query(
      "UPDATE places SET title = $1, where_to_stay = $2, description = $3, image_url1 = $4, image_url2 = $5, image_url3 = $6 where id = $7 returning *",
      [req.body.title, req.body.where_to_stay, req.body.description, req.body.image_url1, req.body.image_url2, req.body.image_url3, req.params.id]
    );

    res.status(200).json({
      status: "succes",
      data: {
        place: results.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
  console.log(req.params.id);
  console.log(req.body);
};

exports.deletePlace  = async (req, res) => {
  try {
    const results = db.query("DELETE FROM places where id = $1", [
      req.params.id,
    ]);
    res.status(204).json({
      status: "sucess",
    });
  } catch (err) {
    console.log(err);
  }
};



