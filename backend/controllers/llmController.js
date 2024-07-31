const { main } = require('../utils/Lang');

const categoriesFeedback = async (req, res) => {
    var prompt = "Generate me just a journal body content up to 500 to 600 words so that i can just paste it my blog as it is without any unwanted prompt contents";

    try {
        const data = req.body.data;
        if (!data) {
            return res.status(400).json({ status: "Failed", message: "Data is required" });
        }

        const chatCompletion = await main(data, prompt);
        console.log(chatCompletion);

        if (!chatCompletion) {
            console.log('No Data');
            return res.status(400).json({ status: "Failed", message: "No data found" });
        }

        return res.status(200).json({ message: chatCompletion });
    } catch (err) {
        console.error('Error fetching chat completion:', err);
        return res.status(500).json({ status: "Failed", message: err.message });
    }
};

module.exports = { categoriesFeedback };
