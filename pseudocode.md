# psudo code for allAircraft

 use Vite to create the following react app.
  the app should have a home page, a my AC page, a milAC page, and a harmon page. app  max width of 2000px and be responsive down to 395 px.

  all pages should be in a single folder called pages. within pages each page will have its own folder named for the page. It will contain a css and a js file for the named page. Use the react css Modules feature.

each page will have a header, a navbar, body and footer

the page headers should read:
  Home page -- Collegedale International
  myAC page -- Aircraft I Have Owned
  milAc page -- Aircraft I Have Flown
  harmon page  -- The Harmon Build

the navbar, light blue, should span the page and should have with logo, airplane.png, on the left end.  Four buttons, dark blue background with white letters,  on the right: Home, My AC, AF AC, Harmon as titles. active buttons should be red background white letters. the logo and buttons should remain on one line no matter the width of the navbar..

  the home page will have a single photo max width of the app-container. That photo is Collegedale AP.jpg in public folder.  
  
   The other pages will have multiple responsive photos each with a max-width 25% and aspect ration of 374:281.  Clicking on any of these photos will bring up a enlarged display of that photo with its displayName showing  below the photo. The underlying page will be visable thru a blured covering. Clicking on either the enlarged photo(model) or a return button will return to the multiple photo page.  The return button will be in top right corner. It will be red with white letters border-radius of 3px.

<!-- use the photos in public folder to create a js file with the format of photoSets below.  
Each entry in the public folder will be used as photo for photoSets.

The name form each photo with the .jpg extention will be stored to displayName as a string

Place photoSets.js in a root level folder called data.
  
  export const photoSets = {
    home: [
      { photo: "img1.jpg", displayName: "img1" },
    ],
    myAC: [
      { photo: "img1.jpg", displayName: "img1" },
      { photo: "img2.jpg", displayName: "img2" }
    ],
    milAC: [
      { photo: "img3.jpg", displayName: "img3" },
      { photo: "img4.jpg", displayName: "img4" }
    ],
    harmon: [
      { photo: "img5.jpg", displayName: "img5" },
      { photo: "img6.jpg", displayName: "img6" }
    ]
  }; -->
