# Caraka Mobile

<!-- <div align="center"> -->
<!-- 	<img src="image.png"> -->
<!-- </div> -->

## About
Caraka Mobile is a mobile application designed and built to reintroduce and repopularize Javanese Script to the world, specifically aimed for the people of Java to help revitalize the culture.

## Bangkit Product-based Capstone Project
Caraka Mobile is built as a requirement for Bangkit 2023's Product-based Capstone Project.

## Team Members
| Member | Bangkit ID | Path |
| ------ | ---------- | ---- |
| William Tanardi | C180D4KY1103 | Cloud Computing |
| Sebastian Surya Darma | C012D4KY0981| Cloud Computing |
| Moh Adib Syambudi | C004D4KY0501 | Cloud Computing |
| Haryo Wiradito | M010D4KY1903 | Machine Learning |
| Fahrur Rozi | M299D4KY2724 | Machine Learning |
| Muhammad Alfin Farhansyah | A009D4KY4497 | Machine Learning |

## Dependencies
- @google-cloud/firestore
- @google-cloud/secret-manager
- @hapi/hapi
- hapi/jwt
- bcrypt
- dotenv
- hapi-auth-jwt2
- jsonwebtoken
- nanoid
- nodemon

## Activate API
- Install all depedencies
- Generate key with
  ```
  node ./utils/auth/generateKey.js
  ```
- Copy secret key into .env
- Run server
