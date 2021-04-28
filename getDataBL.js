const { client } = require("../DBconfig/config");

const getDataFromDB = async () => {
  // Connect the client to the server
  await client.connect();
  console.log("Connected successfully to server");
  return new Promise(async (resolve, reject) => {
    try {
      // Establish and verify connection
      await client
        .db("YanirDB")
        .collection("DataCollection")
        .find()
        .toArray(function (err, docs) {
          if (err) throw err;
          //return data from DB in ARR
          resolve(docs);
        });
    } catch (err) {
      reject(err);
    }
  });
};

const insertData = async (obj) => {
  // Connect the client to the server
  await client.connect();
  console.log("Connected successfully to server");
  return new Promise(async (resolve, reject) => {
    try {
      // Establish and verify connection
      await client.db("YanirDB").collection("DataCollection").insertOne({
        name: obj.FullName,
        username: obj.username,
        password: obj.password,
      });
      resolve(true);
    } catch (err) {
      reject(false);
    }
  });
};

const chkDetails = async (obj) => {
  // Connect the client to the server
  await client.connect();
  console.log("Connected successfully to server");
  return new Promise(async (resolve, reject) => {
    try {
      // Establish and verify connection
      await client
        .db("YanirDB")
        .collection("DataCollection")
        .find()
        .toArray(function (err, docs) {
          if (err) throw err;
          //return data from DB in ARR
          let flag = docs.find(
            (x) => x.username == obj.username && x.password == obj.password
          );
          if (flag) resolve(true);
          if (!flag) resolve(false);
        });
    } catch (err) {
      resolve(false);
    }
  });
};

module.exports = { getDataFromDB, chkDetails, insertData };

// const updateDataInDB = async (data) => {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client
//       .db("YanirDB")
//       .collection("DataCollection")
//       .findOneAndUpdate(
//         { name: data.oldName },
//         {
//           $set: {
//             name: data.name,
//             date: data.date,
//             address: {
//               city: data.address.city,
//               country: data.address.country,
//             },
//             email: data.email,
//           },
//         },
//         { upsert: true },
//         (err) => {
//           if (err) {
//             console.log("Something wrong when updating data!");
//           }
//         }
//       );

//     console.log("Connected successfully to server");
//   } catch (err) {
//     console.log(err);
//   }
// };

// const addDataToDB = async (data) => {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     // Establish and verify connection
//     await client
//       .db("YanirDB")
//       .collection("DataCollection")
//       .insertOne(
//         {
//           name: data.name,
//           date: data.date,
//           address: {
//             city: data.address.city,
//             country: data.address.country,
//           },
//           email: data.email,
//         },

//         { upsert: true },
//         (err) => {
//           if (err) {
//             console.log("Something wrong when updating data!");
//           }
//         }
//       );

//     console.log("Connected successfully to server");
//   } catch (err) {
//     console.log(err);
//   }
// };
