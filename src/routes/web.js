import express from "express";
import homeController from '../controllers/homeController'
import chiphikhacController from '../controllers/chiphikhacController'
let router = express.Router();
const initWebRouter = (app) => {
    //Hàm gọi Home page
    router.get('/', homeController.getHomepage);
    //Hàm gọi trang chi phi khac
    router.get('/chiphikhac', chiphikhacController.getChiPhiKhac);
    router.get('/add-chiphikhac', (req, res) => {
        res.render('add-chiphikhac.ejs')
    });
    router.post('/themchiphi', chiphikhacController.getThemChiPhiKhac);

    /* //==============

        //Hàm gọi trang Forms
        router.get('/form', homeController.getFormPage);
        // Router parameter
        router.get('/detail/:userID', homeController.getDetailPage);
        //Router add new user
        router.post('/add-new-user', homeController.getAddUser);
        //Router delete user
        router.post('/delete-user', homeController.getDeleteUser);
        //Router Edit user
        router.get('/edit-user/:userID', homeController.getEditUser);
        //Router Update user
        router.post('/update-user', homeController.PostUpdateUser);
    //=====
     */
    return app.use('/', router)
}

export default initWebRouter;