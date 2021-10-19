/* codded by afnanplk
re coded by BADBMODER
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 OB_NAME: process.env.Z_BOT_NAME === undefined ? 'badboy' : process.env.Z_BOT_NAME,
 OA_NAME: process.env.Z_DEP_NAME === undefined ? 'badboy' : process.env.Z_DEP_NAME,
 REMOVE2: process.env.THERI_KICK_PM === undefined ? 'false' : process.env.THERI_KICK_PM,
 PLKAFN: process.env.THERI_LIST_PM === undefined ? false : process.env.THERI_LIST_PM,
 OA_REPLY: process.env.Z_DEP_REPLY === undefined ? 'you typed badboy , he is my creator' : process.env.Z_DEP_REPLY,
 PHONE: process.env.NUMBER === undefined ? '+919645697828' : process.env.NUMBER,   
    

};
