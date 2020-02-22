var connection = require("./connection");
var orm = {
  selectAll: function(table_name, dataoutput) {
    var queryString = "SELECT * FROM " + table_name + ";";
    connection.query(queryString, function(err, data) {
      if (err) throw err;
      dataoutput(data);
    });
  },
  insertOne: function(table_name) {}
};
