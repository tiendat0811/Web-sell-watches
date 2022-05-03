const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/forgot-password', (req, res) => {
    res.render('forgot-password')
})

router.get('/reset-password', (req, res) => {
    res.render('reset-password')
})

router.get('/wallet', (req, res) => {
    res.render('wallet')
})

router.get('/statistical', (req, res) => {
    res.render('statistical')
})

router.get('/manage-product', (req, res) => {
    res.render('manage-product')
})

router.get('/cskh', (req, res) => {
    res.render('messenger')
})


router.get('/account-setting', (req, res) => {
    res.render('account-settings')
})
module.exports = router