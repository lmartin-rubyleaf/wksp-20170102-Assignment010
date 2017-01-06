/*eslint-env node */
var Mod = {
  express: require('express')
};

var Lib = {
  express: Mod.express()
};

var Defs = {
  dirs: {
    root: __dirname+'/../'
  }
};

var Data = {
  planets: require(Defs.dirs.root+'server/data/planets.json')
};

Lib.express.use(Mod.express.static(Defs.dirs.root+'client/web'));

Lib.express.get('/rest/v1/planets', function (req, res) {
  req; // NOP as unused parameter
  res.send(Data.planets);
});

Lib.express.listen(3000, function () {
  console.log('wksp-20170102/Assignment010 listening on port 3000!');
});