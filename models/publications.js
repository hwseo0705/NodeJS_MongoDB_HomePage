const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    publisher: {
        type:String
    }
});

const Publications = mongoose.model('Publications', publicationSchema);
module.exports = Publications;

/*

[   
    {
        "title":"Temporal and spectral characteristics of BSR noises and influence on auditory perception",
        "author":"Jongho Lee, Sinyeob Lee, Yunsang Kwak, Boseung Kim, Junhong Park",
        "date":"2015",
        "status":"published",
        "publisher":"Journal of Mechanical Science and Technology"
    },
    {
        "title":"Study on the Optimal Design of PMa-SynRM Loading Ratio for Achievement of Ultrapremium Efficiency",
        "author":"Dong-Hoon Jung, Yunsang Kwak, Ju lee, Chang-Sung Jin",
        "date":"2017",
        "status":"published",
        "publisher":"IEEE Transactions on Magnetics"
    },
    {
        "title":"Effect of the Static Compressive Load on Vibration Propagation in Multistory Buildings and Resulting Heavyweight Floor Impact Sounds",
        "author":"Yunsang Kwak, Sinyeob Lee, Jeongwon Park, Dukyoung Hwang, Jin Yong Jeon, Junhong Park",
        "date":"2017",
        "status":"published",
        "publisher":"Journal of the Acoustical Society of America"
    },
    {
        "title":"Effect of Substrates on the Dynamic Properties of Inkjet-Printed Ag Thin Films",
        "author":"Yunsang Kwak, Deokman Kim, Junhong Park",
        "date":"2018",
        "status":"published",
        "publisher":"Applied sciences"
    },
    {
        "title":"Dynamic properties of bolted joints in laminated composites evaluated using flexural wave propagation",
        "author":"Yunsang Kwak, Sang Mok Park, Junhong Park",
        "date":"2018",
        "status":"published",
        "publisher":"Mechanics Research Communications"
    },
    {
        "title":"Investigation of the perception characteristics of multiple impact sounds occurring from the manipulation of electronic devices",
        "author":"Seongyoung Jeong, Buhm Park, Yunsang Kwak, Junhong Park",
        "date":"2019",
        "status":"published",
        "publisher":"Journal of Mechanical Science and Technology"
    },
    {
        "title":"Experimental study to investigate the structural integrity of welded vehicle structure for BSR (Buzz, Squeak, Rattle) noise by vibration measurement",
        "author":"Yunsang Kwak, Jongho Lee, Junhong Park",
        "date":"2019",
        "status":"published",
        "publisher":"The Journal of the Acoustical Society of Korea"
    },
    {
        "title":"Nondestructive spot weld quality evaluation by measurement of structural vibration transfer through joined panels",
        "author":"Sang Mok Park, Yunsang Kwak, Jongho Lee, Junhong Park",
        "date":"2019",
        "status":"published",
        "publisher":"Journal of nondestructive evaluation"
    },
    {
        "title":"Direct evaluation method to measure permittivity and conductivity of thin layers via wave approach in the THz region",
        "author":"Yunsang Kwak, Sang Mok Park, Sinyeob Lee, Hak-Sung Kim, Ju Lee, Junhong Park",
        "date":"2019",
        "status":"published",
        "publisher":"AIP Advances"
    },
    {
        "title":"Rattle noise source localization through the time reversal of dispersive vibration signals on a road vehicle",
        "author":"Yunsang Kwak, Sang Mok Park, Jongho Lee, Junhong Park",
        "date":"2019",
        "status":"published",
        "publisher":"Wave Motion"
    },
    {
        "title":"A pearl spectrometer",
        "author":"Yunsang Kwak, Sang Mok Park, Zahyun Ku, Augustine M. Urbas, Young L. Kim",
        "date":"2020",
        "status":"published",
        "publisher":"Nano Letters"
    },
    {
        "title":"Compressive recovery of smartphone RGB spectral sensitivity functions",
        "author":"Yuhyun Ji, Yunsang Kwak, Sang Mok Park, Young L. Kim",
        "date":"2021",
        "status":"published",
        "publisher":"Optics express"
    },
    {
        "title":"Convolutional neural network trained with synthesized pseudo-images for detecting an acoustic source",
        "author":"Yunsang Kwak, Deukha Kim, Hyukju Ham, Junhong Park",
        "date":"2021",
        "status":"published",
        "publisher":"Applied Acoustics"
    },
    {
        "title":"Ultrasonic assessment of osseointegration phenomena at the bone-implant interface using convolutional neural network",
        "author":"Yunsang Kwak, Vu-Hieu Nguyen, Yoann Hériveaux, Pierre Belanger, Junhong Park, Guillaume Haïat",
        "date":"2021",
        "status":"published",
        "publisher":" Journal of the Acoustical Society of America"
    },
    {
        "title":"Edible Matrix Code with Photogenic Silk Proteins",
        "author":"Jung Woo Leem, Heejae Jeon, Yuhyun Ji, Sang Mok Park, Yunsang Kwak, Jongwoo Park, Kee-Young Kim, Seong-Wan Kim, Young L. Kim",
        "date":"2022",
        "status":"published",
        "publisher":"ACS Central Science"
    },
    {
        "title":"mHealth color truthing using colorimetric gamut-informed learning",
        "author":"Sang Mok Park, Yuhyun Ji, Semin Kwon, Jung Woo Leem, Yunsang Kwak, Andrew R. O'Brien, Ying Wang, Young L. Kim",
        "date":"2023",
        "status":"published"
    },
    {
        "title":"Numerical investigation of heat transfer in aluminum nitride ceramics with engineered microstructures",
        "author":"Semin Park+, Minsu Kim+, Seon-Gyu Kim, Sangha Shin, Byeongho Ahn, Sung-Soo Ryu, Jaehun Cho*, Yunsang Kwak*",
        "date":"2023",
        "status":"published",
        "publisher":"Materials Letters"
    },
    {
        "title":"Domain-collaborative multimodal learning by tensor representation for fault diagnosis of rotary machines",
        "author":"Seon-Gyu Kim+, Ryuna Kang, Taeyong Park, Yunsang Kwak*",
        "date":"2023",
        "status":"published",
        "publisher":"submitted"
    },
    {
        "title":"YOLO-based leak detection in road vehicles via interaction noise between jet-air and leak holes",
        "author":"Semin Park+, Ryuna Kang, Chanmin Park, Yunsang Kwak*",
        "date":"2023",
        "status":"prep"
    },
    {
        "title":"Structural evaluation method based on local vibrational modes forced by the beam-type attached sensor",
        "author":"Chanmin Park+, Semin Park, Yunsang Kwak*",
        "date":"2023",
        "status":"prep"
    },
    {
        "title":"Structural evaluation method based on local vibrational modes forced by the beam-type attached sensor",
        "author":"Chanmin Park+, Semin Park, Yunsang Kwak*",
        "date":"2023",
        "status":"prep"
    },
    {
        "title":"Enhanced mechanical performance of aluminum nitride-silicon carbide composites: Static and dynamic perspectives",
        "author":"Juyeong Lee+, Minsu Kim+, Semin Park+, Seon-Gyu Kim, Unseo Kim, Nafees Hassan, Minwook Kim, Seunghwan Moon, Byeongho Ahn, Sung-Soo Ryu, Yunsang Kwak*, Jaehun Cho*",
        "date":"2023",
        "status":"prep"
    }
]

*/