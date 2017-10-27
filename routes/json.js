var express = require('express');
var router = express.Router();


var variants = [
	[
		{title: "Ученые предупредили об опасности, угрожающей 800 млм человек", url: "http://site.com", description: "Зонд Mars Odyssey получил первые инфракрасные фотографии Фобоса, одной из двух лун Марса, которые помогут ученым понять, когда она окончательно распадется на части.", ptime: 1509107290},
		{title: "Япония запустила новый спутник для создания собственной GPS", url: "http://site2.com", description: "Япония запустила во вторник свой четвертый спутник для создания собственной системы GPS высокой точности «Митибики-4» с космодрома Танэгасима.", ptime: 1508107290},
		{title: "Ученые предупредили об опасности, угрожающей 800 млм человек", url: "http://site.com", description: "Зонд Mars Odyssey получил первые инфракрасные фотографии Фобоса, одной из двух лун Марса, которые помогут ученым понять, когда она окончательно распадется на части.", ptime: 1509107290},
		{title: "Япония запустила новый спутник для создания собственной GPS", url: "http://site2.com", description: "Япония запустила во вторник свой четвертый спутник для создания собственной системы GPS высокой точности «Митибики-4» с космодрома Танэгасима.", ptime: 1508107290},
	],
	[
		"привет от катюши",
		"привет билайн ру",
		"фильм привет от катюши",
		"privet beeline ru",
		"привет от катюши смотреть",
		"билайн привет",
		"приветствие",
	]
]

router.get('/:variant/:randomTimeout?', function(req, res, next) {
  var timeout = Math.floor(Math.random() * (req.params.randomTimeout !== undefined ? req.params.randomTimeout : 1000 )) + 0  ;
  setTimeout(function () {
    res.json(variants[parseInt(req.params.variant, 10) - 1]);
  }, timeout);
});

module.exports = router;
