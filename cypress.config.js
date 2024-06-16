const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // implement node event listeners here
      //------------------mysql-------------------------
      on("task", {
        // destructure the argument into the individual fields
        queryDatabase({ dbName, query }) {
          const connectionInfo = connections[dbName]

          if (!connectionInfo) {
            throw new Error(`Do not have DB connection under name ${dbName}`)
          }

          return queryDB(connectionInfo, query)
        }

      });
      //-----------------mysql---------------------------------

      // ----------------------Excel Data -------------------------------------
      on("task", { parseXlsx({ filePath }){
        return new Promise((resolve, reject) => {
          try{
            const jsonData = xlsx.parse(fs.readFileSync(filePath))
            resolve(jsonData);
            } catch(e){
              reject(e);
            }
      });
    }}) // Always copy till this from on

    // ------------------------- Excel Data ----------------------------------------
    },
  },
  //"includeShadowDom":true
});
