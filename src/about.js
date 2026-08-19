import foodImg from "./imgs/otherDivImg.jpg";
import restaurantImg from "./imgs/DivImg2.jpg";

const content = document.getElementById("content");

export function loadAbout() {
    content.innerHTML = "";
    
    const aboutSection = document.createElement("section");
    aboutSection.className = "about-section";
        //founding div
        const foundingDiv = document.createElement("div");
        foundingDiv.className = "founding about_div";
        foundingDiv.textContent = "This project was founded in 1992 by John Doe, a passionate chef and entrepreneur. Our mission is to provide the best dining experience for our customers.";
        aboutSection.appendChild(foundingDiv);
        content.appendChild(aboutSection);

        //some other div with some text
        const otherDiv = document.createElement("div");
        otherDiv.className = "other about_div";
        otherDiv.textContent = "We have a team of dedicated chefs and staff who work tirelessly to ensure that every dish is prepared with the utmost care and attention to detail. Our menu features a wide variety of dishes, from classic favorites to innovative creations.";
        aboutSection.appendChild(otherDiv);

        //some other div with some text
        const otherDiv2 = document.createElement("div");
        otherDiv2.className = "other2 about_div";
        otherDiv2.textContent = "We are committed to using only the freshest ingredients and sourcing locally whenever possible. Our goal is to create a warm and welcoming atmosphere where our customers can relax and enjoy their meals.";
        aboutSection.appendChild(otherDiv2);

        const otherDiv3 = document.createElement("div");
        otherDiv3.className = "other3 about_div";
        otherDiv3.textContent = "Thank you for choosing our restaurant. We look forward to serving you and providing an unforgettable dining experience.";
        aboutSection.appendChild(otherDiv3);
        
        const otherDiv4 = document.createElement("div");
        otherDiv4.className = "other4 about_div";
        otherDiv4.textContent = "We are proud to have received numerous awards and accolades for our culinary excellence and exceptional service. Our commitment to quality and innovation has earned us a loyal following of customers who appreciate the care and attention we put into every aspect of our restaurant.";
        aboutSection.appendChild(otherDiv4);

        //divs with imgs
        const imgDiv1 = document.createElement("div");
        imgDiv1.className = "img_div about_div";
        const img1 = document.createElement("img");
        img1.id = "food-img";
        img1.className = "about-img";
        img1.src = foodImg;
        img1.alt = "Food Image";
        imgDiv1.appendChild(img1);
        aboutSection.appendChild(imgDiv1);

        const imgDiv2 = document.createElement("div");
        imgDiv2.className = "img_div2 about_div";
        const img2 = document.createElement("img");
        img2.id = "rest-img";
        img2.className = "about-img";
        img2.src = restaurantImg;
        img2.alt = "Restaurant Image";
        imgDiv2.appendChild(img2);
        aboutSection.appendChild(imgDiv2);
}
