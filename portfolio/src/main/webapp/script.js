// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.



function addRandomTrivia() {
    const yairFacts =
        ["I am the youngest of 4!", "I am a Tech cabinet member in SHPE UF!", 
        "I dream of traveling across East Asia!", 
        "I love Studio Ghibli!", "My parents are from Uruguay!", 
        "I'm a huge disney fan!"];

        const factImages = ["images/Wedding-photo.jpg","images/shpe.jpg",
         "images/myanmar.jpg", "images/totoro.gif", "images/UruguayPhoto.png",
         "images/stitch.gif"]
        
        
    // Pick a random fact.
    var index = Math.floor(Math.random() * yairFacts.length);

    // Add it to the page.
    document.getElementById('trivia-h').innerHTML = yairFacts[index];

    var myImage = document.getElementById('trivia-image');
    myImage.setAttribute("src", factImages[index]);
    myImage.style.display = 'block';

}
function getProjectInfo(number) {
    const project = document.getElementById('projects')
    if(number == 1){
        
        project.innerHTML = 
            `<div class="project-info">
                    <h1>Automated Fishing System</h1>
                    <h2>(Arduino, Onshape, Tinkercad)</h2>
                <p>
                    Group Project where we created an Automated Fishing rod for people 
                    with disabilities who would have difficulty fishing.<br><br>The project implements 
                    servo motors to position the capsule and air-compressions to shoot the line. 
                    Arduino employs a hobby Gearmotor to reel the line.<br><br>
                    I focused on the Arduino and code for the project.
                </p>
                <a href="https://drive.google.com/drive/folders/1zykYtQ-E_bgdAuOHyiG2dQUP_UnIzN3v?usp=sharing"
                target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
            <div class="project-photo">
                <img src="images/AutomatedFishingSystem.JPG" />
            </div>`
    }
    else if (number == 2){
        project.innerHTML = 
            `<div class="project-info">
                <h1>Protect The Cell (Virus attack)</h1>
                <h2>Java</h2>
                <p>
                    Personal project for Zoology course. <br><br>A clicker game where the player kills the 
                    viruses before they enter the cell. The player must not destroy the glucose, which is 
                    beneficial for the cell. The player can get the white blood cell to restore health.
                </p>
                <a href="https://drive.google.com/file/d/1EK-_dwW4q9jk8ieK6lzc46JXC3FUq3vN/view"
                target="_blank" rel="noopener noreferrer">Try it</a>
            </div>
            <div class="project-photo">
                <img src="images/ProtectTheCell.JPG" />
            </div>`
    }
    else{
        project.innerHTML = 
            `<div class="project-info">
                <h1>Monster Frontier</h1>
                <h2>Java</h2>
                <p>
                Final Project for AP Computer Science course<br><br>
                Created an indeterminate clicker game: move back and forth
                to beat enemies and progress through the game.<br><br>
                </p>
                <a href="https://drive.google.com/file/d/1b13xyx1BVQS_pplhzcmAlqTfgZICAOla/view"
                target="_blank" rel="noopener noreferrer">Try it</a>
            </div>
            <div class="project-photo">
                <img src="images/MonsterFrontier.JPG" />
            </div>`
    }
}    
