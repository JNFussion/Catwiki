exports.names = (req, res, next) => {
  fetch("https://api.thecatapi.com/v1/breeds", {
    headers: {
      "x-api-key": process.env.CAT_API_KEY,
    },
  })
    .then((response) => {
      response
        .json()
        .then((data) => {
          const names = data.map((breed) => breed.name);
          res.send(names);
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

exports.show = (req, res, next) => {
  fetch(`https://api.thecatapi.com/v1/breeds?q=${req.params.id}`, {
    headers: {
      "x-api-key": process.env.CAT_API_KEY,
    },
  })
    .then((response) => {
      response
        .json()
        .then((data) => {
          if (data.length) {
            return res.send({
              image: data[0].image,
              name: data[0].name,
              description: data[0].description,
              temperament: data[0].temperament,
              origin: data[0].origin,
              life_span: data[0].life_span,
              adaptability: data[0].adaptability,
              affection_level: data[0].affection_level,
              child_friendly: data[0].child_friendly,
              grooming: data[0].grooming,
              intelligence: data[0].intelligence,
              health_issues: data[0].health_issues,
              social_needs: data[0].social_needs,
              stranger_friendly: data[0].stranger_friendly,
            });
          }
          return res.status(404);
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
};

exports.top = (req, res, next) => {};
