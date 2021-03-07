const UserModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors.utils');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');

// const client = new OAuth2Client(
//   '66744854908-b0ako8jl000jnat52216is95ma1c66c5.apps.googleusercontent.com',
// );

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signUp = async (req, res) => {
  const { firstName, lastName, password, email, selectedFile } = req.body;

  try {
    const user = await UserModel.create({
      firstName,
      lastName,
      email,
      password,
      selectedFile,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).send({ errors });
  }
};

module.exports.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

module.exports.logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};

// module.exports.googleLogin = (req, res) => {
//   const {tokenId} = req.body;
//   client
//     .verifyIdToken({
//       idToken: tokenId,
//       audience:
//         '66744854908-b0ako8jl000jnat52216is95ma1c66c5.apps.googleusercontent.com',
//     })
//     .then((response) => {
//       const {email_verified, name, email} = response.payload;
//       console.log(response.payload);

//       if (email_verified) {
//         UserModel.findOne({email}).exec((err, user) => {
//           if (err) {
//             return res.status(400).json({
//               error: 'Something went wrong...',
//             });
//           } else {
//             if (user) {
//               const token = jwt.sign(
//                 {_id: user._id},
//                 process.env.TOKEN_SECRET,
//                 {
//                   expiresIn: maxAge,
//                 },
//               );

//               const {_id, firstName, email} = user;

//               res.json({token, user: {_id, firstName: name, email}});
//             } else {
//               let password = email + process.env.TOKEN_SECRET;
//               let newUser = new UserModel({firstName: name, email, password});
//               newUser.save((err, data) => {
//                 if (err) {
//                   return res.status(400).json({
//                     error: 'Something went wrong...',
//                   });
//                 } else {
//                   const token = jwt.sign(
//                     {_id: data._id},
//                     process.env.TOKEN_SECRET,
//                     {
//                       expiresIn: maxAge,
//                     },
//                   );

//                   const {_id, firstName, email} = newUser;

//                   res.json({token, user: {_id, firstName, email}});
//                 }
//               });
//             }
//           }
//         });
//       }

// if(email_verified){
//   UserModel.findOne({email}).exec((err,user)=>{
//     if(err){
//       return res.status(400).json({
//         error:'Something went wrong'
//       })
//     }else{
//       if(user){
//      const token =  jwt.sign({ _id : user._id }, process.env.TOKEN_SECRET, {
//           expiresIn: maxAge,
//         });
//         const {_id,name,email} = user;
//         res.json({token, user:{_id,name,email}})
//       }else{
//         let password = email+process.env.TOKEN_SECRET;
//         let newUser = new UserModel({name,email,password})
//         newUser.save((err,data)=>{
//           if(err){
//             return res.status(400).json({
//               error:"Something went wrong "
//             })
//           }
//           const token =  jwt.sign({ id: data_id }, process.env.TOKEN_SECRET, {
//             expiresIn: maxAge,
//           });
//           const {_id,name,email} = newUser;
//           res.json({token, user:{_id,name,email}})

//         })

//       }
//     }
//   })
// }
//     });
// };

// module.exports.facebookLogin = (req, res) => {
//   const {userID, accessToken} = req.body;

//   let urlGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
//   fetch(urlGraphFacebook, {
//     method: 'GET',
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       const {email, name} = response;
//       UserModel.findOne({email}).exec((err, user) => {
//         if (err) {
//           return res.status(400).json({
//             error: 'Something went wrong',
//           });
//         } else {
//           if (user) {
//             const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {
//               expiresIn: maxAge,
//             });
//             const {_id, name, email} = user;
//             res.json({token, user: {_id, name, email}});
//           } else {
//             let password = email + process.env.TOKEN_SECRET;
//             let newUser = new UserModel({firstName: name, email, password});
//             newUser.save((err, data) => {
//               if (err) {
//                 return res.status(400).json({
//                   error: 'Something went wrong ',
//                 });
//               }
//               const token = jwt.sign({id: data_id}, process.env.TOKEN_SECRET, {
//                 expiresIn: maxAge,
//               });
//               const {_id, name, email} = data;
//               res.json({token, user: {_id, name, email}});
//             });
//           }
//         }
//       });
//     });
// };
