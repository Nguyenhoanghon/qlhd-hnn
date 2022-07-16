var express = require('express');
var router = express.Router();
import connectDB from '../configs/connectDB';
var chiphikhac = require('../models/chiphikhac');

let getChiPhiKhac = (req, res) => {
    console.log('>>>test route goi ham chi phi khác ')
        //viet logic
    chiphikhac.find({})
        .then(chiphikhacs => {
            return res.render('../views/chiphikhac.ejs', { chiphikhacs: chiphikhacs })
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
}
let getThemChiPhiKhac = (req, res) => {
    let newChiphi = new chiphikhac({
        stt: req.body.stt,
        noidung: req.body.noidung,
        sotien: req.body.sotien,
        ghichu: req.body.ghichu
    });

    newChiphi.save()
        .then(doc => {
            res.redirect('/chiphikhac')
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        })
}
export default {
    getChiPhiKhac,
    getThemChiPhiKhac
}