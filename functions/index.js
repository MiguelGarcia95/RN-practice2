const functions = require("firebase-functions");
const admin = require('firebase-admin');
const cors = require("cors")({origin: true});
const fs = require("fs");
const UUID = require("uuid-v4");

const gcconfig = {
  projectId: "my-project-rn-te-1558941296674",
  keyFilename: "practice_places.json"
};

const {Storage} = require("@google-cloud/storage");
const gcs = new Storage(gcconfig)

admin.initializeApp({
  credential: admin.credential.cert(require('./practice_places.json'))
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.storeImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    if (
      !request.headers.authorization || 
      !request.headers.authorization.startsWith("Bearer ")
    ) {
      console.log('No Token Present!');
      response.status(403).json({error: 'Unauthorized'});
      return;
    }

    let idToken;
    idToken = request.headers.authorization.split("Bearer ")[1];

    admin.auth()
      .verifyIdToken(idToken)
      .then(decodedToken => {
        const body = JSON.parse(request.body);
        fs.writeFileSync("/tmp/uploaded-image.jpg", body.image, "base64", err => {
          console.log(err);
          return response.status(500).json({error: err});
        });
        const bucket = gcs.bucket("my-project-rn-te-1558941296674.appspot.com");
        const uuid = UUID();
    
        return bucket.upload("/tmp/uploaded-image.jpg", {
          uploadType: "media",
          destination: "/places/" + uuid + ".jpg",
          metadata: {
            metadata: {
              contentType: "image/jpeg",
              firebaseStorageDownloadTokens: uuid
            },
          }
        }, (err, file) => {
          if (!err) {
            response.status(201).json({
              imageUrl: "https://firebasestorage.googleapis.com/v0/b/" + 
                bucket.name + 
                "/o/" + 
                encodeURIComponent(file.name) + 
                "?alt=media&token=" +
                uuid,
              imagePath:  "/places/" + uuid + ".jpg",
            });
          } else {
            console.log(err);
            response.status(500).json({error: err})
          }
        });
      })
      .catch(error => {
        console.log("Token is invalid", error);
        response.status(403).json({error: "Unauthorized"});
      });

  });  
});

exports.deleteImage = functions.database.ref("/places/{placeId}").onDelete((change, context) => {
  // console.log(change._data)
  // const placeData = change.before.val();
  const imagePath = change._data.imagePath;
  
  const bucket = gcs.bucket("my-project-rn-te-1558941296674.appspot.com");
  return bucket.file(imagePath).delete();
})