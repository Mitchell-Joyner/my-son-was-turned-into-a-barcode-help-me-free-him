# Barcode

The goal of this project is to simplify the creation and sorting of barcodes and products associated with those barcodes using the concepts we have learned in first semester.  Notably we will be using

  -  **factories** to simplify the creation of barcodes and reduce the amount of user input.
  -  **adapter objects** to increase the reusability of our modules to accommodate other product indexing standards.
  -  **insertion sort** to selectively reorganize a list of barcodes by its relevant sub-code interpretations.

[YouTube Link explaining a good deal of the text below.](https://youtu.be/HGD-rI4SoGM)
## ISBN-10

This module will build a random ISBN.  The first 9 numbers signify information related to the book itself: publisher, author, title, etc.  The last digit however is a error checking digit to make sure the 9 digits were properly read by a machine.

Background Information [ISBN-10 link](https://isbn-information.com/the-10-digit-isbn.html)

#### Public Instance Variable
  -  **code**:  Import and utilize the Random() module to create the 9 digit unique ISBN.  Make sure it is stored as a String and not a number type.
  -  **checkDigit**:  use the check function here to return the proper checkDigit.  Similarly, make sure the data is returned as a String type.

#### Public Instance Function
  -  **read()**:  This function with return the values of the ISBN code and checkDigit with a hyphen in between as a string.

#### Private Instance Functions
-  **check()**:  This function performs the mathematical computation to verify the ISBN was correctly made.
[4 minute demonstration](https://youtu.be/5qcrDnJg-98)


## ISBN-13 (EAN: International Article Number)
This module will build a semi-random ISBN.  The first 12 numbers signify information related to the product: System code (3 digits), Manufacturer code (5 digits), and Product Code (4 digits).  The last digit however is a error checking digit to make sure the 12 digits were properly read by a machine.

Background Information [ISBN-13 EAN link](https://isbn-information.com/the-13-digit-isbn.html)

-  **sysCode**:  utilize the makeSysCode specified below.
-  **manCode**:  Import and utilize the Random() module to create the 5 digit unique ISBN.  Make sure it is stored as a String and not a number type.
-  **proCode**:  Import and utilize the Random() module to create the 4 digit unique ISBN.  Make sure it is stored as a String and not a number type.
-  **checkDigit**:  use the check function here to return the proper checkDigit.  Similarly, make sure the data is returned as a String type.

#### Public Instance Function
-  read():  This function with return the values of the ISBN code and checkDigit with a hyphen in between as a string.

#### Private Instance Functions
-  **makeSysCode()**:  Pick a random number from 1 to 8 and write a series of conditional statements that return codes for your favorite countries.  System codes are 3 digits, if you only see 2 then stick a 0 in front. For example 41 would be 041. [system code choices...scroll down a little](http://www.barcodeisland.com/ean13.phtml)
-  **check()**:  This function performs the mathematical computation to verify the ISBN was correctly made.
[3 minute demonstration](https://youtu.be/WstjjL5CPqk)

## Book Factory
The job of this module is to accept a publishing year and create either an ISBN-10 barcode or an EAN barcode.  The standard for book codes changed in 2007.
  -  Before 2007 books were ISBN-10
  -  On January 1, 2007 books were required to print EAN barcodes.

The month and date are not important, just focus on the year.

#### Public Functions
  -  **createBook(pubYear)**:  This function takes an input pubYear, which is a number corresponding to the first year of publication.  Conditionally you will return either a new ISBN-10 object or an EAN.


## ISBN-10 To EAN adapter
This module will take an ISBN-10 object as an input.  It will then extract the code from it using the read method and throwing away the old check digit.  Since an ISBN-10 is automatically a book you will insert one of the two **"bookland"** codes (**978** and **979**)to the front and recalculate its new EAN checkDigit.

## Sorting Client (if time permits)
You will create a client which imports the Book Factory and Adapter to create and sort a list of EANs using our imported insertion sort from the Random module.  You will sort by system code which is the first 3 digits of an EAN
