//Import the necessary libraries to the application
const mongoose = require('mongoose').default;

/**
 * Establishes a connection to the database using Mongoose.
 *
 * @async
 * @function
 * @throws {Error} If the connection to the database fails.
 * @returns {Promise<void>} Resolves when the connection to the database is established.
 */
const connectDB = async () => {
    try {
        // Establish connection to the database using Mongoose
        const connection = await mongoose.connect(
            process.env.MONGO_URI, // MongoDB's connection string
        )

        // Log a message indicating that the connection to the database was successful
        console.log(`MongoDB connection: ${connection.connection.host}`)
    } catch (e) {
        // Log an error message and exit the process if the connection to the database fails
        console.log(e)
        process.exit(1)
    }
}

module.exports = connectDB