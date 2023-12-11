const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const awardSchema = new Schema({
    awards: {
        type: String,
        required: true
    }
});

const Awards = mongoose.model('Awards', awardSchema);
module.exports = Awards;

/*

[
    {
        "awards":"2016 Student paper prize (학생우수논문) for the paper presented at the Korean Society of Automotive Engineers (KSAE) Conference awarded by Hyundai Motors"
    },
    {
        "awards":"2017 Student paper prize (학생우수논문) for the paper presented at the Joint Conference – the Korean Society for Noise and Vibration Engineering (KSNVE), the Acoustical Society of Korea (ASK) and the Korean Society of Mechanical Engineers (KSME)"
    },
    {
        "awards":"Korea-EU joint research program funded by the national research council of Korea (NRF) and the European research council (ERC)"
    },
    {
        "awards":"Global research nurturing (GRN) program funded by the Korea institute for advancement of technology (KIAT)"
    },
    {
        "awards":"2021-2학기, 2022-1학기, 2022-2학기, 2023-1학기 강의우수교원 at Kumoh national institute of technology (KIT)"
    }
]

*/