const modelPage = require('./models/model-page');
const Page2 = {
    init(){
        modelPage.init();
        console.log('init page2');
    }
};
Page2.init();