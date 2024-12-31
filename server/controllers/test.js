const thoughtmodel = require('../models/thoughts');

const viewThought = async (req, res) => {
    try {
        // Retrieve sessionUserId from headers
        const sessionUserId = req.headers['sessionuserid'];
        console.log(`Session UserId from Headers: ${sessionUserId}`);

        // Retrieve thoughts for the specific user
        const userThoughts = await thoughtmodel.find({
            userId: sessionUserId
        });

        // Log the type and contents of the userThoughts
        console.log('Type of userThoughts:', typeof userThoughts); // Should be an array
        console.log('User thoughts:', userThoughts); // Should be an array of thought objects

        // Send the user thoughts directly as an array
        return res.status(200).json({
            thoughts: userThoughts // Directly return the array
        });

    } catch (error) {
        console.log('View Controller.js => ', error);
        return res.status(500).json({ message: 'Error retrieving thoughts' });
    }
};

module.exports = { viewThought };
