var images = ["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1438191265l/8719069._SX318_.jpg",
"https://www.pinclipart.com/picdir/middle/521-5211569_tuxedo-man-cartoon-facial-expression-clipart-cartoon-man.png",
"http://www.clker.com/cliparts/b/3/e/2/1516771634631758121wacky-lady-clipart.hi.png",
"https://thumbs.dreamstime.com/b/tiffany-140144816.jpg",
"https://s3.eu-west-2.amazonaws.com/littlewriter-production/stories/2oyvafI2T5.jpeg"];
var names = ["Family Book","Mahesh Menon", "Hitha Vikraman", "Diya Mahesh", "Riya Mahesh"];
var i = 0;
function update()
{
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
     i = i +1;
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
