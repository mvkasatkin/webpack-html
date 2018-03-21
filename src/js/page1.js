const modelPage = require('./models/model-page');

const Page1 = {
    init(){
        modelPage.init();
        console.log('init page1');
    }
};

window.Page1 = Page1;