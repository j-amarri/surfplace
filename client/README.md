### Views

```
PATH                   NAME                 DESCRIPTION
‘/‘                    - Home               - View All products, select products, filter, add board
‘/sign-in’             - Sign In            - User sign in
‘/sign-up’             - Sign Up            - User sign up

‘/map’                 - View All Map       - View all products on map, search map

‘/board/:id’           - Product Page       - View all details about product, choose dates and booking
‘/checkout’            - Checkout           - Payment page
'/confirmation’        - Confirmation       - Payment confirmation page with booking details

'/add’                 - Add Board          - User can add board for rent
'/:id/edit’            - Edit Board         - User can edit board details

'/profile/:id’         - User Profile       - User account profile with details, surf journal, stats, badges, etc.
'/profile/:id/edit’    - Edit Profile       - User can edit profile details

```

### Rest API Endpoints

```
METHOD            PATH                    ENDPOINT
GET               ‘/boards/list’          -List all boards
POST              ‘/board’                -Handle board creation
GET               ‘/board/:id’            -Board information
DELETE            ‘/board/:id’            -Delete Board product listing
PATCH             ‘/board/:id’            -Handle board editing form submission, send the edited board as JSON.
POST              ‘/order’                -Handle order


// Route handlers regarding authentication
POST        -  '/authentication/sign-up'     - Handle sign up form submission.
POST        -  '/authentication/sign-in'     - Handle sign in form submission.
POST        -  '/authentication/sign-out'    - Handle sign out form submission.
GET         -  '/authentication/profile'     - Load an the authenticated user profile
```

### Models

```
//   BOARD
{
name: String,
description: String,
boardType: {
 type: String,
 enum: [Fish, Shortboard, Hybrid, Gun, Funboard, Longboard]
},
location: {
      coordinates: [
        {
          type: Number,
          min: -180,
          max: 180
        }
      ],
      type: {
        type: String,
        default: 'Point'
      }
    }
size: String,
level: {
   type: String,
   enum: [Beginner, Intermediate, Advanced]
},
owner: String,
picture: String,
rating: Number,
price: {
   "amount": Number,       // (Integer, eg. 1500 for 15.00€)
   "currency": String      // (["EUR", "USD", "GBP"])
}
```

```
//   USER
{
name: {
   type: String,
   trim: true
},
email: {
   type: String,
   required: true,
   lowercase: true,
   trim: true
},
passwordHash: {
   type: String
},
level: {
   type: String,
   enum: [Beginner, Intermediate, Advanced]
},
profilePicture: {
   type: String,
   default: url
},

```

```
//   ORDER
{
   total: {
   amount: Number,
   },
   product: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'Board'
   }
   days: Number,  // IS THIS NEEDED?
   startDate: Date,
   endDate: Date,
   charge: String,
   user: {
      type: ObjectId,
      ref: Id
   }
}
```
