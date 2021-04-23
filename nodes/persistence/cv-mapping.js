const models = require("../models");

async function deleteCV(id) {
    let errorHappened = false;
    try {
        //find CV
        let CV = await models.CV.findOne({
            where: {
                id: id
            }
        });
        if(CV == null){
            errorHappened = true;
            return errorHappened;
        }

        // Slet favourite associations
        models.FavouriteCV.destroy({
            where: {
                cv_id: id
            }
        });

        // Slet CV type associations
        models.CV_CVtype.destroy({
            where: {
                cv_id: id
            }
        });

        //slet CV'et
        CV.destroy();
        return errorHappened;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { deleteCV }