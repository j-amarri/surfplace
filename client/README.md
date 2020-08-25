### Views

```
PATH                   NAME                 DESCRIPTION
‘/‘                    - HomeView            - View All products, select products, filter, add board
‘/sign-in’             - SignInView          - User sign in
‘/sign-up’             - SignUpView          - User sign up

‘/map’                 - MapView             - View all products on map, search map

'/add’                 - AddBoardView        - User can add board for rent
'/:id/edit’            - EditBoardView       - User can edit board details
‘/board/:id’           - SingleBoardView     - View all details about product, choose dates and booking
‘/checkout’            - CheckoutView        - Payment page
'/confirmation’        - ConfirmationView    - Payment confirmation page with booking details

'/profile/:id’         - UserProfileView       - User account profile with details, surf journal, stats, badges, etc.
'/profile/:id/edit’    - EditProfileView       - User can edit profile details

```

### Rest API Endpoints

```
METHOD            PATH                    ENDPOINT
GET               ‘/board/list’          -List all boards
POST              ‘/board’                -Handle board creation
GET               ‘/board/:id’            -Board information
DELETE            ‘/board/:id’            -Delete Board product listing
PATCH             ‘/board/:id’            -Handle board editing form submission, send the edited board as JSON.
POST              ‘/order’                -Handle order
GET               '/order/:id'            -Retrieve information about the order
GET               '/order/list'           -Retrieve information about all orders


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
