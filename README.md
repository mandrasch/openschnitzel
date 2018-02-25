# OpenSchnitzel
Redirect PIN codes to URLs, just a simple alternative to QR code rallyes

## Why?

QR rallyes are great, but multiple QR codes are hard to maintain: Which QR code was which one? For humans QR codes look mostly the same, at least for me. Furthermore it is hard to change QR code contents afterwards, because you will need a professional qr code tool. 
OpenSchnitzel wants to provide a simple alternative which you can host on github.com for free. 

[In germany „Schnitzel-Jagd“ means treasure hunt/rallye]

## Demo
https://programmieraffe.github.io/openschnitzel/
Use code 1234

Example for a worksheet using OpenSchnitzel: https://goo.gl/unzo9K

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

### Use it on a worksheet
You can make YOURUSERNAME.github.io/YOURREPOSITORYNAME/ accessible via QR code if you want, but you don't have to handle 20 or more QR codes anymore. 

### Pedagogical approaches
I can't predict how people will use it. My suggestions would be edu rallyes or maybe Breakout Edu sessions (escape room method, see https://www.breakoutedu.com/). Please let me know if and how you use it! :-)


### Beware - clever students! ;-)
Right now computer-experienced students can just retrieve the codes.json file and see all the URLs. In near future I'll provide a php solution as well (you'll need a webserver/webspace for that) where you can't just retrieve the JSON file so easily. 

### Configuration (coming soon)
- 

### Credits - thanks!
- https://github.com/fkranenburg/bootstrap-pincode-input (MIT)
- https://startbootstrap.com/template-overviews/landing-page/ (Apache 2 License)
