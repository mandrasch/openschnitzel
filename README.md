# OpenSchnitzel
Redirect PIN code numbers to URLs, simple alternative to QR-codes rallyes

## Why?

QR rallyes are great, but multiple QR codes are hard to maintain: Which QR code was which one? For humans QR codes look mostly the same, at least for me. Furthermore it is hard to change QR code contents afterwards, because you will need a professional qr code tool. 
OpenSchnitzel (in germany „Schnitzel-Jagd“ means treasure hunt/rallye) wants to provide a simple alternative which you can host on github.com for free. 

### Use and edit it online via your webbrowser
1. Download this repository
2. Unzip it locally
3. Create your own new repository on github.com
4. Upload the unzipped content of the openschnitzel-directory to your new repository
5. Enable web application your repository settings
6. Check out YOURUSERNAME.github.io/YOURREPOSITORYNAME/ to see if it works
7. Edit the codes.json file to add your pin numbers and URLs
8. (Optional) Check if your JSON file is correct by pasting it to: https://jsonlint.com/
9. Teach & enjoy!

### Use it with Github Desktop
1. Create your own new repository on github.com
2. Open it locally with Github Desktop
3. Download this repository
4. Unzip it locally
5. Copy the unzipped content of the openschnitzel-directory to your local repository directory
6. Commit the changes, push them to github
7. Enable web application your repository settings
8. Check out YOURUSERNAME.github.io/YOURREPOSITORYNAME/ to see if it works
9. Edit the codes.json file to add your pin numbers and URLs
10. (Optional) Check if your JSON file is correct by pasting it to: https://jsonlint.com/
11. Commit & push to github
12. Teach & enjoy!
To test and edit it locally you will need a local webserver application like XAMPP, MAMP, etc. Otherwise in most browsers loading via AJAX will not work because of security restrictions.

### Beware - clever students! 
Right now computer-experienced students can just retrieve the codes.json file and see all the URLs. In near future I'll provide a php solution as well (you'll need a webserver/webspace for that) where you can't just retrieve the JSON file so easily. 

### Configuration (coming soon)
- 

