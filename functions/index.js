const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// eslint-disable-next-line max-len
const STRIPE_SECRET_KEY = "sk_test_51JCAK2SDVEGR2R43Zmv77HlKPWwNZsxnZzYMDqoVpyBfACJtPn4k3QqIrI3wnqGEusRgv3K3LtGGMqPkVXyyMMbw00imrEdowc";
const stripe = require("stripe")(STRIPE_SECRET_KEY);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


// API

// APP Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post('/payments/create', async (request, response) => {
   const total = request.query.total;
   console.log('Payment Request Received BOOM! For amount >>>', total);

   const paymentIntent = await stripe.paymentIntents.create({
       amount: total,
       currency: "inr",
   });

   response.status(201).send({
       clientSecret: paymentIntent.client_secret,
   })
});

// Listen Command
exports.api =functions.https.onRequest(app);


// example API
// http://localhost:5001/healthybookar/us-central1/api